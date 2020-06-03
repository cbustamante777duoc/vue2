const app = new Vue({

    el:'#app',
    data:{
        mensaje:'ciclo de vida ',
    },
    // antes que haga cualquier cosa
    beforeCreate(){
        console.log('mensaje before create');
    },
    create(){
        console.log('mensaje create');
    },
    beforeMount(){
        console.log('mensaje before mount');
    },
    mounted(){
        console.log('mensaje mounted');
    },
    // antes de actualizar un algo
    beforeUpdate(){
        console.log('mensaje before Update');
    },
    update(){
        console.log('mensaje Update');
    },
    // antes de destruir la instacia de vue
    beforeDestroy(){
        console.log('mensaje before destroy');
    },
    // despues de destruida la instacia de vue
    destroyed(){
        console.log('mensaje destruir');
    },
    methods: {
        destruir() {
            this.$destroy();
            
        }
    },

    
});