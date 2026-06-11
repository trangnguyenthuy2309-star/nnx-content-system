---
template_key: editorial
template_name: Editorial — Light Serif (rebuild 2026-05-05)
version: 2.0
default: false
slide_count: 10
aspect_ratio: 1:1
canvas: 1080x1080
preview: example/index.html
---

# Config — Template: Editorial

## Status
active

## Mô tả

Template editorial tối giản — nền Kem warm white toàn bộ, heading sans bold cho moment hành động, serif italic Cormorant Garamond cho moment cảm xúc. Signature element: `.grey-box` (warm grey block chứa serif italic phrase).

Cấu trúc: Cover → Stat → 5× Numbered → Quote → Key Insight → CTA. Tất cả slide nền Kem (`#FAF6F0`) — cảm giác breathing room, premium, đáng tin cậy từ đầu đến cuối.

**Khác với template default:**
- Default: nền Than (tối) cho mọi slide content. Editorial: nền Kem (sáng) toàn bộ.
- Default: heading sans bold mọi nơi. Editorial: heading sans cho hành động + serif italic cho insight/cảm xúc.
- Default: slide 9 = Compare 2 cột. Editorial: slide 9 = Key Insight (1 câu italic to full-width).

## Khi nào dùng

Nội dung nguyên tắc, tips, insight, framework — cần cảm giác premium, editorial, đáng tin cậy. Phù hợp đối tượng professional / mid-career / advisor audience.

Không dùng khi cần urgency, thuyết phục mạnh, hoặc số liệu nặng (→ dùng `default`).

## Cấu hình slide

| Mục | Giá trị |
|-----|---------|
| Số slide mặc định | 10 (5 mục numbered) |
| Tỷ lệ slide (default) | **1:1** |
| Kích thước thiết kế | **1080 × 1080** |
| Heading font | Cormorant Garamond (serif italic) — moment cảm xúc |
| Body / Action font | Plus Jakarta Sans — moment sharp/hành động |
| Background | Kem `#FAF6F0` (toàn bộ) |
| Kênh phù hợp | Facebook, Instagram, LinkedIn |
| Preview chính | `example/index.html` |

## Tỷ lệ slide được hỗ trợ

| Tỷ lệ | Kích thước | CSS override cần thêm |
|--------|------------|----------------------|
| **1:1** ← default | 1080 × 1080 | (không cần) |
| 4:5 | 1080 × 1350 | `:root{--slide-w:1080px;--slide-h:1350px}` + `@page{size:1080px 1350px}` |
| 16:9 | 1920 × 1080 | `:root{--slide-w:1920px;--slide-h:1080px}` + `@page{size:1920px 1080px}` |
| 9:16 | 1080 × 1920 | `:root{--slide-w:1080px;--slide-h:1920px}` + `@page{size:1080px 1920px}` |

## Palette

| Biến | Hex | Vai trò |
|------|-----|---------|
| `--bg` | `#FAF6F0` | Background mọi slide (Kem) |
| `--bg-2` | `#F2ECE2` | Kem darker (variant nếu cần) |
| `--text` | `#2D2A26` | Text chính (Than) |
| `--text-2` | `rgba(45,42,38,.62)` | Text muted (body, byline) |
| `--text-3` | `rgba(45,42,38,.42)` | Text rất nhẹ (source, counter) |
| `--grey-box` | `#E2D9CE` | **Signature** — warm grey block bg |
| `--accent` | `#C9572C` | Đất nung — số stat, button CTA, page-num |
| `--accent-2` | `#2A8A7F` | Ngọc — eyebrow numbered, label tag |
| `--line` | `rgba(45,42,38,.14)` | Footer border |

## Signature design element

`.grey-box` — khối warm grey `#E2D9CE` chứa serif italic Cormorant Garamond.

Dùng ở:
- Slide 1 Cover — phrase italic dưới H1 (vd "quản lý tiền")
- Slide 3–7 Numbered — câu nguyên tắc gốc dạng italic (focal anchor)
- Slide 8 Quote — quote-card (variant với border-radius và padding lớn hơn)

Class CSS: `.grey-box` (base) + slide-specific override (`.s-cover .hl-box`, `.s-num .grey-box`, `.s-quote .quote-card`).

## Logo & Assets

> **Nguồn gốc:** Logo lấy từ `_brand/logo/` — KHÔNG chỉnh sửa file trong `assets/`.

