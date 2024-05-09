<template>
    <div class="container">
      <ShowCard
        v-for="(kdrama, index) in show"
        :key="kdrama.name"
        :id="index + 1"
        :show="kdrama"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import ShowCard from "../components/ShowCard.vue";
  const show = ref("");
  async function getKdrama() {
    let res = await fetch("http://localhost:9999", {
      method: "POST",
    });
    let data = await res.json();
    show.value = data.results;
  }
  onMounted(() => {
    getKdrama();
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