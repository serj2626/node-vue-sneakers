<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>
<template>
  <div class="app">
    <Header />
    <main class="max-w-7xl mx-auto">
      <RouterView />
    </main>
    <!-- <footer
      class="bg-green-700 bg-opacity-30
             text-3xl text-white text-center 
             fixed 
             inset-x-0 
             bottom-0 
             py-4"> 
      This is sticky fixed Footer. 
    </footer>  -->
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  
}
</style>
