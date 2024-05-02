<template>
    <div>
{{ monster }}
    </div>
</template>

<script setup>
import { ref, onMounted} from "vue";
let monster = ref("");
async function getPokemon() {
    let res =  await fetch(`https://pokeapi.co/api/v2/`)
    let data = await res.json();
}
onMounted(() => {
    getPokemon();
})
</script>

<style scoped>

</style>