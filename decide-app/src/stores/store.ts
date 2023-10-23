import { defineStore } from 'pinia';


export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})




export const userInformations = defineStore('userInfo', {
  state: () => ({
    users:{
      user:{
        userID: 0,
        name: '',
        teams: [],
        votePower: 0,
      }
    }
  })
})

export const decisions = defineStore('decisions',{
  state: () => ({
    polls:  {
      poll:{
        pollID: 0,
        pollTitle: '',
        pollDecsription: '',
        pollCreator: '',
        pollDate: new Date() 
      }
    }
  })
})


