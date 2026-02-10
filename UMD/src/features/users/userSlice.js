import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchUsersApi } from "./userAPI"

const initialState = {
    users:[],
    page:1,
    totalPages:0,
    loading:false,
    error:null
}

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (page,{rejectWithValue}) => {
        try {
            const data = await fetchUsersApi(page)
            return data
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice(
    {
        name:"users",
        initialState,
        reducers:{
            setPage :(state,action) => {
                state.page = action.payload
            }
        },
        extraReducers: (builder) => {
            builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading =true,
                state.error = null
            })
            .addCase(fetchUsers.fulfilled,(state,action) => {
                state.loading=false,
                state.users = action.payload.data,
                state.totalPages = action.payload.total_pages
            })
            .addCase(fetchUsers.rejected,(state,action) => {
                state.loading = false,
                state.error = action.payload
            }
          )
        }

    }
)

export const {setPage} = userSlice.actions
export default userSlice.reducer
