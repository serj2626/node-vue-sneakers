<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="h-30 bg-slate-200 text-xl">
    <div class="max-w-7xl mx-auto flex justify-between items-center p-4">
      <div class="flex">
        <RouterLink class="nav-link" :to="{ name: 'products' }"
          ><img src="@/assets/logo.png" alt=""><h1 class="">Sneakers</h1></RouterLink
        >
      </div>
      <div class="flex gap-4">
        <RouterLink class="nav-link" :to="{ name: 'cart' }">Корзина</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'login' }">Войти</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'signup' }"
          >Регистрация</RouterLink
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(20, 144, 215);
  font-weight: 900;
}
</style>
