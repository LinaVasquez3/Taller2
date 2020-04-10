//AQUI SE HACEN LOS 20 PRODUCTOS

const products = [

    //1
    {
        id: 0,
        tittle: 'sombra de honey',
        img: '/img/honey.jpg',
        description: 'descripcion desde product',
        //filtros (options y variation)
        options: ['grande', 'mediano', 'pequeño'],
        variations: [
            {
                name: 'con kit de brocas + brillo labial',
                price: 250 ,
            },
            {
                name: 'con kit de brocas,',
                price: 200 , 
            },
            {
                name: 'solo sombra',
                price: 100 , 
            }
        ],
        price: 125,
    },

    //2
    {
        id: 1,
        tittle: 'sombra de fresa',
        img: '/img/strawberry.jpg',
        description: 'descripcion desde fresa',
        options:[],
        price: 50,
    }
    
    //3
];

//NO ENTIENDO PA QUE ES ESTA VAINA
//exportar modulo de productos para que lo lea el servidor
module.exports = products;