import { createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';

export interface CounterState {
  value: boolean;
  status: 'closed' | 'open' | 'failed';
}

const initialState: CounterState = {
  value: false,
  status: 'closed',
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    close: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = false;
    },
    open: (state) => {
      state.value = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggle: (state) => {
      state.value = !state.value
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.value += action.payload;
//       });
//   },
});

export const { close, open, toggle } = menuSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMenuValue = (state: RootState) => state.menu.value;


export default menuSlice.reducer;
