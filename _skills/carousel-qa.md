# carousel-qa — QA Tự động cho Carousel xFinance

> Chạy checklist này SAU KHI tạo xong tất cả HTML slides,
> TRƯỚC KHI render PDF và báo user hoàn thành.
> Nếu bất kỳ check nào FAIL → sửa ngay, không bỏ qua.

---

## Cách dùng

```bash
# Chạy từ output folder của project
cd /path/to/project/output
```

---

## CHECK A — WeasyPrint Anti-patterns (tự động bằng bash)

Chạy toàn bộ block này một lần:

```bash
FAIL=0

echo "━━━ A1: display:inline-flex ━━━"
OUT=$(grep -n "inline-flex" slide-*.html 2>/dev/null)
[ -n "$OUT" ] && echo "❌ FAIL:" && echo "$OUT" && FAIL=1 || echo "✅ OK"

echo "━━━ A2: .deco element trong .slide grid ━━━"
OUT=$(grep -n 'class="deco"' slide-*.html 2>/dev/null)
[ -n "$OUT" ] && echo "❌ FAIL — xóa element này:" && echo "$OUT" && FAIL=1 || echo "✅ OK"

echo "━━━ A3: .body thiếu display:flex trong slide-specific CSS ━━━"
for f in slide-*.html; do
  # Tìm dòng override .body mà thiếu display:flex
  if grep -qE "\.[a-z-]+\s*\.body\s*\{" "$f"; then
    RULE=$(grep -E "\.[a-z-]+\s*\.body\s*\{[^}]*\}" "$f" | grep -v "display:flex")
    [ -n "$RULE" ] && echo "❌ FAIL $f — .body rule thiếu display:flex:" && echo "$RULE" && FAIL=1
  fi
done
[ $FAIL -eq 0 ] && echo "✅ OK"

echo "━━━ A4: display:flex trên .num-mark (counter 01/05 vỡ trong WeasyPrint) ━━━"
OUT=$(grep -nE "\.num-mark\{[^}]*display:\s*flex" slide-*.html 2>/dev/null)
[ -n "$OUT" ] && echo "❌ FAIL — bỏ display:flex/align-items, dùng inline (xem _skills/weasyprint-compat.md §2):" && echo "$OUT" && FAIL=1 || echo "✅ OK"

echo "━━━ A5: CSS properties không support ━━━"
OUT=$(grep -n "fit-content\|place-items\|isolation:isolate\|inset:" slide-*.html 2>/dev/null)
[ -n "$OUT" ] && echo "❌ FAIL:" && echo "$OUT" && FAIL=1 || echo "✅ OK"

echo "━━━ A6: border-radius:50% trên pseudo-element ━━━"
OUT=$(grep -n "border-radius:50%" slide-*.html 2>/dev/null | grep -i "before\|after")
[ -n "$OUT" ] && echo "❌ FAIL — dùng ký tự · hoặc – thay thế:" && echo "$OUT" && FAIL=1 || echo "✅ OK"

echo "━━━ A7: Emoji trong HTML content ━━━"
OUT=$(grep -Pn "[^\x00-\x7F\xC0-\xFF]" slide-*.html 2>/dev/null | grep -v "fonts.google\|charset\|lang\|<!--" | head -5)
[ -n "$OUT" ] && echo "⚠️ WARNING — kiểm tra có emoji không:" && echo "$OUT" || echo "✅ OK"

echo "━━━ A8: Logo thứ 2 trong body ━━━"
OUT=$(grep -n "logo-tagline\|logo-full-dark\|logo-mark" slide-*.html 2>/dev/null | grep 'src=')
[ -n "$OUT" ] && echo "❌ FAIL — xóa logo thứ 2 trong body:" && echo "$OUT" && FAIL=1 || echo "✅ OK"

echo "━━━ A9: Slide 10 CTA — padding-bottom ━━━"
if [ -f slide-10.html ]; then
  OUT=$(grep -E "s-cta.*body|\.s-cta .body" slide-10.html | grep -v "padding.*[3-9][0-9]px\|padding.*0 0")
  [ -n "$OUT" ] && echo "⚠️ WARNING — .body cần padding-bottom ≥ 30px:" && echo "$OUT" || echo "✅ OK"
fi

echo "━━━ A10: .big-num là direct child của .slide grid ━━━"
# .big-num trực tiếp trong .slide sẽ trở thành grid cell thứ 4 → slide thành 2 trang PDF
# Kiểm tra: nếu big-num nằm ngoài .body thì cần đảm bảo shared.css đã có .big-num trong @media print display:none
OUT=$(grep -n "big-num" slide-*.html 2>/dev/null)
if [ -n "$OUT" ]; then
  echo "⚠️ WARNING — tìm thấy .big-num, kiểm tra:"
  echo "$OUT"
  echo "  → Đảm bảo shared.css có: .big-num{display:none!important} trong @media print"
  echo "  → Hoặc đặt .big-num bên trong .body (không phải direct child của .slide)"
else
  echo "✅ OK — không có .big-num"
fi

echo ""
[ $FAIL -eq 1 ] && echo "🔴 CÓ LỖI — sửa trước khi render" || echo "🟢 TẤT CẢ OK — có thể render"
```

---

## CHECK B — Visual Rules (tự kiểm tra bằng mắt / logic)

Đọc từng slide và xác nhận:

**Slide 01 — Cover**
- [ ] `.hl` highlight: ≤ 3 từ, đặt cuối dòng hoặc đầu dòng sau `<br/>`
- [ ] Mỗi dòng trong `<h1>` ≤ 14 ký tự (kể cả dấu tiếng Việt)
- [ ] `ep` badges dùng `display:inline-block; white-space:nowrap`

