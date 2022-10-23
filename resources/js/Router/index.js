import { createRouter,createWebHistory } from "vue-router";
import HeaderComponent from "../Components/Header.vue"
import OptionsComponent from "../Components/Options.vue"
import CompositionComponent from "../Components/Composition.vue"



const routes =[
    {
        path: "/",
        component:HeaderComponent,
        name: "home",
    },
    {
        path: '/options',
        component:OptionsComponent, 
        name:'options',
    },
    {
        path: '/composition',
        component:CompositionComponent, 
        name:'composition',
    },
]
export default createRouter({
    history: createWebHistory(),
    routes,
});