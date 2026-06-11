# Structure — Template: Default (Mistake → Fix)

> 10 slides chuẩn. Đây là template mặc định — dùng khi không detect được template cụ thể.  
> Canvas mặc định: **1:1 (1080×1080)**. Xem giới hạn text và tỷ lệ khác trong `config.md`.

---

## Slide 1 — Cover / Hook (NNX)

**Vai trò:** Dừng người đọc bằng con số + chủ đề dễ nhận diện.  
**Background:** `#276031` (NNX Dark Green) | **Text:** `#FFFFFF` | **Accent:** `#0DB04B` (NNX Green), `#FFCB05` (NNX Yellow)  
**Logo:** `assets/logo-full-light.png` — góc trên trái

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Eyebrow | Series / kênh / tháng | ≤ 8 từ | "xFinance Carousel · Đầu tư" |
| Tiêu đề chính | Con số + nhóm sai lầm | ≤ 9 từ | "5 sai lầm khi mới đầu tư" (font 96px) |
| Sub-text | Hệ quả + lời hứa | ≤ 18 từ | "Những lỗi khiến danh mục thua lỗ ngay từ đầu." (font 22px) |
| Ghost deco | Con số lớn nền phải | 1 ký tự | "5" — 520px, tự động từ tiêu đề |

**Quy tắc:**
- Con số trong tiêu đề phải nổi bật bằng màu `#C9572C`.
- Không viết tiêu đề chung chung kiểu "Những điều bạn cần biết".
- Hook phải gợi tự soi lại, không gây xấu hổ.

**⚠️ Quy tắc HTML bắt buộc — Cover slide:**
- `.arrow` (nút điều hướng tròn) phải nằm **TRONG** `.body` div, sau `.desc` — là flex item cuối cùng.
- **TUYỆT ĐỐI KHÔNG** dùng `position: absolute` cho `.arrow` — sẽ bị đè lên desc khi h1 lớn render cao hơn ước tính.
- CSS đúng: `.s-cover .arrow { width:64px; height:64px; background:var(--datnung); border-radius:999px; display:grid; place-items:center; align-self:flex-start; text-decoration:none; flex-shrink:0 }`
- Xem cấu trúc HTML chuẩn trong `example/slide-01.html`.

---

## Slide 2 — Context Stat

**Vai trò:** Chứng minh vấn đề đáng quan tâm trước khi vào danh sách.  
**Background:** `#2D2A26` | **Accent:** `#C9572C`

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Số lớn trái | Tỷ lệ / con số | ≤ 6 ký tự | "70%" (font 240px) |
| Headline phải | Ý nghĩa con số | ≤ 10 từ | "nhà đầu tư mới thua lỗ trong năm đầu tiên" (font 44px) |
| Body phải | Vì sao liên quan người đọc | ≤ 24 từ | "Không phải do thị trường…" (font 18px) |
| Nguồn | Nguồn ngắn + năm | 1 dòng | "Khảo sát nội bộ xFinance, 2025 — n = 980" |

**Quy tắc:**
- Nếu không có nguồn đáng tin, đổi thành "Bối cảnh" không dùng số liệu lớn.
- Không nhồi quá 1 con số lớn.

---

## Slide 3–N — Numbered Items (×3 đến ×7) — NNX

**Vai trò:** Mỗi slide gọi tên một mục (sai lầm/tips/bước/vấn đề), chỉ rõ hệ quả/lợi ích và đưa một cách khắc phục/đạt được.  
**Background:** `#276031` (NNX Dark Green) | **Số:** `#F794D` (NNX Orange, 120px) | **Solution box:** border `#FFCB05` (NNX Yellow), bg nhạt  
**Số lượng:** Mặc định 5 — có thể dùng 3–7 mục. Tổng slides = số mục + 5 frame cố định.

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Label Ngọc | "Sai lầm 01" → "Sai lầm 05" | 2–3 từ | "Sai lầm 03" |
| Số Đất nung | 01 / NN ... NN / NN | — | font 120px — NN = tổng số mục (3–7) |
| Title h2 | Tên lỗi, 2 dòng | ≤ 7 từ | "Bỏ toàn bộ / vào một tài sản" (font 54px) |
| Body | Hệ quả cụ thể, 1 ý | ≤ 28 từ | "Concentrated bet có thể..." (font 20px) |
| Fix label | Nhãn hành động | 2–4 từ | "Cách khắc phục" |
| Fix body | Cách sửa rõ ràng | ≤ 18 từ | "Không để quá 20% danh mục..." (font 18px) |

**Thích nghi sang template khác:**
- Tips / Listicle → đổi label "Sai lầm" → "Nguyên tắc", bỏ fix box
- How-To → đổi label "Sai lầm" → "Bước", đổi fix box thành kết quả
- Problem-Solution → đổi "Sai lầm" → "Vấn đề", đổi fix → "Giải pháp"

