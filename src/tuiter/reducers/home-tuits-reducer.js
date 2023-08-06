import { createSlice } from "@reduxjs/toolkit";
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../services/tuits-thunks";

const initialState = {
    homeTuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://yt3.googleusercontent.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s176-c-k-c0x00ffffff-no-rj",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const homeTuitsSlice = createSlice({
    name: 'homeTuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.homeTuits = [] },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.homeTuits = payload },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.homeTuits.push(payload)
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.homeTuits = state.homeTuits.filter(t => t._id !== payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.homeTuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
            }

    },
    reducers: {
        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },

    }


});

export const {createTuit,deleteTuit} = homeTuitsSlice.actions;
export default homeTuitsSlice.reducer;