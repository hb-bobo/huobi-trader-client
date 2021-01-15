import React, { memo } from 'react';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { Column } from '@ant-design/charts';
import { ROOT_PREFIX } from '@/constants';
import { tradeColor } from '../config';
import { keepDecimalFixed } from '@/utils/number';

export interface Props {
  title: string;
  data: Record<string, any>[];
  xField: string;
  yField: string;
  seriesField: string;
}

const prefixCls = `${ROOT_PREFIX}`;

const TradeBarChart: React.FC<Props> = props => {
  const { data = [], title, xField, yField, seriesField } = props;

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: title,
    },
    data,
    xField: xField,
    yField: yField,
    isStack: true,
    seriesField: seriesField,
    yAxis: {
      min: 0,
      formatter: function formatter(val: number) {
        return `${val} B`;
      },
    },
    xAxis: {
      label: {
        formatter: function formatter(val: string) {
          return dayjs(val).format('M/DD H:mm:ss');
        },
      },
    },

    color: tradeColor,
    label: {
      visible: true,
      position: 'middle' as const,
    },
  };
  return (
    <div className={classnames(prefixCls)}>
      <Column {...config} />
    </div>
  );
};
export default memo(TradeBarChart);
