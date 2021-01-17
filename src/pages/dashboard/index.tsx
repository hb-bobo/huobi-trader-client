import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Row, Col, Form, Button, Input } from 'antd';
import GridLayout from 'react-grid-layout';
import dayjs from 'dayjs';
import { watchSymbol } from '@/api';
import { socket, EventData } from '@/ws';
import { EventTypes } from '@/constants';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import TradeBarChart from './_components/chart/TradeBarChart/TradeBarChart';
import model from './index.model';
import { Handsontable } from '@/components/table';
import './index.less';
import DepthChart from './_components/chart/DepthChart';
import { getInterval } from '@/utils/date';
import { transDepthData, transTradeData } from './transfrom';

interface Props {}

const prefixCls = `dashboard`;
const columns = [
  {
    data: 'count',
  },
  {
    data: 'amount',
  },
  {
    data: 'price',
  },
  {
    data: 'sumMoneny',
  },
  {
    data: 'sumDollar',
  },
];
const index: React.FC<Props> = props => {
  const {} = props;
  const [state, actions, effects] = model();
  const [form] = Form.useForm();

  useEffect(() => {
    watchSymbol.query().then(data => {
      if (!Array.isArray(data)) {
        console.error(data);
        return;
      }
      data.forEach((item: { symbol: string }) => {
        const symbol = item.symbol.toLowerCase();

        getData(symbol);
        socket.emit('sub', { symbol: symbol });
      });
    });
  }, []);
  useEffect(() => {
    socket.on('message', handleMessage);
    return () => {
      socket.off('message', handleMessage);
    };
  }, [actions]);
  function getData(symbol: string) {
    // effects.getTradeData(symbol);
    effects.getDepthData(symbol).then(() => {
      setTimeout(() => {
        effects.getTradeData(symbol);
      }, 2000);
    });
  }
  function handleMessage(event: EventData<any>) {
    const data = event.data;

    const symbol = data.symbol;

    switch (event.type) {
      case EventTypes.huobi_depth_chart:
        const depthChartData = [...state.symbolInfo[symbol].depthChartData];

        transDepthData(depthChartData, data);
        actions.setSymbolInfo({
          symbol: symbol,
          depthChartData,
        });

        break;
      case EventTypes.huobi_depth:
        actions.setSymbolInfo({
          symbol: symbol,
          depthAsksList: data.asksList,
          depthBidsList: data.bidsList,
        });
        break;
      case EventTypes.huobi_trade:
        const tradeChartData = state.symbolInfo[symbol]
          ? [...state.symbolInfo[symbol].tradeChartData]
          : [];

        transTradeData(tradeChartData, data);

        actions.setSymbolInfo({
          symbol: symbol,
          tradeChartData,
        });
        break;
    }
  }
  function handleFinish() {
    const symbol = form.getFieldValue('symbol');
    if (symbol) {
      socket.emit('sub', { symbol: symbol });
    }
  }
  function handleLayoutChange(
    layout: GridLayout.Layout[],
    oldItem: GridLayout.Layout,
    newItem: GridLayout.Layout,
    placeholder: GridLayout.Layout,
    e: MouseEvent,
    element: HTMLElement,
  ) {
    // y 不是坐标y，在这相当于index
    // const newPages = reorder(pages, oldItem.y, newItem.y);
  }
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true, data: { a: 1 } },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];
  const symbols = Object.keys(state.symbolInfo);
  console.log(state.symbolInfo);
  return (
    <div className={classnames(prefixCls)}>
      <Form
        form={form}
        layout="inline"
        initialValues={{ symbol: 'btcusdt' }}
        onFinish={handleFinish}
      >
        <Form.Item label="symbol">
          <Input placeholder="symbol" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            订阅
          </Button>
        </Form.Item>
      </Form>
      <GridLayout
        className="layout"
        cols={12}
        rowHeight={100}
        width={window.innerWidth}
        isResizable={true}
        onDragStop={handleLayoutChange}
      >
        {symbols.map((symbol, index) => {
          return [
            <div
              key={`${symbol}-trade`}
              data-grid={{ x: 0, y: index * 4, w: 6, h: 4 }}
            >
              <TradeBarChart
                title={'买入卖出'}
                xField={'time'}
                yField={'value'}
                seriesField={'type'}
                data={state.symbolInfo[symbol].tradeChartData}
              />
            </div>,
            <div
              key={`${symbol}-depth`}
              data-grid={{ x: 0, y: index * 4 + 4, w: 6, h: 4 }}
            >
              <DepthChart
                title={'深度记录'}
                xField={'time'}
                yField={['value', 'price']}
                data={[
                  state.symbolInfo[symbol].depthChartData || [],
                  state.symbolInfo[symbol].depthChartData || [],
                ]}
              />
            </div>,
          ];
        })}

        {symbols.map((symbol, index) => {
          return (
            <div key={symbol} data-grid={{ x: 6, y: 8 * index, w: 6, h: 8 }}>
              <h3>{symbol}</h3>
              <Row>
                <Col span={12}>
                  <h3>买盘挂单</h3>
                  <Handsontable
                    columns={columns}
                    data={state.symbolInfo[symbol].depthBidsList}
                  />
                </Col>
                <Col span={12}>
                  <h3>卖盘挂单</h3>
                  <Handsontable
                    columns={columns}
                    data={state.symbolInfo[symbol].depthAsksList}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};
export default index;
