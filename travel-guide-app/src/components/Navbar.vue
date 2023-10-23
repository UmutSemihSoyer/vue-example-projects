<template>
  <nav class="flex items-center justify-between h-20 bg-blue-500 px-6">
    <router-link to="/" class="text-white text-xl font-bold">Travel Guide</router-link>
    <ul class="flex space-x-6">
      <li class="ml-auto"><router-link to="/" class="text-white">Home</router-link></li>
      <li><router-link to="/about" class="text-white">About</router-link></li>
      <li><router-link to="/news" class="text-white">News</router-link></li>
      <li><router-link to="/contact" class="text-white">Contact</router-link></li>
    </ul>
  </nav>
</template>



<script lang="ts" setup>
</script>

<style scoped>
/* Navbar stil tanımlamalarınızı buraya ekleyin */
</style>
