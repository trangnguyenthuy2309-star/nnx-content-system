# Brand Guidelines — Bảo Hiểm NNX

## 1. Bảng màu

### Bảng tổng hợp — màu chuẩn

| Tên                | Hex                                   | RGB           | Vai trò                           |
| ------------------ | ------------------------------------- | ------------- | --------------------------------- |
| **NNX Green**      | `#0DB04B`                             | 7, 177, 82    | Màu chủ đạo, CTA, nổi bật         |
| **NNX Yellow**     | `#FFCB05`                             | 255, 203, 5   | Highlight, badge, điểm nhấn       |
| **NNX Dark Green** | `#276031`                             | 39, 96, 49    | Nền tối, text chính trên nền sáng |
| **NNX Orange**     | `#F794D`                              | 247, 148, 29  | Màu phụ, accent                   |
| **Trắng/Sáng**     | `#FFFFFF` | 255, 255, 255 | Nền chính, text sáng              |

**Màu thứ cấp (dùng phục vụ):**

- Đỏ: `#AE1D0D`
- Tím: `#8F0DAE`
- Xanh dương: `#290DAE`
- Beige: `#F5E7C1`

---

### Chi tiết từng màu

#### NNX Green — `#0DB04B`

- **Vai trò:** Màu chủ đạo của thương hiệu NNX
- **Dùng cho:** CTA button, tiêu đề chính, icon chính, nền slide hero/cover, underline section header
- **Không dùng:** Text body dài — gây mệt mắt; làm nền toàn slide nội dung

#### NNX Yellow — `#FFCB05`

- **Vai trò:** Highlight, badge, điểm nhấn
- **Dùng cho:** Badge số liệu, label nổi bật, highlight từ quan trọng, dấu nhấn nhỏ, border accent
- **Không dùng:** Text body, nền slide chính — chỉ dùng làm điểm nhấn

#### NNX Dark Green — `#276031`

- **Vai trò:** Nền tối, text chính
- **Dùng cho:** Nền slide tối (CTA/Quote), text tiêu đề trên nền sáng, icon phụ, footer
- **Không dùng:** Text body trên nền quá tối — contrast thấp

#### NNX Orange — `#F794D`

- **Vai trò:** Màu phụ, accent
- **Dùng cho:** Icon phụ, border callout, accent line, tag phân loại
- **Không dùng:** Làm màu chủ đạo — chỉ dùng làm bổ sung

#### Trắng/Sáng — `#FFFFFF`

- **Vai trò:** Nền chính, text sáng
- **Dùng cho:** Nền slide content chính, text sáng trên nền tối, khoảng trắng (whitespace)
- **Không dùng:** Không dùng

---

## 2. Typography

### Font chính — Averta Std CY

- **Font:** `Averta Std CY` — font hệ thống NNX
- **Weights dùng:** 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)
- **Fallback:** Arial, Helvetica, sans-serif (nếu font không load)

### Font phụ trợ — UTM Avo

- **Font:** `UTM Avo` — dùng cho các caption, body nhỏ
- **Weights dùng:** 400 (Regular), 700 (Bold)

### Kích thước trên slide 1920×1080 (16:9)

| Element        | Size      | Weight | Font             | Dùng cho                           |
| -------------- | --------- | ------ | ---------------- | ---------------------------------- |
| Cover title    | 160–180px | 700    | Averta           | Tiêu đề slide đầu                  |
| Data headline  | 480px     | 700    | Averta           | Số liệu lớn (Stat slide)           |
| Numbered count | 280px     | 700    | Averta           | Số thứ tự (NNX Green)              |
| Ghost number   | 780–880px | 700    | Averta           | Background decoration (7% opacity) |
| Slide h2       | 72–96px   | 700    | Averta           | Tiêu đề nội dung                   |
| Sub-heading    | 42px      | 600    | Averta           | Phụ đề, label                      |
| Body text      | 22–26px   | 400    | Averta / UTM Avo | Mô tả, paragraph                   |
| Quote          | 88px      | 700    | Averta           | Trích dẫn                          |
| Tag/Label      | 13–14px   | 700    | Averta           | Uppercase, letter-spacing .22em    |
| Footer         | 14px      | 400    | UTM Avo          | Caption, credit                    |

### Kích thước trên slide 1080×1080 (1:1)

| Element      | Size    | Weight | Font             |
| ------------ | ------- | ------ | ---------------- |
| Cover title  | 34px    | 700    | Averta           |
| Slide h3     | 22–26px | 700    | Averta           |
| Body text    | 11–13px | 400    | Averta / UTM Avo |
| Ghost number | 240px   | 700    | Averta           |
| Stat number  | 128px   | 700    | Averta           |
| Tag          | 9–9.5px | 700    | Averta           |

