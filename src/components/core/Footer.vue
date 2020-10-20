<template>
  <footer class="section footer bg-transparent">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <p class="rights">
            <span>© {{ new Date().getFullYear() }}.&nbsp;</span
            ><span>ISB {{ data.name }}</span
            ><span>. All rights reserved</span>
          </p>
        </div>
        <div class="col-4 text-right">
          <ul class="list list-social">
            <li
              v-for="icon in social"
              :key="icon.icon"
              class="list-social-item ml-3"
            >
              <a :href="icon.link">
                <fa
                  :icon="['fab', icon.icon]"
                  class="icon icon-social icon-sm"
                ></fa>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
  data() {
    return {
      social: [
        {
          link: "https://youtube.com",
          icon: "youtube",
        },
        {
          link: "https://facebook.com",
          icon: "facebook",
        },
        {
          link: "https://twitter.com",
          icon: "twitter",
        },
        {
          link: "https://github.com",
          icon: "github",
        },
        {
          link: "https://instagram.com",
          icon: "instagram",
        },
        {
          link: "https://tiktok.com",
          icon: "tiktok",
        },
      ],
    };
  },
};
</script>

<style>
.footer {
  padding: 3.75rem 0rem;
}

.footer-list {
  font-weight: 400;
  margin-bottom: -0.625rem;
  margin-left: -1.25rem;
}

.footer-list:empty {
  margin-bottom: 0;
  margin-left: 0;
}

.footer-list > * {
  margin-top: 0;
  margin-bottom: 0.625rem;
  margin-left: 1.25rem;
}

.footer-list > * {
  display: inline-block;
}

* + .footer-divider {
  margin-top: 3.75rem;
}

.footer-title + * {
  margin-top: 0.625rem;
}

.footer-divider + .footer-panel {
  margin-top: 2.5rem;
}

.footer-sm .footer-divider + .footer-panel {
  margin-top: 0.5rem;
}

ul.list.list-social li {
  display: inline-block;
}

@media (min-width: 768px) {
  .footer {
    padding: 5rem 0rem;
  }
  .footer-contact-list > .list-item + .list-item {
    margin-top: 1.25em;
  }
  * + .footer-divider {
    margin-top: 5rem;
  }
  .footer-title + * {
    margin-top: 1.25rem;
  }
}

@media (min-width: 992px) {
  .footer {
    padding: 6.25rem 0rem;
  }
  .footer.footer-sm {
    padding: 5.625rem 0rem;
  }
  .footer.footer-sm * + .footer-divider {
    margin-top: 5.625rem;
  }
  * + .footer-divider {
    margin-top: 6.25rem;
  }
}

@media (min-width: 1200px) {
  .footer {
    padding: 7.5rem 0rem;
  }
  * + .footer-divider {
    margin-top: 7.5rem;
  }
}

@media (min-width: 1600px) {
  .footer {
    padding: 8.75rem 0rem;
  }
  * + .footer-divider {
    margin-top: 8.75rem;
  }
}
</style>
