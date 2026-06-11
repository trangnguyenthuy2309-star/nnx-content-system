# ChatGPT Image Prompt — xFinance

> Skill viết **một prompt mega** copy-vào-ChatGPT (GPT-4o image / gpt-image-1)
> để gen toàn bộ carousel xFinance trong **một lần**.
> Đa dạng style — luôn giữ brand DNA. **Show prompt inline trong response + save file.**

---

## Khi nào dùng skill này

User trigger:
- "tạo carousel chatgpt..."
- "tạo prompt chatgpt cho..."
- "làm prompt gen ảnh cho..."
- "cho tôi prompt để paste vào chatgpt"

→ Chạy `_workflow/carousel-chatgpt-images.md` thay vì `carousel-creation.md`.

---

## Nguyên tắc cốt lõi — MỘT prompt cho cả carousel

ChatGPT (GPT-4o image / gpt-image-1) hỗ trợ gen **nhiều ảnh từ một prompt** khi yêu cầu rõ ("Generate N separate 1080x1080 PNG images").

→ Output: **1 prompt mega**, không phải N prompt riêng.

**Lợi ích:**
- User paste **1 lần** vào ChatGPT
- Consistency được lock **bên trong** prompt — không cần reference image trick
- ChatGPT giữ visual system đồng bộ vì cùng 1 context

**Behavior bắt buộc:**
1. **SAVE** prompt vào `projects/[tên]/output/chatgpt-prompts.md`
2. **SHOW** prompt inline trong câu trả lời chat (code block) — user copy thẳng từ chat

---

## Anatomy của 1 prompt mega — 6 khối (PROVEN, simple)

> ⚠️ **LESS IS MORE.** Đã thử cấu trúc 9 khối với "OUTPUT CONTRACT" + "FINAL ENFORCEMENT" + "CONSISTENT LAYOUT FOR ALL 6 IMAGES:" — **PHẢN TÁC DỤNG**: AI vẫn gen 1 ảnh index/collage. Lý do: liệt kê "no grid / no preview sheet" plant idea, "FOR ALL 6 IMAGES" gợi layout document.
>
> **Cấu trúc đúng đã được verify:** chỉ cần `SLIDE 1/6:`, `SLIDE 2/6:`, ... headers — đó là tín hiệu duy nhất AI cần để gen N ảnh riêng.

```
[1] OPENING            → "Hãy tạo Carousel dựa trên thông tin sau:" (1 dòng tiếng Việt)
[2] BRAND              → ngắn: tên, audience, voice
[3] COLOR PALETTE      → 5 màu hex + "no pure white/black/neon/cold blue"
[4] STYLE              → preset description + LAYOUT rules FOLDED IN (không tách header
                          riêng "CONSISTENT LAYOUT"). Kết câu cuối: "Use the SAME visual
                          system across all N slides."
[5] VIETNAMESE RULE    → typo guard, brand spellings, currency notation
[6] SLIDE MANIFEST     → mỗi slide 1 block: SLIDE X/N, Tag, Title, Subtitle, Bullets,
                          Hero visual (1 câu), CTA/Callout, Page counter "X/N"
```

**KHÔNG có:**
- ❌ KHÔNG "OUTPUT CONTRACT — CRITICAL..." block
- ❌ KHÔNG "FINAL OUTPUT ENFORCEMENT" block
- ❌ KHÔNG header "CONSISTENT LAYOUT FOR ALL N IMAGES:" tách riêng
- ❌ KHÔNG list "Do NOT create collage / Do NOT create grid / Do NOT preview sheet"
- ❌ KHÔNG "Image 1 = Slide 1/N, Image 2 = Slide 2/N..." enumeration

**Lý do tránh các block trên:**
- AI image gen pattern-match từ "no grid", "no collage", "no preview" → ironically gen exactly đó
- "FOR ALL N IMAGES" hint cho AI rằng output là 1 layout document show all slides
- Enumeration "Image 1 = Slide 1/N" gợi ý positional layout (image 1 ở vị trí 1...) → grid

