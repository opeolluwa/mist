<template>
  <div>
    <div id="home-page" style="position: relative">
      <v-container class="py-10">
        <!---------------hero--------->
        <v-row align="center" justify="space-between">
          <v-col cols="12" sm="4" md="5">
            <h1 class="display-1 font-weight-bold">
              A Short Link, <br />Infinite Possibilities!
            </h1>
            <p class="py-3 sub-hero-text">
              Custom link personalization tool that let you minify links, drive
              customers and increase productivity.<br />
              Get Started for free.
            </p>
            <div class="d-flex cta">
              <v-btn outlined color="var(--white)" dark
                >get started
                <v-icon color="var(--white)" right
                  >mdi-play-circle</v-icon
                ></v-btn
              >
              <v-btn class="d-sm-none">Pricing</v-btn>
              <v-btn color="var(--purple)" dark outlined
                >Features <v-icon right>mdi-puzzle</v-icon></v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" sm="8" md="7">
            <img src="@/assets/hero-illustration.svg" alt="hero" />
          </v-col>
        </v-row>
      </v-container>
      <!---------shape divider-------------->
      <div class="custom-shape-divider-bottom-1649539666 d-none d-sm-block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>

    <v-container class="my-7">
      <v-form
        @submit.prevent="minify"
        justify="center"
        align="center"
        class="my-5"
      >
        <v-row justify="center">
          <v-col cols="7">
            <v-text-field
              v-model="url"
              outlined
              label="Paste A link to shorten it."
              required
              placeholder="https://expample.com"
              prepend-inner-icon="mdi-link-variant"
              append-icon="mdi-arrow-right"
              @click:append="minify"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>



<script>
export default {
  components: {},
  data: () => ({
    url: null,
  }),
  methods: {
    minify() {
      console.log(this.url);
    },
  },
};
</script>

<style scoped lang="scss">
#home-page {
  background-image: var(--gradient);
  min-height: calc(100vh - 285px / 2);
  padding: 0 7.5vw;

  img {
    max-width: 70%;

    object-fit: scale-down;
  }
  h1 {
    color: var(--white);
  }
  .cta {
    column-gap: 1rem;
  }
}
.custom-shape-divider-bottom-1649539666 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1649539666 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 258px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1649539666 .shape-fill {
  fill: #ffffff;
}
</style>


