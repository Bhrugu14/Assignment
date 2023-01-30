import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "../services/userAPI/getUser";
import { RootState } from "./store";

export const getEmployees = createAsyncThunk(
  "companyList/getEmployees",
  async (arg?: any, { rejectWithValue }) => {
    try {
      const res = await getUsers();
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
// Define a type for the slice state
interface CounterState {
  company: any;
  isLoading: boolean;
  hasError: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  company: {},
  isLoading: true,
  hasError: false,
};

export const CompanyReducer = createSlice({
  name: "companyList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(getEmployees.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmployees.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const getEmp = (state: RootState) => state.company;

export const GetReducer = CompanyReducer.reducer;
