<template>
    <div>{{ kdrama.name }}</div>
    <h2>{{ kdrama.id }}</h2>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  let kdrama = ref("");
  async function getKdrama() {
    let res = await fetch(`http://localhost:9999`);
    let data = await res.json();
    kdrama.value = data;
  }
  onMounted(() => {
    getKdrama();
  });
  </script>
  
  <style scoped></style>