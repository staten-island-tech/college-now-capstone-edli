<template>
    <div class = "logincard">
        <form name="login-form"  @submit.prevent="login(username, password)">
        <div>
          <label for="username" class= "formName">Username: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">Password: </label>
          <input id="password" type="password" v-model="password" />
        </div>
        <button class="submit-button" type="submit" @click.prevent="toLogin()">Login</button>
      </form>
        <p v-if="authenticated">{{ "Login Success!" }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { authStore } from '../stores/auth';
const authenStore = authStore();
const username = ref("");
const password = ref("");
const authenticated = ref(authenStore.authenticated);

async function toLogin() {
  await authenStore.login({ username: username.value, password: password.value });
  authenticated.value = authenStore.authenticated;
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300..700&display=swap");

.formName {
  font-family: "Signika Negative", sans-serif;
}
</style>
