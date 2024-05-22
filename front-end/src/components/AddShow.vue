<template>
    <div>
      <h1>Add New Shows</h1>
      <form @submit.prevent="addShow">
        <label>Show Name:</label>
        <input type="text" v-model="showData.name" required><br>
        <label>Rating(/10):</label>
        <input type="number" v-model="showData.rating" required><br>
        <label>Cast:</label>
        <input type="array" v-model="showData.cast" required><br>
        <label>Genre:</label>
        <input type="array" v-model="showData.genre" required><br>
        <label>Release Year:</label>
        <input type="text" v-model="showData.releaseYear" required><br>
        <label>Synopsis:</label>
        <input type="text" v-model="showData.synopsis" required><br>
        <label>Availability:</label>
        <input type="text" v-model="showData.availability" required><br>
        <button type="submit">Add Show!</button>
      </form>
      <p v-if="addShowSuccess">{{ "Successfully Added Show!" }}</p>
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
  const addShowSuccess = ref(false);

  const addShow = async () => {
    try {
      const res = await fetch('http://localhost:9999/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(showData.value)
      });
      console.log(await res.json())
      if (!res.ok) {
        console.log("could not add show")
      }
      if (res.ok) {
      addShowSuccess.value = true; 
      } else {
      console.log(error);
      }

  }
    // alert('Song added successfully!');
    catch (error) {
    alert(error.message);
    console.error(error);
  }
};


  </script>

