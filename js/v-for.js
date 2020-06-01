const app = new Vue({
    el:'#app',
    data: {
        titulo:'hola mundo',
        frutas:[
            {nombre:'manzana',cantidad:20},
            {nombre:'pera',cantidad:0},
            {nombre:'kiwi',cantidad:20}
        ],
        nuevaFruta:'',
        total: 0 ,
        nuevaIntegrante:'',

        Blackpink:[
            {nombre:'Lalisa',edad:22},
            {nombre:'Jennie',edad:23},
            {nombre:'Jisoo',edad:25},
            {nombre:'Rose',edad:22}
        ]
    },
    methods: {
        //metodo que agrega una nueva fruta
        AgregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:0
            });
            //esto deja en blanco el input
            this.nuevaFruta='';
        },
        AgregarNuevaIntegrante(){
            this.Blackpink.push({
                nombre: this.nuevaIntegrante, edad:22
            });
            this.nuevaIntegrante='';

        }
    },
    computed: {
        sumarFrutas() {

           this.total = 0; 

           for(item of this.frutas) {

               this.total = this.total + item.cantidad;
           }
           // retorna la cantidad sumada
           return this.total;
        },
        /*
        sumarEdades() {
            this.total = 0;
            for(item of this.Blackpink){
                this.total = this.total + item.edad;
            }
            return this.total;

        }*/
    }

});