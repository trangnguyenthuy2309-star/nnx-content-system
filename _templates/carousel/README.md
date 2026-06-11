# Carousel Templates — Hướng dẫn

> Mỗi template là một folder độc lập với cấu trúc slide, giới hạn text, và quy tắc riêng.  
> Claude **PHẢI** đọc `config.md` và `structure.md` của template được chọn trước khi tạo outline.  
> Claude **PHẢI** kiểm tra `INDEX.md` để biết template nào đang active.

---

## Template hiện có

| Template key | Tên | Slides | Status |
|-------------|-----|--------|--------|
| `default` | Mistake → Fix (Default) | 10 | ✅ active |

→ Xem chi tiết, kế hoạch thêm template, và lịch sử: **`INDEX.md`**

---

## Template `default` — đa năng nhất

Template này có thể thích nghi với nhiều dạng nội dung bằng cách đổi label:

| Nội dung | Label thay thế |
|---------|---------------|
| Sai lầm (mặc định) | "Sai lầm 01" |
| Tips / nguyên tắc | "Nguyên tắc 01" |
| Hướng dẫn từng bước | "Bước 01" |
| Vấn đề + giải pháp | "Vấn đề 01" |

---

## Cấu trúc mỗi folder template

```
[template-key]/
├── config.md        ← Metadata, giới hạn text, visual pattern (Claude đọc bắt buộc)
├── structure.md     ← Chi tiết từng slide: role, format, giới hạn (Claude đọc bắt buộc)
└── example/         ← Slides HTML mẫu, assets
    ├── assets/      ← shared.css, shared.js, logos
    ├── index.html   ← Gallery preview
    └── slide-01.html ... slide-10.html
```

---

## Thêm template mới — checklist

1. Tạo folder `_templates/carousel/[key]/`
2. Tạo `config.md` và `structure.md` theo đúng format của `default`
3. Tạo `example/` với đủ assets và slide HTML mẫu
4. **Cập nhật `INDEX.md`** — thêm dòng vào bảng, thêm mục Ghi chú
5. Cập nhật `README.md` (file này) — thêm vào bảng Template hiện có
6. Cập nhật `CLAUDE.md` — thêm keyword vào Smart Detection table
7. Cập nhật `_templates/brief-template.md` — thêm option vào field Template
8. Cập nhật `_workflow/carousel-creation.md` nếu cần bước xử lý đặc biệt

---

## Quy tắc giới hạn text

Mỗi template có **giới hạn từ/ký tự** khác nhau theo từng vùng text trên slide.  
Vượt quá giới hạn → text bị tràn hoặc font phải thu nhỏ → phá vỡ layout.  
Claude phải tuân thủ limits trong `config.md` — không được vượt quá dù nội dung hay.
