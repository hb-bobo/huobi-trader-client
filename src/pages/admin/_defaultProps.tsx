import React from 'react';
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
} from '@ant-design/icons';
export default {
  route: {
    path: '/admin',
    routes: [
      {
        path: '/admin/welcome',
        name: '欢迎',
        icon: <SmileOutlined />,
        component: () => '欢迎11',
      },
      {
        path: '/admin/watch-symbol',
        name: '监听的币种',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        component: './watch-symbol/index',
      },
      {
        path: '/admin/trade-account',
        name: '交易账户',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        component: './trade-account/index',
      },
    ],
  },
  location: {
    pathname: '/admin',
  },
};
