import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here

export const store = configureStore({
  reducer: {
    // yourReducer: yourReducer,
    // Add more reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
