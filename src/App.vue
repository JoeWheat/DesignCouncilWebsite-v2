<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="fade" mode="out-in">
      <router-view class="pad" />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/core/Footer.vue";
import Navbar from "./components/core/Navbar.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.circle {
  border-radius: 50%;
  object-fit: cover;
}
.box {
  padding: 30px;
  overflow: hidden;
  border-radius: 3px;
  background: white;
  -webkit-box-shadow: rgba(68, 88, 144, 0.1) 0px 10px 29px 10px;
  box-shadow: rgba(68, 88, 144, 0.1) 0px 10px 29px 10px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  will-change: transform;
  /* animation: test 4s ease-in-out infinite; */
}
.box:hover {
  transform: translateY(-5px) !important;
}
.pad {
  padding-top: 90px;
}
button:hover,
a:hover {
  transform: scale(1.1);
  transition: all 1s;
}
</style>