| File trong `assets/` | Nguồn từ `_brand/logo/` | Dùng khi |
|----------------------|-------------------------|---------|
| `logo-dark.png` | `logo02.png` (545×205) | **Mọi slide** — vì nền Kem sáng |
| `logo-light.png` | `logo01.png` (627×211) | (dự phòng) khi có slide nền tối |
| `logo-icon.png` | `logo-default.png` (243×244) | Icon-only, brand mark nhỏ |

Trong HTML mỗi slide: `<img src="../assets/logo-dark.png" alt="xFinance">` (header).

## Giới hạn text bắt buộc (1:1 — 1080×1080)

| Vùng text | Giới hạn từ | Giới hạn dòng | Font size |
|-----------|-------------|---------------|-----------|
| Cover eyebrow | ≤ 5 từ | 1 dòng | 12px |
| Cover H1 (sans 800) | ≤ 6 từ | 2 dòng | 80px |
| Cover hl-box phrase (serif italic) | 2–4 từ | 1 dòng | 56px |
| Cover author byline | ≤ 6 từ | 1 dòng | 18px |
| Stat eyebrow | ≤ 4 từ | 1 dòng | 12px |
| Stat big-num | 2–4 ký tự | 1 dòng | 200px |
| Stat headline italic | ≤ 12 từ | 2 dòng | 44px |
| Stat body | ≤ 22 từ | 2 dòng | 20px |
| Stat source | ≤ 14 từ | 1 dòng | 12px |
| Numbered label | "Nguyên tắc 0X" | 1 dòng | 12px |
| Numbered counter | "0X / 05" | 1 dòng | 12px |
| Numbered H2 (sans 800) | ≤ 6 từ | 2 dòng | 56px |
| Numbered grey-box (serif italic) | ≤ 14 từ | 2 dòng | 40px |
| Numbered body | ≤ 26 từ | 3 dòng | 20px |
| Quote (serif italic) | ≤ 22 từ | 4 dòng | 44px |
| Quote attribution | ≤ 4 từ | 1 dòng | 12px |
| Quote role | ≤ 8 từ | 1 dòng | 11px |
| Insight eyebrow | ≤ 3 từ | 1 dòng | 12px |
| Insight line (serif italic) | ≤ 16 từ | 3 dòng | 64px |
| CTA eyebrow | ≤ 4 từ | 1 dòng | 12px |
| CTA H2 (serif italic) | ≤ 7 từ | 2 dòng | 72px |
| CTA body | ≤ 18 từ | 2 dòng | 20px |
| CTA button label | ≤ 4 từ | 1 dòng | 14px |
| CTA action chips | ≤ 3 từ/chip · max 3 chips | 1 dòng | 12px |

## Quy tắc nội dung

- Tone: editorial, calm, formal — không sử dụng lời lẽ kêu gọi mạnh.
- Mỗi slide chỉ có 1 ý chính và 1 focal anchor rõ ràng.
- Serif italic = moment cảm xúc / nguyên tắc / quote. Sans bold = moment hành động / số liệu / CTA.
- Không dùng emoji ở bất kỳ slide nào (WeasyPrint không render).
- CTA cuối: 1 hành động chính + tối đa 3 action chips phụ.

## Rules WeasyPrint áp dụng (đã có sẵn trong shared.css)

- Mọi `.s-[type] .body` khai `display:flex;flex-direction:column;justify-content:center` (per `weasyprint-compat.md § 12`).
- Button dùng `display:table` (không inline-flex).
- Bullet/separator dùng ký tự thực (`·`, `–`) không `border-radius:50%` trên pseudo.
- Decorations + progress bar ẩn trong `@media print`.
- `.grey-box` không dùng negative margin (per `layout-composition.md § 3.4`).

## Layout-composition compliance

Đã apply `_skills/layout-composition.md`:
- ✅ Mỗi slide-type có focal anchor rõ ràng (xem `structure.md`).
- ✅ Mọi `.body` mặc định `justify-content:center`.
- ✅ Block max-width đều có `align-self: center`.
- ✅ Không có negative margin.
- ✅ Fill ratio target 60–75%.

QA bắt buộc sau render: chạy CHECK D từ `_skills/carousel-qa.md` (Read PNG + 6-point checklist).

## Output khi Claude tạo carousel với template này

1. Copy toàn bộ `assets/` vào `projects/[tên]/output/assets/`
2. Tạo `slide-01.html`...`slide-10.html` trong `projects/[tên]/output/`
3. Tạo `index.html`
4. Logo path: `assets/logo-dark.png` (relative)
5. Render PDF qua WeasyPrint
6. Convert PNG qua pdftoppm (150 DPI)
7. **CHECK D composition audit** trước khi báo xong (Read PNG + 6-point)