**Slide 02 — Stat**
- [ ] Layout vertical stacked (không có `display:table` horizontal)
- [ ] `num-mark` dùng `align-items:flex-end`
- [ ] `src` text không uppercase, `letter-spacing ≤ .08em`

**Slides 03–07 — Numbered**
- [ ] Label (`Sai lầm`, `Bước`, `Thói quen`...) có `white-space:nowrap`
- [ ] `num-mark` số lớn + suffix dùng `align-items:flex-end`
- [ ] Fix-box border trái màu brand, không dùng emoji

**Slide 08 — Compare**
- [ ] 2 cột dùng `display:grid; grid-template-columns:1fr 1fr; align-items:start`
- [ ] Header cột có màu phân biệt rõ ràng

**Slide 09 — Checklist**
- [ ] Items đánh số hoặc checkbox — không dùng bullet emoji

**Slide 10 — CTA**
- [ ] Không có `<span class="deco">` hoặc decorative element trong `.slide`
- [ ] Không có logo thứ 2 trong body
- [ ] Nút CTA dùng `display:table`
- [ ] Body có padding-bottom để nút không sát footer

**Tất cả slides**
- [ ] `<meta name="total-slides" content="N">` đúng số
- [ ] `<link rel="stylesheet" href="assets/shared.css">` hiện diện
- [ ] Footer có đủ 3 spans: `.name`, `.progress`, `.count`
- [ ] Body text dùng `var(--body-text)` không phải `var(--muted)`

---

## CHECK C — File Structure

```bash
echo "━━━ C1: Đủ slide files ━━━"
ls slide-*.html | wc -l

echo "━━━ C2: Assets đủ không ━━━"
ls assets/shared.css assets/shared.js assets/logo-full-light.png 2>/dev/null || echo "❌ Thiếu assets"

echo "━━━ C3: index.html có không ━━━"
ls index.html 2>/dev/null || echo "⚠️ Thiếu index.html"
```

---

## CHECK D — Composition Audit (BẮT BUỘC sau khi render PNG)

> Đây là pass quan trọng nhất — phát hiện slide xấu mà CHECK A/B không bắt được
> (text dồn lên top, lệch trái/phải, đè nhau, font fallback...).
>
> Quy tắc: **không có Read PNG = không có visual QA = không được báo xong.**

### D1. Render đại diện 3 slide

```bash
# Đã render xong PDF + PNG full theo Bước 6 carousel-creation
# → 3 slide đại diện cần audit:
#   - slide-01.jpg  (Cover — focal anchor lớn nhất)
#   - slide giữa (vd slide-05.jpg)  (Numbered — pattern lặp)
#   - slide cuối (vd slide-10.jpg)  (CTA — button + padding bottom)
```

### D2. Read tool — thực sự xem ảnh

```
Read("output/slides/slide-01.jpg")
Read("output/slides/slide-05.jpg")  # hoặc slide giữa tương ứng
Read("output/slides/slide-NN.jpg")  # slide cuối
```

Đây là Read PNG — Claude phải nhìn ảnh, không chỉ check file tồn tại.

### D3. 6-point Composition Checklist

Đối chiếu mỗi PNG với 6 câu (chi tiết: `_skills/layout-composition.md § 8.2`):

```
Slide 01 (Cover):
□ 1. CENTER     — Khối nội dung có ở center body zone? Trên/dưới cân?
□ 2. FILL       — Body fill 55–85%?
□ 3. ANCHOR     — Title H1 là focal element rõ nhất?
□ 4. ALIGN      — Mọi block thẳng hàng (left edge / center axis)?
□ 5. NO-OVERLAP — Không có text/element đè nhau, không tràn slide boundary?
□ 6. FONT       — Heading + body render đúng font (không fallback Times)?

Slide giữa (Numbered):
□ 1–6 (cùng các điểm) — focal là num-mark hoặc grey-box

Slide cuối (CTA):
□ 1–6 — focal là button Đất nung; body padding-bottom > 0 để button không sát footer
```

### D4. Fix khi FAIL

| Fail | Cách fix |
|------|---------|
| 1. CENTER | `.s-[type] .body { justify-content: center }` (không flex-start) |
| 2. FILL rỗng | Tăng size title +8–16px hoặc thêm body text / decorative element |
| 2. FILL ngột ngạt | Cắt copy 20–30%, giảm body size 2px, tăng gap |
| 3. ANCHOR yếu | Phóng focal +20%, thu phần khác −10% |
| 4. ALIGN lệch | Tìm `margin-left` lẻ, đổi sang flex/grid; check `align-self` |
| 5. OVERLAP | Tăng gap/margin; check `position:absolute` chồng flow |
| 6. FONT fallback | Cài font local (xem `weasyprint-compat.md § Font`) hoặc đổi serif → sans |

**Sửa trong `assets/shared.css`** (không sửa từng slide HTML) → re-render PDF + PNG → audit lại.

Lặp đến khi cả 3 slide đại diện PASS đủ 6 điểm.

---

## Khi tích hợp vào workflow

```
→ Chạy CHECK A (bash) — sửa hết FAIL
→ Chạy CHECK B (visual) — confirm từng mục
→ Chạy CHECK C (files) — đảm bảo đủ
→ Render PDF + PNG (Bước 6 carousel-creation)
→ Chạy CHECK D (composition audit qua Read PNG) — sửa hết FAIL → re-render
→ Chỉ khi tất cả ✅ → báo xong với user
```
