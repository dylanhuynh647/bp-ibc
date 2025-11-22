import { configureStore } from "@reduxjs/toolkit"
import siteStatusReducer from "../features/siteStatus";

export const store = configureStore({
    reducer: {
        siteStatus: siteStatusReducer
    }
})

