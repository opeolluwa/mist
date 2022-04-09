<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang=scss>
:root {
  --gradient: linear-gradient(to right, #35b1e2, #330867);
  --white: #e9eaf4;
  --purple: #330867;
  --grey: #cdcfd4;
  --blue: #35b1e2;
}

.sub-hero-text {
  /* show sub hero text, 
  * typically text after h1, h2,
  * and h3 in grey color */
  color: var(--grey);
  line-height: 26px;
  margin: 0.35rem 0;
  font-size: 1.25rem;
}

html,
body {
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>