**Lý do cấu trúc 6 khối hoạt động:**
- `SLIDE 1/6:`, `SLIDE 2/6:` headers là tín hiệu đủ mạnh — AI tự hiểu mỗi block là 1 ảnh riêng
- Slide manifest đơn giản, hero visual 1 câu → AI không nhầm sang "design spec document"
- LAYOUT rules folded inside STYLE → 1 block thống nhất, không tạo cảm giác "multi-slide layout doc"
- Opening Vietnamese + body English → conversational, not technical-spec

**Anti-patterns trong phrasing — TUYỆT ĐỐI tránh:**
- "Create a N-slide carousel" → gây collage
- "Layout overview", "set preview", "full carousel board", "preview sheet"
- "FOR ALL N IMAGES" trong header
- Mô tả hero visual >2 câu (giống design doc)

**Phrasing thay thế:**
- ✅ Opening: "Hãy tạo Carousel dựa trên thông tin sau:" (Vietnamese, conversational)
- ✅ Slide headers: "SLIDE 1/6:", "SLIDE 2/6:" (đủ rõ, không cần thêm enforcement)

---

## Brand DNA — KHÓA CHẶT (paste nguyên)

5 thứ KHÔNG được biến mất:

1. Palette 5 màu chuẩn (hex chính xác)
2. Tỷ lệ màu 65/15/10/5/5
3. Mood ấm-đất-editorial (KHÔNG cold blue, neon, gradient mesh)
4. Tiếng Việt có dấu chuẩn — verify từng chữ
5. Layout anchors (tag pill, page counter)

Khối: `_templates/chatgpt-prompt/brand-dna.md` — paste **nguyên xi** vào prompt.

---

## Style Preset — BIẾN SỐ AESTHETIC

| Preset | Khi nào hợp |
|--------|-------------|
| `editorial-3d` | Storytelling, lịch sử, case study (default) |
| `flat-vector` | Tips, hướng dẫn, fintech sản phẩm |
| `minimal-photo` | Lifestyle, persona, premium |
| `hand-drawn` | Giáo dục cơ bản, người mới |

Chọn 1 preset cho cả carousel — không trộn 2 preset trong 1 prompt mega.

Mở rộng: thêm file vào `_templates/chatgpt-prompt/styles/` → đăng ký vào bảng này.

---

## Slide Layout — DÙNG LÀM SECTION TRONG PROMPT MEGA

Layout pattern bây giờ là **template structure** để compose từng section bên trong prompt mega — không còn là prompt riêng.

| Layout | Dùng cho slide |
|--------|---------------|
| `cover` | Slide 1 |
| `content-bullets` | Slide 2..N-1 (điển hình) |
| `data-stat` | Slide có số liệu chủ đạo |
| `cta-summary` | Slide cuối |

Cùng 1 carousel có thể trộn nhiều layout (slide 1 = `cover`, slide 2-5 = `content-bullets`, slide 6 = `cta-summary`).

---

## Vietnamese Typography Guard — CỰC QUAN TRỌNG

ChatGPT image gen tiếng Việt vẫn ~1–2% typo. Khi 1 prompt cover N slide → tỷ lệ N×1–2% xuất hiện ít nhất 1 typo. Patterns hay sai:

| Hay sai | Đúng |
|---------|------|
| `vả` | `và` |
| `ngân ngân hàng` | `ngân hàng` |
| `tỉ chính` | `tài chính` |
| `Việt nam` | `Việt Nam` |
| `cương trình` | `chương trình` |
| `quẫn lý` | `quản lý` |

**Trong prompt phải:**
1. Có khối "VIETNAMESE TYPOGRAPHY GUARD (CRITICAL)" liệt kê đúng-sai
2. Liệt kê thêm các từ khoá đặc biệt của carousel (tên riêng, năm, brand) cần spelling đúng
3. Câu nhấn cuối: "No misspelled Vietnamese tolerated."

**QA proofread bằng mắt người là BẮT BUỘC** sau khi nhận ảnh — không tin AI 100%.

---

## Consistency — ENFORCE TRONG PROMPT

