<script setup>
import { ref } from 'vue'
let popUpSituation = ref(false)
function openPopUp(){
  popUpSituation.value = !popUpSituation.value
}

</script>


<template>

  <div class="container card flex w-40 justify-center p-8">
    <div class="text-2xl font-bold">
      <Button class="mb-2 pr-4 team" @click="openPopUp()">TEAM</Button>
      <Button class="mb-2 decision">DECISION</Button>
    </div>
  </div>
  <RouterView v-if="popUpSituation"></RouterView>
</template>

<style scoped>
  .team, .decision{
    color: black;
    background-color: white;
    border-color: white;
  };

</style>
  