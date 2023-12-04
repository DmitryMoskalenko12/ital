import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "@/hooks/http.hook";

interface ServiceCart {
    content: string,
    buttonContent: string,
    id: number,
    src: string
}

interface Services {
    services: Array<ServiceCart>,
    status: string
}

const initialState: Services = {
    services: [],
    status: 'idle'
}

export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async () => {
        const {request} = useHttp();
        return await request("https://ital-a6147-default-rtdb.firebaseio.com/services.json")
    }
)

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(fetchServices.pending, state => {
            state.status = 'loading';
          })
        .addCase(fetchServices.fulfilled, (state, action) => {
            state.status = 'idle',
            state.services = action.payload
        })
        .addCase(fetchServices.rejected, state => {
            state.status = 'error'
        })
        .addDefaultCase(() => {})
    }
})

const {actions, reducer} = servicesSlice;
export default reducer