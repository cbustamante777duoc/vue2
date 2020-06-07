Vue.component('padre',{
    template:`
    <div class="p-5 bg-dark text-white">
        <h3>componente padre</h3>
        <h4> numero es:{{numeroPadre}}</h4>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre= $event"></hijo>
        <hr>
        edad padre{{edadPadre}}
        <hijo  @edadHijo="edadPadre= $event"></hijo>
        
    </div>
    `,
    data(){
        return {
            numeroPadre:777,
            texto:'texto de ejemplo',
            //data el cual va a hacer sobre escrito
            nombrePadre:'',
            edadPadre:0
        }
    }
})