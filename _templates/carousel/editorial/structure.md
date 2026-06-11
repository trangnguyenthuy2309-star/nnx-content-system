# Structure — Template: Editorial (rebuild 2026-05-05)

> 10 slides chuẩn. Mặc định canvas 1:1 (1080×1080), nền Kem `#FAF6F0` toàn bộ.
> Mỗi slide có **focal anchor** rõ ràng theo `_skills/layout-composition.md`.

---

## Slide 1 — Cover / Hook

**Vai trò:** Mở đầu, gọi tên chủ đề bằng cảm xúc editorial.
**Background:** `#FAF6F0` (Kem) | **Text:** `#2D2A26` (Than) | **Accent:** `#C9572C`
**Logo:** `assets/logo-dark.png` — header trái

**Focal anchor:** H1 (sans 80px) + grey-box phrase (serif italic 56px) ở center body.
**Body alignment:** `justify-content: center` | **Fill ratio target:** 65–75%

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Eyebrow | "xFinance Carousel" hoặc series name | ≤ 5 từ | "xFinance Carousel" |
| H1 sans (chính) | Tiêu đề ngắn, có số nếu có | ≤ 6 từ | "5 nguyên tắc" (font 80px) |
| Grey-box phrase (serif italic) | Bổ ngữ cảm xúc | 2–4 từ | "quản lý tiền" (font 56px italic) |
| Author byline | Tên + năm | ≤ 6 từ | "(xFinance Editorial · 2026)" (font 18px italic) |
| Arrow CTA | Mũi tên xuống/phải | 1 ký tự | "→" trong tròn Đất nung |

**Quy tắc HTML bắt buộc:**
- `.arrow` nằm TRONG `.body` div, là flex item cuối, KHÔNG dùng `position:absolute`.
- `.hl-box` (= `.grey-box` variant cho cover) phải có `display:block` + `align-self:stretch`.
- KHÔNG có `<span class="deco">` hay decorative absolute child của `.slide`.

---

## Slide 2 — Context Stat

**Vai trò:** Đặt bối cảnh bằng 1 con số nổi bật.
**Background:** `#FAF6F0` | **Accent số:** `#C9572C` (Đất nung)
**Logo:** `assets/logo-dark.png` — header

**Focal anchor:** Big number (Đất nung 200px) bám trục dọc trái.
**Body alignment:** `justify-content: center`, `align-items: flex-start` (vertical stacked, không split horizontal — per `weasyprint-compat.md § 11`)
**Fill ratio target:** 60–70%

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Eyebrow | Label nguồn / context | ≤ 4 từ | "Bối cảnh" hoặc "Khảo sát 2025" |
| Big-num (sans 800) | Tỷ lệ / con số chính | 2–4 ký tự | "70%" (font 200px Đất nung) |
| Headline italic | Ý nghĩa số (serif italic) | ≤ 12 từ | "nhà đầu tư mới thua lỗ trong năm đầu" (font 44px) |
| Body sans | Vì sao quan trọng | ≤ 22 từ | "Không phải do thị trường — mà do nguyên tắc đầu tư..." (font 20px) |
| Source | Nguồn ngắn | ≤ 14 từ | "Khảo sát nội bộ xFinance · 2025 · n=980" (font 12px) |

**Quy tắc HTML bắt buộc:**
- Layout VERTICAL STACKED — không dùng horizontal table/flex-row (WeasyPrint clip cột phải).
- `.num-mark` dùng `align-items: flex-end` (không phải `baseline`).
- Không nhồi quá 1 con số lớn — nếu cần 2 số thì split ở `+/–` symbols (cùng cell).

---

## Slide 3–7 — Numbered (5 mục Nguyên tắc)

**Vai trò:** Mỗi slide trình bày 1 nguyên tắc. Mỗi nguyên tắc có câu gốc dạng serif italic + giải thích sans.
**Background:** `#FAF6F0` | **Accent label:** `#2A8A7F` (Ngọc) | **Page-num:** `#C9572C`
**Logo:** `assets/logo-dark.png` — header

