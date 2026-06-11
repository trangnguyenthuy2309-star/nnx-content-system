# CLAUDE.md — NNX Insurance Carousel System

## Mục đích

Tạo carousel chuyên nghiệp cho **xFinance** (Tài chính cá nhân, Fintech, Giáo dục tài chính).

---

## Quy tắc bắt buộc — Đọc trước khi làm BẤT KỲ carousel nào

```
_brand/brand-guidelines.md         màu sắc, font
_brand/voice-tone.md               tone, từ ngữ
_company/company-profile.md        bối cảnh công ty
_company/target-audience.md        persona người đọc
_skills/carousel-structure.md      cấu trúc slide chung
_skills/copywriting-rules.md       quy tắc viết copy
_skills/visual-direction.md        hướng dẫn hình ảnh
_skills/layout-composition.md      grid 12×12, vertical zones, focal anchor, fill ratio  ← BẮT BUỘC
_skills/typography-hierarchy.md    element, size, spacing — áp dụng SAU khi chốt grid
_skills/weasyprint-compat.md       anti-patterns CSS gây lỗi WeasyPrint
_skills/carousel-qa.md             QA checklist (CHECK A/B/C/D)
```

Sau đó kiểm tra `_templates/carousel/INDEX.md` → chọn template active → đọc `_templates/carousel/[template]/config.md` + `structure.md`

**Nguyên tắc tư duy bố cục:** mỗi slide phải qua trình tự
*chia grid → đặt zone → chọn focal anchor → áp typography → check WeasyPrint*.
Sau khi render PDF/PNG, **bắt buộc Read PNG** và đối chiếu 6-point composition checklist
(CENTER · FILL · ANCHOR · ALIGN · NO-OVERLAP · FONT) — fail bất kỳ điểm nào → fix CSS → re-render.

---

## Workflow

Làm theo **đúng thứ tự** trong `_workflow/carousel-creation.md` — không bỏ bước.

---

## Render Mode — HTML / ChatGPT Browser / ChatGPT Paste

3 pipeline song song. Phân biệt qua trigger words:

| Pipeline              | Khi nào                                                    | Workflow file                           | Output                                                                                                    |
| --------------------- | ---------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **HTML** (default)    | "tạo carousel..." (không nhắc gì khác)                     | `_workflow/carousel-creation.md`        | `[tên].pdf` + `slides/*.jpg` qua WeasyPrint, brand fidelity 100%                                          |
| **ChatGPT Browser** ⚡ | "tạo carousel chatgpt..." / "...auto..." / "...browser..." | `_workflow/carousel-chatgpt-browser.md` | `[tên].pdf` + `slides/*.png` gen + download tự động qua Claude in Chrome lái ChatGPT, brand fidelity ~95% |
| **ChatGPT Paste**     | "tạo prompt chatgpt..." / "cho tôi prompt..."              | `_workflow/carousel-chatgpt-images.md`  | `chatgpt-prompts.md` để user copy-paste vào ChatGPT thủ công                                              |

**🚀 Cả ChatGPT Browser lẫn ChatGPT Paste pipeline = AUTONOMOUS A→Z.** Khi user trigger → chạy thẳng announce → đọc context → sinh brief + outline → compose prompt → render. KHÔNG chờ duyệt outline. Chỉ wait nếu user nói rõ "phác thảo outline trước" / "show outline first" / "chờ tôi duyệt".

### Trigger words → ChatGPT Browser pipeline (auto qua Claude in Chrome) ⚡

Khi prompt user có 1 trong các cụm sau → chạy `_workflow/carousel-chatgpt-browser.md`:

- "tạo carousel chatgpt..." / "tạo carousel bằng chatgpt..."
- "tạo carousel auto..." / "tạo carousel chatgpt auto..."
- "tạo carousel browser..." / "tạo carousel chatgpt browser..."
- "render carousel qua chatgpt..." / "render carousel bằng chatgpt..."

Skill chính: `_skills/chatgpt-browser-automation.md` + `_skills/chatgpt-image-prompt.md`

**Pre-flight bắt buộc:** check `list_connected_browsers` đầu workflow. Nếu Claude in Chrome không kết nối → tự fallback sang paste pipeline + báo user lý do.

