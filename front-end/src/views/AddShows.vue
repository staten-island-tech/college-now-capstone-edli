<template>
  <div class="auth">
    <AddShow v-if="authenticated" />
    <p v-else>You must login before you can access this part of the website.</p>
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
</style>


