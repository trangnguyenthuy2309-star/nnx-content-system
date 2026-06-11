# build-template — Tạo Template Carousel Mới

> Dùng khi user cung cấp reference images (Canva, Figma, ảnh chụp...) và muốn build
> một HTML template mới trong hệ thống xFinance.
> Sản phẩm: thư mục `_templates/carousel/[id]/` đầy đủ, đăng ký vào INDEX.md.

---

## Khi nào dùng

- User cung cấp reference images + yêu cầu "build template từ ảnh này"
- User muốn tạo style carousel mới (light, dark, minimal, bold...)
- Sau khi có template mới → làm proof-of-concept carousel để verify

---

## Đầu vào yêu cầu

| Đầu vào | Bắt buộc | Ghi chú |
|---------|----------|---------|
| Reference images | Có | Tối thiểu 3 slides để đủ pattern |
| Template ID | Không | Claude tự đặt từ style: `editorial`, `bold`, `minimal`... |
| Palette source | Không | Mặc định: xFinance palette từ `_brand/brand-guidelines.md` |
| Số slide | Không | Mặc định: 10 (theo default template) |

---

## Bước 0 — Đọc Brand + Layout Context

```
_brand/brand-guidelines.md       → palette, font, logo mapping
_skills/layout-composition.md    → grid 12×12, vertical zones, focal anchor (BẮT BUỘC)
_skills/typography-hierarchy.md  → hệ tầng element + size
_skills/weasyprint-compat.md     → anti-patterns phải tránh
```

Đọc trước — mọi CSS variable, logo reference phải khớp brand; mọi `.body` rule
phải tuân `layout-composition.md` (mặc định `justify-content: center`,
fill ratio ≥ 55%, focal anchor rõ ràng).

---

## Bước 1 — Phân tích Reference Images

Nhìn qua **tất cả** ảnh ref, ghi nhận:

### 1A. Design DNA — 6 điểm cần xác định

| Điểm | Câu hỏi | Ví dụ |
|------|---------|-------|
| **Background mood** | Sáng hay tối? Warm hay cool? | Light `#FAF6F0` / Dark `#2D2A26` |
| **Typography** | Font heading là serif hay sans? Italic? | Cormorant Garamond italic |
| **Signature element** | Element đặc trưng nhất là gì? | Grey box, big number, color stripe |
| **Color roles** | Màu nào là accent, background, text? | `#C9572C` accent, `#E2D9CE` grey box |
| **Layout pattern** | Slides có cùng grid không? | Header/body/footer cố định |
| **Mood** | Editorial, energetic, minimal, data-heavy? | Editorial = formal, serif, breathing room |

### 1B. Slide-by-slide scan

Với mỗi slide ref, ghi:
- Slide type: Cover / Stat / Numbered / Quote / Compare / CTA
- Elements thấy: text zones, decorative boxes, icons, numbers
- Khoảng cách ước tính: padding, gap, font size tương đối

### 1C. Quyết định: Adapt hay Create

- **Adapt** — dùng layout ref làm khung, thay bằng xFinance palette + font
- **Create** — lấy mood/signature element, còn lại theo xFinance system

> Luôn dùng **xFinance palette** (từ `_brand/brand-guidelines.md`) — không copy màu nguyên bản từ ref nếu không khớp brand.

---

## Bước 2 — Định nghĩa Template

### 2A. Đặt Template ID

Format: chữ thường, gạch ngang, mô tả style.
```
editorial    → light bg, serif heading
bold-dark    → dark bg, large typography
minimal      → maximum whitespace, mono-color
data-first   → stat/chart heavy
```

### 2B. Tạo CSS Variables

Mọi template phải có file `assets/shared.css` riêng với `:root` block đầy đủ.

**Quy tắc đặt tên variable:**

