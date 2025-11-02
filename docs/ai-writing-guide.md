# HƯỚNG DẪN AI VIẾT BÀI CHO DUCVU.VN BLOG

## SYSTEM MESSAGE (Cho N8N Agent)

```
Bạn là AI Content Writer chuyên nghiệp cho blog cá nhân ducvu.vn. 

THÔNG TIN TÁC GIẢ:
- Tên: Duc Vu
- Chuyên môn: Kinh doanh, Công nghệ, Marketing
- Phong cách: Chuyên sâu, thực tiễn, dựa trên kinh nghiệm thực tế
- Ngôn ngữ: Tiếng Việt
- Đối tượng: Doanh nhân, marketer, người làm công nghệ tại Việt Nam

NHIỆM VỤ:
Viết bài blog chất lượng cao, cung cấp giá trị thực tiễn, chia sẻ kinh nghiệm và insight về các chủ đề được giao.

YÊU CẦU ĐỊNH DẠNG:
- Frontmatter phải đúng format markdown cho AstroPaper
- Sử dụng tiếng Việt có dấu chuẩn
- Tone giọng: Chuyên nghiệp nhưng gần gũi, dễ hiểu
- Độ dài: 1500-2500 từ (trừ khi có yêu cầu khác)

TIÊU CHÍ CHẤT LƯỢNG:
1. Nội dung phải có giá trị thực tiễn, không chung chung
2. Đưa ra ví dụ cụ thể, case study khi có thể
3. Có cấu trúc rõ ràng với heading, subheading
4. Kết luận với call-to-action hoặc takeaway rõ ràng
5. SEO-friendly: title, description, tags phù hợp
```

## PROMPT TEMPLATE (Cho từng bài viết)

```
Viết một bài blog cho ducvu.vn với thông tin sau:

CHỦ ĐỀ: [Chủ đề cụ thể]
CATEGORY: [Kinh doanh / Công nghệ / Marketing / Kỹ năng / Khác]
KEYWORDS: [Keywords chính, cách nhau bởi dấu phẩy]
FOCUS: [Góc độ/điểm nhấn của bài viết]

YÊU CẦU CỤ THỂ:
- Độ dài: [Số từ hoặc để mặc định 1500-2500 từ]
- Tone: [Professional / Conversational / Technical]
- Audience level: [Beginner / Intermediate / Advanced]

OUTPUT FORMAT:
Tạo file markdown với cấu trúc sau:

\`\`\`markdown
---
author: Duc Vu
pubDatetime: [YYYY-MM-DDTHH:MM:SS.000Z - thời gian hiện tại UTC]
title: "[Tiêu đề bài viết - Tối đa 60 ký tự, hấp dẫn, SEO-friendly]"
slug: [url-slug-khong-dau]
featured: false
draft: false
tags:
  - [tag-1]
  - [tag-2]
  - [tag-3]
description: "[Mô tả ngắn gọn 120-160 ký tự cho SEO]"
---

[Đoạn mở đầu hấp dẫn, giới thiệu vấn đề hoặc câu hỏi chính - 2-3 câu]

## Mục lục

## Giới thiệu / Bối cảnh

[Phần giới thiệu chi tiết về chủ đề, tại sao nó quan trọng, vấn đề cần giải quyết]

## [Heading chính 1]

[Nội dung phần 1 với ví dụ cụ thể, data nếu có]

### [Subheading 1.1]

[Chi tiết]

### [Subheading 1.2]

[Chi tiết]

## [Heading chính 2]

[Nội dung phần 2...]

## [Heading chính 3]

[Nội dung phần 3...]

## Case Study / Ví dụ Thực tế

[Chia sẻ case study, ví dụ áp dụng thực tế nếu có]

## Những Điều Cần Tránh / Common Mistakes

[Liệt kê những sai lầm thường gặp]

## Kết luận

[Tóm tắt những điểm chính, takeaway quan trọng]

## Hành động Tiếp theo

[Gợi ý bước tiếp theo cho người đọc]
\`\`\`

LƯU Ý QUAN TRỌNG:
1. Title phải unique, không trùng với bài cũ
2. Slug phải là URL-friendly (lowercase, dấu gạch ngang, không dấu)
3. Tags: Chọn 3-5 tags phù hợp từ: kinh-doanh, marketing, cong-nghe, startup, digital-marketing, 
   automation, ai, productivity, strategy, growth-hacking, analytics, social-media, seo, 
   content-marketing, sales, leadership, management, innovation
4. pubDatetime phải là ISO 8601 format chính xác
5. Description phải súc tích, thu hút và dưới 160 ký tự
6. Nội dung phải có giá trị, không copy paste, không chung chung
```

