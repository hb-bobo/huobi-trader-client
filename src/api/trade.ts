import { ListResult, Pagination } from '@/interface/common';
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

export function queryAutoOrderHistory({ current, pageSize }: Pagination) {
  return checkResult<ListResult<any[]>>(
    request({
      url: '/auto-order-history',
      params: { current, pageSize },
    }),
  ).then(data => {
    if (Array.isArray(data.list)) {
      data.list.forEach((item: any) => {
        item.datetime = dayjs(item.datetime).format('YYYY-MM-DD HH:mm:ss');
      });
      return data;
    }
    return { list: [], pagination: undefined };
  });
}

export function queryAutoContractOrder() {
  return checkResult(
    request({
      url: '/auto-order-contract-config',
    }),
  );
}

export function postAutoContractOrder(data: Record<string, any>) {
  return checkResult(
    request({
      url: '/auto-order-contract-config',
      method: 'POST',
      data: data,
    }),
  );
}
export function removeAutoContractOrder(id: string) {
  return checkResult(
    request({
      url: '/auto-order-contract-config',
      method: 'delete',
      data: { id },
    }),
  );
}
