<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="h-20 bg-slate-100 text-xl">
    <div class="max-w-7xl mx-auto flex justify-between align-center p-4">
      <div class="flex">
        <RouterLink class="nav-link" :to="{ name: 'products' }"
          >Кроссовки</RouterLink
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
  color: red;
  font-weight: 900;
}
</style>