**Focal anchor:** `.grey-box` (serif italic 40px) — câu nguyên tắc gốc, chiếm hàng giữa.
**Body alignment:** `justify-content: center`
**Fill ratio target:** 65–75%

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Label (Ngọc) | "Nguyên tắc 0X" | "Nguyên tắc" + 2 chữ số | "Nguyên tắc 02" |
| Counter (muted) | "0X / 05" | 1 dòng | "02 / 05" |
| H2 sans bold | Tên nguyên tắc | ≤ 6 từ | "Tiết kiệm trước, tiêu sau" (font 56px) |
| Grey-box (serif italic) | Câu nguyên tắc gốc | ≤ 14 từ | "Trả cho mình trước khi trả cho người khác." (font 40px italic, center) |
| Body sans | Giải thích cụ thể | ≤ 26 từ | "Nhận lương xong, chuyển ngay 10–20% vào tiết kiệm..." (font 20px, center, max-width 820px) |

**Quy tắc HTML bắt buộc:**
- Mỗi slide-num dùng class `.s-num`.
- `.label-row` chứa `.label` (left) + `.num-count` (right) — 1 dòng `display:flex`.
- `.grey-box` `align-self: stretch`, không có negative margin.
- `.body-text` có `max-width: 820px` + `align-self: center` (per `layout-composition.md § 3.5`).
- Counter "0X / 05" hard-code trong HTML — không dựa shared.js footer counter.
- Footer count vẫn để shared.js fill (`<span class="count"></span>`).

**Counter mapping:**

| Slide | Label | Counter | Footer count | --p (progress) |
|-------|-------|---------|--------------|----------------|
| 3 | Nguyên tắc 01 | 01 / 05 | 03 / 10 | 30% |
| 4 | Nguyên tắc 02 | 02 / 05 | 04 / 10 | 40% |
| 5 | Nguyên tắc 03 | 03 / 05 | 05 / 10 | 50% |
| 6 | Nguyên tắc 04 | 04 / 05 | 06 / 10 | 60% |
| 7 | Nguyên tắc 05 | 05 / 05 | 07 / 10 | 70% |

---

## Slide 8 — Quote / Belief Reinforcement

**Vai trò:** Củng cố niềm tin bằng 1 quote ngắn gọn từ figure đáng tin.
**Background:** `#FAF6F0` | **Card bg:** `#E2D9CE` (grey-box) | **Text:** `#2D2A26`
**Logo:** `assets/logo-dark.png` — header

**Focal anchor:** Quote-card (grey-box 56–60px padding) center cả 2 trục.
**Body alignment:** `justify-content: center`, `align-items: center`
**Fill ratio target:** 60–70%

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Avatar (round) | Placeholder hình tròn 64px | — | rgba(45,42,38,.20) |
| Blockquote (serif italic) | Câu trích dẫn | ≤ 22 từ | "Biết mình không biết gì..." (font 44px) |
| Attribution | Tên tác giả uppercase | ≤ 4 từ | "Charlie Munger" |
| Attribution-role | Vai trò + công ty | ≤ 8 từ | "Phó Chủ tịch · Berkshire Hathaway" |

**Quy tắc HTML bắt buộc:**
- `.quote-card` có `max-width: 820px` + `align-self: center`.
- `.blockquote` không cần `<q>` tags — quote marks decorative không cần thiết (italic đã đủ signal).
- Avatar là `<div class="avatar">` (không phải `<img>`) — placeholder tròn.
- KHÔNG đặt logo thứ 2 trong body.

---

## Slide 9 — Key Insight

**Vai trò:** Chốt nhận định cốt lõi của carousel — 1 câu duy nhất, lay động.
**Background:** `#FAF6F0` | **Text:** `#2D2A26` | **Accent ornament:** `#C9572C`
**Logo:** `assets/logo-dark.png` — header

**Focal anchor:** Insight line (serif italic 64px) full-width center.
**Body alignment:** `justify-content: center`, `align-items: center`
**Fill ratio target:** 55–65% (ít hơn vì cần breathing room — đây là moment "thở")

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Eyebrow (Đất nung) | Label nhấn | ≤ 3 từ | "Cốt lõi" hoặc "Insight" |
| Insight (serif italic 64px) | 1 câu đúc kết | ≤ 16 từ | "Tiền không phải mục tiêu — nó là công cụ để mua thời gian." (font 64px) |
| Ornament line | Dòng kẻ Đất nung 64px | — | width 64px height 2px |

