import React from 'react';
import classnames from 'classnames';
import { HotTable, HotTableProps } from '@handsontable/react';

import { ROOT_PREFIX } from '@/constants';
import 'handsontable/dist/handsontable.full.css';

interface Props {
  data: any[];
  columns: HotTableProps['columns'];
}

const prefixCls = `${ROOT_PREFIX}-handsontable`;

const RHandsontable: React.FC<Props> = props => {
  const { data, columns = [] } = props;

  return (
    <div className={classnames(prefixCls)}>
      <HotTable
        id="hot"
        columns={columns}
        data={data}
        colHeaders={(columns as any[]).map(item => item.data)}
        rowHeights={55}
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
};
export default RHandsontable;
