<template>
  <v-app v-scroll="onScroll">
    <Navigation :flat="flat" :color="color" :active="active"/>
    <v-main>
      <Home id="home" v-intersect="{ handler: onIntersect, options: { threshold: 0.7 } }" />
      <About id="about" v-intersect="{ handler: onIntersect, options: { threshold: 0.7 } }" />
      <Project id="project" v-intersect="{ handler: onIntersect, options: { threshold: 0.5 } }" />
      <HireMe id="skills" v-intersect="{ handler: onIntersect, options: { threshold: 0.7 } }" />
      <Contact id="contact" v-intersect="{ handler: onIntersect, options: { threshold: 0.5 } }" />
      <Reviews id="reviews" v-intersect="{ handler: onIntersect, options: { threshold: 0.7 } }" />
    </v-main>
    <Footer id="footer" class="footer" />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Home from './components/home/index.vue'
import About from './components/about/index.vue'
import Project from './components/project/index.vue'
import HireMe from './components/hire-me/index.vue'
import Contact from './components/contact/index.vue'
import Reviews from './components/reviews/index.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Navigation,
    Home,
    About,
    Project,
    HireMe,
    Contact,
    Reviews,
    Footer,
  },

  data: () => ({
    active: null,
    color: 'white',
    flat: true,
    top: true,
  }),
  watch: {
    top(value) {
      if (value) {
        this.color = '#EEBF63'
        this.flat = false
      } else {
        this.color = 'white'
        this.flat = true
      }
    },
  },
  methods: {
    onScroll(event) {
      if (typeof window === "undefined") return;
      this.top = window.scrollY || event.target.scrollTop || 0;
    },
    onIntersect(isIntersecting, entries) {
      if (isIntersecting) {
        this.active = entries[0].target.id
      }
      console.log(this.active)
    },
  },
}
</script>

<style> * {
   font-family: 'Poppins', sans-serif;
 }


 section {
   padding: 5% 10%;
 }

 .footer {
   padding: 3.5% 10%;
 }

 /* Style for pagination bullet */

 .swiper-pagination {
   position: relative;
   bottom: 0;
   left: 0;
   right: 0;
   margin-top: 5%;
   width: 100px;
   height: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
 }

 .swiper-pagination-bullet {
   opacity: 1;
   background-color: white;
   border-radius: 50%;
   width: 10px;
   height: 10px;
   transition: all 0.3s ease-in-out;
 }

 /* Style for active pagination bullet */
 .swiper-pagination-bullet-active {
   background-color: #505050;
   border-radius: 25px;
   width: 20px;
   height: 10px;
 }
</style>
