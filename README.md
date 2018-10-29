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
    * name: 供 html 使用的属性

03. vue 方法添加及方法使用属性
    * 定义方法
    ```js
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
    ```
    * methods:  用于方法存储
    * greet:    方法名
    * 在方法内调用内部属性使用 `this.属性名`
    * 在方法内使用外部元素需要利用方法的参数接受

04. vue 属性绑定 v-bind v-html
    * 在 `html` 文件标签内绑定属性值需要中属性前面加入 `v-bind:`
    * 例如: `<a v-bind:href="website">The Net Ninja Website</a>`
    * 在 `html` 文件标签内增加 `html` 内容, 需要中标签内加入一个属性值 `v-html`
    * 例如: `<p v-html="websiteTag"></p>`
        * websiteTag 的属性值为 `websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'`

05. vue 方法绑定 v-on
    * 在 `html` 文件标签内绑定方法时需要属性前面加入 `v-on:`
        * `v-on:` 可以简写为 `@`
    * 例如单击事件: `<button v-on:click="add()">Add a Year</button>`
    * 例如双击事件: `<button v-on:dblclick="add(10)">Add 10 Years</button>`
    * 例如获取鼠标事件: `<div id="canvas" v-on:mousemove="updateXY">{{ x }} , {{ y }}</div>`
        * 可以在方法中传递参数 `add(var)`
    * 如果在标签中的内容内加入方法需要 `<p>{{add()}}</p>`

06. vue 鼠标事件修饰符
    * 事件修饰符可以起到在 `html` 默认操作的情况下进行其他操作
    * 例如: `<a v-on:click.prevent="click" href="http://www.thenetninja.co.uk">The Net Ninja</a>` 可以实现阻止页面跳转并执行 `click`方法
    * 修饰符有: 
        1. once 只执行一次操作
        2. stop 阻止单击事件冒泡
        3. prevent 提交事件不再重载页面
        4. capture 添加事件监听器时使用事件捕获模式
        5. self 当事件在该元素本身(不是子元素)触发时触发回调

07. vue 键盘事件及修饰符
    * 键盘事件使用键盘修饰符的例子
    * 例如: `<input type="text" v-on:keyup="logName" />` 按键抬起时触发
    * 例如: `<input type="text" v-on:keyup.enter="logName" />` enter 按键抬起时触发
    * 例如: `<input type="text" v-on:keyup.alt.enter="logName" />` alt 按下 enter 按键抬起时触发
    * 可输入的地方才可以被触发键盘事件
    * 键盘操作修饰符有:
        1. keyup
        2. keydown
    * 键盘修饰符有: 
        1. enter
        2. tab
        3. delete
        4. esc
        5. space
        6. up
        7. down
        8. left
        9. right
        10. alt

08. vue 双向数据绑定 ref v-model
    * 必须使用在 `input select textarea` 标签
    * 利用标签 ref 及 v-model 实现双向绑定
    * 第一种方式 ref
    ```html
    <div id="vue-app">
        <!-- 利用 ref 属性把内容传递给vuejs 当调用方法时进行修改值 -->
        <input type="text" ref="name"  v-on:keyup.enter="logName" />
    </div>
    ```
    ```js
    new Vue({
        el: "#vue-app",
        data: {
            name: ""
        },
        methods:{
            logName:function(){
                // 拿到传入的内容后进行赋值实现绑定
                this.name = this.$refs.name.value
            }
        }
    })
    ```
    * 第二种方式 v-model
    ```html
    <div id="vue-app">
        <!-- 直接对 vue 对属性进行绑定 -->
        <!-- 利用 v-model 属性进行绑定操作, 它会直接将该标签对 value 与 vue 对属性进行绑定 -->
        <input type="text" v-on:keyup.enter="logName" v-model="name"/>
    </div>
    ```
    ```js
    new Vue({
        el: "#vue-app",
        data: {
            name: ""
        },
        methods:{
            logName:function(){
            }
        }
    })
    ```

09. vue 计算属性Computed
    * 计算属性需要放在容器对象内 `computed`
        * 计算属性与方法对区别
            * 计算属性每次调用只会执行属性本身对应对方法, 而方法则是把方法容器内对方法全部计算一次
            * 计算属性调用是不能和方法一样增加 `()`, 应该直接与调用属性一样进行使用 

10. vue 动态绑定 css
    * vue 实现 css 样式方法 `<div v-bind:class="{样式名称:true}"></div>`
    * vue 绑定 css 样式方法 `<div v-bind:class="{样式名称:属性名称-bool}"></div>`
    * vue 动态控制 css 样式方法 `<div v-on:click="属性名称-bool: !属性名称-bool" v-bind:class="{样式名称:属性名称-bool}"></div>`
    * css 的 class 属性需要加 `{}`

11. vue 指令 v-if v-else-if v-show
    * 使用方法: `<p v-if="error" class="error">There has been an error</p>` 如果 error 为 true 那么显示, 反之隐藏
    * 标签有: 
        * `v-if` 判断是否为真
        * `v-else-if` 如果上一个标签的 `v-if` 为假, 那么继续判断
        * `v-show` 是否显示, 该标签只是操作的 display 的值

