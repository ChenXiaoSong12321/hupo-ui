<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [hupo-ui](#hupo-ui)
    - [目录概述](#%e7%9b%ae%e5%bd%95%e6%a6%82%e8%bf%b0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# hupo-ui

本仓库为琥珀亲子的扩展组件库，提供丰富的组件能力

### 目录概述

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
│   │   └── c-dialog
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
    │   ├── c-action-sheet
    │   └── c-dialog
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

```

开发步骤

1. 查看index.cml文件，大概了解主页的配置和生效路径；
2. 配置：
    只需要在 router.config.json 中配置对应路由页面
3. 配置完毕之后 在 `src/pages/COMP`中书写你的demo组件
4. 当前以上的工作都是为了可以实时查看开发的组件的效果做准备，接下来就需要去`src/components`中去开发我们对应的组件
5. enjoy yourself
