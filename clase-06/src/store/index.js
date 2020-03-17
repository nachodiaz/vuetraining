import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    tasks:  ['Estudiar javascript ','Estudiar Vuejs','Prácticar Fútbol']
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload
    },
    decrement: (state, payload) => {
      state.counter -= payload 
    },
    addTask: (state, payload) => {
      state.tasks.push(payload)
    } 
  },
  actions: {
    incrementCounter: (store, payload) => {
      store.commit('increment', payload)
    },
    decrementCounter: (store, payload) => {
      store.commit('decrement', payload)
    },
    addTask: (store, payload) => {
      store.commit('addTask', payload)
    }
  },
  getters: {
    tareasConEstudiar: state => {
      return state.tasks.filter( task =>{
        return task.includes('Estudiar')
      })
    },
  },
  modules: {
    user: UserModule
  }
})
