import { createApp } from 'vue'
import './style.css'
import Aura from '@primevue/themes/aura';
import PrimeVue from "primevue/config";
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import PaperBrowser from "./paper/PaperBrowser.vue";
import ProjectsView from "./ProjectsView.vue";
import ShareView from "./ShareView.vue";
import ContactView from "./ContactView.vue";
import ContributeView from "./ContributeView.vue";
import Intro from "./components/Intro.vue";



const routes = [
    { path: '/', component: Intro },
    { path: '/papers', component: PaperBrowser },
    { path: '/projects', component: ProjectsView },
    { path: '/share', component: ShareView },
    { path: '/contact', component: ContactView },
    { path: '/contribute', component: ContributeView }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')

