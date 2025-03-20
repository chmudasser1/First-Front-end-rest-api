import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Read User
export const showUSer = createAsyncThunk('showUser', async (args, { rejectWithValue }) => {
    const token = localStorage.getItem("uid");
    if (!token) {
        return rejectWithValue("No token found");
    }

    const response = await fetch("http://localhost:8000/api/user", {
        credentials: "include",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Delete User
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const token = localStorage.getItem("uid")
    const response = await fetch(`http://localhost:8000/api/user/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    try {
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Update User
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    const token = localStorage.getItem("uid")
    console.log(data);
    const response = await fetch(`http://localhost:8000/api/user/${data.id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Create User
export const createuser = createAsyncThunk("createuser", async (data, { rejectWithValue }) => {
    console.log(data);
    const token = localStorage.getItem("uid");
    const response = await fetch(`http://localhost:8000/api/user`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Signup
export const createsignup = createAsyncThunk('createsignup', async (data, { rejectWithValue }) => {
    console.log(data);
    try {
        const response = await fetch(`http://localhost:8000/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Login
export const createsignin = createAsyncThunk('createsignin', async (data, { rejectWithValue }) => {
    console.log(data);
    try {
        const response = await fetch(`http://localhost:8000/api/Login`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData);
        }

        const result = await response.json();
        console.log("Token received from backend:", result.token); // Debugging
        localStorage.setItem("uid", result.token); // Store the token
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

// Create the signup slice
const signupSlice = createSlice({
    name: 'signup',
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

// Create the user detail slice
export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(showUSer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(showUSer.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload; // Store the fetched users
            })
            .addCase(showUSer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Store the error message
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload; // Get the user ID from the action payload
                if (id) {
                    state.users = state.users.filter((user) => user.id !== id); // Remove the user from the state
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Set the error message from the action payload
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                // Update the user in the state if needed
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createuser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createuser.fulfilled, (state, action) => {
                state.loading = false;
                // Add the new user to the state if needed
            })
            .addCase(createuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export actions and reducers
export const { actions, reducer } = signupSlice;
export default userDetail.reducer;