import { reactive } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = reactive({
    id: "",
    username: "",
    email: "",
    password: "",
    isAuthenticated: false,
    token: "",
  });

  const auth = (data) => {
    user.id = data.id;
    user.username = data.username;
    user.email = data.email;
    user.isAuthenticated = true;
    user.token = data.token;
  };

  return { user, auth };
});
