export const URLS = {
  site: "/site-setting?populate=*",
  about: "/about?populate=*",
  navigation: "/navigation-items?populate=*",
  posts:
    "/contents?filters[type][$eq]=post&filters[publishedAt][$notNull]=true&populate=*",
  postBySlug: (slug: string) =>
    `/contents?filters[slug][$eq]=${slug}&filters[type][$eq]=post&populate=*`,
};
