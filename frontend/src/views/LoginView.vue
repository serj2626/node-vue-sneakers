<script setup></script>

<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-2 rounded shadow-2xl text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Авторизация</h1>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Имя пользователя"
        />

        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Пароль"
        />

        <button
            type="submit"
            class="w-full text-center py-3 rounded bg-blue-400 text-white hover:bg-blue-600 focus:outline-none my-1"
          >
            Войти
          </button>

        <div class="text-grey-dark mt-6 text-center">
          У вас нет есть аккаунта?
          <RouterLink
            to="/signup"
            class="no-underline border-b border-blue text-blue"
          >
            <span class="text-yellow-600">Создайте аккаунт</span> </RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
