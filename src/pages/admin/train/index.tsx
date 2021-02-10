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
import { train } from '@/api';
interface Props {}

const prefixCls = `train`;

const Train: React.FC<Props> = props => {
  const {} = props;
  const [fileList, setTrainHistoryList] = React.useState<any[]>(
    [],
  );
  const [pagination, setPagination] = React.useState({
    current: 1,
    defaultPageSize: 10,
    pageSize: 10,
    total: 0,
  });

  useEffect(() => {
    queryTrainHistory(pagination);
  }, []);

  function queryTrainHistory(pagination: any) {
    train.queryAnalysisFileList().then(data => {
      setTrainHistoryList(data.list);
      if (data.pagination) {
        setPagination(data.pagination as any);
      }
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
      title: 'status',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: 'datetime',
      key: 'datetime',
      dataIndex: 'datetime',
    },
  ];
  function handlePageChange(page: number, pageSize?: number) {
    const newPagination = {
      ...pagination,
      current: page,
    };
    if (pageSize) {
      newPagination.pageSize = pageSize;
    }
    queryTrainHistory(newPagination);
    setPagination(newPagination);
  }
  return (
    <div className={classnames(prefixCls)}>
      <Table
        columns={columns}
        dataSource={fileList}
        pagination={{
          onChange: handlePageChange,
          ...pagination,
        }}
      />
    </div>
  );
};
export default Train;
