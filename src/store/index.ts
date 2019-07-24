import Vue from 'vue'
import Vuex, { StoreOptions, ActionTree } from 'vuex'
import { RootState } from './types'

import * as notes from './notes'

Vue.use(Vuex)

const state: RootState = {}

const actions: ActionTree<RootState, RootState> = {
  async viewIndex({ dispatch }) {
    dispatch('notes/fetch')
  },
  async addNote({ dispatch }, form) {
    dispatch('notes/add', form)
  }
}

const store: StoreOptions<RootState> = {
  state,
  modules: { notes },
  actions
}

export default new Vuex.Store(store)
