import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Read User

export const showUSer = createAsyncThunk('showUser', async (args, { rejectWithValue }) => {

    const response = await fetch("http://localhost:8000/api/user");
    try {
        const result = await response.json();
        // console.log(result);
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }

})


//delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {

    const response = await fetch(`http://localhost:8000/api/user/${id}`,
        { method: "DELETE" }
    );

    try {
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

//update action

export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    console.log(data)
    const response = await fetch(`http://localhost:8000/api/user/${data.id}`,

        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );
    try {
        const result = await response.json();
        // console.log(result)
        return result;
    } catch (error) {
        console.log(rejectWithValue(error));

    }
})

//Create Post

export const createuser = createAsyncThunk("createuser", async (data, { rejectWithValue }) => {
    console.log(data)
    const response = await fetch(`http://localhost:8000/api/user`,

        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );
    try {
        const result = await response.json();
        // console.log(result)
        return result;
    } catch (error) {
        console.log(rejectWithValue(error));

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
    // [deleteUser.pending]: (state) => {
    //     state.loading = true;
    //   },
    //   [deleteUser.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     const { id } = action.payload;
    //     if (id) {
    //       state.users = state.users.filter((ele) => ele.id !== id);
    //     }
    //   },
    //   [deleteUser.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   },
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
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true; // Set loading to true when the request is pending
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false; // Set loading to false when the request is fulfilled
                const { id } = action.payload; // Get the user ID from the action payload
                if (id) {
                    state.users = state.users.filter((user) => user.id !== id); // Remove the user from the state
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false; // Set loading to false when the request is rejected
                state.error = action.payload; // Set the error message from the action payload
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload;
            })
            .addCase(createuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createuser.fulfilled, (state, action) => {
                state.loading = false;

            })
            .addCase(createuser.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload;
            });
    },
});

export default userDetail.reducer;