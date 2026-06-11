# WeasyPrint CSS Compatibility Guide
## Template: default · xFinance Carousel

> **Canonical:** `_skills/weasyprint-compat.md` — đây là bản copy tham khảo local của template.
> Khi tạo template mới: copy file này vào `_templates/carousel/[template]/WEASYPRINT.md`.

Dùng file này như **checklist bắt buộc** trước khi export PDF qua WeasyPrint.
Không cần UI/UX skill riêng — áp dụng đúng patterns dưới đây là đủ.

---

## 5 Lỗi phổ biến & Cách fix

### 1. `position: absolute` bên trong CSS Grid → element trở thành grid cell

**Triệu chứng:** Corner decoration / decorative span / `.deco` xuất hiện như text hoặc dòng kẻ trên slide; header bị đẩy xuống. Chữ "x" lớn xuất hiện đầu slide CTA.

**Nguyên nhân:** WeasyPrint không lấy `position:absolute` ra khỏi grid flow như browser — element trở thành grid cell thật sự.

**Fix:**
```css
/* shared.css — @media print */
.corner-tl,.corner-tr,.corner-bl,.corner-br,.deco { display: none !important; }
```
> ✅ Đã fix trong shared.css. Tất cả decoration elements tự ẩn khi export PDF.

**Quy tắc viết slide HTML:** Bất kỳ element decorative nào dùng `position:absolute` mà là con trực tiếp của `.slide` đều phải có class nằm trong danh sách `display:none` ở `@media print` trên.

---

### 2. `display: flex` cho counter `01 / 05` → "/" bị đẩy lên đỉnh số to

**Triệu chứng:** Trong PNG, dấu `/` và `05` của counter nhô lên gần đỉnh số `01` (dính sát phía trên), không nằm dưới đáy như HTML hiển thị.

**Nguyên nhân:** Khi parent có `display:flex` + font-size chênh lớn (120px vs 28px) + `line-height` ngắn (`.85`):
- `align-items:baseline` — WeasyPrint compute baseline sai hoàn toàn (đẩy text nhỏ lên top)
- `align-items:flex-end` — WeasyPrint align theo bottom của line-box (ngắn hơn glyph "01") → vẫn lệch
- Browser xử lý OK vì dùng glyph baseline thật, WeasyPrint thì không

**Fix — bỏ flex hoàn toàn, dùng inline tự nhiên:**
```css
/* ✅ ĐÚNG — inline baseline tự nhiên, WeasyPrint render chính xác */
.num-mark{
  font-size:120px;font-weight:800;line-height:1;
  letter-spacing:-.05em;color:var(--datnung);margin:0;
  white-space:nowrap;
}
.num-mark .of{
  font-size:28px;color:var(--muted);font-weight:600;
  letter-spacing:0;margin-left:6px;
  /* span inline mặc định — ngồi cùng baseline với text "01" của parent */
}

/* ❌ KHÔNG dùng — cả 2 đều vỡ trong WeasyPrint */
.num-mark{display:flex;align-items:baseline;gap:6px}
.num-mark{display:flex;align-items:flex-end;gap:6px}
```

**HTML giữ nguyên** (không cần wrap số to thêm span):
```html
<div class="num-mark">01<span class="of">/ 05</span></div>
```

**Lý do hoạt động:** Parent block container chứa inline content (text "01" + span `.of`). Cả 2 ngồi trong cùng line-box → baseline tự nhiên trùng nhau. WeasyPrint render inline baseline đáng tin (chỉ flex baseline mới buggy).

---

### 3. `display: inline-flex` / `width: fit-content` → stretch full block width

**Triệu chứng:** Button / badge chiếm toàn chiều ngang slide; text trong badge wrap thành 2 dòng.

**Nguyên nhân:** WeasyPrint render `inline-flex` như `block`.

**Fix:**
```css
/* Button / CTA — dùng display:table để shrink-wrap */
.btn-primary { display: table; white-space: nowrap; }  /* ✅ */
/* Badge / tag inline */
.ep { display: inline-block; white-space: nowrap; }    /* ✅ */
/* KHÔNG dùng: */
.btn { display: inline-flex; }       /* ❌ stretch */
.btn { width: fit-content; }         /* ❌ không support */
```

