import dayjs from 'dayjs';

export function transDepthData(
  depthChartData: Record<string, any>[],
  item: Record<string, any>,
) {
  const time = dayjs(item.time).format('YYYY-MM-DD H:mm:ss');
  depthChartData.push({
    type: 'sell_1',
    value: item.sell_1,
    time,
    price: item.price,
  });
  depthChartData.push({
    type: 'buy_1',
    value: item.buy_1,
    time,
    price: item.price,
  });

  depthChartData.push({
    type: 'bids_max_1',
    value: item.bids_max_1,
    time,
    price: item.price,
  });
  depthChartData.push({
    type: 'bids_max_2',
    value: item.bids_max_2,
    time,
    price: item.price,
  });
  depthChartData.push({
    type: 'asks_max_1',
    value: item.asks_max_1,
    time,
    price: item.price,
  });
  depthChartData.push({
    type: 'asks_max_2',
    value: item.asks_max_2,
    time,
    price: item.price,
  });
}

export function transTradeData(
  tradeChartData: Record<string, any>[],
  item: Record<string, any>,
) {
  const time = dayjs(item.time).format('YYYY-MM-DD H:mm:ss');
  tradeChartData.push({
    type: 'sell',
    value: item.sell,
    time: time,
  });
  tradeChartData.push({
    type: 'buy',
    value: item.buy,
    time: time,
  });
}
