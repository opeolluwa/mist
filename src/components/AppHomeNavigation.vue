<template>
  <div role="navigation">
    <a href="/"> logo</a>
    <v-btn icon class="d-sm-none"> <v-icon>mdi-menu</v-icon></v-btn>
    <div class="nav-links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'pricing' }">Pricing</router-link>
      <router-link :to="{ name: 'login' }">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div[role="navigation"] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .nav-links {
    display: inherit;
    justify-content: space-between;
    a {
      color: unset;
      text-decoration: none;
      font-size: 1.2rem;
      margin: 0 0.5rem;
    }
  }
}

/* hide nv links on mobile and smaller screens*/
@media screen and(max-width:600px) {
  div[role="navigation"] {
  }
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