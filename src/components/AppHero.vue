<template>
  <div id="home-page" class="pt-4 view">
    <v-container fluid>
      <!---------------hero--------->
      <v-row align="center" justify="space-between">
        <v-col
          cols="12"
          sm="4"
          md="5"
          class="flex-column justify-content-center"
        >
          <h1 class="text-capitalize text-center">
            <span class="d-block">One Link</span>
            Infinite possibilities!
          </h1>
          <p class="sub-hero-text text-justify">
            custom link personalization tool that let you minify links,
          drive customers and increase productivity. Get Started for free.
          </p>

          <div class="d-flex justify-center cta">
            <v-btn outlined color="var(--white)" dark
              >get started
              <v-icon color="var(--purple)" right
                >mdi-play-circle</v-icon
              ></v-btn
            >
            <v-btn class="d-none d-sm-block">Pricing</v-btn>
            <v-btn>Features</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="8" md="7">
          <img src="@/assets/hero-illustration.svg" alt="hero" />
        </v-col>
      </v-row>
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
    </v-container>


   
  </div>
</template>



<script>
export default {
  components: {},
};
</script>

<style scoped lang="scss">
#home-page {
  background-image: var(--gradient);
  min-height: calc(100vh - 285px / 2);

  img {
    max-width: 70%;

    object-fit: scale-down;
  }
  h1 {
    color: var(--white);
  }
  h1+p{
    hyphens: auto;
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


