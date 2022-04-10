<template>
  <v-footer color="var(--purple-dark)" dark padless style="position: relative">
    <v-container>
      <v-row no-gutters align="center" class="my-4">
        <v-col cols="12" sm="6">
          <div>Get connected with us on social networks:</div>
        </v-col>

        <v-col cols="12" sm="6">
          <a href="#">
            <v-btn icon> <v-icon right>mdi-twitter</v-icon> </v-btn>
            <v-btn icon> <v-icon right>mdi-github</v-icon> </v-btn>
            <v-btn icon> <v-icon>mdi-linkedin</v-icon> </v-btn>
            <v-btn icon> <v-icon>mdi-twitter</v-icon> </v-btn>
          </a>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
      <v-row justify="space-between" class="my-4">
        <v-col cols="12" sm="3">
          <app-logo dark />
          <p>
            Lorem ipsum dolor sit cum, unde reprehenderit quia dicta delectus
            molestias a
          </p>
        </v-col>
        <v-col cols="12" sm="3">
          <v-list color="transparent">
            <v-list-item-title>
              <strong class="text-uppercase">Quick Links</strong>
            </v-list-item-title>
            <v-list-item> Home</v-list-item>
            <v-list-item> Pricing</v-list-item>
            <v-list-item> Contact</v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" sm="3">
          <v-list color="transparent">
            <v-list-item-title>
              <strong class="text-uppercase">Products</strong>
            </v-list-item-title>
            <v-list-item> Home</v-list-item>
            <v-list-item> Pricing</v-list-item>
            <v-list-item> Contact</v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" sm="3">
          <v-list color="transparent">
            <v-list-item-title>
              <strong class="text-uppercase">Contact</strong>
            </v-list-item-title>
            <v-list-item class="mt-1">
              <v-icon left>mdi-map-marker-outline</v-icon> 23, Sand Valley,
              Pluto road, Xaseyi, Zimbabwe.
            </v-list-item>
            <v-list-item>
              <v-icon left>mdi-phone</v-icon> (123) 000 00 607</v-list-item
            >
            <v-list-item>
              <v-icon left>mdi-email-outline</v-icon>
              mist@mailer.com</v-list-item
            >
          </v-list>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
      <v-row class="my-4">
        <v-col cols="12" sm="6">
          <div>All right reserved</div>
        </v-col>
        <v-col cols="12" sm="6">
          <div>&copy; Adeoye Adefemi Opeoluwa</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import AppLogo from "./AppLogo.vue";
export default {
  components: {
    AppLogo,
  },
  data: () => ({
    link: ["Home", "About Us", "Services", "Contact Us"],
    mailto: ["mailto:", "adefemi", "adeoye", "@yahoo.com"].join(""),
  }),
};
</script>

<style scoped>
footer {
  background: var(--purple-dark);
  color: var(--white);
}
</style>