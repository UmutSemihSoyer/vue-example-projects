<template>
  <div class="bg-gray-100 py-16">
    <div class="container mx-auto">
      <h2 class="text-3xl font-semibold mb-4">{{ selectedDestination?.countryName }}</h2>
      <p class="text-gray-700 mb-6">{{ selectedDestination?.description }}</p>
      <div class="carousel-item p-4 rounded-lg shadow-lg overflow-hidden">
        <img :src="selectedDestination?.photo" alt="Carousel Image" class="w-full h-auto" />
      </div>
      <div v-if="selectedDestination?.reviews !== undefined">
        <h3 class="text-2xl font-semibold mt-10 mb-4">Reviews</h3>
        <ReviewList :reviews="selectedDestination.reviews!" />
      </div>
      <div class="mt-8 flex justify-center space-x-4">
        <button @click="prevSlide()"
          class="carousel-control px-6 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
          Previous
        </button>
        <button @click="nextSlide()"
          class="carousel-control px-6 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import api from '../services/api';
import ReviewList from './ReviewList.vue';
import { Destination } from '../models/destination.vue';

const route = useRoute();
const destinationId = route.params.id;
const destinationIdString = destinationId.toString();

const selectedDestination = ref<Destination | null>(null);

onMounted(async () => {
  try {
    const response = await api.getCountries(parseInt(destinationIdString));
    selectedDestination.value = response as Destination;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const nextSlide = () => {
  // Your nextSlide logic here
};

const prevSlide = () => {
  // Your prevSlide logic here
};
</script>

<style scoped></style>
