Vue.component('hijo',{
    template:`
    <div class="py-5 bg-success">
        <h3>componente hijo:{{numero}}</h3>
        <h3>componente hijo:{{saludo}}</h3>
        <h4>nombre {{nombre}}</h4>
        <h4>edad {{edad}}</h4>
    </div>
    `,
    props:['numero','saludo'],
    data(){
        return{
            nombre:'lalisa',
            edad:22
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre);
        this.$emit('edadHijo',this.edad);
    }
})