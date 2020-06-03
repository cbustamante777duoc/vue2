Vue.component('saludo',{
    template:`
    <div>
        <h1>{{saludo}}</h1>
        <h3>Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Perferendis, numquam ut labore
        aut accusamus.
         </h3>


    </div>
    `,
    data() {
        return {
            saludo:'mensaje desde el componente saludo'
        }
    },

})