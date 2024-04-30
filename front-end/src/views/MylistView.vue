<template>
  <ul>
    <li v-for="item in myList.items" :key="item">{{ item }}</li>
     <li v-for="item in myList.ratings" :key="rating">{{ rating }}</li>
    <li v-for="item in myList.comments" :key="comment">{{ comment }}</li>
  </ul>
</template>

<script setup>
import { myListStore } from "../stores/mylist";
const listStore = myListStore();
//not needed
const list = listStore.list;
</script>

<style scoped></style> 