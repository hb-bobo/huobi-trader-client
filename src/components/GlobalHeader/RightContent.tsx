import { Tooltip, Tag } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';

import Avatar from './AvatarDropdown';

import styles from './index.less';


export type SiderTheme = 'light' | 'dark';
export interface GlobalHeaderRightProps extends Partial<{}> {
  theme?: SiderTheme | 'realDark';
  layout?: 'sidemenu' | 'topmenu';
}

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = (props) => {
  const { theme, layout = 'topmenu' } = props;
  let className = styles.right;


  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      {/* <Tooltip title="使用文档">
        <a
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip> */}
      <Avatar  />

    </div>
  );
};

export default GlobalHeaderRight
