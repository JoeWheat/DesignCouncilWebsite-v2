<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <h1>Meet the Team</h1>
        <hr class="mt-3" />
        <p>
          These are the people part of the ISB Design Council and are powering
          the design community.
        </p>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(person, ind) in team"
        :key="person.name"
        class="col-md-10 mx-auto box mb-4"
      >
        <div class="container">
          <div v-if="ind % 2 == 0" class="row">
            <div class="col-md-4">
              <img class="img-fluid person-img" :src="person.image" />
            </div>
            <div class="col-md-8 mt-3 mt-md-0">
              <h1>{{ person.name }}</h1>
              <p class="mt-1 text-muted">{{ person.role }}</p>
              <p>{{ person.message }}</p>
            </div>
          </div>
          <div v-else class="row">
            <div class="col-md-8 mb-4 mb-md-0">
              <h1>{{ person.name }}</h1>
              <p class="mt-1 text-muted">{{ person.role }}</p>
              <p>{{ person.message }}</p>
            </div>
            <div class="col-md-4">
              <img class="img-fluid person-img" :src="person.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Daniel Wilson",
          role: "Software/web development",
          image: require("../assets/images/team/dan.png"),
          message:
            "Hi, I’m Daniel, I’m a 15 year old developer, computer science is my passion and I love being able to solve problems with programming. I also play tennis and the odd game of Tetris. You can contact me any time with questions related to the website with my email below 🙂",
        },
        {
          name: "Daniel Wilson",
          role: "Software/web development",
          image: require("../assets/images/team/dan.png"),
          message:
            "Hi, I’m Daniel, I’m a 15 year old developer, computer science is my passion and I love being able to solve problems with programming. I also play tennis and the odd game of Tetris. You can contact me any time with questions related to the website with my email below 🙂",
        },
      ],
    };
  },
};
</script>

<style>
.person-img {
  width: 100%;
  object-fit: cover;
}
</style>
