import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    username: "",
    email: "",
    password: "",
    isAuthenticated: false,
  });

  const doubleCount = computed(() => 2 * 2);
  function authenticate(data) {
    user.value.isAuthenticated = true;
    user.value.username = data.username;
    user.value.email = data.email;
    user.value.password = data.password;
  }

  return { user, doubleCount, authenticate };
});
