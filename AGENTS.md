# AGENTS.md — xFinance Carousel System

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

## Smart Detection (khi user không có brief)

Codex tự suy luận từ prompt, **không hỏi nhiều câu**.

**Template:** Hiện chỉ có `default` (active). Dùng `default` cho mọi chủ đề — điều chỉnh label nội dung:

| Dạng nội dung | Label trong slides |
|--------------|-------------------|
| Sai lầm, lỗi phổ biến | "Sai lầm 01" (mặc định) |
| Tips / nguyên tắc | "Nguyên tắc 01" |
| Hướng dẫn từng bước | "Bước 01" |
| Vấn đề + giải pháp | "Vấn đề 01" |

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

**Sản phẩm chính: PDF + PNG per-slide** — tạo từ HTML slides qua WeasyPrint.

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
    ├── [tên].pdf            ← render từ HTML qua WeasyPrint
    └── slides/              ← PNG per-slide (150dpi, từ pdftoppm)
        ├── slide-01.jpg
        └── slide-NN.jpg
```

---

## Research Commands — Tìm ý tưởng & Quản lý Intel

Khi user nói một trong các lệnh sau → chạy `_workflow/content-research.md`:

| Lệnh | Hành động |
|------|----------|
| `"Tìm ý tưởng về [chủ đề]"` | Search web → capture → cập nhật INDEX → gợi ý |
| `"Gợi ý carousel"` | Đọc INDEX.md → hiển thị intel status=`new` dưới dạng ý tưởng |
| `"Xem ý tưởng chưa dùng"` | Filter INDEX.md status=`new`, hiển thị danh sách |
| `"Tạo carousel từ [ID]"` | Dùng intel file đó → chạy carousel workflow |
| `"Đánh dấu [ID] đã dùng trong [project]"` | Cập nhật status trong file + INDEX.md |
| `"Archive [ID]"` | Cập nhật status → `archived` trong file + INDEX.md |

**File trung tâm:** `_intel/INDEX.md` — luôn cập nhật sau mỗi thao tác thêm/dùng/archive.

---

## Ngôn ngữ & Giới hạn

- Tiếng Việt chính — giữ nguyên: *carousel, hook, CTA, brief, KPI, ROI...*
- Không tự thay màu / font / tỷ lệ slide ngoài `_brand/`
- Không bịa thông tin công ty — hỏi user nếu không chắc
- Writer mặc định: `_writers/default.md`
- Logo: **luôn lấy từ `_brand/logo/`** — xem bảng mapping trong `_brand/brand-guidelines.md § Logo`
