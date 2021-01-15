import request, { checkResult } from '@/utils/request';

export function query() {
  return request({
    url: '/users',
  });
}

export function queryCurrent() {
  return checkResult(
    request({
      url: '/user/currentUser',
    }),
  );
}
