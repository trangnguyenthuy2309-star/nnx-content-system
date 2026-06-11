# _sources/ — Bài viết Nguồn

## Mục đích

Lưu các bài viết đã có sẵn của user để **repurpose thành carousel** — khác hoàn toàn với:

| Folder | Bản chất | Ví dụ |
|--------|----------|-------|
| `_intel/` | IDEA — chủ đề/góc nhìn, chưa có nội dung đầy đủ | Ý tưởng "5 sai lầm khi đầu tư FinTech" thu được từ search web |
| `_references/` | KNOWLEDGE BASE — tài liệu nền tảng để tra cứu/dẫn nguồn | Báo cáo NHNN, sách, framework FIRE, brand book |
| `_sources/` | CONTENT — đã có nội dung đầy đủ, cần convert | Blog post, bài Facebook cũ, transcript podcast, draft đã viết |

## Loại nội dung phù hợp

- Blog post / bài website đã viết
- Bài đăng Facebook / LinkedIn cũ (dài, có giá trị tái sử dụng)
- Transcript podcast hoặc video
- Draft bài viết đã hoàn thiện nhưng chưa publish
- Newsletter / email content
- Bất kỳ nội dung dài nào user đã viết và muốn convert sang carousel

## Quy ước đặt tên

`YYYY-MM-DD-slug-chu-de.{md,docx,pdf,txt}`

Ví dụ:
- `2026-05-06-quan-ly-chi-tieu-50-30-20.md`
- `2026-04-20-dau-tu-chung-khoan-co-ban.docx`
- `transcript-podcast-fintech-ep12.txt` (file không có ngày tạo cụ thể → bỏ prefix ngày)

Định dạng hỗ trợ: `.md`, `.txt`, `.docx`, `.pdf`. Ưu tiên `.md` để dễ đọc/edit.

## Workflow chuẩn

1. **User dump bài** vào `_sources/` (tự đặt tên hoặc nhờ Claude rename theo convention)
2. **Claude index file** — cập nhật `INDEX.md`:
   - Gán ID `S001`, `S002`...
   - Đếm số từ → ghi cột `Length`
   - Suy luận chủ đề chính + loại nội dung
   - Status mặc định: `new`
3. **User ra lệnh convert:** `"Tạo carousel từ S001"` hoặc `"Tạo carousel từ bài [tên]"`
4. **Claude tự thực hiện:**
   - Đọc bài + xác định angle chính
   - Tạo `projects/[tên-suy-ra-từ-chủ-đề]/`
   - Sinh `brief.md` (link tới `_sources/[file]`, suy luận channel/audience/slide count)
   - Phác `content-outline.md` → chờ user duyệt
   - Render slides theo `_workflow/carousel-creation.md`
5. **Claude update INDEX** → status `used`, ghi project nào đã dùng

## Một bài → nhiều carousel

Hoàn toàn được. Khi convert lần thứ 2 trở đi → status đổi thành `used (multi)`, cột "Dùng trong" liệt kê tất cả project.

## Strategy theo độ dài

| Length | Strategy |
|--------|----------|
| < 1500 từ | 1 carousel ngắn (5-7 slide) — extract điểm chính |
| 1500–3500 từ | 1 carousel chuẩn (8-12 slide) — đa số case |
| 3500–7000 từ | Cân nhắc chia 2 carousel hoặc carousel dài (12-15 slide) |
| > 7000 từ | Chia series 2-3 carousel — mỗi cái 1 angle riêng |

## Lưu ý cho Claude

- **Không bịa nội dung** ngoài bài gốc — chỉ rút gọn / restructure / repurpose
- Nếu bài gốc thiếu số liệu cụ thể → dùng `_references/` bổ sung và **ghi nguồn rõ ràng** trong presenter notes
- Nếu bài gốc có quan điểm trái với `_brand/voice-tone.md` → flag với user, không tự sửa
- Khi user nói tên file ngắn (vd: "bài quản lý chi tiêu") → fuzzy match trong INDEX trước khi hỏi lại
