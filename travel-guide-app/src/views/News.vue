<template>
  <div class="py-12 bg-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-6">Latest News</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <li v-for="newsItem in newsItems" :key="newsItem.id" class="bg-white shadow-md p-4 rounded-lg news-item">
          <h3 class="text-xl font-semibold mb-2">{{ newsItem.title }}</h3>
          <p class="text-gray-700">{{ newsItem.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'News',
  data() {
    return {
      newsItems: [
        {
          id: 1,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 2,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 3,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 4,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 5,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 6,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 7,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 8,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 9,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        {
          id: 10,
          title: 'New Attraction Opening Soon',
          content: 'We are excited to announce the opening of a new attraction...',
        },
        // TO DO ADD NEW NEWS AND CARRY TO db.json FILE
      ],
    };
  },
});
</script>

<style scoped></style>
