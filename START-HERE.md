# Bắt đầu tại đây — xFinance Carousel System

> Hướng dẫn dành cho **bạn** (người dùng). Claude đọc `CLAUDE.md`.

---

## 3 Pipeline render — chọn theo trigger words

| Pipeline | Khi nào dùng | Trigger words | Output |
|----------|-------------|---------------|--------|
| **HTML** (default) | Brand fidelity 100%, free | *"tạo carousel..."* | PDF + JPG qua WeasyPrint |
| **ChatGPT Browser** ⚡ | Auto A→Z, dùng quota ChatGPT (free hoặc Plus) | *"tạo carousel chatgpt..."* / *"...auto..."* / *"...browser..."* | PDF + PNG, gen + download tự động qua Claude in Chrome |
| **ChatGPT Paste** | Khi không có Claude in Chrome / muốn kiểm soát thủ công | *"tạo prompt chatgpt..."* | Prompt copy-paste vào ChatGPT |

**Setup lần đầu cho ChatGPT Browser pipeline** — xem [section dưới](#setup-pipeline-chatgpt-browser-1-lần-duy-nhất). Chỉ cần cài extension Claude in Chrome + login ChatGPT một lần.

---

## Cách dùng — chỉ cần 1 câu

Nói với Claude bất kỳ chủ đề nào:

> *"Tạo carousel về 7 sai lầm đầu tư người mới"*
> *"Tạo carousel hướng dẫn mở tài khoản chứng khoán"*
> *"Tạo carousel so sánh gửi ngân hàng vs quỹ mở"*
> *"Tạo carousel chatgpt về 5 cách tiết kiệm Gen Z"* ← pipeline ChatGPT Browser (auto)

Claude tự chọn template, kênh, writer, render mode phù hợp — rồi **thông báo ngay** trước khi làm:

```
🚀 7 Sai Lầm Đầu Tư Người Mới
─────────────────────────────
Template : default       → versatile, 10 slides
Kênh     : Facebook      → default
Writer   : Default       → brand voice chuẩn
Slides   : 10            → theo config template
─────────────────────────────
→ Đọc brand context + template config, sau đó tạo outline...
```

Bạn thấy rõ Claude đang làm gì. Muốn thay đổi gì — nói trước khi outline xong.

---

## Điều chỉnh nhanh trong prompt

Thêm vào câu lệnh để override mặc định:

| Muốn thay | Cách nói |
|-----------|---------|
| Kênh cụ thể | *"...đăng LinkedIn"* / *"...cho TikTok"* |
| Writer khác | *"...giọng Hoàng Nam"* / *"...giọng Minh Anh"* |
| Có số liệu | *"...dùng số liệu trong _intel/trends/..."* |

**Ví dụ kết hợp:**
> *"Tạo carousel về hành trình từ nợ đến tiết kiệm, đăng LinkedIn, giọng Minh Anh"*

---

## Template — Hiện tại

| Template | Dùng khi | Ví dụ prompt |
|----------|---------|-------------|
| **default** *(duy nhất)* | Mọi dạng: sai lầm, tips, how-to, story, so sánh | *"7 sai lầm đầu tư người mới"*, *"Cách mở tài khoản"* |

Template `default` thích nghi với nhiều dạng nội dung — Claude tự điều chỉnh label ("Sai lầm" / "Bước" / "Nguyên tắc") theo chủ đề.

*Template chuyên biệt sẽ được thêm dần. Xem kế hoạch tại `_templates/carousel/INDEX.md`.*

---

## 3 Writer — Giọng văn khác nhau

| Writer | Phong cách | Khi nào dùng |
|--------|-----------|-------------|
| *(default — không cần ghi)* | Chuẩn brand xFinance, cân bằng | Hầu hết carousel |
| **Minh Anh** | Phân tích, có cấu trúc, số liệu rõ | Nội dung đầu tư, so sánh chuyên sâu |
| **Hoàng Nam** | Hook mạnh, viral, đánh vào nỗi đau | Listicle, story, content reach cao |

---

## Quy trình — bạn cần làm gì

```
1. Nói chủ đề (1 câu)
       ↓
2. Claude announce cấu hình → xác nhận hoặc yêu cầu thay đổi
       ↓
3. Claude tạo outline → bạn đọc và duyệt (hoặc yêu cầu chỉnh)
       ↓
4. Claude tạo file HTML slides → bạn nhận link và mở index.html
```

---

## Setup lần đầu (làm 1 lần duy nhất)

Điền thông tin thực tế của công ty vào:

| File | Cần điền |
|------|---------|
| `_company/company-profile.md` | Tên, website, sứ mệnh, sản phẩm, USP |
| `_company/target-audience.md` | Chỉnh persona cho đúng khách hàng thực tế |
| `_brand/brand-guidelines.md` | Mã màu, font, kích thước |
| `_brand/voice-tone.md` | Giọng văn, cách xưng hô |

Sau khi điền xong → Claude tự dùng thông tin này cho mọi carousel.

---

## Setup Pipeline ChatGPT Browser (1 LẦN duy nhất / máy)

> Chỉ cần làm nếu bạn muốn dùng pipeline **"tạo carousel chatgpt..."** (auto download ảnh).
> HTML pipeline + ChatGPT Paste pipeline KHÔNG cần setup này.
> KHÔNG cần API key, KHÔNG tốn tiền (dùng quota ChatGPT của bạn — free hoặc Plus đều OK).

### Cài đặt — 3 bước

**Bước 1. Cài extension Claude in Chrome**

Cài extension Claude in Chrome vào Chrome profile bạn dùng làm việc (ví dụ "Ha Work"):
→ [chromewebstore.google.com — search "Claude"](https://chromewebstore.google.com/)

**Bước 2. Login ChatGPT trong cùng profile đó**

Mở `chatgpt.com` ở profile vừa cài extension. Đăng nhập tài khoản ChatGPT (free hoặc Plus đều dùng được — Plus thì không bị giới hạn ảnh sớm).

**Bước 3. Connect extension với Cowork**

Click icon Claude trên thanh extension → "Connect" để Cowork lái được browser này.

### Cách dùng — 1 câu

> *"Tạo carousel chatgpt về 5 sai lầm Gen Z"*

Cowork sẽ:
1. Auto-detect Claude in Chrome đã kết nối
2. Mở tab ChatGPT
3. Paste mega-prompt vào ChatGPT
4. Đợi gen N ảnh
5. Download N ảnh về `projects/[tên]/output/slides/`
6. Merge thành PDF gộp

### Nếu Claude in Chrome chưa kết nối

Cowork tự fallback sang **paste pipeline** + báo lý do:
> *"⚠️ Claude in Chrome chưa kết nối — fallback sang paste pipeline, bạn copy prompt vào ChatGPT thủ công."*

Bạn vẫn nhận được prompt mega để paste — không bị stuck.

### Limit cần biết

| Aspect | Reality |
|--------|---------|
| ChatGPT Free | ~3-5 lần gen / giờ — đủ cho 1-2 carousel/giờ |
| ChatGPT Plus | Không giới hạn rõ, recommend cho ai làm carousel hàng ngày |
| Latency / 6 ảnh | ~60-180s — nhanh hơn gen từng ảnh |
| Cost | $0 — dùng quota có sẵn |

---

## Tìm ý tưởng & Quản lý nguồn nội dung

Claude có thể chủ động tìm kiếm trên internet và tổng hợp thành ý tưởng carousel sẵn dùng.

### Tìm ý tưởng mới từ internet

> *"Tìm ý tưởng về quản lý chi tiêu"*
> *"Tìm nguồn số liệu về đầu tư Gen Z Việt Nam"*
> *"Có gì hay về lạm phát 2025 không?"*

Claude sẽ search web → lọc → lưu vào `_intel/` → cập nhật danh sách → gợi ý ngay:

```
🔍 Research xong: 8 nguồn → 3 intel đáng dùng được lưu

📋 Gợi ý carousel:

[I001] Listicle — "7 lý do Gen Z không tiết kiệm được"
       Nguồn: Nielsen 2024 | Hook: "54% người trẻ không có tiết kiệm định kỳ"

[I002] Problem-solution — "Lạm phát đang ăn mòn tiền của bạn"
       Nguồn: GSO Q1/2025 | Hook: "Lạm phát 4.2% — tiền gửi ngân hàng đang thua"

→ Nói "Tạo carousel từ I001" để bắt đầu ngay.
```

### Xem và quản lý danh sách ý tưởng

| Lệnh | Kết quả |
|------|---------|
| *"Xem ý tưởng chưa dùng"* | Danh sách intel status `new` |
| *"Gợi ý carousel"* | Claude chọn 3–5 ý tưởng tốt nhất từ kho intel |
| *"Tạo carousel từ [ID]"* | Dùng intel đó làm nguồn, chạy toàn bộ workflow |
| *"Đánh dấu I001 đã dùng trong [tên-project]"* | Cập nhật trạng thái |
| *"Archive I003"* | Đánh dấu không còn dùng được |

Toàn bộ danh sách lưu tại `_intel/INDEX.md` — Claude tự cập nhật.

### Tự thêm intel thủ công

Paste nhanh vào `_intel/raw/dump.md` khi thấy nội dung hay.
Hoặc mention trong prompt khi tạo carousel: *"dùng số liệu trong _intel/trends/..."*

---

## Dùng template này cho brand khác?

Xem `CUSTOMIZE.md` — checklist đầy đủ những gì cần thay.
