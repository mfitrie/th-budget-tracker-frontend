import { configureStore } from "@reduxjs/toolkit"
import { budgetSlice } from "./reducer/budget";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [budgetSlice.name]: budgetSlice.reducer,
        },
        devTools: true,
    });
}

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']