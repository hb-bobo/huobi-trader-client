import request, { checkResult } from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
}

export function loginAccount(params: LoginParamsType) {
  return checkResult(
    request({
      url: '/login/account',
      method: 'POST',
      data: params,
    }),
  );
}
