<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div>

      <nav class= "navbar">
        <RouterLink to="/">Home  </RouterLink> 
        <RouterLink to="/allshows">Shows  </RouterLink>
        <RouterLink to="/addshows">Add Shows    </RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
.navbar {
  font-family: "Signika Negative", sans-serif;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: #E7D3FD;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
}
</style>
