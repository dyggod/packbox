import { ResCode } from '@/utils/request';
import { Uncertainty } from '@/types/common';

export function resSuccess(data: Uncertainty = {}, code: ResCode = ResCode.SUCCESS, msg = '成功') {
  return {
    code,
    msg,
    data,
  };
}

export function resError(data: Uncertainty = {}, code: ResCode = ResCode.AUTHORIZATION_EXPIRED, msg = '错误') {
  return {
    code,
    msg,
    data,
  };
}
