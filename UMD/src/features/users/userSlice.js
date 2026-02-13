import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchUsersAPI } from "./userAPI"

const initialState = {
    users: [],
    page: 1,
    totalPages: 0,
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async ({page,search}, { rejectWithValue }) => {
        try {
            const data = await fetchUsersAPI(page,search)

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice(
    {
        name: "users",
        initialState,
        reducers: {
            setPage: (state, action) => {
                state.page = action.payload
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchUsers.pending, (state) => {
                    state.loading = true,
                        state.error = null
                })
                .addCase(fetchUsers.fulfilled, (state, action) => {
                    state.loading = false;
                    state.users = action.payload.users;
                    state.totalPages = Math.ceil(action.payload.total / action.payload.limit);
                })
                .addCase(fetchUsers.rejected, (state, action) => {
                    state.loading = false,
                        state.error = action.payload
                })
    }

    }
)

export const { setPage } = userSlice.actions
export default userSlice.reducer
