import './assets/global.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-blue/theme.css' 
// * Tema da aplicação, acesse o node_modules @primevue para ver mais.
// * Deixar o tema sempre por último, para que não cause conflito entre outros estilos.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple'


const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true });
app.directive("ripple", Ripple);
app.mount('#app')
