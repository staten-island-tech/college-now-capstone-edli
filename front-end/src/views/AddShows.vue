<template>
  <div class="auth">
    <AddShow v-if="authenticated" />
      <h1 class="text" v-else>You must login before you can access this part of the website D:</h1>
  </div>
  

</template>


<script setup>
import AddShow from '../components/AddShow.vue';
import { ref } from 'vue';

import { authStore } from '../stores/auth';
const authenStore = authStore();
const authenticated = ref(authenStore.local.authenticated);
</script>

<style scoped>
.auth {
  font-family: "Signika Negative", sans-serif;
  font-size: 20px;

}

.text {
  margin-top: 50px;
  align-items: center;
  font-family: "Signika Negative", sans-serif;
}
</style>


