<template>
  <svg
    class="wave-primary"
    width="1920"
    height="761"
    viewBox="0 0 1920 761"
    fill="none"
  >
    <path
      class="wave-path wave-path-3"
      d="M1920 0C1868.64 28.7312 1767 105.232 1695.1 215.862C1605.14 354.271 1419.02 474.469 1280.98 388.267C1142.94 302.064 961.469 319.062 882.367 459.899C803.265 600.737 677.632 585.659 497.714 507.956C334.904 437.641 257.19 626.164 214 761H1920V0Z"
    ></path>
    <path
      class="wave-path wave-path-2"
      d="M1920 287C1862.19 304.896 1747.81 352.545 1666.89 421.453C1565.65 507.663 1356.18 542.53 1200.82 488.838C1045.46 435.145 841.231 445.732 752.206 533.455C663.182 621.178 521.79 689.158 319.303 640.76C136.071 596.963 48.6073 677.016 0 761H1920V287Z"
    ></path>
    <path
      class="wave-path wave-path-1"
      d="M0 761V673.062C17.2169 674.438 35.2639 676.42 54.1873 679.064C273.969 709.775 432 617.316 536.497 556.18C544.219 551.661 551.649 547.314 558.79 543.201C723.453 463.081 840.092 497.29 966.341 534.318C1005.86 545.91 1046.33 557.777 1089.5 566.5C1230.41 594.97 1308.84 548.102 1392.3 498.225C1416.11 484.002 1440.32 469.535 1466.5 456.5C1624.43 377.88 1748.84 433.944 1832.78 471.772C1870.02 488.554 1899.29 501.748 1920 498V761H0Z"
    ></path>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  methods: {
    resized() {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.resized);
  },
  destroyed() {
    window.removeEventListener("resize", this.resized);
  },
};
</script>

<style></style>
