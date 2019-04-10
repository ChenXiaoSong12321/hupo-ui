<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [基于chameleon框架构建的 hupo-ui 基础组件库](#%E5%9F%BA%E4%BA%8Echameleon%E6%A1%86%E6%9E%B6%E6%9E%84%E5%BB%BA%E7%9A%84-hupo-ui-%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E5%BA%93)
  - [1 运行启动](#1-%E8%BF%90%E8%A1%8C%E5%90%AF%E5%8A%A8)
  - [2 目录概述](#2-%E7%9B%AE%E5%BD%95%E6%A6%82%E8%BF%B0)
    - [3 规范](#3-%E8%A7%84%E8%8C%83)
      - [3.1 样式规范](#31-%E6%A0%B7%E5%BC%8F%E8%A7%84%E8%8C%83)
    - [4 如何调试](#4-%E5%A6%82%E4%BD%95%E8%B0%83%E8%AF%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 基于chameleon框架构建的 hupo-ui 基础组件库

## 1 运行启动

```js
npm install
//注意检查cli的版本
cml weex|web|wx  dev  //开始开发

```

## 2 目录概述

```javascript
.
├── README.md
├── bin
│   └── build.sh
├── chameleon.config.js
├── dist
│   └── wx
│       ├── app.js
│       ├── app.json
│       ├── app.wxss
│       ├── components
│       ├── pages
│       ├── project.config.json
│       └── static
├── mock
│   ├── api
│   │   └── index.js
│   └── template
│       └── index.php
├── package  // build.sh 结果，发布到npm
│   ├── assets
│   │   ├── css
│   │   └── images
│   ├── components
│   │   ├── c-action-sheet
│   │   └── c-dialog-slot
│   └── package.json
├── package-lock.json
├── package.json
└── src  //开发目录
    ├── app
    │   ├── app.cml
    │   └── app.interface
    ├── assets
    │   ├── css
    │   └── images
    ├── components //开发组件
    │   ├── c-toast
    │   └── ui-view
    ├── entry
    │   ├── entry.html
    │   ├── entry.web.js
    │   └── entry.weex.js
    ├── pages  //组件示例demo页
    │   ├── API // 相应api 接口demo示例
    │   ├── COMP //相应组件demo示例；
    │   └── index  //主页入口
    │
    ├── router.js
    ├── router.config.json //路由配置
    └── store
        ├── action-types.js
        ├── actions.js
        ├── getter-types.js
        ├── getters.js
        ├── index.js
        ├── mutation-types.js
        ├── mutations.js
        └── state.js

```

开发步骤
1. 查看index.cml文件，大概了解主页的配置和生效路径；
2. 配置：
    只需要在 router.config.json 中配置对应路由页面
3. 配置完毕之后 在 `src/pages/COMP`中书写你的demo组件
4. 当前以上的工作都是为了可以实时查看开发的组件的效果做准备，接下来就需要去`src/components`中去开发我们对应的组件
5. enjoy yourself

### 3 规范
#### 3.1 样式规范

* 命名规范  h-tabs-root  h-tabs-item  h-tabs-item-icon .....；

### 4 如何调试
* web端调试  cml web dev
* weex端调试  cml weex dev
* wx端调试  cml wx build  然后用微信开发者工具打开 `dist/wx`这个文件夹即可；

待完善.....

