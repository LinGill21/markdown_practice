const app1 = new Vue({
    el: '#welcome',
    data:{
        message:'Hello World!'
    }
})
const app2 = new Vue({
    el:'#reverse',
    data: {
        torev:'edit me!'
    },
    computed: {
        reversed: function(){
            return this.torev.split('').reverse().join('')
        }
    }
})