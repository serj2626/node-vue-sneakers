<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const product = ref({});
const { id } = route.params;

const getProduct = async () => {
    const { data } = await axios.get(`/products/${id}`);
    product.value = data;
};

onMounted(getProduct);
</script>

<template>
    <div class="card mt-32">
        <img src="@/assets/shoes6.png" class="w-64" alt="photo" />
        <div class="info">
            <h1>{{ product }}</h1>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
