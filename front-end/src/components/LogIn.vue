<template>
    <div class = "logincard">
      <h1 class="header">Welcome back! Login here</h1>
        <form name="login-form"  @submit.prevent="toLogin(username, password)">
        <div>
          <label for="username" class= "formName">Username: </label>
          <input class ="input" id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">Password: </label>
          <input class = "input" id="password" type="password" v-model="password" />
        </div>
        <button class="submit-button" type="submit" @click.prevent="toLogin()">Login</button>
      </form>
        <p v-if="authenticated">{{ "Login Success!" }}</p>
        <button class="submit-button" @click="authenStore.clearUser()">Logout</button>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { authStore } from '../stores/auth';
const authenStore = authStore();
const username = ref("");
const password = ref("");
const authenticated = ref(authenStore.local.authenticated);

async function toLogin() {
  await authenStore.login({ username: username.value, password: password.value });
  authenticated.value = authenStore.local.authenticated;
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300..700&display=swap");

.formName {
  font-family: "Signika Negative", sans-serif;
}
.logincard {
  font-family: "Signika Negative", sans-serif;
  background-color: #AED6F1;
  padding: 50px;
  border-radius: 25px;
  font-size: 20px;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
  margin-top: 150px;

}
.submit-button {
  font-family: "Signika Negative", sans-serif;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom:5px;
}

.input {
  padding:10px;
  width: 300px;
  margin-top: 15px;
  margin-bottom:5px;
}
</style>
