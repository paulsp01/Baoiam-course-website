import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchCourseDetails = createAsyncThunk(
  'courseDetails/fetchCourseDetails',
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}/api/courses/${courseId}/`);
      console.log(response, 'response slice')
      return response.data;
    } catch (error) {
    console.log(error.data)
      return rejectWithValue(error.response.data);
    }
  }
);

const courseDetailSlice = createSlice({
  name: 'courseDetails',
  initialState: {
    courses: {}, // storing multiple courses by id rather than just single 
    currentCourseId: null, // to be able to track current course by its ID
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        const courseId = action.meta.arg; //  id passed to the async thunk
        state.courses[courseId] = action.payload; // caching the course by its id
        state.currentCourseId = courseId; // update the current course id
        state.status = 'succeeded';
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default courseDetailSlice.reducer;