new Vue({
    el: '#vue-app',
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        /*addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age;
        }*/
    },
    // 计算属性容器
    computed: {
        addToA: function(){
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age;
        }
    }
});
