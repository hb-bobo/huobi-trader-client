import request, { checkResult } from '@/utils/request';

export function depthQuery(query: {
  start: string;
  end: string;
  symbol: string;
}) {
  return request({
    url: '/depth',
    params: query,
  });
}
export function tradeQuery(query: {
  start: string;
  end: string;
  symbol: string;
}) {
  return request({
    url: '/trade-history',
    params: query,
  });
}
