import React, { useEffect } from 'react';
import classnames from 'classnames';
import random from 'lodash/random';
import GridLayout from 'react-grid-layout';
import { DualAxes } from '@ant-design/charts';
import ColumnBar from './_components/ColumnBar';
import LineChart from './_components/LineChart';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import { Handsontable } from '@/components/table';
import './index.less';

interface Props {}

const prefixCls = `test`;
const columns = [
  {
    data: '日期',
  },
  {
    data: 'pv',
  },
];
const data1 = [
  {
    日期: '2020/7/14',
    pv: 22212121,
  },
  {
    日期: '2020/7/15',
    pv: 22212121,
  },
  {
    日期: '2020/7/16',
    pv: 22212121,
  },
  {
    日期: '2020/7/17',
    pv: 22212121,
  },
  {
    日期: '2020/7/18',
    pv: 22212121,
  },
  {
    日期: '2020/7/19',
    pv: 22212121,
  },
  {
    日期: '2020/7/20',
    pv: 22212121,
  },
];
const columns2 = [
  {
    data: '日期',
  },
  {
    data: '点击UV',
  },
];
const data2 = [
  {
    日期: '2020/7/14',
    点击UV: 21321321,
  },
  {
    日期: '2020/7/15',
    点击UV: 4324235,
  },
  {
    日期: '2020/7/16',
    点击UV: 321321,
  },
  {
    日期: '2020/7/17',
    点击UV: 4324234,
  },
  {
    日期: '2020/7/18',
    点击UV: 4324324,
  },
  {
    日期: '2020/7/19',
    点击UV: 432423,
  },
  {
    日期: '2020/7/20',
    点击UV: 4234124,
  },
];
function trans2Chart<T = any>(data: T[]) {
  return data.map(item => {
    return {
      date: item['日期'],
      value: random(1000, 9000),
    };
  });
}

const index: React.FC<Props> = props => {
  const {} = props;

  const [layout, setLayout] = React.useState([
    {
      i: 'test',
      x: 0,
      y: 0,
      w: 4,
      h: 4,
      type: 'line',
      xField: 'date',
      yField: 'value',
      title: 'pv',
      data: trans2Chart(data1),
      mergeData: [],
    },
    {
      i: 'test2',
      x: 4,
      y: 0,
      w: 4,
      h: 4,
      type: 'bar',
      xField: 'date',
      yField: 'value',
      title: '点击UV',
      data: trans2Chart(data2),
      mergeData: [],
    },
  ]);
  useEffect(() => {}, []);

  function handleLayoutChange(
    layout: GridLayout.Layout[],
    oldItem: GridLayout.Layout,
    newItem: GridLayout.Layout,
    placeholder: GridLayout.Layout,
    e: MouseEvent,
    element: HTMLElement,
  ) {
    const newData1 = trans2Chart(data1);
    const newData2 = trans2Chart(data2);
    const newData = newData1.map((row, index) => {
      return {
        ...row,
        clickPv: newData2[index].value,
      };
    });

    setLayout([
      {
        i: 'test',
        x: 0,
        y: 0,
        w: 4,
        h: 4,
        type: 'bar_line',
        xField: 'date',
        yField: 'value',
        title: '合并',
        mergeData: [newData1, newData],
      },
    ]);
    // y 不是坐标y，在这相当于index
    // const newPages = reorder(pages, oldItem.y, newItem.y);
  }

  return (
    <div className={classnames(prefixCls)}>
      <GridLayout
        className="layout"
        cols={12}
        rowHeight={100}
        width={window.innerWidth}
        isResizable={true}
        compactType={null}
        preventCollision={true}
        layout={layout}
        onDragStop={handleLayoutChange}
      >
        {layout.map(item => {
          if (item.type === 'bar_line') {
            var config = {
              data: item.mergeData,
              xField: 'date',
              yField: ['value', 'clickPv'],
              geometryOptions: [
                { geometry: 'column' },
                {
                  geometry: 'line',
                  lineStyle: { lineWidth: 2 },
                },
              ],
            };
            return (
              <div key={item.i}>
                <DualAxes {...config} />
                {/* <LineChart title={item.title} xField={item.xField} yField={item.yField} data={item.data} /> */}
              </div>
            );
          }
          return (
            <div key={item.i}>
              {item.type === 'line' ? (
                <LineChart
                  title={item.title}
                  xField={item.xField}
                  yField={item.yField}
                  data={item.data}
                />
              ) : (
                <ColumnBar
                  title={item.title}
                  xField={item.xField}
                  yField={item.yField}
                  data={item.data}
                />
              )}
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};
export default index;
