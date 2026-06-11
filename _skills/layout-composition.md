# Layout Composition — xFinance Carousel

> Tư duy bố cục cho mọi template / slide. Đọc TRƯỚC khi viết CSS layout
> (`.body`, `.s-cover`, `.s-content`, `.s-cta`...). Áp dụng SONG SONG với
> `typography-hierarchy.md` (typography quản chữ — file này quản không gian).

---

## Triết lý

> **Một slide đẹp = nội dung được đặt vào đúng vùng + cân bằng thị giác.**
> Typography hỏng có thể che được. Bố cục hỏng (text dồn lên top, lệch trái,
> đè nhau) thì người xem nhận ra trong 0.3 giây.

Khi viết CSS slide, luôn theo thứ tự:

```
1. Chia grid (file này)
2. Đặt vùng zone (file này)
3. Chọn focal anchor (file này)
4. Áp typography (typography-hierarchy.md)
5. WeasyPrint-safe (weasyprint-compat.md)
6. Render → đọc PNG → tự audit (file này — § Self-Audit)
```

Bỏ bước 1–3 = ra slide như editorial cũ.

---

## 1. Grid System — 12×12

Mọi slide xFinance dùng grid **12 cột × 12 hàng** trên vùng làm việc.

### 1.1. Vùng làm việc (working area)

| Slide format | Padding slide | Working area | Cell size (≈) |
|--------------|---------------|--------------|---------------|
| 1:1 — 1080×1080 | `64px 80px 56px` | 920 × 960 | 76 × 80 |
| 4:5 — 1080×1350 | `64px 80px 64px` | 920 × 1222 | 76 × 102 |
| 16:9 — 1920×1080 | `80px 110px 70px` | 1700 × 930 | 142 × 78 |
| 9:16 — 1080×1920 | `64px 80px 64px` | 920 × 1792 | 76 × 149 |

> Padding nằm trong CSS của `.slide` — **không thay đổi**. Working area là phần còn lại.

### 1.2. Mọi block phải snap vào cell

- Một block có thể chiếm `n` cột × `m` hàng (vd 8 cột × 4 hàng).
- Không có block nào "lơ lửng" giữa các cell.
- Khi mô tả slide trong `structure.md`, ghi rõ: "khối chính chiếm cột 2–11, hàng 4–8".

### 1.3. Gutter

- Ngang: gap giữa cột = **24px** (hoặc 16px cho 4:5/9:16).
- Dọc: gap giữa block trong body = **20–32px** (xem § 4 Spacing).

---

## 2. Vertical Zones — 3 dải bắt buộc

Mọi slide có **đúng 3 zone** theo trục dọc (đã được `.slide { grid-template-rows: auto 1fr auto }` enforce):

```
┌──────────────────────────────────┐ y = 0
│  HEADER  (logo + topic)          │  ~ 12% chiều cao slide
├──────────────────────────────────┤ y ≈ 144 (slide 1080)
│                                  │
│  BODY    (focal content)         │  ~ 70–76% chiều cao slide
│                                  │
├──────────────────────────────────┤ y ≈ 960
│  FOOTER  (brand · progress · #)  │  ~ 6% chiều cao slide
└──────────────────────────────────┘ y = 1080
```

### 2.1. Header zone — y: 0 → 12%
- Chỉ chứa: logo (trái) + topic label (phải).
- **Không** đặt nội dung carousel ở đây.

### 2.2. Body zone — y: 12% → 90%
- Đây là vùng kể chuyện. Chiếm 70–76% chiều cao.
- Mặc định body **`justify-content: center`** — mọi slide-type override `.body`
  phải giữ `center` trừ khi có lý do thiết kế (xem § 5).

### 2.3. Footer zone — y: 90% → 100%
- Brand name (trái) + progress (giữa) + counter (phải).
- Border-top mảnh, font 11–13px.

---

## 3. Body — Quy tắc CỨNG

### 3.1. Mặc định: căn giữa cả 2 trục

```css
.s-[type] .body {
  display: flex;
  flex-direction: column;
  justify-content: center;   /* trục dọc — center là default */
  align-items: stretch;       /* hoặc center cho block cố định width */
  gap: 24–32px;
  padding: 0;                 /* padding đã ở .slide */
}
```

**Sai lầm chính** trong editorial cũ: `justify-content: flex-start; padding-top: 48px`
→ nội dung bị dồn lên top, half body trống.

