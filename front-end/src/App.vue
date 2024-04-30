<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/shows">Shows</RouterLink>
        <RouterLink to="/mylist">My List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
