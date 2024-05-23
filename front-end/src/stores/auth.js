
import { defineStore } from 'pinia'
import { useLocalStorage} from '@vueuse/core'


export const authStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      local: useLocalStorage('local', {authenticated:false})
    };
  },

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
          this.local.authenticated = true
        } else {
          console.log("not authed")
        }
      } catch (error) {
        console.log(error)
      } 
    }
    ,
    clearUser() {
      this.local = {authenticated:false}
     }
  }
  
});
