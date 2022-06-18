/*
 * @Description: 常量文件
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-03-22 01:22:39
 * @LastEditors: ldm
 * @LastEditTime: 2022-03-22 01:24:16
 */
export const LOGIN_CODE_MESSAGE: {
    [key: string]: { code: number; message: string };
  } = {
    passwordError: {
      code: 10001,
      message: "密码错误，请重新输入",
    },
    notFoundUser: {
      code: 10002,
      message: "认证失败，用户名找不到",
    },
  };