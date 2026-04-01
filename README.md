# Fayne Blog

基于 Astro 的个人博客项目，部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 构建与预览

```bash
npm run build
npm run preview
```

## 目录说明

- `src/content/posts`：Markdown 博客文章
- `src/pages`：页面路由（首页、博客、标签、关于、RSS）
- `src/layouts/Layout.astro`：全局布局与导航
- `.github/workflows/deploy.yml`：自动部署到 GitHub Pages

## 写作格式

每篇文章使用 Frontmatter：

```yaml
---
title: 文章标题
date: 2026-04-01
summary: 一句话摘要
tags:
  - 标签1
  - 标签2
draft: false
---
```
