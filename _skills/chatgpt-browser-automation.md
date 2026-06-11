# ChatGPT Browser Automation — Claude in Chrome (xFinance)

> Skill mô tả cách lái ChatGPT trên trình duyệt qua Claude in Chrome để gen ảnh carousel + download về local.
> Dùng trong workflow `_workflow/carousel-chatgpt-browser.md`. KHÔNG đọc skill này khi chạy paste pipeline.
> Format mega-prompt vẫn dùng `_skills/chatgpt-image-prompt.md` — skill này chỉ phụ trách **browser driving**.

---

## Khi nào dùng skill này

- Workflow `carousel-chatgpt-browser.md` → Bước 5 (Drive Browser) trở đi
- Regen lẻ slide qua thread cũ
- QA workflow khi cần screenshot ChatGPT response để debug

---

## Tool inventory — Claude in Chrome

| Tool | Mục đích | Quan trọng |
|------|----------|-----------|
| `list_connected_browsers` | Pre-flight check | ✅ BẮT BUỘC ngay đầu workflow |
| `select_browser` | Select theo deviceId | Chỉ khi nhiều browser kết nối |
| `tabs_context_mcp` | Lấy tabId hiện có / tạo group | ✅ Bước đầu mỗi session |
| `tabs_create_mcp` | Tạo tab mới trong group | Khi cần tab clean |
| `navigate` | Đi tới URL | ✅ Đi `chatgpt.com/` |
| `find` | Tìm element bằng natural language | ✅ Locate input field, "Show in text field" link, submit button |
| `read_page` | A11y tree đầy đủ | Khi `find` không match — debug DOM |
| `computer.screenshot` | Chụp viewport | ✅ Verify state mỗi bước |
| `computer.left_click` | Click toạ độ | Submit button, attachment chip |
| `computer.type` | Gõ text | Paste prompt vào input |
| `computer.scroll` | Scroll xem ảnh | Khi response dài cần scroll xuống ảnh |
| `javascript_tool` | Execute JS trong page | ✅ Fetch ảnh base64, đếm img elements, lấy thread URL |
| `read_console_messages` | Đọc console | Debug khi fetch fail |
| `tabs_close_mcp` | Đóng tab xong việc | Optional cleanup |
| `browser_batch` | Gộp nhiều action 1 round-trip | ✅ Optimize: navigate + click + screenshot trong 1 batch |

---

## ChatGPT DOM patterns (5/2026)

⚠️ **DOM thay đổi định kỳ** — khi pattern fail, screenshot + `read_page` để check DOM mới, update file này.

### Input field

```html
<!-- Vị trí: bottom of viewport, full width -->
<textarea id="prompt-textarea" placeholder="Ask anything" ...>...</textarea>
```

- `find` query: `"message input textarea"` / `"Ask anything input"` thường match
- Toạ độ thường ở giữa-dưới viewport (~y=411 ở 929×911)
- Sau khi click → blue border = focused

### Attachment chip (khi paste long prompt)

```html
<div class="...attachment...">
  <div class="...">  <!-- icon vòng tròn xanh ChatGPT -->
  <div>Hãy tạo Carousel dựa..</div>  <!-- dòng đầu prompt -->
  <a href="...">Show in text field</a>  <!-- ← LINK QUAN TRỌNG -->
  <button>×</button>  <!-- close chip -->
</div>
```

- `find` query: `"Show in text field link"` thường match
- JS fallback nếu fail:
  ```javascript
  const el = [...document.querySelectorAll('a, button, span, div')]
    .find(e => /show in text field/i.test(e.textContent?.trim() || ''));
  if (el) el.click();
  ```

### Submit button

```html
<!-- Mũi tên ↑ tròn đen, góc phải input field -->
<button data-testid="send-button" aria-label="Send prompt">...</button>
```

- `find` query: `"send button"` / `"submit prompt button"`
- Toạ độ: thường (862, 505) hoặc tương tự — góc phải input

### Generated image

```html
<!-- ChatGPT hiển thị mỗi ảnh trong khung riêng -->
<img src="https://chatgpt.com/backend-api/files/file-XXXXXX/content?..." 
     alt="Generated image" ...>
<!-- Hoặc: -->
<img src="https://sdmntpr...oaiusercontent.com/..." ...>
```

- **URL pattern matcher:** `/\/backend-api\/files\//` HOẶC `/sdmntpr/` HOẶC `/oaiusercontent\.com/`
- Mỗi ảnh có button overlay (Edit / Download) khi hover

### Page URL (cho thread regen)

```javascript
window.location.href
// → https://chatgpt.com/c/<thread-id>
```

---

## Pre-flight pattern

```
1. list_connected_browsers
   → IF empty: fallback paste pipeline + báo user
   → IF ≥1: select_browser(deviceId=...) nếu chưa selected
2. tabs_context_mcp(createIfEmpty=true)
   → lấy tabId
3. navigate(url="https://chatgpt.com/", tabId=...)
4. wait 2-3s, screenshot
5. Verify logged in:
   - Avatar góc dưới trái = ✅ logged in
   - "Log in" / "Sign up" buttons = ❌ chưa logged
   → Nếu chưa: KHÔNG tự đăng nhập, báo user, dừng workflow
```

