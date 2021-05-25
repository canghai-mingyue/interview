## 算法

### 1、排序算法及相关复杂度

## HTML

### 1、html语义化

## CSS

### 1、flex布局

弹性布局 主轴 交叉轴

flex 0 1 auto

1. flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
2. flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
3. flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。

### 2、grid布局

### 3、清除浮动

## JavaScript

### 1、事件循环

### 2、Map、Set、WeakMap、WeakSet

### 3、类型判断

基本数据类型：String、Number、Boolean、Null、Undefined、symbol（ES6）

- typeof ：  返回结果为number、boolean、string、object、undefined、function、Symbol
- **instanceof**   检查原型链是否有关系，基本数据类型要通过new来创建才可以检测
- constructor   除了null和undefined，constructor容易被修改
- Object.prototype.toString.call()    都可以   ie6兼容问题

4、async await以及generate

5、try catch异常

## TypeScript

### 1、类型检测

## Nodejs

### 1、中间件洋葱模型

### 2、事件循环

## Vue

### 1、响应式原理

### 2、Vue.use   component等

### 3、new Vue

### 4、生命周期顺序

### 5、动态添加属性

## React

### 1、函数式组件和类式组件

### 2、Hooks

## uni-app

### 1、移动端

### 2、小程序

## 前端工程化与发展

### 1、webpack

### 2、性能优化

cdn分发网络

### 3、单页面应用

### 4、屏幕自适应

​	rem、em   @media    postcss     picture标签 resize监听防抖

### 5、require与import

require：

​	AMD规范，commonjs， 运行时调用， 理论上可以运用在代码的任何地方。

​	赋值过程，赋值变量以及浅拷贝对象。

​	出现模块之间循环引用时, 会输出已执行的模块, 未执行模块不会输出

​	CommonJS规范默认`export`的是一个对象,即使导出的是基础数据类型

import：

​	ES6，编译时调用，必须放在文件开头，解构过程，只读引用传递

​	出现模块之间的循环引用时，只要模块存在某个引用，代码就能够执行。

​	import()动态导入

## 手写实现类问题

1、函数柯里化

2、手写实现apply

3、实现promise并发数目控制

4、eventEmitter

