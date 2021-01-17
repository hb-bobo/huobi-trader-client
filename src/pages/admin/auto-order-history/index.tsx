import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Table, Button, message, Switch } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormDigit,
  ProFormSwitch,
  ProFormSelect,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
import { trade } from '@/api';

interface Props {}

const prefixCls = `auto-order-history`;

const AutoOrder: React.FC<Props> = props => {
  const {} = props;
  const [autoOrderHistoryList, setAutoOrderHistoryList] = React.useState<any[]>(
    [],
  );

  useEffect(() => {
    queryAutoOrderHistory();
  }, []);

  function queryAutoOrderHistory() {
    trade.queryAutoOrderHistory().then(data => {
      setAutoOrderHistoryList(data);
    });
  }

  const columns = [
    {
      title: 'symbol',
      key: 'symbol',
      dataIndex: 'symbol',
    },
    {
      title: 'price',
      key: 'price',
      dataIndex: 'price',
    },
    {
      title: 'amount',
      key: 'amount',
      dataIndex: 'amount',
    },
    {
      title: 'type',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: 'time',
      key: 'time',
      dataIndex: 'time',
    },
  ];
  return (
    <div className={classnames(prefixCls)}>
      <Table columns={columns} dataSource={autoOrderHistoryList} />
    </div>
  );
};
export default AutoOrder;
