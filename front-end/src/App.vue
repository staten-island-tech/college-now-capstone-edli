<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class>

      <nav class = "navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/allshows">Shows</RouterLink>
        <RouterLink to="/addshows">Add Shows</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
