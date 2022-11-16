/*
 * @Description: 角色接口参数校验
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-03-12 01:07:02
 * @LastEditors: ldm
 * @LastEditTime: 2022-11-16 23:27:05
 */

export const ROLE_CODE_MESSAGE: {
  [key: string]: { code: number; message: string };
} = {
  lackUserId: {
    code: 10003,
    message: "参数“id”缺失",
  },
};
