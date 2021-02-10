import { ListResult, Pagination } from '@/interface/common';

import request, { checkResult } from '@/utils/request';


export function queryAnalysisFileList() {
  return checkResult(
    request({
      url: '/train/analysis',
    }),
  );
}

export function postAnalysis(data: {
  quoteCurrencyBalance: number;
  baseCurrencyBalance: number;
  buy_usdt: number;
  sell_usdt: number;
}) {
  return checkResult(
    request({
      url: '/train/analysis',
      method: 'POST',
      data: data,
    }),
  );
}
export function removeFile(url: string) {
  return checkResult(
    request({
      url: '/trade-account',
      method: 'delete',
      data: { url },
    }),
  );
}


export function download(data: {
  symbol: string;
  period?: string;
  size?: number;
}) {
  return checkResult(
    request({
      url: '/auto-order-config',
      method: 'POST',
      data: data,
    }),
  );
}

