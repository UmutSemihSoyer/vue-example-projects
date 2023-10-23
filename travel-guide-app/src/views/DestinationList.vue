<template>
  <div class="py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-2xl font-semibold mb-6">Popular Destinations</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <li v-for="destination in destinations" :key="destination.id"
          class="bg-white shadow rounded-lg p-4 destination-item">
          <router-link :to="'/destination/' + destination.id" class="block">
            <img :src="destination.photo" alt="Destination Photo" class="w-full h-40 object-cover rounded mb-3" />
            <h3 class="text-lg font-semibold">{{ destination.cityName }}</h3>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>




<script lang="ts" setup>
import { PropType } from 'vue';
import { Destination } from '../models/destination.vue';
const props = defineProps({
  destinations: {
    type: Array as PropType<Destination[]>,
    required: true,
  },
});
console.log(props)
</script>

<style scoped></style>
