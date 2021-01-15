import React, { memo, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

export interface Props {
  title: string;
  data: Record<string, any>[][];
  xField: string;
  yField: [string, string];
}
const DepthChart: React.FC<Props> = props => {
  const { data = [], title, xField, yField } = props;

  var config = {
    data: data,
    title: {
      visible: true,
      text: title,
    },
    xField: xField,
    yField: yField,
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };
  return <DualAxes {...config} />;
};

export default memo(DepthChart);
