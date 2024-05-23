<template>
  <div class="auth">
    <AddShow v-if="authenticated" />
    <p v-else>You must login before you can access this part of the website.</p>
  </div>
  

</template>


<script setup>
import AddShow from '../components/AddShow.vue';
import { ref } from 'vue';

import { authStore } from '../stores/auth';
const authenStore = authStore();
const authenticated = ref(authenStore.local.authenticated);
</script>

<style scoped>
.auth {
  font-family: "Signika Negative", sans-serif;
  font-size: 20px;
}
</style>


<!-- <template>
  <h1> Add to your List! </h1> 
    <div>
      <label for="myShowName">Name: </label>
      <input id="myShowName" type="text" v-model="item" />
      <label for="myShowRating">Rating: </label>
      <input id="myShowRating" type="text" v-model="rating" />
      <label for="myShowComment">Comments: </label>
      <input id="myShowComment" type="text" v-model="comment" />
  
      <button @click="addToList">Add Show Name</button>

      <RouterLink to="/MylistView">
        <button>My List</button>
      </RouterLink>
    </div>
  </template>
  
<script setup>
  import { ref } from "vue";
  import { myListStore } from "../stores/mylist";
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
  
<style></style>  -->