### 3.2. Khi nào ĐƯỢC dùng `flex-start`

Chỉ khi có **counterweight** (đối trọng) ở phần dưới body:
- Ghost number background to mờ (vd `.bg-num` chiếm 60% chiều cao)
- Decorative anchor (mũi tên to, ảnh full-width)
- Action card / sidebar bám đáy

Nếu không có counterweight → BẮT BUỘC `center`.

### 3.3. Fill ratio — content phải chiếm ≥ 55%

Tổng chiều cao các direct child trong `.body` (kể cả gap) phải **≥ 55%** chiều cao body.

| Tỉ lệ fill | Nhận định |
|-----------|-----------|
| < 50% | ❌ Slide rỗng — thêm decorative element hoặc tăng size title/body |
| 55–80% | ✅ Cân bằng |
| 80–95% | ⚠️ Đông — kiểm tra có cần cắt copy không |
| > 95% | ❌ Ngột ngạt — chắc chắn phải cắt copy |

Cách ước tính nhanh: cộng font-size × line-height của mọi text + height của mọi block + gap. So với chiều cao body (≈ 720px cho slide 1:1).

### 3.4. Negative margin — bị cấm trừ khi khai báo

```css
.grey-box { margin: 0 -32px; }   /* ❌ tràn ra khỏi body padding */
```

Negative margin chỉ được dùng khi:
- Đã ghi rõ trong `structure.md` của template ("box phá vỡ padding sang 2 mép")
- Slide-type CSS có override `padding: 0` cho `.body` để bù

Mặc định: tất cả block phải nằm trong padding của `.slide`. Tràn = WeasyPrint clip hoặc gây bố cục lệch.

### 3.5. Max-width cho block tâm

Block căn giữa (text-align center, max-width set) phải khai `align-self: center`:

```css
.body-text {
  max-width: 780px;
  align-self: center;   /* ← bắt buộc khi có max-width */
  text-align: center;
}
```

Nếu thiếu `align-self`, block sẽ stretch full width và `text-align:center` chỉ căn text → nhìn vẫn lệch khi line ngắn.

---

## 4. Spacing System

### 4.1. Vertical rhythm trong body

| Khoảng cách | Slide 1:1 (1080) | Slide 16:9 |
|------------|------------------|------------|
| Eyebrow → title | 16–24px | 24–32px |
| Title → body | 20–32px | 24–36px |
| Body → fix-box / CTA | 28–40px | 32–48px |
| Bullet / item | 12–18px | 16–24px |

Dùng `gap` trên flex-column thay vì `margin-bottom` trên từng child — nhất quán hơn.

### 4.2. Padding nội bộ block

| Block type | Padding | Ghi chú |
|-----------|---------|---------|
| Highlight box (`.grey-box`, `.fix-box`) | `24–36px 32–48px` | Top-bottom < left-right để không "thùng" |
| Quote card | `40–48px 48–56px` | To hơn vì là focal |
| Button / CTA | `16–20px 24–32px` | Letter-spacing ≥ .14em |
| Tag / eyebrow | `4–6px 12–16px` | Nếu có background |

---

## 5. Focal Anchor — Mỗi slide-type có 1 trục neo

| Slide type | Focal anchor | Vị trí | Trọng lượng |
|-----------|--------------|--------|-------------|
| **Cover** | Title H1 | Cột 1–10, hàng 4–8 (center-left) | Cao nhất — title size 80–96px |
| **Stat** | Số to (480px) | Cột 1–6, hàng 3–9 | Cực cao — chiếm 50% width |
| **Numbered** | Ghost number nền + small num accent | Ghost: cột 7–12 toàn body; accent: cột 1–2 hàng 4–5 | Cao + duplicate (nền + foreground) |
| **Quote** | Quote-card (center) | Cột 2–11, hàng 3–9 | Trung tâm tuyệt đối — căn giữa cả 2 trục |
| **Compare** | 2 cột song song | Cột 1–6 vs 7–12, hàng 3–10 | Cân bằng đối xứng |
| **Checklist** | List items | Cột 2–11, hàng 3–10 | Phân bố đều — line-height 1.5 |
| **CTA** | Button (Đất nung) | Cột 4–9, hàng 7–9 (center-bottom) | Cao + visual contrast |

### 5.1. Quy tắc 1 focal per slide

