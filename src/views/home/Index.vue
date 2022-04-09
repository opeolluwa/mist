<template>
  <div id="entry">
    <AppNavigation />
    <router-view  />
    <AppFooter class="d-none" />
  </div>
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

