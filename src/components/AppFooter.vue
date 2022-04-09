<template>
  <v-footer color="#fff">
    <v-row justify="center" no-gutters align="center">
      <v-btn v-for="link in links" :key="link" text rounded class="my-2 d-none">
        {{ link }}
      </v-btn>
      <v-col class="py-4 text-center" cols="12" md="4">
        <strong>Bytes-33</strong>
      </v-col>
      <v-col class="py-4 text-center" cols="12" md="4">
        <a href="https://github.com/opeolluwa/minifier">
          <v-icon class="ma-2"> mdi-github </v-icon></a
        >
        <a href="https://github.com/opeolluwa/minifier">
          <v-icon> mdi-web </v-icon></a
        >
      </v-col>
      <v-col class="py-4 text-center" cols="12" md="4">
        &copy; {{ new Date().getFullYear() }} 
        <a :href="mailto">Opeoluwa</a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Services", "Contact Us"],
    mailto: ["mailto:", "adefemi", "adeoye", "@yahoo.com"].join(""),
  }),
};
</script>

<style scoped>
footer {
  background: var(--base);
}
</style>