**Quy tắc:**
- Đúng 1 sai lầm mỗi slide.
- Fix phải bắt đầu bằng hành động, không chỉ là lời khuyên mơ hồ.
- Không lặp cùng dạng lỗi ở nhiều slide.
- Counter `NN / TT`: NN = số thứ tự mục, TT = tổng số mục (không phải tổng slides).
- Meta tag `<meta name="total-slides" content="[tổng slides]">` phải đúng trong mỗi slide.
- Ví dụ 6 mục: slide HTML có `content="11"`, counter hiển thị `01 / 06` đến `06 / 06`.

---

## Slide 8 — Quote / Belief Reinforcement (NNX)

**Vai trò:** Củng cố niềm tin bằng một câu trích dẫn ngắn, dễ nhớ.  
**Background:** `#1a3d24` (NNX Dark Green tối hơn) | **Accent:** `#0DB04B` (NNX Green)

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Quote | Câu nói liên quan trực tiếp chủ đề | ≤ 20 từ | "Biết mình không biết gì..." (font 52px) |
| Author | Tên người nói | ≤ 4 từ | "Charlie Munger" |
| Role | Vai trò / ngữ cảnh | ≤ 6 từ | "Phó Chủ tịch · Berkshire Hathaway" |

**Quy tắc:**
- Chỉ dùng quote khi thật sự hỗ trợ nội dung.
- Không thêm bullet hoặc CTA phụ vào slide này.
- Nếu không có quote phù hợp, đổi thành "Key Insight" với 1 câu đúc kết.

---

## Slide 9 — Behavior Compare / Recap (NNX)

**Vai trò:** Biến nội dung thành bảng hành vi/so sánh để người đọc lưu lại.  
**Background:** `#276031` (NNX Dark Green) | **Cột trái (Không nên):** `#F794D` (NNX Orange) | **Cột phải (Nên làm):** `#0DB04B` (NNX Green)

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Title | Kết luận hành vi | ≤ 10 từ | "Nhà đầu tư mới và trưởng thành" (font 44px) |
| Cột trái | 5 hành vi cần tránh | ≤ 8 từ/item | "Mua theo 'tip' không có căn cứ" (font 17px) |
| Cột phải | 5 hành vi thay thế | ≤ 8 từ/item | "Mua dựa trên nghiên cứu và mục tiêu" (font 17px) |

**Quy tắc:**
- Hai cột phải đối ứng cùng cấp độ hành vi (1-1).
- Slide này nên đủ rõ để chụp màn hình lưu riêng.
- Không dùng cột phải để mở thêm nội dung mới chưa đề cập.

---

## Slide 10 — CTA (NNX)

**Vai trò:** Chốt một hành động cụ thể (lưu bài, theo dõi, đăng ký, tải tài liệu).  
**Background:** `#276031` (NNX Dark Green) | **Text:** `#FFFFFF` | **Accent:** `#0DB04B` (NNX Green)  
**Logo:** `assets/logo-full-light.png` — header chuẩn (shared.css). **KHÔNG** đặt thêm logo-tagline.png vào trong body slide.

| Vùng | Format | Giới hạn | Ví dụ |
|------|--------|----------|-------|
| Eyebrow | Mốc hành động | ≤ 4 từ | "Bắt đầu đúng cách" |
| Headline | Brand promise | ≤ 7 từ | "Hiểu tiền đúng. Tăng trưởng vững." (font 72px) |
| Body | Lý do theo dõi / lưu bài | ≤ 14 từ | "Theo dõi để nhận nội dung mỗi tuần." (font 20px) |
| Primary CTA | 1 hành động chính | ≤ 4 từ | "Theo dõi xFinance" |
| Action cards | 2–3 điểm liên hệ | ≤ 5 từ/card | "Newsletter · Website · Lưu bài" |

**Quy tắc:**
- Nút chính chỉ có 1 hành động.
- Action cards chỉ hỗ trợ CTA, không tạo lời kêu gọi cạnh tranh.
- **KHÔNG thêm logo thứ 2 vào body** — header đã có logo-full-light.png là đủ.
- **KHÔNG dùng `<span class="deco">` hoặc bất kỳ decorative element `position:absolute` nào** làm con trực tiếp của `.slide` — WeasyPrint biến chúng thành grid cell, render như content thật.
- **CSS `.body` của CTA slide:** dùng `padding:0 0 32px` (KHÔNG phải `padding:0`) — cần padding-bottom để nút CTA không sát border footer.

**CSS pattern chuẩn cho slide 10:**
```css
.s-cta .body {
  padding: 0 0 32px;              /* ← padding-bottom bắt buộc */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
}
.s-cta .btn-primary {
  display: table;                 /* ← KHÔNG dùng inline-flex */
  white-space: nowrap;
  background: var(--datnung); color: var(--kem);
  padding: 20px 28px; border-radius: 4px;
  font-size: 15px; letter-spacing: .16em;
  text-transform: uppercase; font-weight: 700;
}
```
