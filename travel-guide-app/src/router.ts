import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import DestinationDetail from './views/DestinationDetail.vue';
import About from './views/About.vue';
import Navbar from './components/Navbar.vue';
import News from './views/News.vue';
import Search from './components/Search.vue';
import ContactForm from './views/ContactFrom.vue';
import Footer from './components/Footer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: { default: Home, header: Navbar },
  },
  {
    path: '/destination/:id',
    name: 'DestinationDetail',
    components: { default: DestinationDetail, header: Navbar },
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    components: { default: About, header: Navbar, footer: Footer },
  },
  {
    path: '/news',
    name: 'News',
    components: { default: News, header: Navbar },
  },
  {
    path: '/search',
    name: 'Search',
    components: { default: Search, header: Navbar },
  },
  {
    path: '/contact',
    name: 'ContactForm',
    components: { default: ContactForm, header: Navbar, footer: Footer },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