## WORKFLOW N8N SUGGESTED

### Bước 1: Trigger
- **Schedule Trigger**: 
  - 00:00 UTC+7 (17:00 UTC)
  - 09:00 UTC+7 (02:00 UTC)  
  - 21:00 UTC+7 (14:00 UTC)

### Bước 2: Topic Selection
- **Function Node**: Chọn ngẫu nhiên topic từ list
- Hoặc **HTTP Request**: Lấy trending topics từ API

### Bước 3: AI Content Generation  
- **OpenAI/Anthropic Node**:
  - Model: GPT-4 hoặc Claude 3.5 Sonnet
  - System Message: [Sử dụng System Message ở trên]
  - User Prompt: [Sử dụng Prompt Template với topic cụ thể]
  - Temperature: 0.7
  - Max tokens: 4000

### Bước 4: Content Validation
- **Function Node**: 
  - Check frontmatter format
  - Validate slug uniqueness
  - Check word count
  - Verify tags

### Bước 5: Save to GitHub
- **GitHub Node**:
  - Action: Create File
  - Repository: vomodo/ducvu-blog
  - Path: `src/data/blog/[slug].md`
  - Content: [AI generated markdown]
  - Branch: main
  - Commit message: `feat: add new post about [topic]`

### Bước 6: Notification (Optional)
- **Telegram/Slack Node**: 
  - Thông báo bài viết mới đã được tạo
  - Link preview

## CÁC CHỦ ĐỀ GỢI Ý (Topic Pool)

### KINH DOANH
- Chiến lược khởi nghiệp với ngân sách hạn chế
- Cách xây dựng business model bền vững
- Quản lý dòng tiền cho doanh nghiệp nhỏ
- Tối ưu hóa quy trình vận hành
- Mở rộng thị trường trong thời kỳ khó khăn

### MARKETING
- Growth hacking strategies cho startup
- Content marketing hiệu quả với budget 0đ
- SEO cơ bản cho người mới bắt đầu
- Social media marketing trends 2025
- Email marketing automation
- Cách đo lường ROI marketing chính xác
- Marketing psychology và consumer behavior
- Influencer marketing cho SME

### CÔNG NGHỆ
- No-code tools cho doanh nghiệp
- AI automation cho marketing và sales
- Cloud computing cho SME
- Cybersecurity cơ bản
- Digital transformation roadmap
- Low-code development cho non-tech founders
- API integration và automation workflows
- Tech stack cho startup

### KỸ NĂNG & PRODUCTIVITY
- Time management cho founder
- Decision-making frameworks
- Building effective teams
- Remote work best practices
- Personal branding cho entrepreneurs
- Learning and development strategies
- Mental health cho doanh nhân

## EXAMPLE OUTPUT

\`\`\`markdown
---
author: Duc Vu
pubDatetime: 2025-11-02T10:30:00.000Z
title: "Growth Hacking: 7 Chiến Lược Tăng Trưởng 0 Đồng Cho Startup"
slug: growth-hacking-chien-luoc-tang-truong-0-dong
featured: false
draft: false
tags:
  - growth-hacking
  - marketing
  - startup
  - digital-marketing
description: "Khám phá 7 chiến lược growth hacking hiệu quả mà mọi startup có thể áp dụng ngay cả khi không có ngân sách marketing."
---

Nhiều founder startup thường nghĩ rằng cần ngân sách lớn mới có thể marketing hiệu quả. Nhưng thực tế, một số công ty tỷ đô như Dropbox, Airbnb hay Hotmail đã tăng trưởng bùng nổ với chi phí marketing gần như bằng 0. Bí quyết? Growth hacking.

## Mục lục

## Growth Hacking Là Gì?

Growth hacking là phương pháp marketing tập trung vào tăng trưởng nhanh với chi phí thấp nhất...

[Nội dung tiếp theo...]
\`\`\`

## CHECKLIST TRƯỚC KHI PUBLISH

- [ ] Frontmatter đầy đủ và đúng format
- [ ] Title hấp dẫn, dưới 60 ký tự
- [ ] Slug unique và SEO-friendly
- [ ] Description thu hút, 120-160 ký tự
- [ ] Tags phù hợp (3-5 tags)
- [ ] Nội dung có giá trị thực tiễn
- [ ] Có ví dụ cụ thể hoặc case study
- [ ] Cấu trúc rõ ràng với headings
- [ ] Kết luận và call-to-action
- [ ] Spelling và grammar check
- [ ] Độ dài phù hợp (1500-2500 từ)
- [ ] pubDatetime đúng timezone

---

**Lưu ý:** Tài liệu này dùng cho AI Agent trên N8N để tự động tạo nội dung blog cho ducvu.vn
