<template>
  <v-layout colum justify-center align-center>
    <v-flex xs12 sm8>
      <v-alert v-if="$route.query.message" type="error">Вам необходимо авторизоваться</v-alert>
      <v-card>
        <v-card-title>Вход в личный кабинет</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">
            <v-text-field v-model="name" :counter="16" :rules="nameRules" label="Ваше имя" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="Введите E-mail" required></v-text-field>

            <v-btn :disabled="!valid" color="primary" class="mr-4" type="submit">Войти</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Введите имя",
      (v) => (v && v.length <= 16) || "Имя не должно превышать 16 букв",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Введите E-mail",
      (v) => /.+@.+\..+/.test(v) || "Введите корректный E-mail",
    ],
  }),

  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const postData = {
          name: this.name,
          email: this.email,
        };
        this.$store.dispatch("user/postUserData", postData);
        this.$store.dispatch("Login");
        this.$router.push("/profile");
      }
    },
  },
};
</script>