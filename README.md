# egg-ratelimiter

> egg plugin for ratelimiter

## 安装

```bash
$ npm i egg-rate-limiter2 --save
# or
$ yarn add egg-rate-limiter2
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
      points: 1000,
      duration: 1000,
      redis: null
};
```

## 示例

## [点击查看更多开源项目 https://undsky.com/](https://undsky.com/)

## License

[MIT](LICENSE)