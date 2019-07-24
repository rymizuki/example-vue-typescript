import { Store } from 'vuex'
import { Module, Actions, Getters, Mutations, Context } from 'vuex-smart-module'

import notes from './notes'
import { NoteForm } from './types'

class RootState {}

class RootGetters extends Getters<RootState> {
  private notes?: Context<typeof notes>

  $init(store: Store<any>) {
    this.notes = notes.context(store)
  }

  getNotes() {
    if (!this.notes) throw new Error()
    return this.notes.getters.rows()
  }
}

class RootActions extends Actions<
  RootState,
  RootGetters,
  Mutations,
  RootActions
> {
  private notes?: Context<typeof notes>

  $init(store: Store<any>) {
    this.notes = notes.context(store)
  }

  async viewIndex() {
    if (!this.notes) throw new Error()
    this.notes.actions.fetch()
  }

  async addNote(form: NoteForm) {
    if (!this.notes) throw new Error()
    this.notes.actions.add(form)
  }
}

export const root = new Module({
  state: RootState,
  getters: RootGetters,
  actions: RootActions,
  modules: {
    notes
  }
})