- Mỗi slide chỉ có **một** anchor. Nhiều hơn → người xem mất phương hướng.
- Nếu cần highlight 2 thứ → 1 là focal (size to), 1 là sub-focal (size = 60% focal).

### 5.2. Eye-flow

Người Việt đọc trái → phải, trên → dưới. Slide phải hỗ trợ:

```
Cover/Numbered:  Title (top-left)  →  Body (mid)  →  CTA arrow (bottom-right)
Quote:           Mark "  (top)     →  Quote (center)  →  Author (bottom-center)
CTA:             Eyebrow (top)     →  H2 (mid)    →  Button (bottom-center)
```

Tránh đặt focal anchor ở góc phải-trên (mắt rời slide trước khi đọc xong).

---

## 6. Centering Hierarchy — Khi nào dùng cách nào

Hệ thống editorial cũ trộn lẫn 3 cách → bố cục không đoán được. Quy tắc:

| Cần căn | Dùng | Ví dụ |
|---------|------|-------|
| Text trong block | `text-align: center` | `.body-text { text-align: center }` |
| Block fixed-width trong parent | `align-self: center` (flex) hoặc `margin: 0 auto` (block) | `.quote-card { max-width: 720px; align-self: center }` |
| Block trong cell (grid) | `place-self: center` (chỉ 1 cell) | grid item |
| Toàn bộ body theo trục dọc | `.body { justify-content: center }` | mọi slide-type |
| Toàn bộ body theo trục ngang | `.body { align-items: center }` | khi mọi child cùng width logic |

**Không bao giờ dùng cùng lúc** `text-align:center` + `align-items:center` + `justify-content:center` mà không hiểu cái nào quản gì.

---

## 7. Text Density — Caps theo dòng

Khi font wrap nhiều dòng, cần biết max characters/dòng để **không wrap đúng** = giảm size hoặc cắt copy.

| Element | Font size | Max chars/line | Khi vượt |
|---------|-----------|----------------|----------|
| H1 Cover | 96px / Plus Jakarta 800 | **18 chars** | Giảm xuống 80px hoặc cắt copy |
| H1 numbered | 72px | **22 chars** | Giảm 64px hoặc cắt |
| H2 / sub-heading | 56–64px | **24–28 chars** | Giảm 8px |
| Body text | 22px / 1.6 lh | **56 chars** | Giảm 20px |
| Quote (serif) | 44–56px | **30–36 chars** | Giảm 8px |
| Eyebrow | 13px / .22em letter-spacing | **40 chars** | Cắt — không bao giờ wrap eyebrow |

> Số chars là **tiếng Việt có dấu**. ASCII English có thể nhiều hơn ~10%.

### 7.1. Tránh wrap orphan

Nếu line cuối chỉ có 1–2 từ → cắt copy hoặc dùng `<br>` cố ý đẩy thêm 1 từ xuống.

---

## 8. Self-Audit Loop — BẮT BUỘC sau render

Đây là rule quan trọng nhất. Sau mỗi lần render PDF → PNG, AI **bắt buộc** đọc lại file PNG.

### 8.1. Quy trình

```
1. Render PDF: weasyprint slide-NN.html → slide-NN.pdf
2. Convert PNG: pdftoppm -jpeg -r 150 slide-NN.pdf
3. Read tool: Read("output/slides/slide-01.jpg")  ← thực sự xem ảnh
4. Read tool: Read("output/slides/slide-05.jpg")  ← slide giữa (numbered)
5. Read tool: Read("output/slides/slide-NN.jpg")  ← slide cuối (CTA)
6. Tự đánh giá theo 6-point checklist (§ 8.2)
7. Nếu fail bất kỳ điểm nào → fix CSS shared.css hoặc slide-specific style → re-render
8. Lặp đến khi cả 3 slide pass
```

> **Không** có shortcut. Nếu không Read PNG = không có visual QA = ra editorial xấu.

### 8.2. 6-point Composition Checklist

Đối chiếu mỗi PNG đã đọc với 6 câu sau. Trả lời **PASS / FAIL** cho từng câu:

