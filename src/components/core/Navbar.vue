<template>
  <div>
    <div class="n" :scrolling="scrolled">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-4 col-6">
            <router-link to="/" class="nav-logo"
              ><h4>{{ data.name }}</h4></router-link
            >
          </div>
          <div class="col d-md-block d-none text-right">
            <div class="link" v-for="link in links" :key="link.text">
              <router-link
                :class="link.btn ? 'btn-dc' : ''"
                v-if="link.type == 'page'"
                :to="link.url"
              >
                {{ link.text }}
              </router-link>
              <a
                :class="link.btn ? 'btn-dc' : ''"
                v-if="link.type == 'website'"
                :href="link.url"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
          <div class="col d-md-none text-right">
            <button :ran="ran" class="toggle-nav" @click="toggle">
              <fa icon="folder"></fa>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div :open="toggled" class="m-n d-md-none">
      <div class="container">
        <div class="row">
          <div class="col text-right">
            <fa class="close-m" icon="times" @click="toggle"></fa>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mb-5 pl-4" v-for="link in links" :key="link.text">
            <div class="link">
              <router-link
                :class="'m ' + (link.btn ? 'btn-dc' : '')"
                v-if="link.type == 'page'"
                :to="link.url"
              >
                {{ link.text }}
              </router-link>
              <a
                :class="'m ' + (link.btn ? 'btn-dc' : '')"
                v-if="link.type == 'website'"
                :href="link.url"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
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
  watch: {
    $route() {
      this.toggled = false;
    },
  },
  data() {
    return {
      ran: false,
      toggled: false,
      scrolled: false,
      links: [
        {
          text: "Home",
          type: "page",
          url: "/",
          btn: true,
        },
        {
          text: "ISB",
          type: "website",
          url: "https://isbasel.ch",
        },
        {
          text: "Team",
          type: "page",
          url: "/team",
        },
      ].sort((a, b) => (a.btn ? 1 : 0) - (b.btn ? 1 : 0)),
    };
  },
  created() {
    document.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      this.scrolled = window.scrollY > 80;
    },
    toggle() {
      this.ran = true;
      this.toggled = !this.toggled;
    },
  },
};
</script>

<style>
.m-n a:focus {
  color: white;
  opacity: 0.7;
}
a:hover {
  color: var(--red-dc) !important;
  opacity: 0.7;
}
.m-n .btn-dc {
  background: white;
  border-color: white;
  color: var(--red-dc);
}
a.m {
  color: white;
}
.link {
  /**  */
  color: inherit;
  display: inline-block;
}
.nav-logo {
  margin-left: 0px !important;
}
.close-m {
  color: white;
  font-size: 20px;
}
.btn-dc {
  background: var(--red-dc);
  color: white;
  border-radius: 0.25rem;
  padding: 15px 25px 15px 25px;
  margin-right: 10px;
  cursor: pointer;
  margin-left: 10px;
  transform: translateY(0px);
  transition: 0.3s all !important;
  border: 2px transparent solid;
}
.btn-dc:hover {
  color: var(--red-dc);
  background: white;
  border: 2px var(--red-dc) solid;
  border-radius: 0.25rem;
}
.m-n {
  position: fixed;
  height: 100vh;
  background: var(--red-dc);
  top: 0;
  left: 100vw;
  width: 100vw;
  transition: 0.5s all ease-in-out;
  padding: 30px 0px 30px 0px;
  z-index: 99999999999;
}
.m-n[open] {
  left: 0 !important;
}
.n {
  background: white;
  z-index: 9999;
  width: 100%;
  border-radius: 0.25rem;
  padding: 30px 0px 30px 0px;
  transition: all 1s;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
}
.n[scrolling] {
  -webkit-box-shadow: 0px 10px 5px 0px rgba(226, 226, 226, 0.3);
  -moz-box-shadow: 0px 10px 5px 0px rgba(226, 226, 226, 0.3);
  box-shadow: 0px 10px 5px 0px rgba(226, 226, 226, 0.3);
}
.m-n a,
.m-n button {
  margin-left: 0px !important;
}
.n a,
.n button {
  margin-left: 40px;
}
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.toggle-nav {
  color: var(--red-dc);
  animation: bounce infinite 1s;
  font-size: 20px;
}
.toggle-nav[ran] {
  animation: none !important;
}
</style>
