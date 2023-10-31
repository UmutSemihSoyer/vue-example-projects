<script setup lang="ts">
import { useTaskStore } from '../stores/TaskStore'
import { type task } from "../modules/task";

const props = defineProps({
  task: {},
});

const taskStore = useTaskStore();

const deleteTask = (taskId: number) => {
  taskStore.deleteTask(taskId);
};

const toggleFav = (taskId: number) => {
  taskStore.toggleFav(taskId);
};
</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="deleteTask(task.id)">
        delete
      </i>
      <i class="material-icons" :class="{ active: task.isFav }" @click="toggleFav(task.id)">
        favorite
      </i>
    </div>
  </div>
</template>
