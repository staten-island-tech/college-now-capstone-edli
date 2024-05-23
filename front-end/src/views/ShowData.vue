<template>
    <div class = "bodies">{{ kdrama[Number(route.params.id - 1)] }}</div>

</template>
  
<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  let kdrama = ref("");
  async function getKdrama() {
    let res = await fetch(`http://localhost:9999/fetch`);
    let data = await res.json();
    kdrama.value = data;
    console.log(route.params.id);
    
  }
  onMounted(() => {
    getKdrama();
  });


</script>
  
  <style scoped>
  .bodies {
    margin-top: 100px;
  }
</style>