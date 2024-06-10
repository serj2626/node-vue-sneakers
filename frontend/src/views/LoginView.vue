<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useUserStore } from "../stores/user";
import axios from "axios";

const userStore = useUserStore();
const toast = useToast();

const email = ref("");
const password = ref("");

const validateForm = () => {
  if (!email.value || !password.value) {
    toast.error("Все поля обязательны к заполнению");
    return false;
  }
  return true;
};
const submitLogin = async () => {
  if (validateForm()) {
    try {
      const res = await axios.post("/api/users/login", {
        email: email.value,
        password: password.value,
      });
      userStore.auth(res.data);
      toast.success("Авторизация прошла успешно");
      email.value = "";
      password.value = "";
    } catch {
      toast.error("Ошибка при авторизации");
    }
  }
};
</script>

<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-2 rounded shadow-2xl text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Авторизация</h1>
        <form method="post" @submit.prevent="submitLogin">
          <input
            type="email"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Ваша почта"
            v-model="email"
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Пароль"
            v-model="password"
          />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-blue-400 text-white hover:bg-blue-600 focus:outline-none my-1"
          >
            Войти
          </button>
        </form>

        <div class="text-grey-dark mt-6 text-center">
          У вас нет есть аккаунта?
          <RouterLink
            to="/signup"
            class="no-underline border-b border-blue text-blue"
          >
            <span class="text-yellow-600">Создайте аккаунт</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
