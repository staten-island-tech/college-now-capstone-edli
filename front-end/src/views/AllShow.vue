<template>
    <div class="container" >
      <ShowCard
        v-for="(kdrama, index) in show"
        :key="kdrama.name"
        :id="index + 1"
        :show="kdrama"
      />
    </div>
  </template>
  
  <script setup>
  import { authStore } from '../stores/auth';
  const authenStore = authStore();
  const authenticated = ref(authenStore.local.authenticated);

  import { ref, onMounted } from "vue";
  import ShowCard from "../components/ShowCard.vue";
  const show = ref("");
  async function getKdrama() {
    console.log("haiii")
    let res = await fetch("http://localhost:9999/fetch", {
      method: "GET",
      headers: { 'Content-Type': 'application/json'}
    });
    let data = await res.json();
    show.value = data;
    console.log(data);
  }
  
  onMounted(async () => {
    await getKdrama();
    console.log("mount")
    console.log(authenticated.value)
  });

  </script>
  
  <style scoped>
  .container {
    width: 80vw;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  </style>