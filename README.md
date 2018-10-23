# Vue_Learn

01. vue 的引入及安装
    * 在 html 头文件内引入 `<script src="https://unpkg.com/vue"></script>` 就可使用 vue.js
    * 最新版本 vue 可登陆 `https://cn.vuejs.org` -> 起步  -> 安装
    * 如果需要搭建 `webpack` 环境也可以使用 npm 进行安装
        * ` npm install vue`
        * 详见官方文档

02. 实例化 vue 及基础参数的介绍
    * 实例化 vue 的方法
    ```js
    new Vue({
        el: '#vue-app',
        data: {
            name: 'Shaun'
        }
    });
    ```
    * el:   element 需要获取的元素, 一定是 html 中的根容器元素
    * data: 用于数据的存储
    * name: 供 html 使用的元素