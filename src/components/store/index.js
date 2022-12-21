
import {configureStore} from "@reduxjs/toolkit";
import listReducers from "./create"

const store = configureStore({
    reducer: {create: listReducers}
});

export default store;