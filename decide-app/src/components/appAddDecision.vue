<script setup lang="ts">
import { ref } from 'vue';
const openPopUp = ref(false);
const newDecision = ref({
  title: '',
  description: '',
  choices: [],
})
const togglePopup = () => {
  openPopUp.value = !openPopUp.value
}
const addNewDecision = () => {

  return;
}

</script>



<template>
  <button class="w-100 flex flex-row  h-30 p-2 ml-8  " @click="togglePopup">ADD DECISION</button>
  <div class=" add-decision-popup" v-if="openPopUp">
    <div class="mt-2 ml-10 popup-content flex flex-col ">
      <Button>Add New Decision</Button>

      <form @submit.prevent="addNewDecision">
        <div class="group">
          <label for="">Title</label>
          <input type="text" v-model="newDecision.title">
        </div>

        <div class="group">
          <label>Description</label>
          <textarea v-model="newDecision.description"></textarea>
        </div>
      </form>

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


.popup-content .group label {
  display: block;
  margin-bottom: 0.5rem;
}

.popup-content .group input,
.popup-content .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.popup-content .group textarea {
  height: 100px;
  resize: none;
}
</style>