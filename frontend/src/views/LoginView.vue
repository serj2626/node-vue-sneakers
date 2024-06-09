<script setup></script>

<template>
  <!-- <h1 class="text-center">Авторизация</h1> -->
  <!-- add fom login  flex col for center page-->

  <div>
    <div class=" relative top-64">
      <h1 class="text-center">Авторизация</h1>
      <p class="text-center">Для входа введите имя пользователя и пароль</p>
      <form class="flex flex-col align-middle items-center justify-center gap-4">
        <input class="block" type="text" placeholder="имя пользователя" />
        <input class="block" type="text" placeholder="пароль" />
        <button
          class="bg-indigo-500 hover:bg-indigo-700 text-white 
          font-bold py-2 px-4 rounded"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>
