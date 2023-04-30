/*
 * @Author: sfy
 * @Date: 2023-04-26 22:52:25
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-30 14:57:59
 * @FilePath: /sqlG/.dumirc.ts
 * @Description: update here
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'sqlG',
  },
  base: '/sqlG/',
  mfsu: false,
  resolve: { entryFile: './src/index.ts' },
  publicPath: '/sqlG/',
});
