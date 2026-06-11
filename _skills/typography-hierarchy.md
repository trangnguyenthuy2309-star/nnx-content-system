# Typography Hierarchy — xFinance Carousel

> Đọc file này khi viết copy cho bất kỳ slide nào. Áp dụng đúng element → đúng vị trí.
>
> **Áp dụng SAU khi đã chốt grid + zone + focal anchor** trong
> `_skills/layout-composition.md`. Typography quản chữ — composition quản
> không gian. Hai file này phải đọc song song.

---

## Hệ thống element theo tầng

```
[EYEBROW]     → Tag nhỏ phía trên tiêu đề — uppercase, màu accent
[TITLE]       → Tiêu đề slide — Plus Jakarta Sans 800
[BODY]        → Nội dung chính — Plus Jakarta Sans 400
[MICRO]       → Tip / note / label phụ — Plus Jakarta Sans 600
[DATA]        → Số liệu nổi bật — Plus Jakarta Sans 800
[GHOST]       → Số trang trí nền — rất to, opacity thấp
```

---

## Quy định theo từng element

### Eyebrow (tag trên đầu)
- Font: Plus Jakarta Sans 700 | Uppercase | Letter-spacing: 0.22–0.28em
- Size slide 1920×1080: **18px** | Size slide 1080×1080: **9–9.5px**
- Màu: Ngọc `#2A8A7F` (label số thứ tự), Nghệ `#E8B547` (highlight), Kem `#FAF6F0` (cover)
- Nội dung: category, bước số, label — **≤ 8 từ**
- Vị trí: Luôn phía TRÊN title, không bao giờ dưới

### Title (tiêu đề slide)
- Font: Plus Jakarta Sans 800
- Size slide 1920×1080: **72–96px** (content), **160–180px** (cover)
- Line-height: 1.0–1.15 | Letter-spacing: −0.02em đến −0.035em
- Giới hạn: **≤ 7–9 từ** (xem config.md từng template), **tối đa 2 dòng**
- Không viết tiêu đề ALLCAPS — chỉ viết hoa chữ đầu câu

### Body text
- Font: Plus Jakarta Sans 400
- Size slide 1920×1080: **22–26px** | Line-height: **1.5–1.6**
- Giới hạn: **≤ 32 từ** / slide (xem config.md từng slide zone)
- Margin-bottom mỗi bullet: 8px

### Micro text (tip, note, label)
- Font: Plus Jakarta Sans 600 | Size: 13–14px
- Dùng cho: tip box, source label, slide number, progress indicator
- Không dùng cho nội dung chính — chỉ là hỗ trợ thị giác

### Data callout (số liệu lớn)
- Font: Plus Jakarta Sans 800 | Size slide 1920×1080: **480px** | Line-height: 1
- Màu: Đất nung `#C9572C` (default) / Nghệ `#E8B547` (kết quả tích cực)
- Label bên dưới: Plus Jakarta Sans 400, nhỏ hơn, opacity thấp
- Chỉ 1 data callout per slide — nhiều hơn sẽ loãng

### Ghost number (trang trí nền)
- Font: Plus Jakarta Sans 800 | Size: **780–880px** | Opacity: ~7%
- Màu: `rgba(250,246,240,.07)` trên nền tối
- Dùng cho: số thứ tự slide numbered (01–05), không dùng cho content

---

## Layout theo slide type (template `default`)

| Slide | Đặc điểm typography |
|-------|-------------------|
| **Cover** | Ghost "N" bên phải, tiêu đề 160–180px, sub-text 26px, số nhấn màu Đất nung |
| **Stat** | Số lớn 480px bên trái (Đất nung), headline + body bên phải, nguồn 13px |
| **Numbered (01–05)** | Ghost 780px mờ, số Đất nung 280px trái, h2 72–96px + body 26px + fix box phải |
| **Quote** | Nền `#221F1C`, dấu nháy 380px mờ, blockquote 88px, author 18px |
| **Compare** | 2 cột đối ứng, header cột Đất nung / Ngọc, mỗi hàng ≤ 10 từ |
| **CTA** | 2 cột, h2 120px, body 26px, 3 action cards bên phải |

---

## Spacing system (slide 1920×1080)

| Khoảng cách | Giá trị |
|------------|---------|
| Padding slide | `80px 110px 70px` (top · sides · bottom) |
| Header logo → body | auto (grid 3 rows: auto 1fr auto) |
| Eyebrow → title | 24–32px |
| Title → body | 24–36px |
| Body → fix box | 32–48px |
| Giữa các bullet/item | 16–24px |
| Fix box padding | `24px 32px` |

---

## Lỗi phổ biến cần tránh

❌ Title dài hơn 2 dòng → rút gọn, dùng sub-title nếu cần  
❌ Body text > 14px → quá to, chiếm chỗ của title  
❌ Accent bar cách title > 12px → bố cục rời rạc  
❌ Dùng ALLCAPS cho title → dùng eyebrow thay thế  
❌ Nhiều hơn 3 bullet → tách thành 2 slides  
❌ Số liệu lớn không có label → người đọc không hiểu context  