Trong prompt mega phải có khối "CONSISTENCY (CRITICAL)" liệt kê các yếu tố giống nhau xuyên slide:

- Tag pill style (shape, size, position, fill, text style)
- Page counter circle style
- Background decoration motifs (globe, world-map, dotted grid)
- Pedestal/illustration treatment
- Typography hierarchy + color rule
- Sparkle/star accent style
- Callout pill style
- Bullet icon style

Câu mở: "All N slides MUST share the EXACT SAME visual system:"

---

## QA Checklist (BẮT BUỘC sau khi nhận ảnh)

| # | Check | Verify |
|---|-------|--------|
| 1 | TYPO | Đọc to từng chữ Việt. Sai → regen slide đó |
| 2 | PALETTE | Cream + terracotta-jade đúng hex (không thành xanh-vàng) |
| 3 | CONSISTENCY | Tag pill / counter / decoration giống nhau 6/6 slide |
| 4 | HIERARCHY | Title to nhất, subtitle vừa, body nhỏ |
| 5 | COUNTER | `X/N` đúng số trên từng slide |
| 6 | NO BLEED | Không tiếng Anh/Trung/Nhật chen vào trang trí |

**Câu regen mẫu (chỉ slide cụ thể):**
> "Regenerate slide [N], fix this typo: 'X' → 'Y'. Keep everything else identical."

---

## Output behavior — Save + Show

1. **SAVE** → `projects/[tên]/output/chatgpt-prompts.md`
   - Header: tên carousel, style, số slide, hướng dẫn dùng
   - 1 code block chứa prompt mega
   - QA checklist + câu regen mẫu

2. **SHOW** → Đặt cùng nội dung prompt vào response chat (code block)
   - User copy ngay từ chat — không cần mở file
   - File chỉ là backup/reference

---

## Worked example — compose prompt mega

Cho carousel "Lịch sử Tài chính VN", 6 slides, style `editorial-3d`:

```
Hãy tạo Carousel dựa trên thông tin sau:

=== xFINANCE BRAND DNA ===
[paste brand-dna.md]

=== STYLE PRESET: EDITORIAL 3D ===
[paste editorial-3d.md (gọn lại)]

=== GLOBAL LAYOUT (applies to ALL 6 slides) ===
[anchors: tag pill, counter, decoration]

=== SLIDE 1 — COVER (1/6) ===
[content fill từ outline]

=== SLIDE 2 — ... (2/6) ===
...

=== SLIDE 6 — TỔNG KẾT (6/6) ===
...

=== VIETNAMESE TYPOGRAPHY GUARD (CRITICAL) ===
[từ khoá đặc thù carousel + patterns hay sai]

=== CONSISTENCY (CRITICAL) ===
[liệt kê yếu tố lock]

=== NEGATIVE ===
[paste negative-prompt.md]

=== OUTPUT ===
Generate 6 separate 1080x1080 PNG images, in order...
```

→ User copy nguyên block trên vào ChatGPT → nhận 6 ảnh → QA 6-point.

Xem ví dụ thực tế đầy đủ: `projects/lich-su-tai-chinh-vn/output/chatgpt-prompts.md`.

---

## Mở rộng skill

**Thêm style preset:** tạo file `_templates/chatgpt-prompt/styles/[tên].md` → đăng ký bảng "Style Preset".

**Thêm slide layout:** tạo file `_templates/chatgpt-prompt/slides/[tên].md` → đăng ký bảng "Slide Layout".

---

## Khác biệt với HTML pipeline

| Aspect | HTML | ChatGPT (single mega prompt) |
|--------|------|------------------------------|
| Brand fidelity | 100% pixel | ~95% |
| Visual variety | Hạn chế bởi CSS | Cao — đa dạng style |
| Vietnamese | Chính xác | ~98% (cần QA proofread) |
| Speed | 2–5 phút render | ~1–2 phút ChatGPT gen N ảnh |
| User effort | Đợi pipeline | Paste 1 lần, đợi gen, QA |
| Iteration | Sửa CSS → re-render | Reply "regen slide N, fix X→Y" |
