<template>
    <div class = "bodies">{{ kdrama[Number(route.params.id - 1)] }}</div>
    <button @click ="visible = true">Edit</button>
    <div v-if="visible">
      <label>Show Name: </label>
        <input type="text" class = "synopsis" v-model="showData.name" required><br>
        <label>Rating(/10): </label>
        <input type="number" class = "synopsis" v-model="showData.rating" required><br>
        <label>Cast: </label>
        <input type="array" class = "synopsis" v-model="showData.cast" required><br>
        <label>Genre </label>
        <input type="array" class = "synopsis" v-model="showData.genre" required><br>
        <label>Release Year: </label>
        <input type="text"  class = "synopsis" v-model="showData.releaseYear" required><br>
        <label>Synopsis: </label>
        <input type="text" class = "synopsis" v-model="showData.synopsis" required><br>
        <label>Availability: </label>
        <input type="text" class = "synopsis" v-model="showData.availability" required><br>
        <button @click="{showStore.edit(showData, route.params.id); visible = false}">Save</button>
    </div>
    <button @click="{showStore.delete(showData.id); alert('Deleted!')}">Delete</button>

</template>
  
<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { useShowStore } from "../stores/show"
  const route = useRoute();
  let kdrama = ref([]);
  const showData = ref({
    name: '',
    rating: '',
    cast: '',
    genre:'',
    releaseYear: '',
    synopsis: '',
    availability: '',
    id: ''
  });
  async function getKdrama() {
    let res = await fetch(`http://localhost:9999/fetch`);
    let data = await res.json();
    kdrama.value = data;
    showData.value.id = kdrama.value[Number(route.params.id - 1)]._id;

    console.log(route.params.id);
    console.log(kdrama.value[Number(route.params.id - 1)]._id)
    
  }
  onMounted(() => {
    getKdrama();
  });



  const showStore = useShowStore();
  const visible = ref(false);
 
console.log(showData.value.id);


</script>
  
  <style scoped>
  .bodies {
    margin-top: 100px;
  }
</style>