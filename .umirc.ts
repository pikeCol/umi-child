import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  mountElementId: 'app1',
  base: 'app1',
  publicPath: '/app1/',
  outputPath: './dist/app1',
  qiankun: {
    master: {
      apps: [
        {
          name: 'app2',
          entry: 'http://localhost:8002/app2',
        },
      ],
    },
    slave: {},
  },
});
