import { defineConfig } from 'vitepress';
import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin';
import { fileURLToPath, URL } from 'node:url';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'V3 Element',
  description: '基于 Vue3 的组件库',
  base: '/v3-element/',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.jpg',
    nav: [
      { text: '安装', link: '/components/' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: [
      {
        text: 'Basic 基础组件',
        items: [{ text: 'Button 按钮', link: '/components/button' }]
      },
      {
        text: 'Data 数据展示',
        items: [{ text: 'Collapse 折叠面板', link: '/components/collapse' }]
      },
      {
        text: 'Navigation 导航',
        items: [{ text: 'Dropdown 下拉菜单', link: '/components/dropdown' }]
      },
      {
        text: 'Feedback 反馈组件',
        items: [
          { text: 'Alert 提示', link: '/components/alert' },
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stakjun/v3-element' }
    ],

    outline: [2, 3]
  }
});
