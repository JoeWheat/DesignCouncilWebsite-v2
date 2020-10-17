<template>
  <section class="section section-sm pb-5 header">
    <Waves></Waves>
    <div class="container home-text">
      <div class="row align-items-center">
        <div class="col-sm-8 col-lg-6 pb-xl-4">
          <h2 class="text-secondary">International School Basel</h2>
          <h1>Design Council</h1>
          <p class="lead">
            Creating websites, applications and solutions for the International
            School Basel community, founded in 2019
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Waves from "../core/Waves.vue";
export default {
  components: {
    Waves,
  },
};
</script>

<style>
.header {
  height: 100vh;
}
.home-text {
  padding-top: 100px;
}
</style>
