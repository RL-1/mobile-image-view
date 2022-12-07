import {configureStore} from '@reduxjs/toolkit';
import mainSlice from '../screens/Main/redux';
export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
