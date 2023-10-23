<template>
  <div class="review-list">
    <ul>
      <li v-for="review in reviews" :key="review.id" class="review-item">
        <div class="rating">{{ review.rating }}/5</div>
        <p class="comment">{{ review.comment }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Review } from '../models/review.vue';


export default defineComponent({
  name: 'ReviewList',
  props: {
    reviews: {
      type: Array as () => Array<Review>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
