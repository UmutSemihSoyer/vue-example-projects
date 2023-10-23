<template>
  <div class="bg-gray-100 min-h-screen py-16">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold mb-6">Welcome to Your Travel Guide</h1>
      <DestinationList :destinations="destinations" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import api from '../services/api';
import DestinationList from './DestinationList.vue';
import { Destination } from '../models/destination.vue';

export default defineComponent({
  name: 'Home',
  components: {
    DestinationList,
  },
  setup() {
    var destinations = ref<Destination[]>([]);

    onMounted(() => {
      api.getDestinations()
        .then((response: Destination[]) => {
          console.log(response);
          destinations.value = response;
        })
        .catch((error: any) => {
          console.error('Error fetching destinations:', error);
        });
    });

    return {
      destinations,
    };
  },
});
</script>

<style scoped></style>
