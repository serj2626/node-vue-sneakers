<script setup>

import { RouterLink } from "vue-router";
</script>

<template>
  <div class="nav bg-slate-100">
    <RouterLink class="nav-link" :to="{ name: 'products' }"
      >Продукты</RouterLink
    >
    <RouterLink class="nav-link" :to="{ name: 'cart' }">Корзина</RouterLink>
  </div>
</template>

<style scoped>

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100px;

  & .nav-link {
    text-decoration: none;
    color: #000;
    font-size: 26px;
    font-weight: 600;
  }
}

.router-link-exact-active {
  color: red;
  font-weight: 900;
}
</style>
