export const SITE = {
  website: "https://ducvu.vn/", // ducvu.vn domain
  author: "Duc Vu",
  profile: "https://ducvu.vn/",
  desc: "Chia sẻ kiến thức về Kinh doanh, Công nghệ và Marketing - Blog cá nhân của Duc Vu",
  title: "Duc Vu - Business • Tech • Marketing",
  ogImage: "ducvu-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false, // disable edit button
    text: "Edit page",
    url: "https://github.com/vomodo/ducvu-blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "vi", // Vietnamese language
  timezone: "Asia/Ho_Chi_Minh", // Vietnam timezone
} as const;
