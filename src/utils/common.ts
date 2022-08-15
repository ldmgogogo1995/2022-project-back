/*
 * @Description:通用工具函数
 * @Version: 1.0
 * @Autor: ldm
 * @Date: 2022-08-16 01:30:00
 * @LastEditors: ldm
 * @LastEditTime: 2022-08-16 01:55:35
 */

import { FrontSorterResultType, SorterResultType } from "../types";

const sorterMap: {
  [key: string]: "ASC" | "DESC";
} = {
  ascend: "ASC",
  descend: "DESC",
};

export const formatSorter = (
  sorter: FrontSorterResultType
): SorterResultType => ({
  [sorter.field]: sorterMap[sorter.direction],
});
