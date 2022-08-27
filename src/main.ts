import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)
console.log(app);


app.mount('#app')
app.config.errorHandler = err => {
  console.log(err);
  
}