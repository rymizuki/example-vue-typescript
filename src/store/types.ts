export interface RootState {}

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
