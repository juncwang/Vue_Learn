Vue.component('greeting', {
    template: '<p>组件应用</p>',
    data:function(){
        return {
            name:"hello"
        }
    },
    methods:{
        changeName:function(){
            this.name = "world"
        }
    },
    computed:{
        
    }
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
