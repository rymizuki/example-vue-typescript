import {
  NoteEntity,
  NotesState,
  RootState,
  NotesGetters,
  NotesMutations,
  NotesActions
} from './types'
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'

export const namespaced = true

export const state: NotesState = { rows: [] }

export const getters: DefineGetters<NotesGetters, NotesState, RootState> = {
  rows(state) {
    return () => state.rows
  }
}

export const mutations: DefineMutations<NotesMutations, NotesState> = {
  FETCH_RESOLVE(state, { rows }) {
    state.rows = rows
  },
  ADD_RESOLVE(state, { form }) {
    const lastId = state.rows[state.rows.length - 1].id
    const note: NoteEntity = {
      id: lastId + 1,
      content: form.content,
      created: new Date()
    }
    state.rows.push(note)
  }
}

export const actions: DefineActions<
  NotesActions,
  NotesState,
  NotesMutations,
  RootState
> = {
  async fetch(ctx) {
    const rows: NoteEntity[] = [
      { id: 1, content: 'test', created: new Date('2019-07-24 23:47:00') }
    ]
    ctx.commit('FETCH_RESOLVE', { rows })
  },

  async add(ctx, { form }) {
    ctx.commit('ADD_RESOLVE', { form })
  }
}
