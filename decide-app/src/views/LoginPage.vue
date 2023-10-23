<script setup>
import InputText from 'primevue/inputtext';
import router from '../router';

function goToHome(){
  console.log("test test");
  router.push({ name: 'HomePage' })
}
</script>

<template>
<!-- TO DO FIX WIDTH AND HEIGHT -->
  <div class="w-screen h-screen -mt-20 flex items-center justify-center text-2xl font-bold font-sans">
    <div class="w-200 h-150 p-10 rounded-lg  shadow-lg">
      <div class="space-y-10">
        <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2 ">
          <label class="mr-8">Username</label>
          <InputText id="username" type="text" class="w-full" />
        </div>
        <div class="flex items-center gap-4">
          <label class="mr-8">Password</label>
          <InputText id="password" type="password" class="w-full" />
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex flex-row items-center justify-between space-x-10">
          <Button label="Login" icon="pi pi-user" class="w-40 text-2xl" @click="goToHome"></Button>
          <button class="text-center justify-center" @click="goToHome">Register</button>
        </div>
      </div>
      </div>
    </div>
  </div> 

</template>