import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Read User

export const showUSer = createAsyncThunk('showUser', async (args, { rejectWithValue }) => {

    const response = await fetch("http://localhost:8000/api/user",{
        withCredentials: true
    });
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

// Create signup
export const createsignup = createAsyncThunk('createsignup', async (data, { rejectWithValue }) => {
    console.log(data);
    try {
        const response = await fetch(`http://localhost:8000/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            // Handle non-2xx responses
            const errorData = await response.json();
            return rejectWithValue(errorData);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
// Create Loginin
export const createsignin = createAsyncThunk('createsignin', async (data, { rejectWithValue }) => {
    console.log(data);
    try {
        const response = await fetch(`http://localhost:8000/api/Login`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            // Handle non-2xx responses
            const errorData = await response.json();
            return rejectWithValue(errorData);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Define the initial state
const initialState = {
    user: null,
    loading: false,
    error: null,
};

// Create the slice
const signupSlice = createSlice({
    name: 'signup', // Add a name for the slice
    initialState,
    reducers: {
        // Define your synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(createsignup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createsignup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Assuming the payload contains user data
            })
            .addCase(createsignup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Handle the error
            });
    }
});


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
export const { actions, reducer } = signupSlice;
export default userDetail.reducer;