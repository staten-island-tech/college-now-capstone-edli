<template>
    <div>
        <button @click="deleteShow"> Delete  </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
  
const showData = ref({
    name: '',
    rating: '',
    cast: '',
    genre:'',
    releaseYear: '',
    synopsis: '',
    availability: '',
  });
const deleteShowSuccess = ref(false);
const deleteShow = async () => {
    try {
      const res = await fetch('http://localhost:9999/show/:id', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(showData.value)
      });
      console.log(await res.json())
      if (!res.ok) {
        console.log("could not delete show")
      }
      if (res.ok) {
      deleteShowSuccess.value = true; 
      } else {
      console.log(error);
      }
  }
    catch (error) {
    alert(error.message);
    console.error(error);
  }
}
</script>

<style scoped>

</style>