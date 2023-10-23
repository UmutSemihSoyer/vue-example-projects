<script  lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
// import Search from './views/Search.vue';


export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
});

</script>

<template>
  <!-- <Search></Search> -->
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>
