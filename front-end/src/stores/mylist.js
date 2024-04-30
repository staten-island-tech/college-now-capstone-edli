import { defineStore } from "pinia";

export const myListStore = defineStore("myList", {
  state: () => {
    return {
      myList: {
        items: “”,
        ratings: “”,
        comments: “”,
      },
    };
  },
  actions: {
    addListItem(item) {
      this.myList.items.push(item);
      this.myList.id++;
    },
    removeListItem(id) {
      this.myList.items = this.myList.items.filter((object) => {
        return object.id !== id;
      });
      console.log(id);
    },

addRating(rating) {
      this.myList.ratings.push(rating);
      this.myList.id++;
    },

addComment(comment) {
      this.myList.comments.push(comment);
      this.myList.id++;
    },


  },
  getters: {},
}); 
