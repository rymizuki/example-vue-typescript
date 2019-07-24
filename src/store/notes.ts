import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'
import { NoteEntity, NoteForm } from './types'

export const namespaced = true

export class NotesState {
  rows: NoteEntity[] = []
}

export class NotesGetters extends Getters<NotesState> {
  rows() {
    return this.state.rows
  }
}

export class NotesMutations extends Mutations<NotesState> {
  FETCH_RESOLVE(rows: NoteEntity[]) {
    this.state.rows = rows
  }
  ADD_RESOLVE(form: NoteForm) {
    const lastId = this.state.rows[this.state.rows.length - 1].id
    const note: NoteEntity = {
      id: lastId + 1,
      content: form.content,
      created: new Date()
    }
    this.state.rows.push(note)
  }
}

export class NotesActions extends Actions<
  NotesState,
  NotesGetters,
  NotesMutations,
  NotesActions
> {
  async fetch() {
    const rows: NoteEntity[] = [
      { id: 1, content: 'テスト', created: new Date('2019-07-24 23:47:00') }
    ]
    this.commit('FETCH_RESOLVE', rows)
  }

  async add(form: NoteForm) {
    this.commit('ADD_RESOLVE', form)
  }
}

export default new Module({
  state: NotesState,
  getters: NotesGetters,
  mutations: NotesMutations,
  actions: NotesActions
})