### Trigger words → ChatGPT Paste pipeline (chỉ giao prompt)

Khi prompt user có 1 trong các cụm sau → chạy `_workflow/carousel-chatgpt-images.md`:

- "tạo prompt chatgpt..." / "tạo prompt chatgpt cho..."
- "làm prompt gen ảnh..."
- "cho tôi prompt để paste vào chatgpt"
- "lấy prompt chatgpt..."

Skill chính: `_skills/chatgpt-image-prompt.md`

### Style presets (dùng chung cho cả 2 pipeline ChatGPT)

Templates: `_templates/chatgpt-prompt/` — xem README để biết style preset / layout hiện có.

| Preset          | Khi nào hợp                                 |
| --------------- | ------------------------------------------- |
| `editorial-3d`  | Storytelling, lịch sử, case study (default) |
| `flat-vector`   | Tips, hướng dẫn, fintech sản phẩm           |
| `minimal-photo` | Lifestyle, persona, premium                 |
| `hand-drawn`    | Giáo dục cơ bản, người mới                  |

---

## Smart Detection (khi user không có brief)

Claude tự suy luận từ prompt, **không hỏi nhiều câu**.

**Template:** Hiện chỉ có `default` (active). Dùng `default` cho mọi chủ đề — điều chỉnh label nội dung:

| Dạng nội dung         | Label trong slides      |
| --------------------- | ----------------------- |
| Sai lầm, lỗi phổ biến | "Sai lầm 01" (mặc định) |
| Tips / nguyên tắc     | "Nguyên tắc 01"         |
| Hướng dẫn từng bước   | "Bước 01"               |
| Vấn đề + giải pháp    | "Vấn đề 01"             |

Khi có thêm template → kiểm tra `_templates/carousel/INDEX.md` để chọn đúng.

**Defaults nếu không mention:**

- Kênh → Facebook
- Writer → default
- Số slide → lấy từ `config.md` của template
- Tỷ lệ slide → **1:1 (1080×1080)** — xem config.md để chọn tỷ lệ khác (4:5, 16:9, 9:16)

**Chỉ hỏi khi:** chủ đề quá mơ hồ để xác định hướng xử lý.

**Announce format** (luôn hiển thị trước khi bắt đầu):

```
🚀 [Tên carousel]
Template: [tên] | Kênh: [kênh] | Writer: [tên] | Slides: [số]
→ Đang đọc context...
```

---

## Output

**Sản phẩm chính: 1 PDF gộp + PNG per-slide** — tạo từ HTML slides qua WeasyPrint.

```
projects/[tên-project]/
├── brief.md
├── content-outline.md       ← tạo và lưu, tiếp tục ngay
└── output/
    ├── assets/              ← copy từ _templates/carousel/default/assets/
    │   ├── shared.css
    │   ├── shared.js
    │   ├── logo-full-light.png  ← từ _brand/logo/logo01.png
    │   ├── logo-full-dark.png   ← từ _brand/logo/logo02.png
    │   ├── logo-mark.png        ← từ _brand/logo/logo-default.png
    │   └── logo-tagline.png     ← từ _brand/logo/logo04.png
    ├── index.html           ← gallery view (preview HTML)
    ├── slide-01.html ... slide-N.html
    ├── [tên].pdf            ← PDF GỘP duy nhất (chỉ giữ file này)
    └── slides/              ← PNG per-slide (150dpi, từ pdftoppm)
        ├── slide-01.jpg
        └── slide-NN.jpg
```

### Quy tắc output BẮT BUỘC

1. **Chỉ giữ 1 file PDF gộp** — tên `[tên-project].pdf`.
   KHÔNG được giữ các file PDF riêng lẻ (`slide-01.pdf`, `slide-02.pdf`...).
   Nếu workflow có tạo PDF tạm để merge → phải `rm -f output/slide-*.pdf` ngay sau khi `pdfunite` xong.

2. **Naming PNG thống nhất 2 chữ số có pad zero** — luôn `slide-01.jpg`, `slide-02.jpg`... `slide-NN.jpg`.
   KHÔNG được tồn tại đồng thời `slide-1.jpg` và `slide-01.jpg`.
   `pdftoppm` mặc định không pad khi tổng trang < 10 → phải rename `slide-?.jpg` → `slide-0?.jpg` sau khi render (xem `_workflow/carousel-creation.md` Bước 6).

