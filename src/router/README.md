# Router

## 路由数据结构

以下结构是本项目路由数据构成，无论是菜单或基础路由都应有此结构.

```jasvascript
/**
 * @param path 路由路径 [必须]
 * @param name 路由名称, 不能重名 [必须]
 * @component 组件 [可选]
 * @param redirect 重定向地址, 访问这个路由时, 自定进行重定向 [可选]
 * @param meta 路由元信息（路由附带扩展信息）
 * @param meta.title 菜单名称 [可选]
 * @param meta.icon 菜单图标 [可选]
 *
 * */
```

## 文件说明

> index.js: 路由实例化及挂载守卫等初始操作，暴露一个启动函数`setupRouter`

> routes.js: 提供所有路由


