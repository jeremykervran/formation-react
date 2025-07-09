import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";

const store = configureStore({
  reducer: combineReducers({ current: currentReducer }),
});
store.subscribe(()=>console.log(store.getState()))


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;