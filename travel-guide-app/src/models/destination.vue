
<script lang="ts" setup>
import { Review } from './review.vue';
export interface Destination {
  id: number;
  countryName: string,
  cityName: string;
  photo: string;
  description: string;
  reviews: Array<Review> | undefined;
}

</script>