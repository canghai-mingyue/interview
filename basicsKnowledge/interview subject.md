###  浏览器缓存机制

强缓存  cache-control(http 1.1 新增，s-maxage或max-age指令)   expires

no-cache 可以在本地缓存，可以在代理服务器缓存，但是这个缓存要服务器验证才可以使用
no-store 彻底得禁用缓冲，本地和代理服务器都不缓冲，每次都从服务器获取

协商缓存   eTag 唯一标识字符串(http1.1新增)   优先级高于  last-modified  时间字符串	

​				 if-none-match    if-modified-since    

dist  ：css， 大的文件

memory ： js

### https与http

HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。

HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。

HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。

### XSS与CSRF

跨站脚本   跨站请求伪造

转义输出   过滤   编码   限制输入文本长度

请求令牌   改良api设计  对于资源改动的请求采用post而非get







### webpack热更新

### 

### 手写发布订阅



### eventemitter

### ReactHooks优缺点

### router query拼接到hash后面的设计

### SSR 服务端使用java开发，如何识别js



### Vue.use extend





### 浏览器垃圾回收

### 倒计时函数

### 最近公共父节点

### eventBus

### 过滤树节点

### cookie什么时候可以携带

### promise并发      

### https原理

### postcsstorem

### hls以及m3u8

### vue3 treeshaking

### 质数判断算法

### 数组平方重新排序算法
