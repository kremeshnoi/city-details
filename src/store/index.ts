import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import rootReducer from 'store/reducers'

export const index = configureStore({
	reducer: rootReducer
})

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
