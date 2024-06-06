<script setup>
import { cart } from "@/fake-data";
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
      <button
        class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Купить
      </button>
    </div>
    <div class="mt-8" v-for="product in cart" :key="product.id">
      <div class="flex flex-col md:flex-row border-b border-gray-400 py-4">
        <div class="flex-shrink-0">
          <img
            src="@/assets/shoes2.jpg"
            alt="Product image"
            class="w-32 h-32 object-cover"
          />
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <h2 class="text-lg font-bold">{{ product.name }}</h2>
          <p class="mt-2 text-gray-600">{{ product.description }}</p>
          <div class="mt-4 flex items-center">
            <span class="mr-2 text-gray-600">Количество:</span>
            <div class="flex items-center">
              <button class="bg-gray-200 rounded-l-lg px-2 py-1" disabled>
                -
              </button>
              <span class="mx-2 text-gray-600">1</span>
              <button class="bg-gray-200 rounded-r-lg px-2 py-1" disabled>
                +
              </button>
            </div>
            <span class="ml-auto font-bold">{{ product.price }} rub</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center mt-8">
      <span class="text-gray-600 mr-4">Итого:</span>
      <span class="text-xl font-bold">35.00 rub</span>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 800px;
  margin-bottom: 40px;
}
</style>
