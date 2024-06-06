# Соединить front vue.js и express.js

> Пример использования front vue.js и express.js

> [![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/sites/smart-pottery/deploys)

> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Smart-Pottery/frontend&project-name=frontend)

> [![GitHub stars](https://img.shields.io/github/stars/Smart-Pottery/frontend?style=social)](https://github.com/Smart-Pottery/frontend/stargazers)

# File main.js

```js
import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";

axios.defaults.baseURL = "http://localhost:3000";

createApp(App).mount("#app");
```


#   file main.js
>   add CORS

```js
        
```