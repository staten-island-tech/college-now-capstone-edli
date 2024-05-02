<template>
  <div>
    <div>
      <SignUp v-if="!user" />
      <Login v-if="user" />
    </div>
    <RouterLink to="/signup">
      <button @click="change">Need to sign up?</button>
    </RouterLink>
    
  </div>
</template>

<script setup>
import { ref } from "vue";
import Login from "../components/LogIn.vue";
const username = ref("");
const password = ref("");
const user = ref(true);
function notLogin(username, password) {
  console.log(username);
  console.log(password);
}
function change() {
  user.value = false;
}
async function login(username, password) {
  try {
    const res = await fetch("http://localhost:5173/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.toLowerCase(),
        password: password,
      }),
    });
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped></style>