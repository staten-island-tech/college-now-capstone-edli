
import { defineStore } from "pinia";

export const authStore = defineStore("user", {
  state: () => {
    return {
        user: {
            id: ,
            name:,
      },
    };
  },
  actions: [
    async login({username, password}) {
        
    }
  ]
});