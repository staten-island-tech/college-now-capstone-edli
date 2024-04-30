<template>
    <div>
      <div>
        <SignUp v-if="user" />
      </div>
    </div>
  </template>

<script setup>
import { ref } from "vue";
import SignUp from "../components/SignUp.vue";
const username = ref("");
const password = ref("");
const user = true;
function notSignup(username, password) {
  console.log(username);
  console.log(password);
}
function change() {
  user = false;
}
async function signup(username, password) {
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
