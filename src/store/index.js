import Vue from 'vue'
import Vuex from 'vuex'

import * as notes from './notes'

Vue.use(Vuex)

const actions = {
  async viewIndex({ dispatch }) {
    dispatch('notes/fetch')
  },
  async addNote({ dispatch }, form) {
    dispatch('notes/add', form)
  }
}

export default new Vuex.Store({
  modules: { notes },
  actions
})
