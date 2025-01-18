import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Read User

export const showUSer = createAsyncThunk('showUser', async (args,{ rejectWithValue }) => {

    const response = await fetch("http://localhost:8000/api/user");
    try {
        const result = await response.json();
        // console.log(result);
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }

})

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    // extraReducers: {
    //     [showUSer.pending]: (state, action) => {
    //         state.loading = true;
    //         state,error=null;
    //     },
    //     [showUSer.fulfilled]: (state, action) => {
    //         state.loading = true;
    //         state.users = action.payload;
    //     },
    //     [showUSer.rejected]: (state, action) => {
    //         state.loading = true;
    //         state.error = action.payload.message;
    //     },
    // },
    extraReducers: (builder) => {
        builder
            .addCase(showUSer.pending, (state) => {
                state.loading = true; // Set loading to true when the fetch starts
                state.error = null; // Reset error state
            })
            .addCase(showUSer.fulfilled, (state, action) => {
                state.loading = false; // Set loading to false when the fetch is complete
                state.users = action.payload; // Store the fetched users
            })
            .addCase(showUSer.rejected, (state, action) => {
                state.loading = false; // Set loading to false when the fetch fails
                state.error = action.payload; // Store the error message
            });
    },
});

export default userDetail.reducer;