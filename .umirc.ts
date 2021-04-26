import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'browser',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      name: 'home',
      routes: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: '@/pages/dashboard/index',
        },
        // {
        //   path: '/dashboard-test',
        //   name: 'dashboard-test',
        //   component: '@/pages/dashboard-test/index',
        // },
        {
          path: '/login',
          component: '@/pages/login/index',
          name: 'login',
          routes: [],
        },
        {
          path: '/admin',
          component: '@/pages/admin/index',
          name: 'admin',
          routes: [
            {
              path: '/admin/watch-symbol',
              name: '监听的币种',
              component: '@/pages/admin/watch-symbol/index',
            },
            {
              path: '/admin/trade-account',
              name: '交易账户',
              component: '@/pages/admin/trade-account/index',
            },
            {
              path: '/admin/auto-order',
              name: '自动交易(现货)',
              component: '@/pages/admin/auto-order/index',
            },
            {
              path: '/admin/ auto-order-contract',
              name: '自动交易(合约)',
              component: '@/pages/admin/ auto-order-contract/index',
            },
            {
              path: '/admin/auto-order-history',
              name: '自动交易记录',
              component: '@/pages/admin/auto-order-history/index',
            },
          ],
        },
      ],
    },
  ],
  // 配置 external
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    'socket.io-client': 'window.io',
  },
  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
          'https://lib.baomitu.com/socket.io/2.3.0/socket.io.dev.js',
        ]
      : [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
          'https://lib.baomitu.com/socket.io/2.3.0/socket.io.js',
        ],
  antd: {
    // dark: true,
    compact: true,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3003',
      changeOrigin: true,
      withCredentials: true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
  dynamicImport: {},
  chunks: ['vendors', 'umi'],
  chainWebpack: function(config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
});