12. vue 指令 v-for 及 template v-for
    * 使用方法1: `<li v-for="character in characters">{{ character }}</li>` 定义一个参数, 通过 in 链接到数组
    * 使用方法2: `<li v-for="(ninja, index) in ninjas">{{ index }} . {{ ninja.name }} - {{ ninja.age }}</li>` 定义两个参数, 第二个为序列号
    * 使用方法3: `<template v-for="ninja in ninjas">...</template>` 可以替换 div 标签, 去除不必要的标签
    * 使用方法4: `<div v-for="(val, key) in ninja">` 可以遍历对象 第一个参数为属性值, 第二个参数为属性名称
    * 实现 html 循环

### 13. vue 实战DEMO
    * 使用 vue 实现小游戏

14. vue 初始化多个 vue 对象
    * 可以通过把对象赋给变量来区分 vue 对象
    * 可以通过 变量名 来获取该变量的变量及方法

15. vue 组件的应用
    * 组件创建方式: 
    ```js
    Vue.component('TestComponent', {
        template: '<p>组件应用</p>',        // 组件必须定义在一个主标签中, 容器中可以定义多个标签, 可以与 html 内调用 vue 对象一样的调用
        data:function(){                   // 数据必须以方法返回形式定义
            return {
                name:"hello"               // 定义的数据
            }
        },
        methods:{                          // 定义方法与 vue 对象形式一样
        },
        computed:{                         // 定义运算式与 vue 对象形式一样
        }
    });
    ```
    * html 使用方法
    ```html
    <TestComponent></TestComponent>
    ```

### 16. vue 脚手架 cli
    * 安装 vue-cli
        * `npm install -g vue-cli`              安装全局 vue-cli
        * `vue init webpack project_name`       使用 vue webpack 创建项目 (注意: 必须先安装 webpack)
            * 第一个提示: 项目名称
            * 第二个提示: 项目描述
            * 第三个提示: 作者
            * 第四个提示: 选择安装内容 (enter)
            * 第五个提示: 是否安装 vue-router (n)
            * 第六个提示: 是否安装测试 ESLint (n)  
            * 第七个提示: 是否安装其他测试 (n)
            * 第八个提示: 选择测试类型 (enter)
            * 第九个提示: 是否安装e2e测试 (n)
            * 第十个提示: 用什么进行安装 (enter)
        * 等待安装完成后执行命令 `cd vue-playlist` 跳入项目文件夹内
        * 执行命令 `npm run dev` 开启项目

17. vue 项目内 src 文件流程及根组件介绍
    * 执行顺序 `index.html -> main.js -> App.vue`
    * App.vue 文件结构
        * `<template>` html 文件内容
        * `<script>` js 文件内容
        * `<style>` css 文件内容

18. vue 组件嵌套
    * 全局组件调用
        * 在 `main.js` 文件内对组件进行导入
            ```js
            import Ninjas from './Ninjas.vue'
            Vue.component('ninjas', Ninjas);
            ```
            * 这样就可以在 html 页面或其他 js vue 文件内直接使用 `<ninjas/>` 调用组件内容
    * 组件调用
        * 在 组件或 `App.vue` 中对组件进行导入
            ```js
            import Ninjas from './Ninjas.vue'
            export default {
                components: {
                    'ninjas': Ninjas
                }
            }
            ```
            * 这样就可以在该页面中使用导入的组件 `<ninjas/>` 

19. vue 组件 css 作用域
    * 组件在写样式的时候加入 scoped 关键字实现样式分离
    * `<style scoped></style>`
    * 不加关键字, 就一定会影响到其他组件的样式

### 20. vue 实战DEMO(组件嵌套)

21. vue 属性传值Props
    * 父组件传子组件
        * `<app-ninjas v-bind:ninjas="ninjas"></app-ninjas>` 父组件使用子组件时使用绑定参数
        ```js
        export default {
            // 传入参数列表
            props: {
                // 传入的参数 (名字对应父组件传入的名字)
                ninjas: {
                    // 传入的类型
                    type: Array,
                    // 接受参数
                    required: true
            },
            // props: [ "ninjas" ],     // 也可以写成数组形式
        }
        ```

22. vue 传值和传引用
    * 传值: String, Number, Boolean
    * 引用: Array, Object
    * 注意: 传值改变后不会影响其他接受值的地方的值, 传引用改变值后会影响其他接受值的地方的值

23. vue 事件传值(子to父)
    * 子组件需要注册一个事件 `$emit`
    ```html
    <h1 v-on:click="changeTitle">{{ title }}</h1>
    ```
    ```js
    methods: {
      changeTitle: function(){
        this.$emit('changeTitle', 'Vue Ninjas');
      }
    }
    ```
    * 父组件获取方式 使用 `$event` 获取子组件的参数
    ```html
    <header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></header>
    ```
    ```js
    methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      }
    }
    ```

24. vue 生命周期执行顺序
    * 与 `data(), methods, props, computed` 平级方法
    ```js
    // 也可以写成 beforeCreate:function(){}
    beforeCreate(){
        alert('组件实例化之前执行的函数');
    },
    created(){
        alert('组件实例化完毕, 但页面还未显示');
    },
    beforeMount(){
        alert('组件挂载前, 页面还未展示, 但虚拟 DOM 已经配置');
    },
    mounted(){
        alert('组件挂载后, 此方法执行后, 页面显示');
    },
    beforeUpdate(){
        alert('组件更新前, 页面还未更新, 但虚拟DOM已经配置');
    },
    updated(){
        alert('组件更新, 此方法执行后, 页面显示');
    },
    beforeDestory(){
        alert('组件销毁前调用方法');
    },
    destoryed(){
        alert('组件销毁后调用方法');
    }
    ```