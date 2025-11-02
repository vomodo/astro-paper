# DUCVU.VN - Blog Cá nhân

![Deploy Status](https://github.com/YOUR_USERNAME/ducvu-blog/actions/workflows/deploy.yml/badge.svg)

Blog cá nhân của Duc Vu chia sẻ về Kinh doanh, Công nghệ và Marketing.

## 🚀 Tính năng

- ✅ Auto-deploy khi push code mới
- ✅ Scheduled posting 3 lần/ngày (00:00, 09:00, 21:00 UTC+7)
- ✅ AI-powered content generation (N8N + GPT-4/Claude)
- ✅ SEO-optimized với dynamic OG images
- ✅ Dark/Light mode
- ✅ Full-text search với Pagefind
- ✅ RSS feed
- ✅ Responsive design
- ✅ Fast performance (Lighthouse 100)

## 📁 Cấu trúc dự án

```
ducvu-blog/
├── .github/
│   └── workflows/
│       ├── deploy.yml           # Auto-deploy workflow
│       └── scheduled-post.yml   # Scheduled posting workflow
├── docs/
│   ├── ai-writing-guide.md      # Hướng dẫn AI viết bài
│   └── setup-guide.md           # Hướng dẫn setup
├── src/
│   ├── config.ts                # Site configuration
│   ├── constants.ts             # Social links, share links
│   ├── data/
│   │   └── blog/                # Blog posts (markdown)
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
│   ├── CNAME                    # Custom domain config
│   └── assets/
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4.x
- **Search**: Pagefind
- **Deployment**: GitHub Pages + CloudFlare
- **CI/CD**: GitHub Actions
- **Content**: Markdown
- **Automation**: N8N (optional)

## 📝 Thêm bài viết mới

### Cách 1: Manual

Tạo file `.md` trong `src/data/blog/` với format:

```markdown
---
author: Duc Vu
pubDatetime: 2025-11-02T10:30:00.000Z
title: "Tiêu đề bài viết"
slug: tieu-de-bai-viet
featured: false
draft: false
tags:
  - tag1
  - tag2
description: "Mô tả ngắn gọn"
---

Nội dung bài viết...
```

Push lên GitHub:

```bash
git add src/data/blog/your-post.md
git commit -m "feat: add new post about [topic]"
git push origin main
```

### Cách 2: Thông qua N8N

Xem chi tiết trong `docs/ai-writing-guide.md`

## ⚙️ Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🌐 Deployment

### Tự động (Recommended)

Mỗi khi push code vào `main` branch:
1. GitHub Actions tự động build
2. Deploy lên GitHub Pages
3. CloudFlare phục vụ qua ducvu.vn

### Scheduled Posts

Workflow tự động check bài mới 3 lần/ngày:
- 00:00 UTC+7
- 09:00 UTC+7  
- 21:00 UTC+7

Nếu có bài mới, tự động trigger deployment.

## 📚 Documentation

- [Setup Guide](./docs/setup-guide.md) - Hướng dẫn setup từ đầu
- [AI Writing Guide](./docs/ai-writing-guide.md) - Hướng dẫn AI viết bài

## 🔧 Customization

### Site Config

Edit `src/config.ts`:
- Site title, description
- Author info
- Timezone
- Posts per page
- Social links

### Styling

Edit `src/styles/global.css`:
- Color scheme
- Dark/light mode colors
- Typography

### Content

Tất cả blog posts trong `src/data/blog/`

## 📊 Performance

- ⚡ Lighthouse Score: 100/100
- 🎯 SEO Score: 100/100
- ♿ Accessibility: 100/100
- 🏆 Best Practices: 100/100

## 📧 Contact

- Website: [ducvu.vn](https://ducvu.vn)
- Email: duc@ducvu.vn
- LinkedIn: [ducvu-tech](https://linkedin.com/in/ducvu-tech)
- GitHub: [vomodo](https://github.com/vomodo)

## 📄 License

Based on [AstroPaper](https://github.com/satnaing/astro-paper) by Sat Naing - MIT License

---

**Built with ❤️ by Duc Vu**