---

### 4. Thiếu `white-space: nowrap` trên text ngắn

**Triệu chứng:** Labels như "Sai lầm 01", "Bối cảnh", "Tài chính cá nhân" nhảy 2 dòng.

**Nguyên nhân:** WeasyPrint dùng font metrics khác (đặc biệt khi Google Fonts không load) → text wrap sớm hơn.

**Fix:**
```css
/* Luôn thêm white-space:nowrap cho: */
.s-head .topic { white-space: nowrap; }  /* ✅ đã có trong shared.css */
.label         { white-space: nowrap; }  /* ✅ số slide label */
.ep, .tag      { white-space: nowrap; }  /* ✅ badges */
.s-foot .name  { /* có thể wrap — OK */ }
```

---

### 5. Properties không support → WeasyPrint bỏ qua silently

| Property | WeasyPrint | Dùng thay |
|----------|-----------|-----------|
| `inset: 0` | ❌ | `top:0;right:0;bottom:0;left:0` |
| `place-items: center` | ❌ | `align-items:center; justify-content:center` |
| `isolation: isolate` | ❌ | Bỏ (chỉ là stacking context hint) |
| `width: fit-content` | ❌ | `display:table` hoặc `white-space:nowrap` |
| `display: grid` với `align-items:start` | ✅ partial | Test kỹ |

> **Google Fonts:** Load OK trên máy user có internet. Trong CI/sandbox (403) → fallback system font → text metrics khác → wrap khác. Nên test render trên máy local khi QA.

---

### 6. `display:flex; flex-direction:column` bên trong CSS Grid cell → chỉ render item đầu tiên

**Triệu chứng:** Slide có 3 cards dạng cột, chỉ hiện 1 card duy nhất.

**Nguyên nhân:** WeasyPrint không render đầy đủ `flex-direction:column` khi flex container nằm trong CSS Grid cell.

**Fix:**
```css
/* Dùng display:table + display:table-cell thay vì grid + flex-column */
.cards { display:table; width:100%; border-collapse:separate; border-spacing:14px 0; }
.card  { display:table-cell; vertical-align:top; }  /* ✅ */
/* KHÔNG dùng: */
.cards { display:grid; grid-template-columns:1fr 1fr 1fr; }  /* ❌ */
.card  { display:flex; flex-direction:column; }              /* ❌ trong grid cell */
```

---

### 7. Emoji / icon characters không render

**Triệu chứng:** Icon 🌐, 🔖, ✅, 📌 hiện ra ô vuông rỗng hoặc bị xóa.

**Nguyên nhân:** WeasyPrint sandbox không có emoji font (Noto Color Emoji, Segoe UI Emoji...).

**Fix:**
```html
<!-- KHÔNG dùng emoji: -->
<span class="ic">🌐</span>  <!-- ❌ -->

<!-- Dùng ASCII hoặc ký tự Unicode đơn giản: -->
<div class="ic-wrap">@</div>    <!-- ✅ newsletter -->
<div class="ic-wrap">W</div>    <!-- ✅ website -->
<div class="ic-wrap">+</div>    <!-- ✅ lưu bài -->
<span class="ic">✓</span>       <!-- ✅ checkmark (U+2713) -->
<span class="ic">✗</span>       <!-- ✅ cross (U+2717) -->
<span class="ic">·</span>       <!-- ✅ bullet (U+00B7) -->
```

---

### 8. Pseudo-element decoration — chọn cách phù hợp với loại element

**Phân biệt 2 trường hợp:**

**A. Vạch ngang ngắn (dash decoration cho eyebrow / label / tag):**

```css
/* ❌ KHÔNG dùng — pseudo-element box trống dễ bị stretch dọc trong WeasyPrint */
.label::before { content:""; width:20px; height:2px; background:var(--ngoc); }

/* ✅ DÙNG ký tự em dash thực */
.label::before { content:"—"; color:var(--ngoc); font-size:14px; line-height:1; flex-shrink:0; display:block; }
```

