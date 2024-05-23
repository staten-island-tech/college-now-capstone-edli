<template>
    <router-link :to="showPath" class="card">
      <h3>{{ id  }}</h3>
      <h2>{{ showData }}</h2>
    </router-link>
  </template>
  
  <script setup>
  import { computed , ref} from "vue";
  
  const props = defineProps({
    show: Object,
    id: Number,
  });
  

  const showPath = computed(() => {
    return `/data/${props.id}`;
  });
  const showData = ref ({});
  function showDatas(show) {
    showData.value = show;
  };
  showDatas(props.show);


  </script>
  
  <style scoped>
  .card {
    width: 28%;
    height: 500px;
    background-color: aliceblue;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    text-transform: uppercase;
  }
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
  </style>