import Vue from 'vue'
import Vuex, { GetterTree, MutationTree, ActionTree } from 'vuex'
import { RootState, NoteForm } from './types'
import * as notes from './notes'

Vue.use(Vuex)

const state: RootState = {}

const getters: GetterTree<RootState, RootState> = {
  getNotes(state) {
    return () => (state.notes ? state.notes.rows : [])
  }
}

const mutations: MutationTree<RootState> = {}

const actions: ActionTree<RootState, RootState> = {
  async viewIndex(ctx) {
    ctx.dispatch('notes/fetch')
  },
  async addNote(ctx, form: NoteForm) {
    ctx.dispatch('notes/add', form)
  }
}

const modules = {
  notes
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
