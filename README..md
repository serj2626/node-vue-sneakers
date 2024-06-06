# File main.js

```js
import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";

axios.defaults.baseURL = "http://localhost:3000";

createApp(App).mount("#app");
```


#   add CORS

>   file vue-config.js

    module.exports = {
        devServer: {
            proxy: "http://localhost:3000",
        },
    }