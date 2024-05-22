import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user : userExist ? userExist : null,
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : "",
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers : builder => {
        builder 
        .addCase(registerUser.pending , (state) => {
             state.isLoading = true;
             state.isError = false;
             state.isSuccess = false
             state.message = "";
        })
        .addCase(registerUser.fulfilled , (state , action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(registerUser.rejected , (state , action) => {
            state.isLoading = false;
            state.isSuccess = false
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(loginUser.pending , (state) => {
             state.isLoading = true;
             state.isError = false;
             state.isSuccess = false
             state.message = "";
        })
        .addCase(loginUser.fulfilled , (state , action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(loginUser.rejected , (state , action) => {
            state.isLoading = false;
            state.isSuccess = false
            state.isError = true;
            state.message = action.payload;
        })
    },
})

export default authSlice.reducer;




// Register User

export const registerUser = createAsyncThunk("REGISTER/USER" , async(formData , thunkAPI) => {
    console.log(formData)

    try {
        return await authServices.register(formData);
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
})


export const loginUser = createAsyncThunk("LOGIN/USER" , async(loginFormData) => {
    // console.log(loginFormData);
    try {
        return await authServices.login(loginFormData);
    } catch (error) {
        console.log(error.message)
    }
})


const logOutUser = createAsyncThunk("LOGOUT/USER" , async(id) => {
    console.log(id)
})