3. **Cleanup trước khi re-render** — luôn `rm -rf output/slides && mkdir output/slides` và `rm -f output/slide-*.pdf` (trừ file PDF gộp chính) trước khi chạy lại pdftoppm/weasyprint, để tránh sót file cũ duplicate.

---

## Research Commands — Tìm ý tưởng & Quản lý Intel

Khi user nói một trong các lệnh sau → chạy `_workflow/content-research.md`:

| Lệnh                                        | Hành động                                                    |
| ------------------------------------------- | ------------------------------------------------------------ |
| `"Tìm ý tưởng về [chủ đề]"`                 | Search web → capture → cập nhật INDEX → gợi ý                |
| `"Gợi ý carousel"`                          | Đọc INDEX.md → hiển thị intel status=`new` dưới dạng ý tưởng |
| `"Xem ý tưởng chưa dùng"`                   | Filter INDEX.md status=`new`, hiển thị danh sách             |
| `"Tạo carousel từ I[xxx]"`                  | Dùng intel file đó → chạy carousel workflow                  |
| `"Đánh dấu I[xxx] đã dùng trong [project]"` | Cập nhật status trong file + INDEX.md                        |
| `"Archive I[xxx]"`                          | Cập nhật status → `archived` trong file + INDEX.md           |

**File trung tâm:** `_intel/INDEX.md` — luôn cập nhật sau mỗi thao tác thêm/dùng/archive.

---

## Source Commands — Convert bài viết sang carousel

Khi user dump bài viết có sẵn (blog post, transcript, FB post cũ...) vào `_sources/` và muốn convert → đọc `_sources/README.md` + `_sources/INDEX.md`.

| Lệnh                                                       | Hành động                                                                            |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `"Thêm bài [file] vào sources"`                            | Đọc file → đếm từ → cập nhật `_sources/INDEX.md` (status=`new`, gán ID `S[xxx]`)     |
| `"Xem bài chưa dùng"` / `"Có bài nào convert được không?"` | Filter `_sources/INDEX.md` status=`new`, hiển thị + gợi ý angle                      |
| `"Tạo carousel từ S[xxx]"`                                 | Đọc source → tự tạo `projects/[tên]/` → sinh brief.md → outline → chờ duyệt → render |
| `"Tạo carousel từ bài [tên/keyword]"`                      | Fuzzy match trong `_sources/INDEX.md` → confirm với user → chạy workflow             |
| `"Đánh dấu S[xxx] đã dùng trong [project]"`                | Cập nhật status → `used` (hoặc `used (multi)` nếu ≥ 2 lần)                           |
| `"Archive S[xxx]"`                                         | Cập nhật status → `archived`                                                         |

**File trung tâm:** `_sources/INDEX.md` — luôn cập nhật sau mỗi thao tác.

**Phân biệt 3 folder nguồn:**

| Folder         | Bản chất                       | Khi nào dùng                              |
| -------------- | ------------------------------ | ----------------------------------------- |
| `_intel/`      | IDEA (chưa có nội dung)        | "Tìm ý tưởng về X" → search web → capture |
| `_references/` | KNOWLEDGE BASE (tra cứu)       | Dẫn số liệu, framework, brand book        |
| `_sources/`    | CONTENT (đã có, cần repurpose) | User có bài viết sẵn muốn convert         |

**ID prefix bắt buộc** để tránh nhầm lẫn: `I[xxx]` = intel, `S[xxx]` = source.

---

## Ngôn ngữ & Giới hạn

- Tiếng Việt chính — giữ nguyên: *carousel, hook, CTA, brief, KPI, ROI...*
- Không tự thay màu / font / tỷ lệ slide ngoài `_brand/`
- Không bịa thông tin công ty — hỏi user nếu không chắc
- Writer mặc định: `_writers/default.md`
- Logo: **luôn lấy từ `_brand/logo/`** — xem bảng mapping trong `_brand/brand-guidelines.md § Logo`
