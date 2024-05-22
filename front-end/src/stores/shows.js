import { defineStore } from 'pinia'
import { ref } from 'vue'

export const showStore = defineStore('shows', () => {
  const allShows = ref([])

  const getShows = async function () {
    try {
      const response = await fetch(`http://localhost:9999/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((res) => res.json())
        .then(async (data) => {
          allShows.value = data
        })
    } catch (error) {
      console.log(error)
    }
  }

  return { allShows, getShows }
})