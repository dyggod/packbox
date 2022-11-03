# PackBox

一个使用Vue3 + Vite + Typescript + Pinia + ESLint + Ant-Design-Vue 构建的后台管理系统。

在线访问地址：

https://dyggod.github.io/packbox/

## Install
本项目使用pnpm作为包管理工具，请遵守

安装pnpm
```
npm install -g pnpm
```

使用pnpm安装依赖
```
pnpm i
```

## Start

```
pnpm run dev
```

## Store

本项目使用[pinia](https://pinia.web3doc.top/)代替 Vuex 作为状态管理库，使用更简洁的语法。
## Commit standard

本项目配置了 commitlint，并采用 commit 的常规规范扩展。请参考[config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)。

同时配置了提交工具[commitizen](https://www.npmjs.com/package/commitizen)。

提交时统一使用命令：

```
yarn commit

// 运行后出现以下问题
?Select the type of change that you're committing                  // 选择你的提交类型，请参考commit规范说明
?What is the scope of this change (e.g. component or file name)    // 输入你的修改范围，文件名
?Write a short, imperative tense description of the change         // 输入简述
?Provide a longer description of the change                        // 输入详细描述
?Are there any breaking changes                                    // 是否是重大破坏性修改，通常输入No
?Does this change affect any open issues                           // 是否有影响的issues
```

## 版本发布

**_注意：只有项目管理者有权限发布版本_**

自动升级版本并更改 changelog:

```
pnpm release
```

指定版本:

```
pnpm release -- --release-as  xx.xx.xx
```
