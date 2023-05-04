import { filter } from 'lodash'
import { create } from 'zustand'

interface State {
  popularBooks: Book[]
}

interface Action {
  addPopularBook: (book: Book) => void
  removePopularBook: (id: string) => void
}

export interface Book {
  id: string
  title: string
  author: string
  price: number
  img_id: number
  createdAt: Date
  updatedAt: Date
}

export const usePopularBooksStore = create<State & Action>((set) => ({
  popularBooks: [],
  addPopularBook: (book: Book) =>
    set((state) => ({ popularBooks: { ...state.popularBooks, book } })),
  removePopularBook: (id: string) =>
    set((state) => ({
      popularBooks: filter(state.popularBooks, ({ id: _id }) => _id !== id),
    })),
}))
