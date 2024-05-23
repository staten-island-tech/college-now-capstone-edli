<template>
  <div class ="homepage">
    <h1 class="header"> Welcome to KDrama List!</h1>
    <div class="signup">
      <SignUp v-if="!user" />
      <Login v-if="user" />
    </div>
    <RouterLink to="/login">
      <button class="signed" @click="change">Already Signed Up?</button>
    </RouterLink>
  </div>
</template>

<script setup>
import Login from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";

</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300..700&display=swap");

  .header {
    font-family: "Signika Negative", sans-serif;
    font-size: 50px;
    width: 1000px;
    height: 10px;
    margin: 30px 0;
    display: flex;
    padding: 30px;
    text-transform: uppercase;
    align-items: center;

  }
  .homepage {
    background-color: #AED6F1;
    padding: 40px;
    border-radius: 25px;
    margin-top: 160px;
  }
  .signup {
    font-family: "Signika Negative", sans-serif;
    font-size: 25px; 
    margin: 10px;
  }
  .signed {
    font-family: "Signika Negative", sans-serif;
    font-size: 18px; 
    margin-left: 25px;
  }
</style>
