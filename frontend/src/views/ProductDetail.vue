<script setup>
import { products } from "@/fake-data";
import { useRoute } from "vue-router";
const route = useRoute();
const { id } = route.params;

const shoes = products.find((shoe) => shoe.id == id);
</script>

<template>
  <div class="card mt-32">
    <img src="@/assets/shoes6.png" class="w-64" alt="photo" />
    <div class="info">
      <h1>{{ shoes.name }}</h1>
      <p>{{ shoes.description }}</p>
      <p>{{ shoes.price }}</p>
      <p>{{ shoes.rating }}</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold 
        py-2 px-4 rounded"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info {
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
