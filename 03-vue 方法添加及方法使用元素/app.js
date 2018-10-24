new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja'
    },
    // 存储方法
    methods: {
        // 定义方法
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
