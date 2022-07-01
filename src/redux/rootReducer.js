import { combineReducers } from "redux";  // its use to multiple reducer function handle

import MianReducer from "./main/MainReducer";
import MovieDetailsReducer from "./MovieDetails/MovieDetailsReducer";
import PopulerReducer from "./Populer/PopulerReducer";
import TopRatedReducer from "./TopRated/TopRatedReducer";

const rootReducer = combineReducers({
    user : MianReducer,
    Populeruser : PopulerReducer,
    TopRateduser : TopRatedReducer,
    MovieDetailsuser:MovieDetailsReducer
})

export default rootReducer