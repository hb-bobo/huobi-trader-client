import React from 'react';
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  DefaultFooter,
} from '@ant-design/pro-layout';
import { Link } from 'umi';
import RightContent from '@/components/GlobalHeader/RightContent';
import Home from './home';
// import Admin from './admin';

import './index.less';
import '../ws';
export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
}

const settings: Settings = {
  navTheme: 'dark',
  primaryColor: '#13C2C2',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  menu: {
    locale: true,
  },
  title: 'Trader',
  iconfontUrl: 'https://huobiapi.github.io/docs/spot/v1/cn/images/logo.svg',
};
const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map(item => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : [],
    };
    return localItem as MenuDataItem;
  });
export default (props: BasicLayoutProps) => {
  return (
    <ProLayout
      menuDataRender={menuDataRender}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          menuItemProps.children ||
          !menuItemProps.path
        ) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      rightContentRender={() => <RightContent />}
      {...settings}
      {...props}
    >
      {/* <Home /> */}
    </ProLayout>
  );
};
