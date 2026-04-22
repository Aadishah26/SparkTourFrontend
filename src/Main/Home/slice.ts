import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Package {
  _id: string;
  // Add other properties as needed
}

type Review = unknown;

export interface HomeState {
  data: Package[] | null;
  loadingPck: boolean;
  error: string | null; 
  ReviewsLoading: boolean;
  ReviewsError: string | null; 
  Reviewsdata: Review[] | null;   
}

const initialState: HomeState = {
  data: null,
  loadingPck: false,
  error: null,
    ReviewsLoading: false,
  ReviewsError: null,
  Reviewsdata: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    fetchHomeDataRequest: (state) => {
      state.loadingPck = true;
      state.error = null; 
      state.data = null; 
    },
    fetchHomeDataSuccess: (state, action: PayloadAction<{ data: Package[] }>) => {
      state.loadingPck = false;
      state.data = action.payload.data;
      state.error = null;
    },
    fetchHomeDataFailure: (state, action: PayloadAction<string>) => {
      state.loadingPck = false;
      state.error = action.payload;  
      state.data = null; 
    },
     fetchReviewsRequest: (state) => {
      state.ReviewsLoading = true;
      state.ReviewsError = null; 
      state.Reviewsdata = null; 
    },
    fetchReviewsSuccess: (state, action: PayloadAction<{ reviews: Review[] }>) => {
      state.ReviewsLoading = false;
      state.Reviewsdata = action.payload.reviews;
      state.ReviewsError = null;
    },
    fetchReviewsFailure: (state, action: PayloadAction<string>) => {
      state.ReviewsLoading = false;
      state.ReviewsError = action.payload;  
      state.Reviewsdata = null; 
    },
  },
});

export const {
  fetchHomeDataRequest,
  fetchHomeDataSuccess,
  fetchHomeDataFailure,
  fetchReviewsRequest,
  fetchReviewsSuccess,
  fetchReviewsFailure,
} = homeSlice.actions;

export default homeSlice.reducer;