```css
:root {
  /* ── Dimensions (bắt buộc) ── */
  --slide-w: 1080px;
  --slide-h: 1080px;

  /* ── Background ── */
  --bg: [màu nền chính];           /* tên gợi nhớ: --than / --bg / --white... */
  --bg-2: [màu nền thứ cấp];

  /* ── Text ── */
  --text: [màu text chính];
  --text-2: [màu text muted];

  /* ── Accent (lấy từ xFinance brand) ── */
  --accent: #C9572C;               /* Đất nung — accent chính */
  --accent-2: #2A8A7F;             /* Ngọc — accent phụ */

  /* ── Signature element ── */
  --[tên-element]: [màu];          /* vd: --grey-box: #E2D9CE */

  /* ── Lines / dividers ── */
  --line: rgba(...,.12);

  /* ── Typography ── */
  --font-serif: 'Tên Font Serif', fallback, serif;   /* nếu dùng serif */
  --font-sans: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
}
```

**Nguyên tắc:**
- Luôn có ít nhất `--accent` từ brand — không thay bằng màu ref
- Background trên `--bg` phải contrast rõ với `--text` (ratio ≥ 4.5:1)
- `--line` luôn có alpha channel (rgba), không solid color
- Nếu template có serif heading: định nghĩa `--font-serif`

### 2C. Xác định Signature Element

Mỗi template cần có 1 visual element đặc trưng để dễ nhận biết:

| Template | Signature |
|----------|-----------|
| default | Big background number (ghost) + label "Sai lầm XX" |
| editorial | `.grey-box` — khối warm grey, font serif italic |
| bold-dark | Large accent stripe / color block |
| minimal | Thin rule line + generous whitespace |

Định nghĩa class CSS cụ thể cho signature element trong `assets/shared.css`.

---

## Bước 3 — Tạo File Cấu trúc Template

```
_templates/carousel/[id]/
├── config.md          ← thông tin template
├── structure.md       ← mô tả từng slide
├── assets/
│   ├── shared.css     ← CSS riêng của template này
│   ├── shared.js      ← copy nguyên từ default (không sửa)
│   ├── logo-full-dark.png   ← từ _brand/logo/logo02.png (nen sáng)
│   ├── logo-full-light.png  ← từ _brand/logo/logo01.png (nen tối)
│   └── logo-mark.png        ← từ _brand/logo/logo-default.png
└── example/
    ├── index.html
    ├── slide-01.html  ← Cover
    ├── slide-02.html  ← Stat / Context
    ├── slide-03.html  ← Numbered (first)
    ├── ...
    ├── slide-09.html  ← Quote / Recap
    └── slide-10.html  ← CTA
```

### Copy logo files (bash)

```bash
BASE=/sessions/.../mnt/xFinance
cp "$BASE/_brand/logo/logo01.png"       "$BASE/_templates/carousel/[id]/assets/logo-full-light.png"
cp "$BASE/_brand/logo/logo02.png"       "$BASE/_templates/carousel/[id]/assets/logo-full-dark.png"
cp "$BASE/_brand/logo/logo-default.png" "$BASE/_templates/carousel/[id]/assets/logo-mark.png"
cp "$BASE/_templates/carousel/default/assets/shared.js" "$BASE/_templates/carousel/[id]/assets/shared.js"
```

---

## Bước 4 — Viết config.md

```markdown
# Config — [Template Name] Template

## Status
active

## Thông tin chung

| Thuộc tính | Giá trị |
|-----------|---------|
| Template ID | `[id]` |
| Style | [mô tả style ngắn] |
| Nền | [Sáng/Tối] — `[hex]` ([tên màu]) |
| Heading font | [font name] |
| Body font | Plus Jakarta Sans |
| Tỷ lệ mặc định | 1:1 — 1080×1080px |

## Số slide mặc định
10 slides

## Palette

| Biến | Hex | Vai trò |
|------|-----|---------|
| `--bg` | `[hex]` | Nền chính |
| `--text` | `[hex]` | Text chính |
| `--accent` | `#C9572C` | Nhấn chính (Đất nung) |
| `--[signature]` | `[hex]` | [Mô tả element signature] |

## Logo trong template này (nền [sáng/tối])

| Asset | File | Dùng ở |
|-------|------|--------|
| `logo-full-[dark/light].png` | `logo0[2/1].png` | Header mỗi slide |
| `logo-mark.png` | `logo-default.png` | Brand mark |

## Signature design element
`.[class]` — [mô tả element đặc trưng, màu, font, cách dùng].

