<!--
 * @Author: 姜彦汐
 * @Date: 2021-04-21 15:57:50
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-04-22 10:17:53
 * @Description: 
 * Contact: jiangyanxi@live.com
 * @FilePath: /egg-ratelimiter/README.md
-->
# egg-ratelimiter
## 安装

```bash
$ npm i egg-ratelimiter --save
# or
$ yarn add egg-ratelimiter
```

## 依赖说明

### 依赖的 egg 版本

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[ioredis](https://github.com/luin/ioredis)

[rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)

## 开启插件

```js
// {app_root}/config/plugin.js
exports.ratelimiter = {
  enable: true,
  package: 'egg-ratelimiter',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.ratelimiter = {

};
```
## License

[MIT](LICENSE)