export default{
    name:'characterLayout',
    component: ()=>import('../layouts/CharacterLayout'),
    children:[
        {
            path:':id',
            name:'character-option',
            component: ()=>import('../views/CharacterIndividual')
        },
        {
            path:'',
            name:'character-group',
            component: ()=>import('../views/CharacterGroup')
        }
    ]
}