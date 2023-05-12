/*
 * @Author: sfy
 * @Date: 2023-04-26 22:52:25
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-12 23:52:32
 * @FilePath: /sqlG/.dumirc.ts
 * @Description: update here
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'sqlG',
    footer:false,
    logo: 'http://si7578.gitee.io/vultures/logo.png',
    socialLinks: {
      github: 'https://github.com/InternationSi/sqlG',
    },
  },
  base: '/sqlG/',
  mfsu: false,
  resolve: { entryFile: './src/index.ts' },
  publicPath: '/sqlG/',
});
