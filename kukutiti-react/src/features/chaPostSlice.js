import { createSlice } from '@reduxjs/toolkit';

export const chaPostSlice = createSlice({
  name: 'chaPost',
  initialState: {
    chaPost: [
      {title: 'Title 111', content: 'Content 111', url: 'chaPost.com/111'},
      {title: 'Title 222', content: 'Content 222', url: 'chaPost.com/222'},
      {title: 'Title 333', content: 'Content 333', url: 'chaPost.com/333'},
      {title: 'Title 444', content: 'Content 444', url: 'chaPost.com/444'},
    ]
  },
  reducers: {
    addChaPost: (state, action) => {
      return [...state.chaPost, action.payload]
    },
    deleteChaPost: (state, action) => {
      let temp = state.chaPost
      return temp.splice(action.payload, 1)
    }
  }
})

export const { addChaPost, deleteChaPost } = chaPostSlice.actions;

export const selectChaPost = state => state.chaPost.chaPost;

export default chaPostSlice.reducer;
