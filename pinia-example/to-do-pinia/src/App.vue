<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore'


  const taskStore = useTaskStore();

</script>

<template>
  <main>

    <header>
      <img src="./assets/pinia-logo.svg" >
      <h1>Pinia Tasks</h1>
    </header>
    
  </main>
</template>
