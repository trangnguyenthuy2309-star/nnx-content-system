# Sources Index — xFinance

> Danh sách tập trung bài viết nguồn để convert sang carousel. Claude cập nhật file này mỗi khi thêm / dùng / archive source.

---

## Hướng dẫn nhanh

| Lệnh | Kết quả |
|------|---------|
| `"Thêm bài [file] vào sources"` | Claude đọc file → đếm từ → cập nhật INDEX với status=`new` |
| `"Xem bài chưa dùng"` | Filter INDEX status=`new`, hiển thị danh sách |
| `"Tạo carousel từ S[xxx]"` | Dùng source đó → chạy `_workflow/carousel-creation.md` |
| `"Tạo carousel từ bài [tên/keyword]"` | Fuzzy match trong INDEX → confirm → chạy workflow |
| `"Đánh dấu S[xxx] đã dùng trong [project]"` | Cập nhật status → `used` (hoặc `used (multi)` nếu lần 2+) |
| `"Archive S[xxx]"` | Cập nhật status → `archived` |

---

## Status

| Status | Ý nghĩa |
|--------|---------|
| `new` | Chưa dùng — sẵn sàng convert |
| `used` | Đã convert thành 1 carousel |
| `used (multi)` | Đã dùng cho ≥ 2 carousel |
| `archived` | Hết hạn / không phù hợp / user chủ động archive |

---

## ID Convention

`S001`, `S002`, `S003`... — số tăng dần liên tục, **không tái sử dụng** ID đã archive.
Prefix `S` để phân biệt với intel ID (nếu có) và tránh nhầm lẫn khi user gọi `"Tạo carousel từ [ID]"`.

---

## Loại nội dung

| Type | Mô tả |
|------|-------|
| `blog` | Blog post / bài website |
| `social` | Bài Facebook / LinkedIn cũ |
| `transcript` | Transcript podcast / video |
| `draft` | Draft chưa publish |
| `newsletter` | Email / newsletter content |
| `other` | Loại khác — ghi rõ trong cột chú thích |

---

## Danh sách Sources

| ID | File | Chủ đề | Length | Type | Ngày thêm | Status | Dùng trong |
|----|------|--------|--------|------|-----------|--------|-----------|
| — | *(chưa có source — dump bài vào `_sources/` để bắt đầu)* | | | | | | |

---

## Gợi ý convert chưa khai thác

> Claude cập nhật phần này khi user hỏi `"Có bài nào convert được không?"` hoặc sau khi index source mới.

*(Chưa có gợi ý — thêm source để bắt đầu)*
