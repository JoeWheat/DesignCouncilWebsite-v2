<template>
  <div class="err">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h1>404</h1>
          <p class="mb-4">
            This page was not found, make sure the URL is correct or if you
            think this is an error, check back later!
          </p>
          <button onclick="window.history.back()" class="btn-dc">Back</button>
          <button @onclick="home" class="btn-dc">Home</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