## WeasyPrint
Xem `_skills/weasyprint-compat.md` — tất cả rules đã áp dụng trong shared.css và example slides.
```

---

## Bước 5 — Viết structure.md

Tài liệu từng slide: vai trò, background, text limits, quy tắc HTML đặc thù.

**Format mỗi slide:**

```markdown
## Slide N — [Tên]

**Vai trò:** [1 câu mô tả mục đích]
**Background:** `[biến CSS]` ([hex])
**Logo:** `assets/logo-full-[dark/light].png` — góc trên trái

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| [Zone 1] | [mô tả] | ≤ N từ | "[ví dụ]" |

**Quy tắc HTML bắt buộc:**
- [quy tắc 1]
- [quy tắc 2]
```

**Text limits bắt buộc (giống default):**

| Zone | Giới hạn |
|------|---------|
| Eyebrow / label | ≤ 6 từ |
| H1 / H2 heading | ≤ 9 từ |
| Body text | ≤ 28 từ |
| Fix/tip box | ≤ 18 từ |
| CTA button | ≤ 4 từ |

---

## Bước 6 — Viết shared.css

### 6A. Cấu trúc bắt buộc (skeleton)

```css
/* [Template Name] — shared styles
   Slide format default: 1:1  1080×1080
   ...
*/
:root { /* CSS variables */ }

*, html, body { /* reset + typography */ }

/* Stage + slide (KHÔNG THAY ĐỔI — giống default) */
.stage { position:fixed;... }
.slide { display:grid; grid-template-rows:auto 1fr auto; ... }

/* @media print (WeasyPrint) */
@media print {
  @page { size: 1080px 1080px; margin: 0; }
  /* ẩn .stage, .corner-*, .deco, .nav-hint, .progress */
}

/* Header, Footer, Body base (KHÔNG THAY ĐỔI cấu trúc) */
.s-head { ... }
.s-foot { ... }
.body { ... }

/* === TEMPLATE-SPECIFIC BELOW === */
/* Signature element */
.[signature-class] { ... }

/* Slide-type overrides */
.s-cover .body { ... }
.s-[type] .body { ... }
```

### 6B. Checklist WeasyPrint khi viết CSS mới

Sau khi viết mỗi block CSS:
- [ ] Không dùng `display:inline-flex` → dùng `display:table` hoặc `display:flex`
- [ ] Không dùng `place-items`, `fit-content`, `isolation:isolate`, `inset:`
- [ ] Không dùng `align-items:baseline` khi font size chênh lớn → `flex-end`
- [ ] `border-radius:50%` chỉ dùng trên element thực, không dùng trên `::before/::after`
- [ ] Button / badge / label ngắn: `display:table; white-space:nowrap`
- [ ] Mọi `@font-face` serif heading phải có fallback (Google Fonts CDN không fetch được trong WeasyPrint → cần local file hoặc `@import` trước print)
- [ ] `.deco` và `.corner-*` luôn có trong `@media print { display:none!important }`
- [ ] `.s-foot .progress` trong `@media print { display:none!important }`

### 6C. Font handling

**Browser:** Có thể dùng `@import url('https://fonts.googleapis.com/...')` — browser fetch OK.

**WeasyPrint:** Cần `@font-face` với `src:url('fonts/...')` local. Nếu chưa có font local:
- Cách 1: Download font TTF vào `assets/fonts/`
- Cách 2: Chỉ load qua Google Fonts (chấp nhận WeasyPrint fallback về Georgia)
- Cách 3: Dùng `@import` trước `@media print` — WeasyPrint đôi khi fetch được nếu có network

Ghi rõ trong `config.md` font nào là Google Fonts, font nào là local.

---

## Bước 7 — Tạo Example Slides (10 slides)

### Template cho mỗi slide HTML

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="total-slides" content="10">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Slide NN — [Template ID]</title>
  <link rel="stylesheet" href="../assets/shared.css">
  <style>
    /* Slide-specific overrides — LUÔN có display:flex cho .body */
    .[slide-class] .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: [N]px;
      padding: [top] 0 [bottom];
    }
    /* Các element đặc thù của slide này */
  </style>
</head>
<body>
  <div class="stage">
    <article class="slide [slide-class]">

      <!-- HEADER -->
      <header class="s-head">
        <div class="logo">
          <img src="../assets/logo-full-[dark/light].png" alt="xFinance">
        </div>
        <span class="topic">[Topic label]</span>
      </header>

      <!-- BODY -->
      <div class="body">
        <!-- nội dung chính -->
      </div>

      <!-- FOOTER -->
      <footer class="s-foot">
        <span class="name">xFinance</span>
        <div class="progress" style="--p:[N]%"></div>
        <span class="count"><b>[NN]</b>&thinsp;/&thinsp;[TT]</span>
      </footer>

    </article>
  </div>
  <script src="../assets/shared.js"></script>
</body>
</html>
```

