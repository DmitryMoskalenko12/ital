import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "@/hooks/http.hook";

interface JoinImage {
    src: string,
    id: number
}

interface Join {
    joinImages: Array<JoinImage>,
    status: string
}

const initialState: Join = {
    joinImages: [],
    status: 'idle'
}

export const fetchJoin = createAsyncThunk(
    'join/fetchJoin',
    async () => {
        const {request} = useHttp();
        return await request("https://ital-a6147-default-rtdb.firebaseio.com/images.json")
    }
)

const joinSlice = createSlice({
    name: 'join',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(fetchJoin.pending, state => {
            state.status = 'loading';
          })
        .addCase(fetchJoin.fulfilled, (state, action) => {
            state.status = 'idle',
            state.joinImages = action.payload
        })
        .addCase(fetchJoin.rejected, state => {
            state.status = 'error'
        })
        .addDefaultCase(() => {})
    }
})

const {actions, reducer} = joinSlice;
export default reducer