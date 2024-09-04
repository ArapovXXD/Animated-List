import { createSlice } from '@reduxjs/toolkit';

interface Element {
  id: string;
  color: string;
}

interface ElementsState {
  elements: Element[];
}

const initialState: ElementsState = {
  elements: [],
};

const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addElement: (state) => {
      const newElement = {
        id: Math.random().toString(36).slice(2, 9),
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      };
      state.elements.unshift(newElement);
    },
    removeElement: (state) => {
      state.elements.pop();
    },
  },
});

export const { addElement, removeElement } = elementsSlice.actions;
export default elementsSlice.reducer;
