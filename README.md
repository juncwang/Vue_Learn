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

04. vue 属性绑定
    * 在 `html` 文件标签内绑定属性值需要中属性前面加入 `v-bind:`
    * 例如: `<a v-bind:href="website">The Net Ninja Website</a>`
    * 在 `html` 文件标签内增加 `html` 内容, 需要中标签内加入一个属性值 `v-html`
    * 例如: `<p v-html="websiteTag"></p>`
        * websiteTag 的属性值为 `websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'`

05. vue 方法绑定
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

08. vue 双向数据绑定
    * 必须使用在 `input select textarea` 标签
    * 利用标签 ref 及 v-model 实现双向绑定
    * 第一种方式
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
    * 第二种方式
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

11. vue 指令 v-if
    * 使用方法: `<p v-if="error" class="error">There has been an error</p>` 如果 error 为 true 那么显示, 反之隐藏
    * 标签有: 
        * `v-if` 判断是否为真
        * `v-else-if` 如果上一个标签的 `v-if` 为假, 那么继续判断
        * `v-show` 是否显示, 该标签只是操作的 display 的值