```
□ 1. CENTER  — Khối nội dung chính có nằm ở trung tâm (theo trục dọc)
              của body zone không? Có khoảng trống bằng nhau ở
              trên-dưới không?

□ 2. FILL    — Body zone có được lấp đầy 55–85% không? (không trống
              hơn nửa, không ngột ngạt sát mép)

□ 3. ANCHOR  — Có đúng 1 focal element rõ ràng nhất không? Mắt nhìn
              vào slide có dừng ở 1 chỗ trước không?

□ 4. ALIGN   — Mọi block có thẳng hàng (left edge / center axis) không?
              Có block nào lệch trái/phải bất thường không?

□ 5. NO-OVERLAP — Có text nào đè lên text khác, text đè lên
              decorative element, hoặc block tràn ra ngoài slide
              boundary không?

□ 6. FONT    — Font có render đúng không? (heading serif đúng dáng,
              body sans đúng dáng — không bị fallback Times/Arial)
```

Nếu có 1 FAIL → fix → re-render → audit lại. **Không báo "xong" với user khi còn FAIL.**

### 8.3. Cách fix khi FAIL điểm nào

| Fail | Cách fix |
|------|---------|
| 1. CENTER fail | Đổi `justify-content: flex-start` → `center`. Kiểm tra `padding-top` không vượt 24px. |
| 2. FILL fail (rỗng) | Tăng font-size title +8–16px, hoặc thêm body text, hoặc thêm decorative element (rule line, ghost number). |
| 2. FILL fail (ngột ngạt) | Cắt copy 20–30%, giảm font-size body 2px, tăng `gap` 8px. |
| 3. ANCHOR fail | Phóng to focal element +20%, thu nhỏ phần còn lại 10%. |
| 4. ALIGN fail | Tìm element có `margin-left` lẻ, đổi sang grid hoặc flex. Check `align-self`. |
| 5. OVERLAP fail | Thêm `gap` hoặc `margin`. Kiểm tra `position:absolute` có chồng lên element flow không. |
| 6. FONT fail | Cài font local (xem `_skills/weasyprint-compat.md` § Font), hoặc accept fallback và đổi serif → sans. |

---

## 9. Anti-patterns — Đã thấy trong editorial cũ, KHÔNG lặp lại

```css
/* ❌ Sai 1: justify-content flex-start không có counterweight */
.s-cover .body { justify-content: flex-start; padding-top: 48px; }

/* ✅ Đúng 1 */
.s-cover .body { justify-content: center; gap: 32px; padding: 0; }


/* ❌ Sai 2: negative margin tràn padding */
.s-content .grey-box { margin: 0 -32px; }
.s-content .body { padding: 0; }   /* không bù */

/* ✅ Đúng 2 — nếu thực sự cần phá padding */
.s-content .body { padding: 0 -32px; }   /* override padding của body */
.s-content .grey-box { margin: 0; }


/* ❌ Sai 3: max-width không có align-self */
.body-text { max-width: 780px; text-align: center; margin: 48px 0; }

/* ✅ Đúng 3 */
.body-text {
  max-width: 780px;
  align-self: center;
  text-align: center;
}


/* ❌ Sai 4: body chỉ có 1 child + flex justify-center → child stretch */
.s-quote .body { display: flex; justify-content: center; }
.s-quote .quote-card { /* không có max-width → stretch full → text-align:center vô nghĩa */ }

/* ✅ Đúng 4 */
.s-quote .body { display: flex; justify-content: center; align-items: center; }
.s-quote .quote-card { max-width: 720px; align-self: center; }
```

---

## 10. Checklist khi viết slide-specific CSS

Mỗi `.s-[type] .body` rule mới, kiểm tra:

```
[ ] Có display: flex + flex-direction: column
[ ] justify-content: center (trừ khi có counterweight rõ ràng)
[ ] gap > 0 (không phải margin trên từng child)
[ ] padding = 0 (đã có padding trên .slide), trừ khi cần phá
[ ] Không margin: 0 -Npx trừ khi đã document trong structure.md
[ ] Mọi block có max-width đều có align-self: center
[ ] Tổng fill ratio ước tính ≥ 55%
[ ] Đã chọn focal anchor cho slide-type này
```

---

## 11. Tích hợp với các skill khác

```
build-template.md     → khi tạo template mới: theo § 1–7 file này
typography-hierarchy.md → áp size/weight SAU khi đã chốt grid/zone
weasyprint-compat.md  → CSS rules tương thích — đọc song song
carousel-qa.md        → CHECK D = chạy § 8 file này
```

Khi mâu thuẫn:
- Composition (file này) **thắng** Typography khi cần co font để đạt fill ratio.
- WeasyPrint compat **thắng** mọi thứ — không có composition đẹp nào nếu PDF render hỏng.
