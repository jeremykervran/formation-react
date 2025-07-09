import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";

interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}

const initialState: IRessourcesState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadAsyncRessources.fulfilled, (state, action) => {
      state.images = action.payload;
    });
  },
});

// export const {} = ressources.actions;
export const REST_URL = "http://localhost:5679";

export const loadAsyncRessources = createAsyncThunk(
  "ressources/load",
  async () => {
    const promiseImages = await fetch(`${REST_URL}/images`);
    const result = await promiseImages.json();

    return result;
  }
);

export default ressources.reducer;
