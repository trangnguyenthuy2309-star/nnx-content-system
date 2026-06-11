# _skills/ — Hướng dẫn Kỹ năng Chuyên biệt cho xFinance

## Mục đích

Các file trong thư mục `_skills/` là **hướng dẫn bổ sung dành riêng cho xFinance**. Claude đọc và áp dụng các file này cho mọi carousel thuộc project này, **ghi đè hành vi mặc định** nếu có xung đột.

Đây là nơi chứa "kiến thức nghề" được tinh chỉnh theo thực tế của xFinance — không phải quy tắc chung chung.

---

## Danh sách file và tác dụng

| File | Tác dụng |
|------|----------|
| `carousel-structure.md` | Quy định cấu trúc slide theo thứ tự, giới hạn từ, tỷ lệ nội dung theo từng kênh. Đọc trước khi lên outline. |
| `copywriting-rules.md` | Quy tắc viết copy — hook, argument, CTA. Đọc trước khi viết bất kỳ dòng text nào. |
| `visual-direction.md` | Hướng dẫn màu sắc, typography, icon và hình ảnh trên từng loại slide. Đọc khi tạo slide design hoặc mô tả visual direction trong outline. |
| `layout-composition.md` | **Tư duy bố cục** — grid 12×12, vertical zones, focal anchor, fill ratio, render-and-inspect loop. Đọc TRƯỚC khi viết bất kỳ CSS layout (`.body`, `.s-*`) nào. |
| `typography-hierarchy.md` | Hệ tầng element: eyebrow / title / body / micro / data / ghost. Áp dụng SAU khi đã chốt grid theo `layout-composition.md`. |
| `weasyprint-compat.md` | Anti-patterns CSS gây lỗi WeasyPrint. Áp dụng song song mọi lúc viết CSS. |
| `carousel-qa.md` | QA checklist (CHECK A bash + CHECK B visual + CHECK C files + CHECK D composition). Chạy trước khi render PDF. |
| `build-template.md` | Quy trình tạo template carousel mới từ reference images. |

---

## Khi nào đọc file nào?

1. **Lên content-outline** → đọc `carousel-structure.md` + `copywriting-rules.md`
2. **Viết copy chính thức** → đọc `copywriting-rules.md` + writer profile trong `_writers/`
3. **Mô tả visual / tạo PPTX** → đọc `visual-direction.md` + `_brand/brand-guidelines.md`
4. **Kiểm tra trước khi xuất** → đọc `_workflow/review-checklist.md`

---

## Nguyên tắc

- Skills trong thư mục này **luôn được áp dụng** cho xFinance, trừ khi brief có ghi chú override
- Nếu một quy tắc trong skills mâu thuẫn với brief → hỏi user, không tự quyết định
- Không xóa hoặc sửa các file skills trừ khi được chỉ đạo rõ ràng
