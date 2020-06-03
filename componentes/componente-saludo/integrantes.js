Vue.component('integrantes',{
    template:`
    <div>
        <ul>
            <li v-for="item of blackpink ">{{item.nombre}} {{item.edad}}</li>

        </ul>

    </div>
    `,
    data() {
        return {
            blackpink:[
                {nombre:'Lalisa',edad:22},
                {nombre:'Jennie',edad:23},
                {nombre:'Jisoo',edad:25},
                {nombre:'Rose',edad:22},
                {nombre:'marru',edad:17}
            ]
        }
    },

})