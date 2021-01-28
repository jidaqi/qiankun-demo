# qiankun-demo

## 问题描述：在访问基于vue-element-admin搭建的子应用时，部分资源出现 'doesn't work properly without javascript enabled. please enable it to continue'

## 复现：

```
// 开启主应用
cd main
npm i
npm run serve

// 开启微应用
cd vue-element-admin
npm i
npm run dev
```

访问 http://localhost:8080/

查看控制台network部分资源出现 'We're sorry but hello-qiankun doesn't work properly without JavaScript enabled. Please enable it to continue.'
