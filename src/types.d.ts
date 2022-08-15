/*
 * @Description: 公公类型
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-03-22 01:23:46
 * @LastEditors: ldm
 * @LastEditTime: 2022-08-16 01:55:38
 */

// 前端传入的排序字段
export type FrontSorterResultType = {
  direction: string;
  field: string;
};

//后端需要的排序字段结果
export type SorterResultType = {
  [key:string]:'ASC'|'DESC'
};
