/*
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-10-12 10:48:38
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-10-12 10:50:07
 * @FilePath: \lg-mock\src\middleware\mw_response_header.js
 * @Description:  响应头的中间件
 */

module.exports = async (ctx, next) => {
  const contentType = "application/json; charset=utf-8";
  ctx.set("Content-Type", contentType);
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  await next();
};