---
template_key: default
template_name: Default — Listicle (Mistake/Tips/Steps/Problem → Solution)
version: 2.0
brand: NNX Insurance
default: true
slide_count: 10
aspect_ratio: 1:1
canvas: 1080x1080
preview: example/index.html
---

# Config — Template: Default

## Mô tả

Template mặc định của hệ thống Carousel NNX Insurance. Cấu trúc **Listicle** (danh sách có thứ tự) — versatile nhất, phù hợp cho hầu hết nội dung bán bảo hiểm phi nhân thọ cho tư vấn viên nhân thọ.

Có thể adapt nhanh sang các dạng khác bằng cách thay đổi label:
- **Sai lầm / Lỗi phổ biến** → "Sai lầm 01"
- **Tips / Nguyên tắc** → "Nguyên tắc 01"
- **Hướng dẫn từng bước** → "Bước 01"
- **Vấn đề + giải pháp** → "Vấn đề 01"

Dùng khi prompt không chỉ định rõ template cụ thể.

## Khi nào dùng

✅ Danh sách lỗi phổ biến hoặc thói quen cần sửa  
✅ Mỗi mục có thể trình bày bằng 1 câu vấn đề + 1 câu khắc phục  
✅ Nội dung cần cảm giác "mình từng mắc lỗi này" mà không phán xét  
✅ Mục tiêu: giáo dục nhanh, dễ lưu lại, dễ chia sẻ  
✅ Khi prompt mơ hồ, không detect được template cụ thể

❌ Không dùng khi cần kể một hành trình / case study dài (→ dùng `story`)  
❌ Không dùng khi cần so sánh sâu hai lựa chọn (→ dùng `comparison`)  
❌ Không dùng khi cần hướng dẫn nhiều bước kỹ thuật chi tiết (→ dùng `how-to`)

## Cấu hình slide

| Mục | Giá trị |
|-----|---------|
| Số slide mặc định | 10 (5 mục numbered) |
| Số slide tối thiểu | 8 (3 mục numbered) |
| Số slide tối đa | 12 (7 mục numbered) |
| Số mục numbered | 3–7 → tổng slide = mục + 5 (cover+stat+quote+compare+CTA) |
| Tỷ lệ slide (default) | **1:1** |
| Kích thước thiết kế (default) | **1080 × 1080** |
| Font chính | Averta Std CY (Regular, Semibold, Bold) |
| Font phụ | UTM Avo (Regular, Bold) — dùng cho body nhỏ |
| Kênh phù hợp | Facebook, Instagram, LinkedIn |
| Preview chính | `example/index.html` |

## Tỷ lệ slide được hỗ trợ

| Tỷ lệ | Kích thước | CSS override cần thêm | Kênh phù hợp |
|--------|------------|----------------------|--------------|
| **1:1** ← default | 1080 × 1080 | (không cần) | Facebook, Instagram, LinkedIn |
| 4:5 | 1080 × 1350 | `:root{--slide-w:1080px;--slide-h:1350px}` + `@page{size:1080px 1350px}` | Instagram Feed, Facebook |
| 16:9 | 1920 × 1080 | `:root{--slide-w:1920px;--slide-h:1080px}` + `@page{size:1920px 1080px}` | LinkedIn, YouTube Community |
| 9:16 | 1080 × 1920 | `:root{--slide-w:1080px;--slide-h:1920px}` + `@page{size:1080px 1920px}` | Instagram Stories, TikTok |

> Claude tự động dùng 1:1 nếu brief không chỉ định tỷ lệ.  
> Khi brief yêu cầu tỷ lệ khác, thêm override CSS vào `<style>` của từng slide HTML.

## Giới hạn text bắt buộc (1:1 — 1080×1080)

> Vượt quá giới hạn này dễ làm tràn layout vì canvas hẹp hơn 16:9.

