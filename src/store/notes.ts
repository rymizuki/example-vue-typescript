import { NoteEntity, NoteForm } from './types'
import { VuexModule, Mutation, Action } from 'vuex-module-decorators'

export default class NotesModule extends VuexModule {
  rows: NoteEntity[] = []

  @Mutation
  FETCH_RESOLVE(rows: NoteEntity[]) {
    this.rows = rows
  }

  @Mutation
  ADD_RESOLVE(form: NoteForm) {
    const lastId = this.rows[this.rows.length - 1].id
    const note: NoteEntity = {
      id: lastId + 1,
      content: form.content,
      created: new Date()
    }
    this.rows.push(note)
  }

  @Action
  async fetch() {
    const rows: NoteEntity[] = [
      { id: 1, content: 'test', created: new Date('2019-07-24 23:47:00') }
    ]
    return rows
  }

  @Action
  async add(form: NoteForm) {
    return form
  }
}
