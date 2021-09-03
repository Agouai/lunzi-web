import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router';
import FirstComponents from './components/FirstComponents.vue';
import SecondCom from './components/SecondCom.vue'

const history=createWebHashHistory()
const router=createRouter(
    {
        history:history,
             routes:[
                 {
                    path:'/',
                     component:FirstComponents,
                 },
                 {
                     path:'/xxx',
                     component:SecondCom,
                 } ]
    }
)
const app=createApp(App)
     app.use(router)
app.mount('#app')
