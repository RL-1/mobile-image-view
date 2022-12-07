import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, tokenApi} from '../../../api';

export const getPhotos = createAsyncThunk('manager/getSubtasks', async () => {
  const data = await fetch(`${api}photos/?client_id=${tokenApi}`).then(
    response => response.json(),
  );
  return data;
});
const mainSlice = createSlice({
  name: 'main',
  initialState: {
    photos: [],
  },
  reducers: {},
  extraReducers: {
    [getPhotos.fulfilled]: (state, {payload}) => {
      state.photos = payload;
    },
  },
});
export const {} = mainSlice.actions;
export default mainSlice.reducer;