### Quy tắc typography

- Không dùng quá 2 font weight trên một slide
- Tiêu đề KHÔNG viết hoa toàn bộ (ALLCAPS) — chỉ viết hoa chữ đầu câu
- Line height body: 1.5–1.6 | Line height headline: 1.0–1.15
- Letter-spacing headline: −0.02em đến −0.035em (tight)
- Letter-spacing uppercase labels: +0.18em đến +0.24em
- Ưu tiên Averta cho tiêu đề, UTM Avo cho body nhỏ

---

## 3. Logo

**Nguồn gốc (canonical):** `_brand/logo/` — đây là thư mục gốc, KHÔNG chỉnh sửa trực tiếp.  
Khi dùng trong template, **copy** vào `assets/` của template với tên semantic (xem bảng).

### Bảng logo asset

| File gốc              | Tên semantic trong template | Kích thước | Dùng khi                                                      |
| --------------------- | --------------------------- | ---------- | ------------------------------------------------------------- |
| `logo-full-light.png` | `logo-full-light.png`       | 166K       | Slide nền tối `#276031` hoặc nền xanh — **mọi slide content** |
| `logo-full-dark.png`  | `logo-full-dark.png`        | 176K       | Trang index/preview nền sáng `#FFFFFF`                        |

### Quy tắc sử dụng

- Trên nền tối (NNX Dark Green `#276031` hoặc NNX Green `#0DB04B`) → dùng `logo-full-light.png` (wordmark sáng)
- Trên nền sáng (`#FFFFFF`) → dùng `logo-full-dark.png` (wordmark tối)
- Logo phải có clear space ít nhất bằng chiều cao chữ "x" trong logo
- Trong HTML template: `<img src="../assets/logo-full-light.png" alt="Bảo Hiểm NNX">`
- Chiều cao logo trong header slide 1920×1080: `height: 72px`

### Tuyệt đối không được

- Thay đổi tỷ lệ logo (width/height phải giữ nguyên tỷ lệ)
- Thêm shadow, outline, gradient lên logo
- Đặt logo trên background phức tạp, khó đọc
- Chỉnh sửa file trong `_brand/logo/` mà không backup
- Dùng logo từ nguồn khác ngoài `_brand/logo/`

---

## 4. Spacing & Layout

### Grid cơ bản (1080×1080px — Instagram/Facebook square)

- Margin: 64px mỗi cạnh
- Gutter giữa các cột: 24px
- Safe zone cho text: tối thiểu 80px từ mép

### Tỷ lệ slide theo kênh

| Kênh                         | Kích thước  | Tỷ lệ  | Ưu tiên     |
| ---------------------------- | ----------- | ------ | ----------- |
| Facebook / Instagram (vuông) | 1080×1080px | 1:1    | ✅ **Chính** |
| LinkedIn                     | 1080×1350px | 4:5    | Phụ         |
| TikTok Carousel              | 1080×1920px | 9:16   | Phụ         |
| Facebook Landscape           | 1200×628px  | 1.91:1 | Phụ         |

**Màu nền slide chính:** Trắng `#FFFFFF` hoặc NNX Green `#0DB04B`  
**Màu nền slide CTA/Quote:** NNX Dark Green `#276031` hoặc NNX Green `#0DB04B`

---

## 5. Những điều KHÔNG được làm với brand

- ❌ Không dùng màu ngoài 5 màu chuẩn (NNX Green, NNX Yellow, NNX Dark Green, NNX Orange, Trắng) mà không có lý do
- ❌ Không sử dụng gradient lòe loẹt, nhiều màu trên nền slide
- ❌ Không dùng clipart, icon miễn phí chất lượng thấp
- ❌ Không dùng ảnh có watermark hoặc credit không rõ
- ❌ Không đặt text màu NNX Dark Green (`#276031`) trên nền tối — contrast thấp
- ❌ Không sử dụng quá 3 màu trên một slide (trừ white/nền background)
- ❌ Không dùng font ngoài Averta Std CY (font chính) hoặc UTM Avo (phụ)
- ❌ Không dùng NNX Yellow (`#FFCB05`) làm màu nền toàn slide — chỉ dùng làm điểm nhấn nhỏ
- ❌ Không tự ý thêm logo đối tác/bên thứ ba mà không có sự cho phép
- ❌ Không đặt text body dài trên nền NNX Green — gây mệt mắt, dùng nền Trắng thay
- ❌ Không chỉnh sửa logo (resize bất cân xứng, thêm effect, đặt trên nền phức tạp)
