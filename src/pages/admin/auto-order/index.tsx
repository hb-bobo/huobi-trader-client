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

const prefixCls = `auto-order`;

const periodOptions = [
  // {
  //   value: '1min',
  //   label: '1min',
  // },
  {
    value: '5min',
    label: '5min',
  },
  {
    value: '15min',
    label: '15min',
  },
  {
    value: '30min',
    label: '30min',
  },
  {
    value: '60min',
    label: '60min',
  },
  {
    value: '4hour',
    label: '4hour',
  },
  {
    value: '1day',
    label: '1day',
  },
];
const AutoOrder: React.FC<Props> = props => {
  const {} = props;
  const [autoOrderConfigList, setAutoOrderConfigList] = React.useState<any[]>(
    [],
  );

  useEffect(() => {
    getWatchSymbol();
  }, []);

  function getWatchSymbol() {
    trade.queryAutoOrder().then(data => {
      setAutoOrderConfigList(data);
    });
  }
  function postAutoOrder(postData: any) {
    if (!postData.id) {
      Object.assign(postData, {
        oversoldRatio: 0.03,
        overboughtRatio: -0.034,
        sellAmountRatio: 1.6,
        buyAmountRatio: 1.6,
      });
    }
    trade.postAutoOrder(postData).then(data => {
      const newAutoOrderConfigList = [...autoOrderConfigList];
      const msg = postData.id ? '更新成功' : '提交成功';
      if (postData.id) {
        const index = newAutoOrderConfigList.findIndex(
          row => row.id === postData.id,
        );
        if (index > -1) {
          newAutoOrderConfigList[index] = {
            ...newAutoOrderConfigList[index],
            ...postData,
          };
        }
      } else {
        newAutoOrderConfigList.push({
          ...data,
        });
      }
      setAutoOrderConfigList(newAutoOrderConfigList);
      message.success(msg);
    });
  }
  const columns = [
    {
      title: 'symbol',
      key: 'symbol',
      dataIndex: 'symbol',
    },
    {
      title: 'buy_usdt',
      key: 'buy_usdt',
      dataIndex: 'buy_usdt',
    },
    {
      title: 'sell_usdt',
      key: 'sell_usdt',
      dataIndex: 'sell_usdt',
    },
    {
      title: 'period',
      key: 'period',
      dataIndex: 'period',
    },
    {
      title: 'oversoldRatio',
      key: 'oversoldRatio',
      dataIndex: 'oversoldRatio',
    },
    {
      title: 'overboughtRatio',
      key: 'overboughtRatio',
      dataIndex: 'overboughtRatio',
    },
    {
      title: 'sellAmountRatio',
      key: 'sellAmountRatio',
      dataIndex: 'sellAmountRatio',
    },
    {
      title: 'buyAmountRatio',
      key: 'buyAmountRatio',
      dataIndex: 'buyAmountRatio',
    },
    {
      title: 'min',
      key: 'min',
      dataIndex: 'min',
    },
    {
      title: 'max',
      key: 'max',
      dataIndex: 'max',
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
              postAutoOrder({ ...values, id: record.id });
              return true;
            }}
            initialValues={{
              ...record,
            }}
          >
            <ProFormText width="s" name="symbol" label="symbol" />
            <ProFormDigit width="s" name="buy_usdt" label="buy_usdt" />
            <ProFormDigit width="s" name="sell_usdt" label="sell_usdt" />
            <ProFormSelect
              options={periodOptions}
              width="s"
              name="period"
              label="period"
            />
            <ProFormText
              width="s"
              name="overboughtRatio"
              label="overboughtRatio"
            />
            <ProFormText width="s" name="oversoldRatio" label="oversoldRatio" />
            <ProFormText
              width="s"
              name="buyAmountRatio"
              label="buyAmountRatio"
            />
            <ProFormText
              width="s"
              name="sellAmountRatio"
              label="sellAmountRatio"
            />
            <ProFormDigit width="s" name="max" label="max" />
            <ProFormDigit width="s" name="min" label="min" />
          </ModalForm>
          |
          <Button
            danger
            type="text"
            onClick={() => {
              trade.removeAutoOrder(record.id).then(data => {
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
          postAutoOrder(values);
          return true;
        }}
        initialValues={{
          exchange: 'huobi',
          auto_trade: true,
        }}
      >
        <ProFormText width="s" name="symbol" label="symbol" />
        <ProFormDigit width="s" name="buy_usdt" label="buy_usdt" />
        <ProFormDigit width="s" name="sell_usdt" label="sell_usdt" />

        <ProFormSelect
          options={periodOptions}
          width="s"
          name="period"
          label="period"
        />
      </ModalForm>
      <Table columns={columns} dataSource={autoOrderConfigList} />
    </div>
  );
};
export default AutoOrder;
