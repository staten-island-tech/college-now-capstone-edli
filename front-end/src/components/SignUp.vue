<template>
    <div class ="signupcard">
        <form name="login-form" @submit.prevent="register(username, password)">
            <div>
              <label class="label" for="username">Username: </label>
              <input class="input"  id="username" type="text" v-model="username" />
            </div>
            <div>
              <label  class="label" for="password">Password: </label>
              <input class="input" id="password" type="password" v-model="password" />
            </div>
            <button class="submit-button" type="submit" @click.prevent="register()">Sign Up</button>
          </form>
        <p v-if="signupSuccess">{{ "Sign Up Success!" }}</p>
    </div>
    </template>
    
<script setup>
import { ref } from 'vue'

const username = ref("");
const password = ref("");
const signupSuccess = ref(false);

async function register() { 
  try {
    const res = await fetch("http://localhost:9999/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value.toLowerCase(),
        password: password.value,
      }),
    });
    const user = await res.json();
    console.log(user);
    if (res.ok) {
      localStorage.setItem("token", user.token);
      signupSuccess.value = true; 
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
    </script>
    
<style scoped>

.submit-button {
  font-family: "Signika Negative", sans-serif;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 18px;
}
.input {
  padding:10px;
  width: 300px;
  margin-top: 15px;
}

.label {
  margin-left: 20px;
}
    
</style>
