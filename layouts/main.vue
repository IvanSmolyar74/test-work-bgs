<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container class="mt-10">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  mounted() {
    this.$store.dispatch("user/getUserData");
  },
  components: {
    Navbar,
  },
};
</script>

