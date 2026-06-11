# ChatGPT Prompt Templates — xFinance

Khối lego để compose prompt copy-vào-ChatGPT cho carousel.

---

## Cấu trúc

```
chatgpt-prompt/
├── README.md                ← bạn đang ở đây
├── brand-dna.md             ← BẮT BUỘC paste vào MỌI prompt (đầu)
├── negative-prompt.md       ← BẮT BUỘC paste vào MỌI prompt (cuối)
├── styles/                  ← chọn 1 preset
│   ├── editorial-3d.md      → storytelling, history, case study
│   ├── flat-vector.md       → tips, how-to, fintech product
│   ├── minimal-photo.md     → lifestyle, persona, premium
│   └── hand-drawn.md        → beginner, friendly, educational
└── slides/                  ← chọn theo vai trò slide
    ├── cover.md             → slide 1
    ├── content-bullets.md   → slide 2..N-1 (điển hình)
    ├── data-stat.md         → slide có số liệu chủ đạo
    └── cta-summary.md       → slide cuối
```

---

## Cách compose 1 prompt cho 1 slide

```
[brand-dna.md]            ← cố định
[styles/<preset>.md]      ← preset đã chọn (1 preset cho cả carousel)
[slides/<layout>.md]      ← layout theo vai trò slide này
CONTENT: {nội dung tiếng Việt từ outline}
[negative-prompt.md]      ← cố định
```

→ Paste vào ChatGPT, nhận ảnh, QA bằng `_skills/chatgpt-image-prompt.md` § QA Checklist.

---

## Quy tắc bất biến

1. **Brand DNA + Negative paste NGUYÊN** — không sửa
2. **1 carousel = 1 style preset** — không trộn 2 preset trong cùng 1 carousel
3. **Slide 1 làm reference cho slide 2..N** — đảm bảo consistency
4. **Mỗi slide có code block riêng, hoàn chỉnh** — user không cần tự ghép

---

## Mở rộng

### Thêm style preset

1. Tạo file `styles/[tên].md`
2. Format theo template chuẩn:
   - Aesthetic reference
   - Object treatment
   - Lighting
   - Texture & grain
   - Decoration motifs
   - Typography (visual feel, không tên font cụ thể)
   - Callout boxes
   - Overall vibe
3. Đăng ký vào bảng "Style Preset" trong `_skills/chatgpt-image-prompt.md`
4. Đăng ký vào bảng "Tín hiệu trong brief" trong `_workflow/carousel-chatgpt-images.md`

### Thêm slide layout

1. Tạo file `slides/[tên].md`
2. Format chuẩn:
   - Role
   - Composition zones (A → F+)
   - Visual hierarchy
   - Content fields (placeholders dạng `{{FIELD}}`)
   - Consistency note
3. Đăng ký vào bảng "Slide Layout" trong `_skills/chatgpt-image-prompt.md`

---

## Workflow chính

`_workflow/carousel-chatgpt-images.md` — chạy step-by-step.

## Skill chính

`_skills/chatgpt-image-prompt.md` — anatomy + QA + Vietnamese guard.