### Quy tắc counter và progress

| Slide | `--p` | Footer count |
|-------|-------|--------------|
| Slide 1 (Cover) | `10%` | không có hoặc `xFinance` |
| Slide 2 (Stat) | `20%` | không có counter |
| Slide 3 (first numbered) | `30%` | `01 / NN` |
| Slide N (last numbered) | `NX%` | `NN / NN` |
| Slide 9 (Quote) | `90%` | không có counter |
| Slide 10 (CTA) | `100%` | không có counter |

> `NN` = tổng số mục numbered (ví dụ 5 mục thì NN = 05).  
> Nếu 10 slides với 7 content slides (không phải tất cả numbered), thì cover/stat/quote/cta không dùng counter.

### Slide 10 CTA — rules bắt buộc

```html
<!-- KHÔNG có <span class="deco"> hay bất kỳ position:absolute child nào của .slide -->
<!-- KHÔNG có logo thứ 2 trong .body -->
```

```css
.[id]-cta .body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  padding: 0 0 32px;    /* ← padding-bottom bắt buộc — không để 0 */
}
.[id]-cta .btn-primary {
  display: table;        /* ← không phải inline-flex */
  white-space: nowrap;
}
```

---

## Bước 8 — Tạo index.html (Gallery Preview)

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Preview — [Template Name] Template</title>
  <link rel="stylesheet" href="../assets/shared.css">
  <style>
    body { background:#111; overflow:auto; padding:40px; }
    .gallery { display:flex; flex-wrap:wrap; gap:20px; justify-content:center; }
    .thumb { width:240px; height:240px; position:relative; border-radius:4px; overflow:hidden; }
    .thumb iframe { width:1080px; height:1080px; transform:scale(0.222); transform-origin:0 0;
                    border:none; pointer-events:none; }
    .thumb-label { text-align:center; font-family:sans-serif; font-size:12px;
                   color:#888; margin-top:6px; }
    a { text-decoration:none; }
  </style>
</head>
<body>
  <div class="gallery">
    <!-- Lặp cho mỗi slide -->
    <div>
      <a href="slide-01.html" target="_blank">
        <div class="thumb"><iframe src="slide-01.html"></iframe></div>
      </a>
      <div class="thumb-label">Slide 01 — Cover</div>
    </div>
    <!-- ... slide-02 đến slide-10 ... -->
  </div>
</body>
</html>
```

---

## Bước 9 — QA Example Slides

### 9A. CHECK A — WeasyPrint anti-patterns (bash)

Chạy CHECK A từ `_skills/carousel-qa.md` trên thư mục `example/`:

```bash
cd /path/to/_templates/carousel/[id]/example

FAIL=0
grep -n "inline-flex" slide-*.html && FAIL=1 || true
grep -n 'class="deco"' slide-*.html && FAIL=1 || true
grep -n "fit-content\|place-items\|isolation:isolate" slide-*.html && FAIL=1 || true
grep -n "align-items:baseline" slide-*.html && FAIL=1 || true
[ $FAIL -eq 1 ] && echo "🔴 CÓ LỖI — sửa trước khi tiếp tục" || echo "🟢 OK"
```

Nếu có FAIL → sửa ngay trong example slides → chạy lại.

### 9B. CHECK D — Composition audit (BẮT BUỘC sau render PNG)

Đây là bước phát hiện sai bố cục — không thể bỏ qua. Quy trình:

```bash
# 1. Render PNG cho 3 slide đại diện: cover, 1 numbered giữa, CTA
cd /path/to/_templates/carousel/[id]/example

python3 -m weasyprint slide-01.html slide-01.pdf
python3 -m weasyprint slide-05.html slide-05.pdf   # slide giữa
python3 -m weasyprint slide-10.html slide-10.pdf   # CTA

pdftoppm -jpeg -r 150 slide-01.pdf slide-01-png
pdftoppm -jpeg -r 150 slide-05.pdf slide-05-png
pdftoppm -jpeg -r 150 slide-10.pdf slide-10-png
```

Sau đó **dùng Read tool đọc 3 file PNG** (`*-png-1.jpg`) — thực sự xem ảnh,
không chỉ check file tồn tại. Đối chiếu với 6-point checklist từ
`_skills/layout-composition.md § 8.2`:

```
□ 1. CENTER     — Khối nội dung có ở center body zone không?
□ 2. FILL       — Body fill 55–85% không?
□ 3. ANCHOR     — Có đúng 1 focal element nổi bật?
□ 4. ALIGN      — Mọi block thẳng hàng?
□ 5. NO-OVERLAP — Không có text/element đè nhau, không tràn boundary?
□ 6. FONT       — Heading + body render đúng font (không fallback Times/Arial)?
```

**Nếu bất kỳ điểm nào FAIL** → sửa trong `assets/shared.css` (không sửa từng
slide HTML) → re-render → audit lại. Lặp đến khi 3 slide đều PASS đủ 6 điểm.

Tham khảo § 8.3 trong `layout-composition.md` để biết cách fix theo từng fail.

---

## Bước 10 — Đăng ký vào INDEX.md

Thêm vào `_templates/carousel/INDEX.md`:

```markdown
| `[id]` | [Template Name] | [Nen sang/toi] | [Style mo ta] | active |
```

---

## Bước 11 — Verify bằng Carousel Thực tế (Khuyến khích)

Sau khi tạo template, thử tạo 1 carousel thật:

```
→ Chạy carousel-creation workflow với template mới
→ Render PDF + PNG qua WeasyPrint
→ Kiểm tra visual: signature element rõ ràng, font render OK, màu đúng
→ Nếu có lỗi → fix trong template, không trong project
```

Đây là cách duy nhất để verify WeasyPrint render thực tế (browser rendering khác WeasyPrint).

---

## Tóm tắt checklist

```
[ ] Đọc _brand/brand-guidelines.md
    + _skills/layout-composition.md (BẮT BUỘC)
    + _skills/typography-hierarchy.md
    + _skills/weasyprint-compat.md
[ ] Phân tích tất cả ref images — ghi 6 điểm Design DNA
[ ] Quyết định template ID, signature element, focal anchor cho từng slide-type
[ ] Tạo thư mục _templates/carousel/[id]/
[ ] Copy logo files + shared.js từ default
[ ] Viết assets/shared.css (với CSS variables đầy đủ + grid/zone tuân composition)
[ ] Viết config.md
[ ] Viết structure.md (text limits + focal anchor + grid placement cho mọi slide type)
[ ] Tạo example/slide-01.html đến slide-10.html
[ ] Tạo example/index.html
[ ] CHECK A — bash anti-pattern grep (sửa nếu FAIL)
[ ] CHECK D — render PNG → Read 3 slide → 6-point composition audit (sửa nếu FAIL)
[ ] Đăng ký vào _templates/carousel/INDEX.md
[ ] (Khuyến khích) Render test carousel thực tế để verify WeasyPrint
```

---

## Ghi chú quan trọng

**Palette luôn là xFinance** — không copy màu nguyên từ ref Canva. Ref chỉ cho biết *mood* và *layout pattern*.

**Signature element = nhận dạng template** — nên đặt tên CSS class cụ thể (`.grey-box`, `.stripe`, `.big-mark`) để code carousel về sau tham khảo rõ ràng.

**shared.js không cần sửa** — nó đọc `meta[name="total-slides"]` và CSS variables tự động. Chỉ cần đặt đúng `content` trong meta tag.

**Example slides = reference chính khi tạo carousel** — viết đúng, viết sạch, WeasyPrint-safe ngay từ đầu để agent copy từ đó mà không sinh ra bug mới.