**Triệu chứng cũ:** Vạch ngang horizontal bị render thành thanh dọc nhỏ vì box trống `::before` với `width/height` cố định bị flex-parent stretch theo line-height của row.

**B. Bullet dot (round bullet trong list) — vẽ bằng `border` thay vì `background`:**

```css
/* ✅ DÙNG — pseudo box width:0 height:0 + border-radius — dot vẽ bằng border */
.s-cmp li::before {
  content:"";
  flex:none;
  display:block;
  width:0; height:0;
  border:4px solid currentColor;   /* dot 8×8 từ border 4px mỗi cạnh */
  border-radius:999px;
  margin-top:9px;
  align-self:flex-start;
}
/* Override màu khi cần: dùng border-color, KHÔNG background */
.s-cmp .col.bad li::before { border-color:var(--datnung); }
.s-cmp .col.good li::before { border-color:var(--ngoc); }

/* ❌ KHÔNG dùng background cho dot — PDF viewer render box bị stretch dọc */
.s-cmp li::before { width:6px; height:6px; border-radius:999px; background:currentColor; }  /* ❌ */

/* ❌ KHÔNG dùng ký tự "·" hay "•" — fallback font không có Plus Jakarta Sans → render vạch dọc */
.s-cmp li::before { content:"·"; font-size:20px; }   /* ❌ */
.s-cmp li::before { content:"•"; font-size:14px; }   /* ❌ */
```

**C. Vạch ngang ngắn cho element thực (`.by .ln` v.v.) — dùng `border-top` không `background`:**

```css
/* ✅ DÙNG — element height:0 + border-top vẽ vạch chính xác */
.s-quote .by .ln {
  display:block;
  flex-shrink:0;
  width:60px; height:0;
  border-top:2px solid var(--ngoc);
  align-self:center;
}

/* ❌ KHÔNG dùng background cho vạch — PDF viewer có thể stretch element dọc */
.s-quote .by .ln { width:60px; height:2px; background:var(--ngoc); }  /* ❌ */
```

**Tóm tắt — quy tắc vẽ shape decoration trong WeasyPrint:**

| Loại shape | Approach an toàn nhất |
|-----------|----------------------|
| Vạch ngang ngắn trong eyebrow/label | `content:"—"` em dash character |
| Vạch ngang trong element thực | `height:0; border-top:Npx solid` |
| Bullet dot tròn | `width:0; height:0; border:Npx solid; border-radius:999px` |
| Override màu shape | dùng `border-color`, KHÔNG `background` |

**Lý do chung:** WeasyPrint xuất PDF vector. Box với `width × height + background` đôi khi bị stretch theo line-height của parent flex/grid khi viewer render lại path. Shape vẽ bằng `border` luôn cố định kích thước theo border width — rendering ổn định trên mọi PDF viewer.

---

### 9. `display:flex; flex-direction:row` bên trong CSS Grid cell → các cột chồng lên nhau

**Triệu chứng:** Slide có layout 2 cột (stat left + content right) — text của cột phải đè lên cột trái, không có gutter.

**Nguyên nhân:** WeasyPrint không xử lý `flex-direction:row` đúng cách khi flex container là con của CSS Grid cell. Các flex item render tại cùng vị trí.

**Fix:**
```css
/* Dùng display:table + display:table-cell cho layout ngang */
.stat-body  { display:table; width:100%; padding:0; }
.stat-left  { display:table-cell; vertical-align:middle; width:220px; white-space:nowrap; }
.stat-sep   { display:table-cell; vertical-align:middle; width:52px; }  /* spacer */
.stat-right { display:table-cell; vertical-align:middle; }  /* ✅ */
/* KHÔNG dùng: */
.stat-body  { display:flex; flex-direction:row; align-items:center; gap:52px; }  /* ❌ */
```

> Quy tắc vàng: **Mọi layout 2+ cột trong slide đều phải dùng `display:table + table-cell`**, không phải flex-row hay grid.

---

### 10. `.hl` (highlight span) dùng `display:inline-block` trong h1/h2 lớn → wrap thành block riêng

**Triệu chứng:** Chữ highlight bị tách dòng, tạo block vàng chiếm toàn chiều rộng; text xung quanh bị đẩy xuống → layout vỡ, empty space lớn.

