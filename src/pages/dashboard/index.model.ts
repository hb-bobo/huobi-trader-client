import { chart, watchSymbol } from '@/api';
import { getInterval } from '@/utils/date';
import dayjs from 'dayjs';
import useModel, { ActionMap, StateAndAction } from 'use-easy-model';
import { transDepthData, transTradeData } from './transfrom';

export interface State {
  symbolInfo: {
    [symbol: string]: {
      depthAsksList: Record<string, any>[];
      depthBidsList: Record<string, any>[];
      depthChartData: Record<string, any>[];
      tradeChartData: Record<string, any>[];
    };
  };
}
const initialState: State = {
  symbolInfo: {
    btcusdt: {
      depthAsksList: [],
      depthBidsList: [],
      depthChartData: [],
      tradeChartData: [],
    },
  },
};
/**
 * actions 触发改变state
 */
const reducers = {
  /**
   * 更新用户数据
   * @param state
   * @param payload
   */
  setState(state: State, payload: Partial<State>) {
    return Object.assign({}, state, payload);
  },
  setSymbolInfo(state: State, payload: Record<string, any>) {
    const { symbol, ...infoObject } = payload;
    const newSymbolInfo = {
      ...state.symbolInfo,
      [symbol]: {
        ...state.symbolInfo[symbol],
        ...infoObject,
      },
    };
    return {
      ...state,
      symbolInfo: newSymbolInfo,
    };
  },
};
const effects = ({
  state,
  actions,
}: StateAndAction<State, typeof reducers>) => ({
  async getDepthData(symbol: string) {
    const [start, end] = getInterval('1d');
    const { data } = await chart.depthQuery({
      symbol: symbol,
      start,
      end,
    });
    if (!Array.isArray(data)) {
      return;
    }
    const depthChartData: Record<string, any>[] = [];
    data.forEach((item: Record<string, any>) => {
      transDepthData(depthChartData, item);
    });

    actions.setSymbolInfo({
      symbol,
      depthChartData,
    });
    return null;
  },
  async getTradeData(symbol: string) {
    const [start, end] = getInterval('1d');
    const { data } = await chart.tradeQuery({
      symbol: symbol,
      start,
      end,
    });
    const tradeChartData: Record<string, any>[] = [];
    data.forEach((item: Record<string, any>) => {
      transTradeData(tradeChartData, item);
    });

    actions.setSymbolInfo({
      symbol,
      tradeChartData,
    });
  },
});
export default function() {
  return useModel({
    state: initialState,
    reducers,
    effects,
    // debug: AppConfig.isDev,
  });
}
