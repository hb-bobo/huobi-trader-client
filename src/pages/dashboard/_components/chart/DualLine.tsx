import React, { memo, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';

export interface Props {
  title: string;
  data: Record<string, any>[][];
  xField: string;
  yField: [string, string];
  geometryOptions: any[];
}
const DualLine: React.FC<Props> = props => {
  const {
      data = [],
      title,
      xField,
      yField,
      geometryOptions = [
        {
          geometry: 'line',
          isGroup: true,
          seriesField: 'type',
        },
        {
          geometry: 'column',
          color: '#CCCCCC',
          isGroup: false,
          seriesField: 'indexType',
        },
    ]
  } = props;

  var config = {
    data: data,
    title: {
      visible: true,
      text: title,
    },
    xField: xField,
    yField: yField,
    geometryOptions: geometryOptions,
    // color: ['#1979C9', '#D62A0D', '#FAA219'],
  };
  return <DualAxes {...config} />;
};

export default memo(DualLine);
