<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>{{ user.name }}</v-toolbar-title>
      <v-btn color="deep-purple accent-4" tile elevation="0" @click="logout">Выход</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("user/clearUserData");
      this.$store.dispatch("Logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.app-bar {
  max-height: 60px;
}
</style>