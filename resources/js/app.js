import { createApp } from 'vue/dist/vue.esm-bundler.js';

import './bootstrap';
import Router from "./Router/index.js";
import Store  from './Store/index.js';
import headercomp from "./Components/Header.vue"        // the name should be samll else error 

createApp({
    components:{
        headercomp,        // this is because if you want to directly use a component in blade
    }
}).use(Router).use(Store).mount("#app");


// this is the main file that creates vue app and this is used by vite so any change in vue compoentn is loaded without refresh 