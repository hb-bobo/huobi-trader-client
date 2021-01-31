import React, { useState } from 'react';
import { withRouter } from 'umi';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer, RouteContext } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import './index.less';

export default withRouter(({ history, location, ...props }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <ProLayout
      // {...defaultProps}
      location={{
        pathname: location.pathname,
      }}
      route={{
        routes: (props as any).route.routes,
      }}
      title={''}
      logo={null}
      collapsed={collapsed}
      fixSiderbar
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            history.push(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
      headerContentRender={() => {
        return (
          <div
            onClick={() => setCollapsed(!collapsed)}
            style={{
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        );
      }}
    >
      <PageContainer>
        <div
          style={{
            height: '120vh',
          }}
        >
          {props.children}
        </div>
      </PageContainer>
    </ProLayout>
  );
});
