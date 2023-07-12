import { createRouter,createWebHistory } from "vue-router";
import HeaderComponent from "../Components/Header.vue"
import OptionsComponent from "../Components/Options.vue"
import CompositionComponent from "../Components/Composition.vue"
import StoreComponent from "../Components/Store.vue"
import BooksComponent from "../Components/Books.vue"
import BooksCreateComponent from "../Components/BooksCreate.vue"
import PiniaStoreComponent from "../Components/PiniaStoreComponent.vue"
import EmitComponent from "../Components/ParentComponentForEmit.vue"







const routes =[
    {
        path: "/",
        component:OptionsComponent,
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
    {
        path: '/Store',
        component:StoreComponent,
        name:'store',
    },
    {
        path: '/books',
        component:BooksComponent,
        name:'books',
    },
    {
        path: '/books/create',
        component:BooksCreateComponent,
        name:'booksCreate',
    },
    {
        path: '/PiniaStore',
        component:PiniaStoreComponent,
        name:'PiniaStore',
    },
    {
        path: '/emit',
        component:EmitComponent,
        name:'emit',
    }
]
export default createRouter({
    history: createWebHistory(),
    routes,
});
