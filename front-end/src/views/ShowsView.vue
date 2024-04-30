<template>
  <h1> Add to your List! </h1> 
    <div>
      <label for="myShows">Name: </label>
      <input id="myShows" type="text" v-model="item" />
      <input id="myShows" type="text" v-model="rating" />
      <input id="myShows" type="text" v-model="comment" />
  
      <button @click="addToList">Add Show Name</button>
    </div>
  </template>
  
<script setup>
  import { ref } from "vue";
  import { useOrderStore } from "../stores/mylist";
  const listStore = myListStore();
  
  const item = ref("");
  const addToList = () => {
    listStore.addListItem(item.value);
    listStore.addRating(rating.value);
    listStore.addComment(comment.value);
  
    item.value = "";
    rating.value = "";
    comment.value = "";
  };
</script>
  
<style></style> 