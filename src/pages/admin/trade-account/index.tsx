import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Table, Button, message, Switch } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormSwitch,
  ProFormSelect,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
import { trade } from '@/api';
import { TradeAccountDto } from '@/interface/trade';

interface Props {}

const prefixCls = `trade-account`;

const TradeAccount: React.FC<Props> = props => {
  const {} = props;
  const [tradeAccountList, setTradeAccountList] = React.useState<
    TradeAccountDto[]
  >([]);

  useEffect(() => {
    getWatchSymbol();
  }, []);

  function getWatchSymbol() {
    trade.queryTradeAccount().then(data => {
      console.log(data);
      setTradeAccountList(data);
    });
  }
  function postTradeAccount(postData: TradeAccountDto) {
    trade.postTradeAccount(postData).then(data => {
      const newTradeAccountList = [...tradeAccountList];
      const msg = postData.id ? '更新成功' : '提交成功';
      if (postData.id) {
        const index = newTradeAccountList.findIndex(
          row => row.id === postData.id,
        );
        if (index > -1) {
          newTradeAccountList[index] = {
            ...newTradeAccountList[index],
            ...postData,
          };
        }
      } else {
        newTradeAccountList.push(data);
      }
      setTradeAccountList(newTradeAccountList);
      message.success(msg);
    });
  }
  const columns = [
    {
      title: '自动交易',
      key: 'auto_trade',
      dataIndex: 'auto_trade',
      render: (text: string, record: any, index: number) => (
        <Switch checked={record.auto_trade} />
      ),
    },
    {
      title: '交易所',
      key: 'exchange',
      dataIndex: 'exchange',
    },
    {
      title: 'access_key',
      key: 'access_key',
      dataIndex: 'access_key',
    },
    {
      title: 'secret_key',
      key: 'secret_key',
      dataIndex: 'secret_key',
    },
    {
      title: 'uid',
      key: 'uid',
      dataIndex: 'uid',
    },
    {
      title: '交易密码',
      key: 'trade_password',
      dataIndex: 'trade_password',
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: any, index: number) => (
        <div key={index}>
          <ModalForm
            title="编辑"
            trigger={
              <Button type="primary">
                <PlusOutlined />
                编辑
              </Button>
            }
            modalProps={{
              onCancel: () => console.log('run'),
            }}
            onFinish={async values => {
              postTradeAccount({ ...values, id: record.id } as TradeAccountDto);
              return true;
            }}
            initialValues={record}
          >
            <ProFormText width="s" name="exchange" label="exchange" />
            <ProFormText width="s" name="access_key" label="access_key" />
            <ProFormText width="s" name="secret_key" label="secret_key" />
            <ProFormText width="s" name="uid" label="uid" />
            <ProFormText width="s" name="trade_password" label="交易密码" />
            <ProFormSwitch name="auto_trade" label="auto_trade" />
          </ModalForm>
          |
          <Button
            danger
            type="text"
            onClick={() => {
              trade.removeTradeAccount(record.id).then(data => {
                message.success('删除成功');
                getWatchSymbol();
              });
            }}
          >
            删除
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className={classnames(prefixCls)}>
      <ModalForm
        title="新建表单"
        trigger={
          <Button type="primary">
            <PlusOutlined />
            新建表单
          </Button>
        }
        modalProps={{
          onCancel: () => console.log('run'),
        }}
        onFinish={async values => {
          postTradeAccount(values as TradeAccountDto);
          return true;
        }}
        initialValues={{
          exchange: 'huobi',
          auto_trade: true,
        }}
      >
        <ProFormText width="s" name="exchange" label="exchange" />
        <ProFormText width="s" name="access_key" label="access_key" />
        <ProFormText width="s" name="secret_key" label="secret_key" />
        <ProFormText width="s" name="uid" label="uid" />
        <ProFormText width="s" name="trade_password" label="交易密码" />
        <ProFormSwitch name="auto_trade" label="auto_trade" />
      </ModalForm>
      <Table columns={columns} dataSource={tradeAccountList} />
    </div>
  );
};
export default TradeAccount;