| Vùng text | Giới hạn từ | Giới hạn dòng | Ghi chú |
|-----------|-------------|---------------|---------|
| Cover title | ≤ 9 từ | 2 dòng | Font 96px |
| Cover sub-text | ≤ 18 từ | 2 dòng | Font 22px |
| Stat headline | ≤ 10 từ | 2 dòng | Slide số liệu |
| Numbered title | ≤ 7 từ | 2 dòng | Font 54px — tách dòng bằng `.ac` |
| Problem body | ≤ 28 từ | 3 dòng | Font 20px, 1 ý chính |
| Fix label | 2–4 từ | 1 dòng | "Cách khắc phục" |
| Fix body | ≤ 18 từ | 2 dòng | Font 18px, bắt đầu bằng động từ |
| Quote | ≤ 20 từ | 3 dòng | Font 52px |
| Compare item | ≤ 8 từ/item | 1 dòng/item | Font 17px, 5 item mỗi cột |
| CTA headline | ≤ 7 từ | 2 dòng | Font 72px |
| CTA body | ≤ 14 từ | 2 dòng | Font 20px |

## Visual Pattern (NNX)

| Slide | Background | Thành phần chính | Màu accent |
|-------|------------|------------------|-----------|
| 1 — Cover | `#276031` (NNX Dark Green) | Hook + số ghost lớn bên phải | `#0DB04B` (NNX Green) |
| 2 — Context Stat | `#276031` | Số lớn trái + headline + nguồn | `#0DB04B` |
| 3–7 — Numbered Cards | `#276031` | Số 280px + tiêu đề + solution box | `#F794D` (NNX Orange) |
| 8 — Quote | `#1a3d24` (Dark Green tối) | Dấu ngoặc kép + blockquote + tác giả | `#0DB04B` |
| 9 — Behavior Compare | `#276031` | 2 cột: Không nên / Nên làm | `#0DB04B` (cột phải) |
| 10 — CTA | `#276031` | 2 cột: headline + action cards | `#0DB04B` |

## Logo & Assets

> **Nguồn gốc:** Logo lấy từ `_brand/logo/` — KHÔNG chỉnh sửa file trong `assets/`.  
> Khi cần refresh, copy lại từ nguồn gốc theo bảng bên dưới.

| File trong `assets/` | Nguồn từ `_brand/logo/` | Dùng khi |
|----------------------|-------------------------|---------|
| `logo-full-light.png` | `logo-full-light.png` | Slide nền tối (#276031 hoặc #0DB04B) — mọi slide content |
| `logo-full-dark.png` | `logo-full-dark.png` | Trang index/preview nền sáng (#FFFFFF) |
| `logo-mark.png` | `logo-mark.png` | Icon-only, avatar, favicon (nếu cần) |
| `logo-tagline.png` | `logo-tagline.png` | Slide 10 CTA / trang kết thúc có tagline (nếu có) |

## Output khi Claude tạo carousel

Khi Claude tạo carousel dùng template này:

1. **Copy toàn bộ `assets/`** vào `projects/[tên]/output/assets/`
2. **Tạo `slide-01.html`...`slide-10.html`** trong `projects/[tên]/output/`
3. **Tạo `index.html`** trong `projects/[tên]/output/`
4. Logo path trong HTML: `assets/logo-full-light.png` (relative)
5. **Render PDF** — dùng WeasyPrint: `python3 -m weasyprint slide-XX.html slide-XX.pdf` rồi merge
6. **Xuất PNG per-slide** — dùng pdftoppm: `pdftoppm -jpeg -r 150 [tên].pdf slide`

**Yêu cầu CSS bắt buộc cho WeasyPrint:**
- `@page { size: 1080px 1080px; margin: 0; }` trong `shared.css` (default 1:1)
- Nếu tỷ lệ khác: thêm `@media print { @page { size: WIDTHpx HEIGHTpx; margin: 0; } }` trong `<style>` của từng slide
- Font load qua `@font-face` local (không dùng Google Fonts CDN)
- Mỗi slide dùng `break-after: page` để tách trang PDF
- Không dùng `position: fixed`, CSS animation, hay transition

## Quy tắc nội dung

- Viết với giọng đồng cảm, không phán xét người đọc.
- Mỗi slide numbered chỉ có 1 lỗi và 1 cách sửa.
- Cách khắc phục phải là hành động cụ thể có thể làm trong tuần này.
- Không dùng quá 5 mục numbered; nếu ít hơn, bỏ bớt slide numbered nhưng giữ Cover, Stat, CTA.
- CTA cuối chỉ chọn một hành động chính: lưu bài, theo dõi, đăng ký, hoặc tải tài liệu.
