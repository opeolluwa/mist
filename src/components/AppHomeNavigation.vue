<template>
  <div role="navigation" class="pb-10">
    <v-container class="d-flex justify-space-between">
      <a href="/" class="d-flex align-center justify-flex-start font-weight-bold">
        F<v-icon class="m" color="var(--white)">mdi-cloud-circle</v-icon>G</a
      >
      <v-btn icon class="d-sm-none">
        <v-icon color="var(--white)">mdi-menu</v-icon></v-btn
      >
      <div class="nav-links">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'pricing' }">Pricing</router-link>
        <router-link :to="{ name: 'home' }">Features</router-link>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div[role="navigation"] {
  background-image: var(--gradient);
  color: var(--white);
  a,
  & .nav-links a {
    color: unset;
    text-decoration: none;
    font-size: 1.098rem;
    margin: 0 0.5rem;
  }
  & .nav-links {
    display: inherit;
    justify-content: space-between;
    a {
      padding-bottom: 1.2px;
      border-bottom: 1px solid transparent;
    }
    a:hover,
    a:active {
      border-bottom: 1px solid var(--white);
      transition: 300ms ease-in-out all;
    }
  }
}

/* hide nv links on mobile and smaller screens*/
@media screen and(max-width:600px) {
  div[role="navigation"] .nav-links {
    display: none;
    min-width: 65%;
    max-width: 80%;
    min-height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.35)
    );
    position: absolute;
    left: 0;
    top: 0;
    * {
      display: block;
    }
  }
}
</style>