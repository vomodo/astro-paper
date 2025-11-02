# HƯỚNG DẪN SETUP GITHUB PAGES VÀ CLOUDFLARE CHO DUCVU.VN

## BƯỚC 1: Setup GitHub Repository

### 1.1. Tạo Repository mới (nếu chưa có)
```bash
cd C:\Users\admin\Documents\astro-paper\astro-paper
git init
git add .
git commit -m "Initial commit: AstroPaper for ducvu.vn"
```

### 1.2. Push code lên GitHub
```bash
# Thay YOUR_GITHUB_USERNAME bằng username thực
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ducvu-blog.git
git branch -M main
git push -u origin main
```

## BƯỚC 2: Enable GitHub Pages

1. Truy cập repository trên GitHub
2. Vào **Settings** → **Pages**
3. Trong **Source**, chọn:
   - Source: **GitHub Actions**
4. Click **Save**

## BƯỚC 3: Setup GitHub Actions Permissions

1. Vào **Settings** → **Actions** → **General**
2. Scroll xuống **Workflow permissions**
3. Chọn: **Read and write permissions**
4. Check: ☑️ **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

## BƯỚC 4: Di chuyển workflows đã tạo

```bash
# Di chuyển workflows từ thư mục ngoài vào trong project
cd C:\Users\admin\Documents\astro-paper\astro-paper
xcopy C:\Users\admin\Documents\astro-paper\.github .github\ /E /I /Y
```

Hoặc thủ công:
- Copy folder `.github` từ `C:\Users\admin\Documents\astro-paper\.github`
- Paste vào `C:\Users\admin\Documents\astro-paper\astro-paper\.github`

## BƯỚC 5: Test deployment

```bash
cd C:\Users\admin\Documents\astro-paper\astro-paper
git add .
git commit -m "Add GitHub Actions workflows"
git push origin main
```

Sau khi push:
1. Vào tab **Actions** trên GitHub
2. Xem workflow "Deploy Astro Paper to GitHub Pages" đang chạy
3. Đợi build và deploy hoàn tất (khoảng 2-3 phút)
4. Site sẽ available tại: `https://YOUR_GITHUB_USERNAME.github.io/ducvu-blog/`

## BƯỚC 6: Cấu hình CloudFlare cho ducvu.vn

### 6.1. Thêm CNAME record

Đăng nhập CloudFlare → DNS → Add record:

```
Type: CNAME
Name: @ (hoặc www)
Content: YOUR_GITHUB_USERNAME.github.io
Proxy status: Proxied (màu cam)
TTL: Auto
```

### 6.2. Thêm CNAME file vào project

```bash
cd C:\Users\admin\Documents\astro-paper\astro-paper\public
echo ducvu.vn > CNAME
```

### 6.3. Push CNAME file lên GitHub

```bash
git add public/CNAME
git commit -m "Add CNAME for ducvu.vn"
git push origin main
```

### 6.4. Configure custom domain trên GitHub

1. Vào **Settings** → **Pages**
2. Trong **Custom domain**, nhập: `ducvu.vn`
3. Click **Save**
4. Đợi DNS check (có thể mất vài phút đến vài giờ)
5. Khi DNS check xong, check ☑️ **Enforce HTTPS**

## BƯỚC 7: Cập nhật config.ts với domain chính thức

File đã được cập nhật với:
```typescript
website: "https://ducvu.vn/"
```

Nếu cần điều chỉnh thêm, edit file:
`C:\Users\admin\Documents\astro-paper\astro-paper\src\config.ts`

## BƯỚC 8: Verify deployment

1. Truy cập https://ducvu.vn (đợi DNS propagate ~5-30 phút)
2. Kiểm tra HTTPS working
3. Test navigation, dark mode, search
4. Check các social links hoạt động

## WORKFLOW TỰ ĐỘNG HOẠT ĐỘNG NHƯ SAU:

### Deploy workflow (deploy.yml)
- **Trigger**: Mỗi khi push code vào branch `main`
- **Action**: Build Astro site và deploy lên GitHub Pages
- **Kết quả**: Site được update tự động tại ducvu.vn

### Scheduled Post workflow (scheduled-post.yml)
- **Trigger**: 
  - 00:00 UTC+7 (17:00 UTC ngày trước)
  - 09:00 UTC+7 (02:00 UTC)
  - 21:00 UTC+7 (14:00 UTC)
- **Action**: 
  - Check xem có bài mới trong `src/data/blog/` không
  - Nếu có, trigger deploy workflow
- **Kết quả**: Tự động publish bài viết vào 3 khung giờ mỗi ngày

## CÁCH THÊM BÀI VIẾT MỚI

### Cách 1: Manual (Local)

```bash
# Tạo file mới trong src/data/blog/
cd C:\Users\admin\Documents\astro-paper\astro-paper\src\data\blog
# Tạo file .md với nội dung như guide AI đã cung cấp

# Commit và push
git add src/data/blog/[slug].md
git commit -m "feat: add post about [topic]"
git push origin main
```

### Cách 2: Thông qua GitHub Web UI

1. Vào repository trên GitHub
2. Navigate: `src/data/blog/`
3. Click **Add file** → **Create new file**
4. Tên file: `[slug].md`
5. Paste nội dung markdown
6. Commit changes → Push vào `main`

### Cách 3: Thông qua N8N Automation (Recommended)

N8N workflow sẽ:
1. Generate content bằng AI
2. Tạo file markdown đúng format
3. Push trực tiếp lên GitHub
4. Trigger auto-deployment

## TROUBLESHOOTING

### Issue 1: Build failed
- Check **Actions** tab để xem error log
- Thường là do syntax error trong markdown hoặc config

### Issue 2: Domain không resolve
- Kiểm tra CNAME record trên CloudFlare
- Đợi DNS propagate (có thể 24-48h)
- Verify CNAME file trong `public/CNAME`

### Issue 3: Scheduled workflow không chạy
- GitHub có thể disable scheduled workflows nếu repo không active
- Cần push commit ít nhất 1 lần/60 ngày

### Issue 4: HTTPS không hoạt động
- Ensure CloudFlare proxy status là "Proxied"
- Enable "Enforce HTTPS" trong GitHub Pages settings
- Set SSL/TLS encryption mode trong CloudFlare: "Full"

## MAINTENANCE

### Cập nhật dependencies (khuyến nghị mỗi tháng)

```bash
cd C:\Users\admin\Documents\astro-paper\astro-paper
pnpm update
pnpm run build  # Test build locally
git add pnpm-lock.yaml package.json
git commit -m "chore: update dependencies"
git push origin main
```

### Backup

GitHub đã là backup sẵn, nhưng nên:
1. Export repository định kỳ
2. Backup `src/data/blog/` folder ra external drive
3. Lưu trữ config files quan trọng

---

**Hoàn tất! Website ducvu.vn giờ đã hoạt động với auto-deployment và scheduled posting.**
