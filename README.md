- [项目介绍](#vue3-demo项目)
- [安装依赖](#安装依赖)
- [启动项目](#启动项目)
- [切换线上/线下接口](#切换线上/线下接口)
- [打包项目](#打包项目)

# vue3-demo 项目

由脚手架搭建，命令`vue create real-world-vue-3` 创建项目(前提安装了 @vue/cli)

主要用到框架和库：vue3 + vue-router4 + vuex + axios + json-server

## 安装依赖

进入到项目更目录后，安装项目所需要的依赖包

```sh
yarn

或

npm i
```

## 启动项目

如果启动报错（不识别此命令或者一个终端不能同时开 2 个端口）：

1. 建议 1：升级powershell终端（不用 windows 系统默认的 5 版本，把 powershell 升级到 7 版本）
2. 建议 2：使用 GitBash 终端（或别的不报错此命令的终端，比如 linux 系统里的)运行此项目
3. 建议 3：改 package.json 文件 scripts 里的 serve 字段值为 vue-cli-service serve，保存后终端运行命令 start json-server --watch db.json & start yarn serve

```
yarn serve

或

npm run serve
```

## 切换线上/线下接口

默认是使用本地的 baseURL，启动项目用命令`yarn serve`

如果要用线上地址，需要改 src\services\EventService.js 文件里的 baseURL，把本地 baseURL 注释，把线上的 baseURL 注释解开;用线上的 url 时，启动项目命令可以直接用 `yarn dev`或`npm run dev`

## 打包项目

建议用线上地址打包，用本地会报错

用线上地址接口常需要翻墙，不然网速问题 10 次会有 9 次失败，即使成功也只是限与读的接口，修改的接口数据不可持久，本地的可持久。

```
yarn build

或

npm run build
```
