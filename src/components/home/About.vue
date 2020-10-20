<template>
  <div class="container about">
    <div class="row">
      <div class="col-md-6">
        <h1>About us</h1>
        <hr />
        <img
          src="https://tr3.cbsistatic.com/hub/i/r/2018/03/02/aacee157-8c76-433e-90b8-07d14dc96c1f/resize/1200x900/15af6fa88449542bcb349054049d60c7/microsoft-teams.png"
          class="img-fluid"
        />
      </div>
      <div class="col-md-6 mt-4 pt-md-5">
        {{ data.about.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
};
</script>

<style>
.about {
  padding-bottom: 100px;
}
</style>
