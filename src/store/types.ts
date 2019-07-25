export interface RootState {
  notes?: NotesState
}

export interface NotesState {
  rows: NoteEntity[]
}

export interface NoteForm {
  content: string
}

export interface NoteEntity {
  id: number
  content: string
  created: Date
}
export interface RootGetters {
  getNotes(): NoteEntity[]
}

export interface RootMutations {}

export interface RootActions {
  viewIndex: {}
  addNote: {
    form: NoteForm
  }
  'notes/fetch': {}
  'notes/add': {
    form: NoteForm
  }
}

export interface NotesGetters {
  rows: () => NoteEntity[]
}

export interface NotesMutations {
  FETCH_RESOLVE: {
    rows: NoteEntity[]
  }
  ADD_RESOLVE: {
    form: NoteForm
  }
}
export interface NotesActions {
  fetch: {}
  add: {
    form: NoteForm
  }
}
