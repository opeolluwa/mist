<template>
  <div>
    <div id="home-page" style="position: relative">
      <v-container class="py-10">
        <!---------------hero--------->
        <v-row align="center" justify="space-between">
          <v-col cols="12" sm="4" md="5">
            <h1 class="display-2 font-weight-bold">
              A Short Link, <br />Infinite Possibilities!
            </h1>
            <p class="py-3 sub-hero-text">
              Custom link personalization tool that let you minify links, drive
              customers and increase productivity.<br />
              Get Started for free.
            </p>
            <div class="d-flex cta">
              <v-btn color="var(--purple-dark)" dark
                >get started
                <v-icon color="var(--white)" right
                  >mdi-play-circle</v-icon
                ></v-btn
              >
              <v-btn color="var(--white)" dark outlined
                >Features <v-icon right>mdi-puzzle</v-icon></v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" sm="8" md="7">

             <v-img src="@/assets/hero-illustration.svg" alt="hero" contain   :aspect-ratio="4/3"></v-img>
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
      <h2 class="text-center text-capitalize display-1">
        <strong>Fog </strong> is the busy marketer&apos;s dream
      </h2>
      <p class="text-disabled text-center">
        There&apos; so much out of the box possibilities!
      </p>
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

      <!--------------------------------show off and testimonials------------------->
      <section id="show-off" class="mt-0">
        <v-row justify="space-between" align="center">
          <v-col cols="12" sm="6" id="user-story-container">
            <!-------------user story one of three ----------->
            <div
              class="
                d-flex
                justify-space-between
                align-center
                user-story
                elevation-4
              "
            >
              <v-avatar rounded size="90">
                <v-img src="@/assets/img/user1.jpg"></v-img>
              </v-avatar>
              <div>
                A
                <strong style="color: var(--pie-red)"
                  >Freelance developer</strong
                >
                e other hand, an basic component of discussions of the
                operational system the functional programming. We must be ready
                for design pti ...
              </div>
            </div>

            <!-------------user story two of three ----------->
            <div
              class="
                d-flex
                justify-space-between
                align-center
                user-story
                elevation-4
              "
            >
              <v-avatar rounded size="90">
                <v-img src="@/assets/img/user2.jpg"></v-img>
              </v-avatar>
              <div>
                A
                <strong style="color: var(--pie-yellow)">Fashionista</strong> e
                other hand, an basic component of discussions of the operational
                system the functional programming. We must be ready for design
                pti ...
              </div>
            </div>

            <!-------------user story three of three ----------->
            <div
              class="
                d-flex
                justify-space-between
                align-center
                user-story
                elevation-4
              "
            >
              <v-avatar rounded size="90">
                <v-img src="@/assets/img/user3.jpg"></v-img>
              </v-avatar>
              <div>
                A <strong style="color: var(--pie-blue)">copywriter</strong> e
                other hand, an basic component of discussions of the operational
                system the functional programming. We must be ready for design
                pti ...
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <p>
              To be quite frank, an basic component of the patterns of the
              emergency planning becomes a key factor of The Competence of
              Descriic feature can turn out to be a result of the entire
              picture.
            </p>
            <p class="my-4">
              On the other hand, an basic component of discussions of the
              operational system the functional programming. We must bs c
            </p>
            <p>
              e ready for design patterns and principles of effective management
              investigation of the application rules the risks of the minor
              details of base configuration. The most common argument against
              this is that the standard
            </p>
          </v-col>
        </v-row>
      </section>

      <!--------------------------analytics------------------->
      <section>
        <v-row align="center" justify="space-between">
          <v-col cols="12" sm="6">
            <h2 class="display-1 font-weight-bold text-capitalize">Discover what resonates with your audience</h2>
            <p class="my-4">
              To be quite frank, an basic component of the patterns of the
              emergency planning becomes a key factor of The Competence of
              Descriptive Strategy (Abraham Lord in The Book of the Software
              Functionality)
            </p>
            <p class="my-4">
              On the other hand, an basic component of discussions of the
              operational system the functional programming. We must be ready
              for design patterns and principles of effective management
              investigation of the application rules the risks of the minor
              details of base configuration.
            </p>
            <p class="my-4">
              The most common argument against this is that the standards
              control and growth opportunities of it are quite high.
            </p>
          </v-col>
          <v-col cols="12" sm="6">
             <v-img contain src="@/assets/illustration/analytics.png"></v-img>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>



<script>
// import AppLogo from "../../components/AppLogo.vue";
export default {
  // components: { AppLogo },
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
section {
  margin: 4rem 0;
}
#home-page {
  background-image: var(--gradient);
  min-height: calc(100vh - 285px / 2);
  padding: 0 7.5vw;

  img {
    max-width: 70%;

    object-fit: scale-down;
  }
  h1 {
    color: var(--purple-dark);
  }
  .cta {
    column-gap: 1rem;
  }
}

/* -----------user story section-------------------*/
#show-off {
  #user-story-container {
    // background: url("../../assets/user-story-background.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .user-story {
    column-gap: 15px;
    border-left: 5px solid var(--pie-yellow);
    border-radius: 5px;
    margin: 1.75rem 0;
    padding: 7.5px;
    max-width: 80%;
  }

  .user-story:nth-child(2) {
    position: relative;
    left: 5rem;
  }
  .user-story:first-child {
    border-color: var(--pie-red);
  }

  .user-story:last-child {
    border-color: var(--pie-blue);
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


