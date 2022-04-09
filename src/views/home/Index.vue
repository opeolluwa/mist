<template>
  <v-container>
    <AppNavigation />
    <router-view />
    <AppFooter />
  </v-container>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppNavigation from "@/components/AppHomeNavigation.vue";

export default {
  components: {
    AppFooter,
    AppNavigation,
  },
};
</script>

<style>
</style>