# _intel/ — Kho nguyên liệu nội dung xFinance

Thư mục này lưu trữ **intel** (thông tin, tín hiệu, cảm hứng) thu thập từ nhiều nguồn để phục vụ việc tạo carousel. Mỗi file là một "viên gạch" nguyên liệu — Claude sẽ đọc và khai thác khi tạo nội dung mới.

---

## Cấu trúc thư mục

```
_intel/
├── trends/         ← Xu hướng tài chính, tin tức thị trường, số liệu mới
├── competitor/     ← Nội dung hay của đối thủ, để phân tích (không copy)
├── inspiration/    ← Carousel/post viral từ lĩnh vực khác, để học cách làm
└── raw/
    └── dump.md     ← Ghi chú nhanh chưa phân loại
```

---

## Quy ước đặt tên file

**Format:** `YYYY-MM_[nguồn]-[chủ-đề].md`

**Ví dụ:**
- `2025-04_gsso-tieu-dung-q1.md` (báo cáo tiêu dùng Q1 từ GSO)
- `2025-05_competitor-carousel-chung-khoan.md`
- `2025-05_inspiration-viral-hook-technique.md`

---

## Frontmatter bắt buộc

Mỗi file intel PHẢI có frontmatter YAML ở đầu file:

```yaml
---
date: YYYY-MM-DD
source: tên nguồn (VD: GSO, VNDS Research, CafeF, tên tài khoản TikTok...)
topic: chủ đề ngắn gọn (VD: "tiết kiệm", "lạm phát 2025", "quỹ mở")
type: trend / competitor / inspiration / raw
relevance: carousel / blog / ads / all
tags: [tag1, tag2, tag3]
---
```

**Giải thích `type`:**
- `trend` — số liệu, xu hướng, tin tức thị trường mới
- `competitor` — nội dung hay từ đối thủ/tài khoản cùng lĩnh vực
- `inspiration` — ý tưởng format, cách kể chuyện, hook viral từ bất kỳ lĩnh vực nào
- `raw` — ghi chú chưa phân loại, dùng khi không có thời gian phân loại

**Giải thích `relevance`:**
- `carousel` — phù hợp dùng trực tiếp cho carousel
- `blog` — phù hợp bài viết dài
- `ads` — phù hợp quảng cáo
- `all` — dùng được cho nhiều dạng

---

## Cách Claude sử dụng thư mục này

Khi brief yêu cầu "intel liên quan: `_intel/trends/2025-04_gsso-tieu-dung-q1.md`", Claude sẽ:
1. Đọc file đó
2. Trích xuất số liệu, insight có thể dùng
3. Tích hợp vào outline slide phù hợp
4. **Không copy nguyên văn** — luôn diễn giải theo voice của xFinance

---

## Ví dụ file intel đầy đủ

```markdown
---
date: 2025-04-15
source: Ngân hàng Nhà nước Việt Nam
topic: tỷ lệ tiết kiệm hộ gia đình 2024
type: trend
relevance: carousel
tags: [tiết kiệm, hộ gia đình, số liệu]
---

## Nội dung gốc

Báo cáo NHNN Q4/2024: Tỷ lệ tiết kiệm bình quân hộ gia đình Việt Nam đạt 18% thu nhập khả dụng, giảm 3 điểm % so với 2022. Nhóm 25–35 tuổi có tỷ lệ tiết kiệm thấp nhất: 11%.

## Nhận xét & Ý tưởng khai thác

- **Hook mạnh:** "Người Việt 25–35 tuổi chỉ tiết kiệm được 11% thu nhập"
- **Carousel tiềm năng:** "Tại sao gen Y không tiết kiệm được — và cách sửa"
- **Số liệu dùng được:** 18% trung bình, 11% nhóm trẻ
- **Góc khai thác thêm:** So sánh với mức khuyến nghị 20% (quy tắc 50/30/20)
- **Cần verify:** Xem lại nguồn gốc báo cáo trước khi đưa vào carousel
```

---

## Review & Dọn dẹp

- Mỗi **tháng** review `raw/dump.md` → phân loại vào đúng thư mục
- File intel cũ hơn **6 tháng** → đánh giá còn liên quan không, nếu không thì archive hoặc xóa
- Khi intel đã được dùng trong một carousel → thêm ghi chú `used_in: projects/[tên-project]` vào frontmatter
