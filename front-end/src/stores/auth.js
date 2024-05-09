
import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    authenticated: false
  }),
  actions: {
    async login({ username, password }) {
      try {
        const res = await fetch('http://localhost:9999/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username.toLowerCase(),
            password: password
          })
        })
        const user = await res.json()
        console.log(user)
        if (res.ok) {
          this.authenticated = true
        } else {
          console.log("not authed")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
