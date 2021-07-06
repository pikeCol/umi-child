import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  mountElementId: 'app1',
  publicPath: '/app1/',
  outputPath: './dist/app1',
  qiankun: {
    slave: {},
  },
});
