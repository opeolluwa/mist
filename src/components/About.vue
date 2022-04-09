<template>
  <div id="about">
    <v-container class="section">
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" lg="3">
          <v-card elevation="5" class="text-center ma-3">
            <v-icon x-large color="var(--base)" class="my-3">
              mdi-link-variant
            </v-icon>
            <v-spacer></v-spacer>
            <h3 class="title">Unique Custom Domain</h3>
            <v-card-text class="text-center">
              Track audience individually for each brand, website or client by
              using you own custom domain or sub domain for shortening.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-card elevation="5" class="text-center ma-3">
            <v-icon x-large color="var(--base)" class="my-3">
              mdi-chart-timeline-variant-shimmer
            </v-icon>
            <v-spacer></v-spacer>
            <h3 class="title">Track Clicks</h3>
            <v-card-text class="text-center">
              Focus on your most promising client&apos;s interest based on
              comprehensive statics.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <v-card elevation="5" class="text-center ma-3">
            <v-icon x-large color="var(--base)" class="my-3" size="100">
              mdi-chat-processing-outline
            </v-icon>
            <v-spacer></v-spacer>
            <h3 class="title text-center">Friendly Support</h3>
            <v-card-text class="text-center">
              We&apos;ve got an awesome customer support that care about you
              success in using short links and increased productivity.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about {
  background: var(--base);
  text-align: center !important;
}
</style>