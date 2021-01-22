import { TradeAccountDto } from '@/interface/trade';
import request, { checkResult } from '@/utils/request';
import dayjs from 'dayjs';

export function queryTradeAccount() {
  return checkResult(
    request({
      url: '/trade-account',
    }),
  );
}

export function postTradeAccount(data: TradeAccountDto) {
  return checkResult(
    request({
      url: '/trade-account',
      method: 'POST',
      data: data,
    }),
  );
}
export function removeTradeAccount(id: string) {
  return checkResult(
    request({
      url: '/trade-account',
      method: 'delete',
      data: { id },
    }),
  );
}

export function queryAutoOrder() {
  return checkResult(
    request({
      url: '/auto-order-config',
    }),
  );
}

export function postAutoOrder(data: Record<string, any>) {
  return checkResult(
    request({
      url: '/auto-order-config',
      method: 'POST',
      data: data,
    }),
  );
}
export function removeAutoOrder(id: string) {
  return checkResult(
    request({
      url: '/auto-order-config',
      method: 'delete',
      data: { id },
    }),
  );
}

export function queryAutoOrderHistory() {
  return checkResult(
    request({
      url: '/auto-order-history',
    }),
  ).then((data) => {
    return data.map(() => {
      return {
        ...data,
        time: dayjs(data).format()
      }
    })
  });
}
