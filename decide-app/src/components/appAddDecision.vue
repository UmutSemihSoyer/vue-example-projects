<script setup lang="ts">
import { ref } from 'vue';
const popupOpen = ref(false);

const togglePopup = () => {
  popupOpen.value = !popupOpen.value
}

</script>



<template>
  <button class="w-full flex flex-row  h-30 p-8 " @click="togglePopup">asdasdasdasd</button>

  <div class="add-recipe-popup" v-if="popupOpen">
    <div class="popup-content">
      <h2>Add new recipe</h2>



      <button type="button" @click="togglePopup">Close</button>
    </div>
  </div>
</template>

