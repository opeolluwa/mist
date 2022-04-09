<template>
  <v-container class="section">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12" md="6">
        <h2 class="display-1 font-weight-bold">
          A Short Link, Infinite Possibilities!
        </h2>
        <p class="py-3">
          <strong>Bytes-33</strong> is a custom link personalization tool that let you minify links,
          drive customers and increase productivity. Get Started for free.
        </p>
      </v-col>
    </v-row>
    <v-form @submit.prevent="minify" justify="center" align="center" class="my-5">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="glass">
            <!--show if the link has not been generated-->
            <template v-if="!shortUrl">
              <v-text-field
                v-model="url"
                outlined
                label="Paste A link to shorten it."
                required
                placeholder="https://expample.com"
                prepend-inner-icon="mdi-link-variant"
              ></v-text-field>
              <v-btn
                :disabled="disabled"
                :loading="loading"
                type="submit"
                block
                large
                color="var(--base)"
                class="white--text"
                >Shorten</v-btn
              >
             
            </template>

            <!--show if the link has been generated-->
            <template v-else>
              <v-text-field
                v-model="shortUrl"
                outlined
                solo
                :append-icon="'mdi-pencil'"
                @click:append="() => (editUrl = !editUrl)"
                class="text-center"
              ></v-text-field>
              <!--copy button-->
              <v-btn
                right
                type="button"
                v-clipboard:copy="shortUrl"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
                block
                large
                v-if="!editUrl"
              >
                Copy
                <v-icon right color="var(--base)">mdi-clipboard-outline</v-icon>
              </v-btn>
              <!--customize button-->
              <v-btn
                right
                type="button"
               @click="customizeUrl"
                block
                large
                v-else
              >
                Update
                <v-icon right color="var(--base)">mdi-paper-plane</v-icon>
              </v-btn>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    
  </v-container>
</template>

<script>
import axios from "axios";
// import VueClipboard from 'vue-clipboard2'

export default {
  data: () => ({
    url: "",
    response: "",
    error: "",
    shortUrl: "",
    loading: false,
    disabled: false,
    editUrl: false,
  }),

  methods: {
    async minify() {
      const { url } = this;
      this.loading = true;
      this.disabled = true;
      const response = await axios.post("api/minify", {
        url,
      });

      if (response) {
        this.response = response.data;
        this.loading = false;
        this.disabled = false;
        const { error, minifiedLink } = this.response;
        this.error = error;
        this.shortUrl = minifiedLink;
      }
    },
    onCopy: function (e) {
      alert("You just copied: " + e.text);
    },
    onError: function () {
      alert("Failed to copy texts");
    },
  },
};
</script>


<style scoped>


h1 {
  color: var(--base);
}

button {
  display: block;
  align-self: flex-start;
}
</style>