import { NotesState, RootState, NoteForm, NoteEntity } from './types'
import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const namespaced = true

export const state: NotesState = {
  rows: []
}

export const getters: GetterTree<NotesState, RootState> = {
  rows(state) {
    return () => state.rows
  }
}

export const mutations: MutationTree<NotesState> = {
  FETCH_RESOLVE(state, rows) {
    state.rows = rows
  },
  ADD_RESOLVE(state, form: NoteForm) {
    const lastId = state.rows[state.rows.length - 1].id
    const note: NoteEntity = {
      id: lastId + 1,
      content: form.content,
      created: new Date()
    }
    state.rows.push(note)
  }
}

export const actions: ActionTree<NotesState, RootState> = {
  async fetch({ commit }) {
    const rows: NoteEntity[] = [
      { id: 1, content: 'テスト', created: new Date('2019-07-24 23:47:00') }
    ]
    commit('FETCH_RESOLVE', rows)
  },

  async add({ commit }, form: NoteForm) {
    commit('ADD_RESOLVE', form)
  }
}
