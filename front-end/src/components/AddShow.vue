<template>
    <div class = "newShowBody">
      <h1 class = "header">Add New Shows</h1>
      <form @submit.prevent="addShow">
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
        <button class="submit-buttons" type="submit">Add Show!</button>
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

<style>
.newShowBody {
  margin: 60px auto;
  align-items: center;
  margin-left: 40px;
  margin-top:  100px;

}

.submit-buttons {
  font-family: "Signika Negative", sans-serif;
  font-size: 25px;
  width: 175px;
  height: 40px;
}

.synopsis {
  margin: 15px;
  width: 300px;
  padding:10px;
}
.header {
    font-family: "Signika Negative", sans-serif;
    font-size: 50px;
    width: 1000px;
    height: 10px;
    margin: 30px 0;
    display: flex;
    align-items: center;

  }
</style>