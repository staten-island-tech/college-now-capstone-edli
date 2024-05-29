import { defineStore } from 'pinia'
import { ref, onMounted } from "vue";

export const useShowStore = defineStore({
  id: 'show',
  state: () => ({
    name: '',
    rating: '',
    cast: '',
    genre:'',
    releaseYear: '',
    synopsis: '',
    availability: '',
  }),
  actions: {

    async edit(showData, id) {

      console.log(id)
      const requestOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: showData.name,
            rating: showData.rating,
            cast: showData.cast,
            genre: showData.genre,
            releaseYear: showData.releaseYear,
            synopsis: showData.synopsis,
            availability: showData.availability,
          id: id
        })
      }
      try {
        const res = await fetch(`http://localhost:9999/show/update/${id}`, requestOptions)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = res.json()
        console.log(data)
      } catch (error) {
        console.error('problem', error)
      }
    },
    async delete(id) {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      try {
        const res = await fetch(`http://localhost:9999/show/delete/${id}`, requestOptions)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        console.log(data)
      } catch (error) {
        console.error('problem', error)
      }
    }
  },
  getters: {}
})