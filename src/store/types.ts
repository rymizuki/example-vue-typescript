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