**Quy tắc HTML bắt buộc:**
- `.insight` có `max-width: 880px` + `align-self: center` + `text-align: center`.
- Có thể dùng `<em>` bên trong `.insight` để đổi 1 từ sang sans-bold Đất nung (highlight).
- Slide này KHÔNG có body text bổ sung — chỉ insight + ornament.

---

## Slide 10 — CTA

**Vai trò:** Chốt bằng hành động cụ thể — theo dõi / lưu / đăng ký.
**Background:** `#FAF6F0` | **Button:** `#C9572C` (Đất nung) bg, Kem text
**Logo:** `assets/logo-dark.png` — header

**Focal anchor:** Button (Đất nung) ở dưới, neo bằng H2 italic.
**Body alignment:** `justify-content: center`, `align-items: flex-start` (left-aligned)
**Fill ratio target:** 60–70%
**Body padding-bottom:** 24px (BẮT BUỘC — không để 0)

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Eyebrow (Đất nung) | "Bắt đầu" / "Theo dõi" | ≤ 4 từ | "Bắt đầu đúng cách" |
| H2 (serif italic 72px) | Brand promise | ≤ 7 từ | "Hiểu tiền đúng — *tăng trưởng* vững." (font 72px italic, "tăng trưởng" có thể `<em>` Đất nung) |
| Body | Lý do follow | ≤ 18 từ | "Theo dõi để nhận nội dung mỗi tuần — không spam, chỉ insight." (font 20px) |
| Button primary | 1 hành động | ≤ 4 từ | "Theo dõi xFinance" |
| Action chips | 2–3 phụ kiện liên hệ | ≤ 3 từ/chip | "Newsletter · Website · Lưu bài" |

**Quy tắc HTML bắt buộc:**
- `.s-cta .body` PHẢI có `padding: 0 0 24px` (padding-bottom > 0).
- `.btn-primary` dùng `display: table` + `white-space: nowrap`.
- KHÔNG có `<span class="deco">` hay `position:absolute` decorative trong `.slide`.
- KHÔNG đặt logo thứ 2 (`logo-tagline.png`) trong body — header đã đủ.
- Action chips dùng pseudo `::before` với content "·" thay vì `border-radius:50%`.

---

## Tổng kết focal anchor và alignment per slide

| Slide | Focal anchor | Body justify | Body align-items | Fill target |
|-------|--------------|--------------|------------------|-------------|
| 1 Cover | H1 + hl-box | center | (default stretch) | 65–75% |
| 2 Stat | big-num (200px) | center | flex-start | 60–70% |
| 3–7 Numbered | grey-box (italic) | center | (default stretch) | 65–75% |
| 8 Quote | quote-card centered | center | center | 60–70% |
| 9 Insight | insight line italic | center | center | 55–65% |
| 10 CTA | button + H2 italic | center | flex-start | 60–70% |

---

## Counter và progress mapping (tổng 10 slide)

| Slide | --p | Footer count |
|-------|------|--------------|
| 1 Cover | 10% | hidden hoặc "xFinance" |
| 2 Stat | 20% | (none) |
| 3 Num 01 | 30% | 03 / 10 |
| 4 Num 02 | 40% | 04 / 10 |
| 5 Num 03 | 50% | 05 / 10 |
| 6 Num 04 | 60% | 06 / 10 |
| 7 Num 05 | 70% | 07 / 10 |
| 8 Quote | 80% | (none) |
| 9 Insight | 90% | (none) |
| 10 CTA | 100% | (none) |

`<meta name="total-slides" content="10">` trong mọi slide.

---

## Self-audit bắt buộc (sau khi tạo 10 slides)

Per `_skills/carousel-qa.md § CHECK D`:

1. CHECK A bash anti-pattern grep — pass tất cả.
2. Render `slide-01.pdf`, `slide-05.pdf`, `slide-10.pdf` qua WeasyPrint.
3. `pdftoppm -jpeg -r 150` → PNG.
4. **Read 3 PNG files** — Claude phải nhìn ảnh thực sự.
5. 6-point composition checklist:
   - CENTER · FILL · ANCHOR · ALIGN · NO-OVERLAP · FONT
6. Fix CSS (ưu tiên `shared.css`) nếu fail → re-render → re-audit.
7. Lặp đến khi cả 3 slide PASS đủ 6 điểm.
