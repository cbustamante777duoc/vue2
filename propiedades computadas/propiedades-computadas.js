const app = new Vue({

    el:'#app',
    data:{
        mensaje:'texto cualquiera',
        contador: 0

    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success' : this.contador < 20,
                'bg-warning' : this.contador >=20 && this.contador <=50,
                'bg-danger'  : this.contador >= 50  
            }
        }
    }
});