**Nguyên nhân:** `display:inline-block` trong WeasyPrint có thể bị xử lý như block khi nằm giữa một dòng dài. Khi dòng không đủ rộng, toàn bộ `inline-block` element nhảy xuống dòng mới và chiếm full width.

**Fix:**
```css
/* Dùng display:inline (đã là default trong shared.css — KHÔNG override) */
.hl { background:var(--nghe); color:var(--than); padding:2px 12px; border-radius:2px; }
/* KHÔNG thêm: */
.s-cover h1 .hl { display:inline-block; }  /* ❌ — gây block wrapping */
```

**Quy tắc copywriting kèm theo (bắt buộc):**
- `.hl` chỉ dùng cho tối đa 2-3 từ
- Nên đặt `.hl` ở **cuối dòng** hoặc **đầu dòng sau `<br/>`** — không đặt giữa dòng dài
- Tổng ký tự mỗi dòng h1 (90px, 1:1 canvas): ≤ 12 ký tự Latin / ≤ 10 ký tự có dấu tiếng Việt
- Kiểm tra: mỗi `<br/>` trong h1 phải có ≤ 14 ký tự ở mỗi phía

**Lỗi liên quan — descender dòng trên lẹm vào ô highlight (§10b):**

**Triệu chứng:** Chữ cái có descender (g, p, q, y...) ở dòng ngay TRÊN `.hl` bị lẹm xuống đè vào cạnh trên của ô highlight vàng — nhìn thấy rõ ở cả browser lẫn PDF.

**Nguyên nhân:** Hai yếu tố kết hợp:
1. `display:inline-block` trên `.hl` tạo ra box cao hơn line-box của parent → top edge box xuất hiện ngay sát dòng trên
2. `line-height` h1 quá tight (1.14) → không đủ khoảng cách để descender không xâm phạm dòng kế

**Fix đã áp dụng trong shared.css (2026-05-07):**
```css
/* h1 line-height tăng từ 1.14 → 1.26 để có khoảng cách đủ */
.s-cover h1 { line-height: 1.26; }

/* .hl KHÔNG dùng display:inline-block — giữ inline (default) */
.s-cover h1 .hl { background:var(--nghe); color:var(--than); padding:6px 16px 8px; border-radius:4px; }
/* KHÔNG thêm: display:inline-block; line-height:1.16; → ❌ gây lẹm descender */
```

**Quy tắc phòng ngừa:**
- `.s-cover h1` KHÔNG được có `line-height < 1.22`
- Mọi `.hl` trong h1 KHÔNG được có `display:inline-block`
- Nên thêm `<br/>` trước `.hl` để đảm bảo nó luôn bắt đầu dòng mới, giúp không có descender dòng trên

---

### 11. `display:table` layout ngang (2 cột) → WeasyPrint clip nội dung cột phải

**Triệu chứng:** Stat slide có big number bên trái + nội dung bên phải — cột phải chỉ hiện 1-2 dòng đầu, phần còn lại bị cắt mất.

**Nguyên nhân:** WeasyPrint tính chiều cao table row từ left cell, không phải max của tất cả cells. Nếu right cell cao hơn left cell → phần vượt quá bị clip.

**Fix:**
```css
/* ✅ Vertical stacked — WeasyPrint safe (cùng pattern với s-num slides 03-07) */
.s-stat .body { padding:0; display:flex; flex-direction:column; justify-content:center; gap:18px; }
.s-stat .num-mark { display:flex; align-items:flex-end; gap:10px; } /* số lớn + /10 */
/* KHÔNG dùng: */
/* .s-stat .stat-row { display:table; width:100%; }          ❌ row-height bug */
/* .s-stat .left { display:table-cell; vertical-align:middle; } ❌ */
/* .s-stat .right { display:table-cell; vertical-align:middle; } ❌ */
```

> **Quy tắc:** Horizontal `display:table` chỉ an toàn khi LEFT cell là cell CAO NHẤT (height ≥ right cell). Nếu right cell có nhiều nội dung hơn → dùng vertical stacked layout.

---

### 12. Slide-specific `.body` CSS override PHẢI khai báo rõ flex properties

