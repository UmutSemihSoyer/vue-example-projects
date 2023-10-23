<template>
  <div class="py-16 bg-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-6">Contact Us</h2>
      <form @submit.prevent="submitForm" class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <label for="name" class="block font-semibold mb-2">Name</label>
        <input v-model="name" type="text" id="name" required
          class="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500" />

        <label for="email" class="block font-semibold mb-2">Email</label>
        <input v-model="email" type="email" id="email" required
          class="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500" />

        <label for="message" class="block font-semibold mb-2">Message</label>
        <textarea v-model="message" id="message" required
          class="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>

        <button type="submit"
          class="block w-full py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };


  console.log('Form data:', formData);
};

</script>

<style scoped></style>
