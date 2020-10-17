<template>
  <div class="home">
    <Header></Header>
    <About></About>
    <Contact></Contact>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import About from "../components/home/About.vue";
import Contact from "../components/home/Contact.vue";
export default {
  name: "Home",
  components: {
    Header,
    About,
    Contact,
  },
};
</script>
<style>
.home {
  min-height: 100vh;
}
</style>