**Triệu chứng:** Nội dung slide bị dồn lên đầu thay vì được căn giữa dọc, dù shared.css đã có `justify-content:center` cho `.body`.

**Nguyên nhân:** WeasyPrint không cascade đúng khi slide-specific rule override `.body` mà không re-declare `display:flex;flex-direction:column;justify-content:center`. Browser cascade đúng, nhưng WeasyPrint thì không.

**Fix:**
```css
/* LUÔN khai báo đủ trong slide-specific rule: */
.s-xxx .body {
  padding:0;
  display:flex;          /* ← bắt buộc, không chỉ kế thừa từ shared.css */
  flex-direction:column; /* ← bắt buộc */
  justify-content:center; /* ← bắt buộc */
  gap:18px;
}
/* KHÔNG làm thế này (dù shared.css đã define): */
.s-xxx .body { padding:0; gap:18px; }  /* ❌ — flex properties không cascade đúng */
```

> ✅ Kiểm tra: slides 03-07 (s-num) hoạt động đúng vì chúng LUÔN khai báo rõ `display:flex;flex-direction:column;justify-content:center` trong slide CSS.

---

## Checklist trước khi export PDF

Khi viết CSS cho slide mới, check các điểm sau:

- [ ] Corner decorations là `span` → đã có `display:none` trong `@media print` của shared.css
- [ ] Progress bar `::after` → đã có `display:none` trong `@media print` của shared.css
- [ ] Num-mark dùng `align-items:flex-end` (không phải `baseline`)
- [ ] Label / badge / eyebrow / topic có `white-space:nowrap`
- [ ] Button / CTA dùng `display:table` (không phải `inline-flex`)
- [ ] Slide-specific `.body` CSS LUÔN khai báo rõ `display:flex;flex-direction:column;justify-content:center` — không chỉ override padding/gap
- [ ] Stat/context slides: dùng **vertical stacked layout** (không dùng horizontal table vì WeasyPrint clip right cell)
- [ ] KHÔNG dùng `transform:translateY()` để điều chỉnh vertical position của `.body` — gây lệch center
- [ ] `.hl` highlight span KHÔNG có `display:inline-block` — để `inline` (default) để tránh block wrapping
- [ ] Không dùng emoji — thay bằng ASCII hoặc ký tự Unicode đơn giản
- [ ] Bullet `::before` dùng ký tự thực (`·`, `–`) — không dùng `border-radius:50%` trên pseudo
- [ ] Không dùng `inset`, `place-items`, `fit-content`, `isolation`
- [ ] Source/caption text có `letter-spacing` nhỏ (≤ `.08em`) — không uppercase nếu có số/dấu
- [ ] Body/desc paragraph dùng `var(--body-text)` (82% opacity) — không dùng `var(--muted)` (62%) cho text chính

---

## Pattern chuẩn cho các slide type

### Numbered slide (Sai lầm / Nguyên tắc / Bước)
```css
.s-num .label {
  font-size:13px; letter-spacing:.20em; text-transform:uppercase;
  color:var(--ngoc); font-weight:700;
  display:flex; align-items:center; gap:12px;
  white-space:nowrap;                    /* ← bắt buộc */
}
.s-num .num-mark {
  font-size:120px; font-weight:800; line-height:.85;
  color:var(--datnung);
  display:flex; align-items:flex-end; gap:6px;  /* ← flex-end, không phải baseline */
}
```

### Badge / tag inline (Cover slide)
```css
.ep {
  display:inline-block;                  /* ← không phải inline-flex */
  white-space:nowrap;                    /* ← bắt buộc */
  font-size:12px; letter-spacing:.16em;  /* ← letter-spacing nhỏ để không wrap */
  border:1px solid var(--line-2); padding:6px 12px; border-radius:3px;
}
```

### CTA Button
```css
.btn-primary {
  display:table;                          /* ← shrink-wrap, không phải inline-flex */
  white-space:nowrap;
  background:var(--datnung); color:var(--than);
  padding:18px 28px; border-radius:6px;
}
```

