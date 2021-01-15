import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Table, Button, message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
import { watchSymbol } from '@/api';

interface Props {}
interface SymbolItem {
  id: string;
  symbol: string;
}
const prefixCls = `watch-symbol`;

const WatchSymbol: React.FC<Props> = props => {
  const {} = props;
  const [symbolList, setData] = React.useState<SymbolItem[]>([]);

  useEffect(() => {
    getWatchSymbol();
  }, []);

  function getWatchSymbol() {
    watchSymbol.query().then(data => {
      console.log(data);
      setData(data);
    });
  }
  function postWatchSymbol(value: string) {
    watchSymbol.create(value).then(data => {
      const newSymbolList = [...symbolList];
      newSymbolList.push(data);
      setData(newSymbolList);
      message.success('提交成功');
    });
  }
  const columns = [
    {
      title: 'SYMBOL',
      kye: 'symbol',
      dataIndex: 'symbol',
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: any) => (
        <a
          key="delete"
          onClick={() => {
            watchSymbol.remove(record.id).then(data => {
              message.success('删除成功');
              getWatchSymbol();
            });
          }}
        >
          删除
        </a>
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
          postWatchSymbol(values.symbol);
          return true;
        }}
      >
        <ProFormText width="s" name="symbol" label="symbol" />
      </ModalForm>
      <Table columns={columns} dataSource={symbolList} />
    </div>
  );
};
export default WatchSymbol;
