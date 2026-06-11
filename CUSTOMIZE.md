# CUSTOMIZE.md — Hướng dẫn Adapt Template Sang Brand Khác

> Dùng file này khi bạn muốn **clone template này** và dùng cho một thương hiệu khác (không phải xFinance).

---

## Tổng quan

Template này được thiết kế để có thể tái sử dụng. Tất cả thông tin đặc thù của xFinance nằm tập trung trong các file được đánh dấu bên dưới — bạn chỉ cần cập nhật những file đó.

**Ước tính thời gian setup:** 30–60 phút tùy mức độ chi tiết bạn muốn.

---

## Checklist Customization

### 🔴 Bắt buộc — Không thể bỏ qua

- [ ] **`_company/company-profile.md`**
  → Thay toàn bộ thông tin: tên công ty, website, sứ mệnh, sản phẩm, USP, đối thủ
  → Xóa phần "Ghi chú cho Claude" và viết lại cho phù hợp brand mới

- [ ] **`_company/target-audience.md`**
  → Thay đổi 3 persona cho đúng đối tượng của brand mới
  → Cập nhật nỗi đau, mong muốn, kênh tiếp cận phù hợp

- [ ] **`_brand/brand-guidelines.md`**
  → Thay mã màu Primary + Accent + bảng màu bổ trợ
  → Thay font (nếu brand dùng font khác Montserrat/Inter)
  → Cập nhật kích thước logo và quy tắc sử dụng

- [ ] **`_brand/voice-tone.md`**
  → Viết lại hoặc chỉnh tone giọng cho phù hợp brand mới
  → Cập nhật cách xưng hô, từ ngữ nên/không nên dùng
  → Cập nhật 3 ví dụ ĐÚNG tone và 3 ví dụ SAI tone

- [ ] **`CLAUDE.md`** (dòng đầu tiên và mục đích dự án)
  → Thay tên công ty + lĩnh vực hoạt động

---

### 🟡 Nên cập nhật — Để đạt kết quả tốt nhất

- [ ] **`_brand/visual-direction.md`** (trong `_skills/`)
  → Cập nhật palette màu theo loại slide cho khớp với bảng màu mới
  → Điều chỉnh quy tắc typography nếu dùng font khác
  → Cập nhật style icon nếu brand có quy định riêng

- [ ] **`_writers/default.md`**
  → Viết lại "Tổng quan" và "Tone" cho đúng với giọng brand mới
  → Cập nhật "Câu hay dùng" và "Câu tránh dùng"
  → Thay 2 ví dụ đoạn văn mẫu bằng ví dụ phù hợp lĩnh vực mới

- [ ] **`_skills/copywriting-rules.md`**
  → Cập nhật 5 công thức hook (nếu lĩnh vực mới có hook pattern khác)
  → Điều chỉnh cách viết CTA theo từng kênh nếu cần

- [ ] **`_skills/carousel-structure.md`**
  → Kiểm tra cấu trúc 8-slide có phù hợp với lĩnh vực mới không
  → Cập nhật kích thước slide theo kênh nếu cần

- [ ] **`_brand/logo/`**
  → Thêm file logo của brand mới (SVG/PNG) vào thư mục này
  → Xóa hoặc archive logo xFinance

---

### 🟢 Tùy chọn — Chỉnh khi cần

- [ ] **`_writers/`** — Thêm writer profiles mới hoặc chỉnh sửa profiles hiện có
- [ ] **`_workflow/review-checklist.md`** — Thêm tiêu chí kiểm tra đặc thù của brand
- [ ] **`_templates/brief-template.md`** — Thêm trường nếu brand cần thu thập thêm thông tin
- [ ] **`projects/README.md`** — Xóa project mẫu của xFinance (hoặc archive làm tham khảo)
- [ ] **`START-HERE.md`** — Cập nhật tên brand và ví dụ câu lệnh

---

## Những gì KHÔNG cần thay đổi

Các file sau là **logic chung** — hoạt động tốt với mọi brand:

- `_workflow/carousel-creation.md` — Quy trình 7 bước (Bước 0 → 7)
- `_workflow/intel-capture.md` — Quy trình thu thập intel
- `_workflow/review-checklist.md` — Có thể dùng nguyên, chỉ thêm nếu cần
- `_intel/README.md` — Cấu trúc intel hoạt động cho mọi lĩnh vực
- `_templates/intel-capture-template.md` — Template thu thập intel chung
- `CLAUDE.md` (phần Quy trình, Ngôn ngữ, Quick Start) — Chỉ cần sửa phần Mục đích

---

## Quy trình Clone nhanh (30 phút)

```
1. Copy toàn bộ thư mục xFinance → đổi tên theo brand mới
2. Mở _company/company-profile.md → điền thông tin brand
3. Mở _company/target-audience.md → chỉnh 3 persona
4. Mở _brand/brand-guidelines.md → thay màu sắc + font
5. Mở _brand/voice-tone.md → chỉnh tone giọng
6. Mở _writers/default.md → cập nhật giọng văn mặc định
7. Thêm logo vào _brand/logo/
8. Cập nhật dòng đầu CLAUDE.md
9. Xóa projects/ cũ → bắt đầu project mới
10. Test: nói với Claude "Tạo carousel về [chủ đề]" và kiểm tra output
```

---

## Lưu ý quan trọng

- **Không xóa cấu trúc thư mục** — Claude phụ thuộc vào đúng đường dẫn file
- **Giữ nguyên tên file** — CLAUDE.md, brief.md, content-outline.md phải đúng tên
- **Test sau khi setup** — Tạo 1 carousel thử với chủ đề đơn giản để kiểm tra Claude đọc đúng brand context
- **Ngôn ngữ:** Template mặc định là tiếng Việt — nếu dùng ngôn ngữ khác, cập nhật phần Ngôn ngữ trong CLAUDE.md và dịch các file _skills/ + _workflow/