### Stat / Context slide — vertical stacked (Big number + content)
```css
/* Vertical stacked — WeasyPrint safe, tránh horizontal table clip bug */
.s-stat .body      { padding:0; display:flex; flex-direction:column; justify-content:center; gap:18px; }
.s-stat .label     { font-size:13px; letter-spacing:.20em; text-transform:uppercase;
                     color:var(--ngoc); font-weight:700;
                     display:flex; align-items:center; gap:12px; white-space:nowrap; }
.s-stat .num-mark  { font-size:130px; font-weight:800; line-height:.82; color:var(--datnung);
                     display:flex; align-items:flex-end; gap:10px; }
.s-stat .of        { font-size:50px; font-weight:800; color:var(--datnung); margin-bottom:6px; }
.s-stat h2         { font-size:40px; font-weight:800; line-height:1.18; color:var(--kem); margin:0; }
.s-stat .body-text { font-size:19px; line-height:1.65; color:var(--body-text); margin:0; }
.s-stat .src       { font-size:12px; color:var(--muted-2); font-weight:500; letter-spacing:.06em; }
/* HTML structure: */
/* <div class="body">
     <div class="label">...</div>
     <div class="num-mark">7<span class="of">/10</span></div>
     <h2>...</h2>
     <p class="body-text">...</p>
     <div class="src">...</div>
   </div> */
```

### Vertical centering trong slide — quy tắc vàng
```css
/* shared.css .body đã có justify-content:center — KHÔNG override, KHÔNG dùng transform */
/* LUÔN khai báo đủ flex properties trong slide-specific CSS: */
.s-xxx .body {
  padding: 0;
  display: flex;           /* ← bắt buộc khai báo rõ */
  flex-direction: column;  /* ← bắt buộc khai báo rõ */
  justify-content: center; /* ← bắt buộc khai báo rõ */
  gap: 18px;
}
/* KHÔNG dùng: */
/* .s-xxx .body { transform: translateY(-20px); }  ← ❌ phá vỡ center alignment */
/* .s-xxx .body { display: table; }                ← ❌ grid 1fr không truyền height xuống table */
/* .s-xxx .body { padding:0; gap:18px; }           ← ❌ thiếu flex props → WeasyPrint không center */
```

### Highlight span trong title
```css
/* KHÔNG thêm display:inline-block — giữ default inline */
.hl { background:var(--nghe); color:var(--than); padding:2px 12px; border-radius:2px; font-weight:800; }
/* Đặt .hl ở cuối dòng hoặc đầu dòng sau <br/>, không giữa dòng dài */
```

### Compare grid (slide 09 pattern)
```css
.grid {
  display:grid; grid-template-columns:1fr 1fr;
  gap:20px;
  align-items:start;                      /* ← quan trọng: cols không stretch */
}
```
---

## CSS Grid Vertical Alignment (Stat/CTA layout)

**Vấn đề:** Slides dùng `display:grid;align-items:center` bên trong một `1fr` grid row — WeasyPrint không support `align-content:center` hoặc `align-self:center` trên grid tracks → content không vertically centered hoàn hảo.

**Thực tế đo lường:** Content lệch ~30-60px dưới điểm center lý tưởng trong một 1080px slide. Sai số này là chấp nhận được (~5% of slide height).

**Root cause đã xác định:**
- WeasyPrint áp dụng `@media print` từ external CSS ✅
- `height:100%` trên grid item hoạt động ✅
- `background:red!important` override works ✅
- Nhưng `align-content:center`, `align-self:center`, `display:flex!important` đều không thay đổi vị trí content → WeasyPrint bỏ qua alignment properties trên nested CSS Grid trong print mode

**Workaround được áp dụng:** `align-self:center!important` trong `@media print` + `pages[0]` merge strategy để đảm bảo chỉ lấy 1 page per slide. Kết quả: content visible và 2-column layout đúng — không hoàn hảo nhưng chấp nhận được.

**Lưu ý cho future carousel:** Nếu cần vertical centering tuyệt đối cho stat/CTA layout, cần dùng WeasyPrint-safe pattern: `display:table;height:var(--body-h)` ở outer wrapper + `display:table-cell;vertical-align:middle` ở inner — với `--body-h` được tính explicit, KHÔNG dùng `1fr`.
