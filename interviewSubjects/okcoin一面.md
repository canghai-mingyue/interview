position的几种布局，absolute布局相对哪个元素

flex布局的使用  剩余空间如何计算   flex： 0  1 auto哪三种属性的缩写

CSS盒模型

const let var区别

promsie的使用，为什么可以链式调用，其状态是否可逆

事件循环机制

箭头函数 与this，普通函数和箭头函数何时决定函数的this 

canvas 同一画布如何区分其点击在哪个部分，进行交互。

vue    computed watch 区别， 响应式原理， v-for中key的作用

vue3的提升与优化



自己掌握的其他技能

对他有什么想问的



```javascript
// 1 var与let
console.log(a);
var a = 1;
console.log(b);
let b = 2;

function a() {
  var b = 0;
}
a();
console.log(b);

function c() {
  let d = 1;
}
c();
console.log(d);￼

//2 如何输出12345，使用闭包
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  })
}￼

//3 this考察
const o = {
  a() {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};

o.a();
o.b();

const c = o.a;
const d = o.b;
c();
d();￼

//4 事件循环考察
onst log = console.log;

log(1);

setTimeout(() => {
  log(2);
});

new Promise((r) => {
  log(3);
  r(4);
  log(5);
}).then((res) => {
  log(res);
});

log(6);

;(async() => {
  log(7)
  await new Promise(r => {
    log(8)
    r()
  })
  log(9)
})￼()

```
