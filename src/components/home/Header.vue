<template>
  <section class="section section-sm pb-5 header">
    <Waves></Waves>
    <div class="container home-text">
      <div class="row align-items-center">
        <div class="col-sm-8 col-lg-6 pb-xl-4">
          <h2 class="text-secondary">International School Basel</h2>
          <h1>{{ data.name }}</h1>
          <p class="lead">
            {{ data.header.description }}
          </p>
          <input class="mt-2" v-model="color" type="color" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Waves from "../core/Waves.vue";
export default {
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
  watch: {
    color() {
      document.documentElement.style.setProperty("--red-dc", this.color);
    },
  },
  data() {
    return {
      color: "",
    };
  },

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
