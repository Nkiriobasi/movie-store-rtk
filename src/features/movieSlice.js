import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../apis/movieApi';
import { APIKEY } from '../apis/movieApiKey';



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
        const movieText = 'Harry'; 

        const response = await movieApi
            .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
            .catch((error) => {
                console.log('ERROR', error)
            })
            return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
        const seriesText = 'friends'; 

        const response = await movieApi
            .get(`?apiKey=${APIKEY}&s=${seriesText}&type=series`)
            .catch((error) => {
                console.log('ERROR', error)
            })
            return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {

        const response = await movieApi
            .get(`?apiKey=${APIKEY}&i=${id}&Plot=full`)
            .catch((error) => {
                console.log('ERROR', error)
            })
            return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}


const movieSlice =  createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    }, 
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            return {
                ...state, 
                movies: action.payload
            }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, action) => {
            return {
                ...state, 
                shows: action.payload
            }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, action) => {
            return {
                ...state, 
                selectedMovieOrShow: action.payload
            }
        }
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = state => state.movies.movies
export const getAllShows = state => state.movies.shows
export const getSelectedMvieOrShow = state => state.movies.selectedMovieOrShow
export default movieSlice.reducer