⚠️ **Auth là explicit user action** (security policy). Không tự sign in dù user yêu cầu.

---

## Paste prompt + handle attachment chip ⚠️ CRITICAL

**Đây là gotcha quan trọng nhất của pipeline.** Long prompt (>~1000-2000 chars) bị ChatGPT auto-convert thành attachment → ChatGPT chỉ gen 1 ảnh nếu submit ở dạng attachment.

### Flow đúng

```
Step 1: Click input field (focus)
  computer.left_click(coordinate=[594, 411], tabId)

Step 2: Type/paste prompt
  computer.type(text=<mega-prompt>, tabId)

Step 3: Wait UI settle
  computer.wait(duration=2, tabId)

Step 4: Screenshot → check chip
  computer.screenshot(tabId) → image

Step 5: Detect chip
  find(query="Show in text field link", tabId)
  HOẶC javascript_tool:
    [...document.querySelectorAll('a, button, span, div')]
      .find(e => /show in text field/i.test(e.textContent?.trim() || ''))?.click()

Step 6: IF chip found → đã click ở step 5 → wait 1-2s, screenshot lại
  Verify prompt đã expand vào textarea (textarea.value.length > 100)

Step 7: Submit
  find(query="send button") → click
  HOẶC computer.left_click(coordinate=[862, 505], tabId)
  HOẶC computer.key(text="ctrl+Enter", tabId) — fallback shortcut
```

### Anti-pattern phải tránh

| ❌ Đừng làm | Vì sao |
|------------|-------|
| Submit ngay sau khi type, không screenshot check | Nếu chip xuất hiện → submit ở dạng attachment → 1 ảnh |
| Click vào chip body thay vì link "Show in text field" | Click body chỉ select, không expand |
| Type rồi đợi chip xuất hiện chắc chắn | Prompt ngắn không có chip — đừng đợi vô tận |
| Dùng `clipboard.paste` thay vì `type` | OS clipboard cross-process không reliable trong sandbox |

---

## Đợi N ảnh xuất hiện

ChatGPT không gen tức thì — mỗi ảnh ~10-30s. Carousel 6 slides ~60-180s.

### Polling pattern

```python
# Pseudo-code Claude follows:
WAIT_INITIAL = 15  # giây — ChatGPT bắt đầu gen sau 5-10s
POLL_INTERVAL = 10
MAX_POLLS = 12  # ~120s tổng poll + 15s initial = ~135s max

wait(WAIT_INITIAL)
for i in range(MAX_POLLS):
    count = javascript_tool("""
        [...document.querySelectorAll('img')]
          .filter(img => /\\/backend-api\\/files\\//.test(img.src) || /sdmntpr/.test(img.src))
          .length
    """)
    generating = javascript_tool("""
        document.body.textContent.match(/Generating|Creating image|Making.*draft/i) !== null
    """)
    if count >= N and not generating:
        break
    wait(POLL_INTERVAL)

if count < N:
    # Báo user, có thể gửi follow-up "Continue, generate the remaining slides"
```

### Khi count < N sau timeout

| count | Xử lý |
|-------|-------|
| 1 / N | Attachment chip không được click → reload + retry với chip handling đúng |
| 2-3 / N | ChatGPT model bị cut hoặc chỉ gen subset → gửi follow-up: "Continue and generate the remaining slides as separate images" |
| 0 / N | ChatGPT từ chối hoặc lỗi mạng → screenshot, đọc error message, có thể content policy |

---

## Fetch ảnh về base64 (CORE)

**Sao không dùng curl/wget?** Image URL ChatGPT cần auth cookie. Curl ngoài browser không có cookie → 401/403. Fetch trong page có sẵn cookie → ✅.

### One-image-at-a-time pattern

```javascript
// Replace INDEX_PLACEHOLDER thành 0, 1, 2, ..., N-1
(async () => {
  const imgs = [...document.querySelectorAll('img')]
    .filter(img => /\/backend-api\/files\//.test(img.src) 
                || /sdmntpr/.test(img.src)
                || /oaiusercontent\.com/.test(img.src));
  const idx = INDEX_PLACEHOLDER;
  if (idx >= imgs.length) return null;
  
  const r = await fetch(imgs[idx].src);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const blob = await r.blob();
  const buf = await blob.arrayBuffer();
  
  // Encode base64 chunked (tránh stack overflow với ảnh lớn)
  const bytes = new Uint8Array(buf);
  let bin = '';
  const CHUNK = 0x8000; // 32KB
  for (let i = 0; i < bytes.length; i += CHUNK) {
    bin += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return btoa(bin);
})()
```

### Save base64 → PNG file

⚠️ **ARG_MAX limit:** base64 string ~3-4 MB không thể truyền qua command line argument. PHẢI ghi qua Write tool trước, rồi decode bằng `base64 -d`.

