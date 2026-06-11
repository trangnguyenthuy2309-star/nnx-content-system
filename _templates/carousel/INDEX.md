# Template Index — NNX Insurance Carousel System

> File trung tâm theo dõi tất cả template carousel hiện có.  
> **Bắt buộc cập nhật** khi thêm, sửa, hoặc retire template.
> **Updated:** 2026-06-06 — Migrated from xFinance to NNX Insurance brand.

---

## Danh sách template

| Key | Tên | Slides | Tỉ lệ | Kênh phù hợp | Status | Preview |
|-----|-----|--------|-------|-------------|--------|---------|
| `default` | Listicle (NNX) — Mistake/Tips/Steps/Problem | 10 | 1:1 · 1080×1080 | Facebook, Instagram | ✅ active | `default/example/index.html` |
| `editorial` | Editorial — Light / Serif | 10 | 1:1 · 1080×1080 | Facebook, Instagram, LinkedIn | ✅ active | `editorial/example/index.html` |

---

## Ghi chú từng template

### `editorial` — Light / Serif Editorial
- **Mô tả:** Template editorial light, full nền Kem `#FAF6F0` toàn bộ. Heading sans Plus Jakarta Sans cho moment hành động + serif italic Cormorant Garamond cho moment cảm xúc. Signature element: `.grey-box` warm grey với serif italic. Cấu trúc: Cover → Stat → 5× Numbered → Quote → Key Insight → CTA (10 slides).
- **Mạnh nhất khi:** Nội dung nguyên tắc, tips, insight, framework — cần cảm giác premium, breathing room, editorial. Phù hợp đối tượng professional / mid-career / advisor audience.
- **Khác default:** Default nền Than (tối) cho moments và Compare slide 9; editorial nền Kem (sáng) toàn bộ và Key Insight slide 9.
- **Files bắt buộc đọc:** `editorial/config.md` + `editorial/structure.md`
- **Rebuild:** 2026-05-05 (v2.0) — áp dụng `_skills/layout-composition.md` + `_skills/carousel-qa.md` CHECK D. Đã pass 6-point composition audit.

---

### `default` — Listicle (NNX Insurance)
- **Mô tả:** Template đa năng cho NNX Insurance, dùng khi không detect được template cụ thể. Cấu trúc: Cover → Stat → 5× Numbered → Quote → Compare → CTA.
- **Mạnh nhất khi:** Listicle (sai lầm, tips, lý do, bước, vấn đề). Label có thể thay: "Sai lầm" → "Nguyên tắc" / "Bước" / "Vấn đề" / "Lỗi".
- **Brand colors:** NNX Dark Green (#276031), NNX Green (#0DB04B), NNX Orange (#F794D), NNX Yellow (#FFCB05)
- **Font:** Averta Std CY (chính) + UTM Avo (phụ)
- **Files bắt buộc đọc:** `default/config.md` + `default/structure.md`
- **Rebuild:** 2026-06-06 (v2.0) — Migrated from xFinance to NNX Insurance. Màu sắc, font, và UI cập nhật theo brand NNX.

---

## Quy tắc quản lý index này

1. **Khi thêm template mới:**
   - Tạo folder `_templates/carousel/[key]/` với đủ `config.md`, `structure.md`, `example/`
   - Thêm 1 dòng vào bảng trên
   - Thêm mục "Ghi chú" phía dưới
   - Cập nhật `README.md` cùng folder
   - Cập nhật Smart Detection table trong `CLAUDE.md`
   - Cập nhật brief-template.md (field Template)

2. **Khi retire template:**
   - Đổi Status → `🗄️ retired`
   - Giữ folder và files (không xoá) để tham khảo
   - Ghi thêm lý do và ngày retire vào mục Ghi chú

3. **Claude check index trước khi tạo carousel:**
   - Đọc INDEX.md để biết template nào đang active
   - Chỉ dùng template có Status `✅ active`
   - Nếu user yêu cầu template chưa có → thông báo và dùng `default`

---

## Template đang phát triển / kế hoạch

*(Ghi các template dự kiến thêm vào đây để theo dõi)*

| Key (dự kiến) | Mô tả | Dự kiến |
|--------------|-------|---------|
| `listicle` | Danh sách số thứ tự, tips, app | TBD |
| `how-to` | Hướng dẫn từng bước | TBD |
| `comparison` | So sánh A vs B | TBD |
| `story` | Câu chuyện / case study | TBD |
| `problem-solution` | Nỗi đau + giải pháp | TBD |
