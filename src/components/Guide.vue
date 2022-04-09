<template>
  <div>
    <v-container class="section">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" md="6">
          <h2 class="display-1 font-weight-bold">How It Works</h2>
        </v-col>
      </v-row>

      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="item.color" dark>
            <v-card-title> {{ item.title }} </v-card-title>
            <v-card-text
              class="white text--primary d-md-none d-sm-block d-lg-none"
            >
              {{ item.text }}
            </v-card-text>
            <v-img
              contain
              :src="require('../assets/' + item.src)"
              class="d-none d-md-block d-lg-block d-sm-block"
            >
            </v-img>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>


<script>
export default {
  data: () => ({
    items: [
      {
        color: "var(--base)",
        icon: "mdi-link-variant",
        src: "01.png",
        title: "Generate the link",
        text: "We let generate short unique and simple link  to boost productivity.",
      },
      {
        color: "var(--base)",
        icon: "mdi-clipboard-outline",
        src: "02.png",
        title: "Copy To Clipboard",
        text: "Copy the link to clipboard and reuse in as many places as possible",
      },
      {
        color: "var(--base)",
        icon: "mdi-pencil-outline",
        src: "03.png",
        title: "Customize the link",
        text: "Misty let you bring your customization.",
      },
    ],
  }),
};
</script>


<style scoped>
</style>