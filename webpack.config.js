/*
 * @Author: ldm
 * @Date: 2021-11-18 20:37:37
 * @LastEditors: ldm
 * @LastEditTime: 2022-02-23 01:10:31
 * @Description: webpack配置文件
 */
const path = require("path");
module.exports = (env, args) => {
  const config = {
    // 模式
    mode: "development",
    //入口
    entry: "",
    //出口
    output: {},
    //模块
    module: {},
    //开发服务器
    devServer: {},
    // 插件
    plugins: [],
  };
};