```
1. Nhận base64 string từ javascript_tool
2. Write tool: ghi vào /sessions/.../mnt/outputs/tmp_b64_XX.txt
3. Bash:
   base64 -d /sessions/.../mnt/outputs/tmp_b64_XX.txt \
     > /sessions/.../mnt/xFinance/projects/[tên]/output/slides/slide-XX.png
4. Bash: rm /sessions/.../mnt/outputs/tmp_b64_XX.txt
```

### Naming bắt buộc

```
slide-01.png
slide-02.png
...
slide-09.png
slide-10.png   ← pad zero 2 chữ số
slide-NN.png
```

Lý do: sort lexicographic. `slide-1.png` + `slide-10.png` sẽ sort thành `1, 10, 2, 3...` → PDF merge sai thứ tự.

---

## Cleanup trước re-render

```bash
cd /sessions/.../mnt/xFinance/projects/[tên]/output

# Cleanup PNG cũ
rm -rf slides
mkdir slides

# Cleanup PDF cũ (giữ tên file, sẽ re-merge)
rm -f [tên].pdf

# Cleanup file tạm base64 (nếu còn)
rm -f /sessions/.../mnt/outputs/tmp_b64_*.txt
```

---

## Merge PDF (Pillow inline)

```bash
cd /sessions/.../mnt/xFinance/projects/[tên]/output

python3 -c "
from PIL import Image
from pathlib import Path
import sys

slides = sorted(Path('slides').glob('slide-*.png'))
if not slides:
    print('❌ No slides found', file=sys.stderr)
    sys.exit(1)

imgs = [Image.open(p).convert('RGB') for p in slides]
imgs[0].save('[tên].pdf', save_all=True, append_images=imgs[1:], resolution=150)
print(f'✅ Merged {len(imgs)} slides → [tên].pdf')
"
```

⚠️ Pillow merge nén nhẹ → file size có thể lớn hơn pdfunite. Với 6 ảnh PNG 1024×1024 → PDF ~ 5-15 MB. Acceptable.

---

## Anti-patterns browser pipeline

| ❌ KHÔNG làm | Lý do |
|--------------|-------|
| Submit prompt ngay sau type không screenshot check | Attachment chip → 1 ảnh |
| Click chip body (không phải "Show in text field" link) | Chỉ select chip, không expand |
| `fetch` từ Bash bằng curl/wget | Thiếu cookie auth → 401/403 |
| Pass base64 trực tiếp qua bash arg | ARG_MAX overflow |
| Save base64 vào file `.png` rồi rename | File chứa base64 text, không phải PNG bytes |
| Skip cleanup `slides/` cũ trước re-render | Mix slide cũ-mới khi merge |
| Hard-code toạ độ click cho mọi resolution | UI ChatGPT scale theo viewport — luôn screenshot trước khi click |
| Đóng tab trước khi extract đủ N ảnh | Image URL có thể expire ngay khi tab đóng |
| Tự sign in ChatGPT cho user | Auth = explicit user action, security policy |

---

## Limits & expectations

| Aspect | Reality |
|--------|---------|
| ChatGPT free tier | ~3-5 image gens / hour, có thể bị limit |
| ChatGPT Plus | Image gens không giới hạn rõ, nhưng bị throttle khi spam |
| Số ảnh / 1 prompt | Practical max ~6-8 ảnh, hơn → chia 2 prompt |
| Aspect ratio | ChatGPT respect hint, lệch ±5% bình thường |
| Diacritic VN | gpt-image-2 (model ChatGPT đang dùng) ổn ~85-95% |
| Consistency cross-image | Tốt trong cùng response, lệch hơn khi regen lẻ |
| Latency / 6 ảnh | 60-180s tùy load |
| Image URL TTL | Vài giờ — fetch ngay sau gen, đừng để qua đêm |

---

## Regen lẻ — quy trình tóm tắt

```
1. Mở thread URL cũ (lưu trong chatgpt-prompts.md)
2. Scroll xuống cuối
3. Type: "Regenerate slide [X] only. [Fix description]. 
   Keep same style/layout/colors as the other slides."
4. Submit (xử lý chip nếu cần — fix description ngắn thường không trigger chip)
5. Đợi 1 ảnh mới (poll 30s, count tăng từ N → N+1)
6. Fetch ảnh cuối cùng (idx = imgs.length - 1)
7. Overwrite slide-XX.png
8. Re-merge PDF
9. Read PNG mới + QA spot
```

---

## Debug checklist khi pipeline fail

1. **Screenshot tab hiện tại** — UI có khác lạ không (ChatGPT đổi layout)?
2. **`read_page(filter='interactive')`** — DOM có element mong đợi không?
3. **`read_console_messages(pattern='error')`** — có JS error không (CORS, fetch fail)?
4. **`window.location.href`** — có đang ở thread đúng không?
5. **`document.querySelectorAll('img').length`** — bao nhiêu ảnh đang load?
6. **Image URL pattern** — pattern matcher có match URL hiện tại không? Update regex nếu cần.
