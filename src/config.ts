/*
 * @Description: 配置文件/以及常量
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-03-16 23:46:55
 * @LastEditors: ldm
 * @LastEditTime: 2022-08-16 01:58:20
 */

export const COMMONT_CODE_MESSAGE: {
  [key: string]: { code: number; message: string };
} = {
  ok: {
    code: 10000,
    message: "请求成功",
  },
  error: {
    code: 0,
    message: "系统错误",
  },
};

export const TOKEN_CONFIG = {
  cert: "ldmqwoei!@#_@!+_+%_123444",
};

export const DEFAULT_QUERY_PARAMS = {
  current: 1,
  pageSize: 20,
  startUpdateDate: 0,
  endUpdateDate: 999999999,
  startCreateDate: 0,
  endCreateDate: 999999999,
  field: "createDate",
  direction: "ASC",
};
