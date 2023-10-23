<template>
  <div class="bg-gray-100 min-h-screen flex justify-center items-center">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4">Search Destinations</h2>
      <div class="flex">
        <input v-model="searchTerm" type="text" placeholder="Search by country"
          class="flex-grow px-3 py-2 rounded-l focus:outline-none" />
        <button @click="searchDestinations"
          class="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none hover:bg-blue-600">Search</button>
      </div>
      <DestinationList :destinations="filteredDestinations" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import DestinationList from '../views/DestinationList.vue';
import { Destination } from '../models/destination.vue';

export default defineComponent({
  name: 'Search',
  components: {
    DestinationList,
  },
  setup() {
    const searchTerm = ref('');
    const destinations: Destination[] = require('../db.json').countries;

    const searchDestinations = () => {
      filteredDestinations.value = destinations.filter(dest =>
        dest.cityName.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    };

    const filteredDestinations = ref(destinations);

    return {
      searchTerm,
      searchDestinations,
      filteredDestinations,
    };
  },
});
</script>

<style scoped></style>
