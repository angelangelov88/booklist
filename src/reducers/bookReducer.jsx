import { v4 as uuidv4 } from 'uuid';

export const bookReducer = (state, action) => {
  if (action.type === 'ADD_BOOK') {
    return [...state, {
      title: action.book.title,
      author: action.book.author,
      id: uuidv4(),
    }]
  } else if (action.type === 'REMOVE_BOOK') {
    return state.filter(book => book.id !== action.id)
  } else {
    return state
  }
}