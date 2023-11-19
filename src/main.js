import { createApp } from 'vue'
import './style.css'

import App from './App.vue'

import { router } from './router.js'
import { store } from './state.js'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { useConsentFormStore } from './stores/ConsentFormStore'
import { useIBTestStore } from './stores/IBTestStore'
import { useSRTestStore } from './stores/SRTestStore'

// create app
let app = createApp(App)

// install vue-router 
app.use(router);

// install pinia
app.use(store); 

// install pinia-plugin-persistedstate 
store.use(piniaPluginPersistedState);

// initialize stores 
useConsentFormStore().init(); 
useIBTestStore().init();
useSRTestStore().init();

// mount app
app.mount("#app")