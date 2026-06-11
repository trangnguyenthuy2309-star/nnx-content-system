# Visual Direction — xFinance

## 1. Palette màu theo loại slide

| Loại slide | Background | Text chính | Accent / Highlight |
|-----------|------------|-----------|-------------------|
| **Cover/Hero** | `#2D2A26` (Than) | `#FAF6F0` (Kem) | `#C9572C` (Đất nung) |
| **Content (body)** | `#FAF6F0` (Kem) | `#2D2A26` (Than) | `#C9572C` hoặc `#2A8A7F` |
| **Data / Số liệu** | `#FAF6F0` (Kem) | `#2D2A26` (Than) | `#C9572C` cho số chính, `#E8B547` cho badge/highlight |
| **CTA** | `#C9572C` (Đất nung) | `#FAF6F0` (Kem) | `#FAF6F0` (button/border) |
| **Quote / Insight** | `#FAF6F0` (Kem) | `#2D2A26` (Than) | `#2A8A7F` (Ngọc — border hoặc tag) |

**Quy tắc nền:**
- Nền tối (`#2D2A26` — Than): text Kem (`#FAF6F0`), accent Đất nung — dùng cho Cover/Hero, tạo sức nặng thị giác
- Nền sáng (`#FAF6F0` — Kem): text Than (`#2D2A26`), dùng cho hầu hết slide nội dung — dễ đọc, ấm áp
- Không dùng nền trắng thuần (`#FFFFFF`) — thiếu brand identity, lạnh và vô cảm

---

## 2. Quy tắc Typography trên slide

### Tiêu đề
- Font: **Montserrat ExtraBold** (800)
- Size: 28–48px tùy kích thước slide
- Màu: `#FAF6F0` (Kem) trên nền tối / `#2D2A26` (Than) trên nền sáng
- Không dùng ALLCAPS trừ từ 1–2 chữ nhấn mạnh

### Body text
- Font: **Inter Regular** (400) — sử dụng **Inter SemiBold** (600) để nhấn từ quan trọng
- Size: 14–18px
- Line height: 1.5–1.7
- Màu: `#FAF6F0` (Kem) trên nền tối / `#2D2A26` (Than) trên nền sáng

### Số liệu lớn (Data callout)
- Font: **Montserrat ExtraBold** (800)
- Size: 48–72px
- Màu: `#C9572C` (Đất nung) — làm số nổi bật; dùng `#E8B547` (Nghệ) nếu là badge/highlight nhỏ
- Luôn có label nhỏ bên dưới giải thích con số (Inter Regular, 12px)

### Quy tắc chung
- Không dùng quá 2 weight font trên 1 slide
- Alignment: Left-aligned (không justify) — dễ đọc hơn
- Không dùng shadow trên text

### Quy tắc Logo trên slide
- Logo chỉ xuất hiện **một lần** ở header mỗi slide — đã được shared.css xử lý tự động.
- **KHÔNG thêm logo thứ hai vào body slide.** Logo nhỏ trên nền tối mất tương phản, gây mất cân bằng visual.
- Xem config.md của template đang dùng để biết file logo nào map vào vị trí nào.

---

## 3. Icon Style

**Style chuẩn:** Outline icons — nét thanh, hiện đại, không chiếm diện tích

- **Trên nền tối** (`#2D2A26`): icon màu `#C9572C` (Đất nung) hoặc `#FAF6F0` (Kem)
- **Trên nền sáng** (`#FAF6F0`): icon màu `#C9572C` (Đất nung) hoặc `#2A8A7F` (Ngọc)
- Size icon: 24–40px tuỳ vị trí (đừng quá nhỏ/lớn so với text kề)
- Không dùng icon màu sắc nhiều màu (flat colored) — phá vỡ tính thống nhất

**Nguồn icon được dùng:**
- Phosphor Icons (outline)
- Heroicons (outline)
- Lucide Icons

**Không dùng:**
- Emoji làm icon chính
- Clipart kém chất lượng
- Icon từ nhiều bộ khác nhau trên cùng 1 carousel

---

## 4. Hình ảnh

### Nên dùng
- Ảnh lifestyle chất lượng cao: người đi làm, làm việc tại bàn, city life — tông màu cool/neutral
- Ảnh abstract tài chính: biểu đồ, xu hướng, data visualization
- Ảnh đã qua xử lý màu (color grading ấm, tone đất — phù hợp với palette Than + Kem)
- Nguồn ảnh uy tín: Unsplash, Pexels, Shutterstock (có license)

### Tránh dùng
- Ảnh có watermark
- Ảnh quá "stock photo" — người cười gượng, bắt tay cứng nhắc
- Ảnh cũ, độ phân giải thấp
- Ảnh có nhiều màu sắc chói lọi — xung đột với palette tối của xFinance
- Ảnh người mang quá nhiều text (ảnh meme) không phù hợp với tài chính chuyên nghiệp

### Xử lý ảnh trên slide
- Overlay màu `#2D2A26` (Than) với opacity 40–60% khi đặt text lên ảnh
- Ảnh luôn có alt text mô tả khi thiết kế cho accessibility

---

## 5. Ghi chú kết hợp màu — 5 màu chuẩn

**Bộ màu xFinance: Than + Đất nung + Ngọc + Nghệ + Kem**

Đây là hệ màu ấm, đất, chuyên nghiệp — khác biệt hoàn toàn với các brand tài chính dùng xanh lạnh.

### Cặp màu chủ đạo
- **Kem (`#FAF6F0`) + Than (`#2D2A26`):** Nền sáng ấm + text tối — dùng cho hầu hết slide nội dung
- **Than (`#2D2A26`) + Kem (`#FAF6F0`):** Nền tối + text sáng — dùng cho Cover/Hero, tạo trọng lượng

### Vai trò từng màu trong layout
- **Kem** → background slide (chiếm 60–70% diện tích)
- **Than** → text, heading, nền tối (chiếm 15–20%)
- **Đất nung** → nhấn mạnh quan trọng nhất: CTA, số nổi bật, icon chính (chiếm 10–15%)
- **Ngọc** → vai trò phụ: tag, link, border, icon thứ cấp (chiếm 5–8%)
- **Nghệ** → điểm nhấn nhỏ: badge, highlight từ, icon nhỏ (chiếm ≤ 5%)

### Quy tắc kết hợp
- Tỷ lệ khuyến nghị: 65% Kem / 15% Than / 10% Đất nung / 5% Ngọc / 5% Nghệ
- Không dùng Nghệ + Đất nung cùng lúc ở vị trí ngang hàng — hai màu nóng cạnh tranh nhau
- Ngọc và Nghệ không nên xuất hiện cùng nhau trên cùng một vùng nhỏ — dùng luân phiên theo slide
- Slide CTA: nền Đất nung toàn trang là hợp lệ — đây là ngoại lệ duy nhất cho nền màu đậm
