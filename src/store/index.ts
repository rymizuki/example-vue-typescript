import Vue from 'vue'
import Vuex from 'vuex'
import {
  RootState,
  NoteForm,
  RootGetters,
  RootMutations,
  RootActions
} from './types'
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'
import * as notes from './notes'

Vue.use(Vuex)

const state: RootState = {}
const getters: DefineGetters<RootGetters, RootState, RootGetters> = {
  getNotes(state) {
    return () => (state.notes ? state.notes.rows : [])
  }
}
const mutations: DefineMutations<RootMutations, RootState> = {}
const actions: DefineActions<
  RootActions,
  RootState,
  RootMutations,
  RootGetters
> = {
  async viewIndex(ctx) {
    ctx.dispatch('notes/fetch', {})
  },
  async addNote(ctx, { form }) {
    ctx.dispatch('notes/add', { form })
  }
}
const modules = { notes }
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
