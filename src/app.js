/*
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-10-11 16:43:18
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-10-12 10:52:58
 * @FilePath: \lg-mock\src\app.js
 * @Description:  入口文件
 */

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const controller = require("./controller");
const serve = require("koa-static");
const app = new Koa();
// S 自定义中间件 
const  mwResponseHeader = require('./middleware/mw_response_header')
app.use(mwResponseHeader);
// E 自定义中间件 

// 静态服务目录
app.use(serve(__dirname + "/public/"));
// 处理  解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中
app.use(bodyParser());
// add controllers:
app.use(controller());
app.listen(8888);
