<script setup lang="ts">
import { ref } from 'vue';
const openPopUp = ref(false);

const togglePopup = () => {
  openPopUp.value = !openPopUp.value
}

</script>



<template>
  <button class="w-100 flex flex-row  h-30 p-2 ml-8  " @click="togglePopup">ADD DECISION</button>
  <div class=" add-decision-popup" v-if="openPopUp">
    <div class="mt-2 ml-10 popup-content flex flex-col ">
      <button class="add mb-2">Add new decision</button>
      <button class="mb-2" type="button" @click="togglePopup">Close</button>
    </div>
  </div>
</template>

<style scoped>
.popup-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
}
</style>