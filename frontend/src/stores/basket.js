import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketStore = defineStore("basket", () => {
  const basket = ref([
    {
      name: "",
      material: "",
      description: "",
      image: "",
      rating: 0,
      price: 0,
    },
  ]);

  const getBasket = () => {
    return basket.value;
  };

  const totalPrice = () => {
    return basket.value.reduce((total, product) => total + product.price, 0);
  };

  const totalQuantity = () => {
    return basket.value.reduce((total, product) => total + product.quantity, 0);
  };

  const addToBasket = (product) => {
    basket.value.push(product);
  };

  const removeFromBasket = (product) => {
    basket.value = basket.value.filter((p) => p.id !== product.id);
  };

  const clearBasket = () => {
    basket.value = [];
  };
  return {
    basket,
    addToBasket,
    removeFromBasket,
    clearBasket,
    getBasket,
    totalPrice,
    totalQuantity,
  };
});
