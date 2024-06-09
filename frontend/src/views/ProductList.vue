<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);

onMounted(async () => {
  const res = await axios.get("/products");
  products.value = res.data;
  console.log(products.value);
});
</script>

<template>
  <div class="grid grid-cols-4 gap-5 mt-16 mb-32">
    <div v-for="product in products" :key="product.id">
      <div
        class="rounded-md overflow-hidden shadow-md my-10 
        border-spacing-4 pt-3 cursor-pointer h-full 
        hover:-translate-y-1 hover:shadow-2xl hover:border-gray-800"
      >
        <img
          class="object-cover h-48 w-96"
          src="@/assets/shoes5.jpg"
          alt="Forest"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ product.name }}
          </div>

          <p class="text-gray-700 text-base">
            Их вы можете купить в нашем магазине по цене
            {{ product.price }} рублей.
          </p>
        </div>

        <div class="px-6 pt-4 pb-2">
          <span class="me-9 mb-2">
            <RouterLink :to="{ name: 'product', params: { id: product.id } }">
              <button
                class="py-2 px-3 bg-sky-500 text-white rounded-lg
                 hover:bg-sky-600"
              >
                Подробнее
              </button>
            </RouterLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
