<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { useToast } from "vue-toastification";
import axios from "axios";

const toast = useToast();
const form = reactive({
    username: "",
    email: "",
    password: "",
    password2: "",
});

const validateForm = () => {
  if (!form.username || !form.email || !form.password) {
    toast.error("Все поля обязательны к заполнению");
    return false;
  }
  if (form.password.length < 6) {
    toast.error("Пароль должен содержать не менее 6 символов");
    return false;
  }
  if (form.password !== form.password2) {
    toast.error("Пароли не совпадают");
    return false;
  }

  return true;
};

const submitForm = async () => {
  if (validateForm()) {
    try {
      const res = await axios.post("/api/users/signup", form);
      if (res.status === 201) {
        toast.success("Регистрация прошла успешно");
        form.username = "";
        form.email = "";
        form.password = "";
        form.password2 = "";
      }
    } catch {
      toast.error("Что то пошло не так");
    }
  }
};
</script>

<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center 
      justify-center px-2"
    >
      <div class="bg-white px-6 py-2 rounded shadow-2xl text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Регистрация</h1>
        <form method="post" @submit.prevent="submitForm">
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Имя пользователя"
            v-model="form.username"
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Почта"
            v-model="form.email"
          />

          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Пароль"
            v-model="form.password"
          />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Повторите пароль"
            v-model="form.password2"
          />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-blue-400
             text-white hover:bg-blue-600 focus:outline-none my-1"
          >
            Создать аккаунт
          </button>
        </form>

        <div class="text-grey-dark mt-6 text-center">
          Уже есть аккаунт?
          <RouterLink
            to="/login"
            class="no-underline border-b border-blue text-blue"
          >
            <span class="text-yellow-600">Войти</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
