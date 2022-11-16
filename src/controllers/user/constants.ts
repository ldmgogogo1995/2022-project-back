/*
 * @Description:user路由常量存储
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-07-22 01:34:27
 * @LastEditors: ldm
 * @LastEditTime: 2022-08-05 17:43:49
 */

export const USER_CODE_MESSAGE: {
  [key: string]: { code: number; message: string };
} = {
  lackUserId: {
    code: 10003,
    message: "参数“id”缺失",
  },
  notFoundUser: {
    code: 10004,
    message: "该用户不存在",
  },
  nickname: {
    code: 10005,
    message: "请填写用户名",
  },
  account: {
    code: 10006,
    message: "请填写账号",
  },

  password: {
    code: 10007,
    message: "请填写密码",
  },
  hasUser: {
    code: 10008,
    message: "已存在该用户",
  },
  id: {
    code: 10009,
    message: "请传入id",
  },
  age: {
    code: 10010,
    message: "请填写年龄",
  },
  sex: {
    code: 10010,
    message: "请选择性别",
  },
};
