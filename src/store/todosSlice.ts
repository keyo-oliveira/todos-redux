import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdd(state: Todo[], action) {
      state.push({
        id: action.payload.id,
        content: action.payload.content,
        isDone: false,
      });
    },
    todoToggled(state: Todo[], action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    todoRemove(state: Todo[], action){
      const todo = state.find((todo) => todo.id === action.payload.id);
      const index = state.indexOf(todo!)

      if(index > -1){
        state.splice(index, 1)
      }
    }
  },
});

export const { todoAdd, todoToggled, todoRemove } = todosSlice.actions;
export default todosSlice.reducer;
