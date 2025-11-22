import {createSlice } from "@reduxjs/toolkit"

interface SiteStatusState {
    saveStatus: "saved" | "unsaved";
    publishedStatus: "published" | "unpublished";
}

// can be tweaked later, but this assumes no changes have been made initially
const initialState: SiteStatusState = {
    saveStatus: "saved",
    publishedStatus: "published"
}

const siteStatusSlice = createSlice({
    name: "siteStatus",
    initialState,
    reducers: {
        SetUnsaved(state) {
            state.saveStatus = "unsaved";
        },
        SetSaved(state){
            state.saveStatus = "saved";
        },
        SetPublished(state){
            state.publishedStatus = "published";
        },
        SetUnpublished(state){
            state.publishedStatus = "unpublished";
        }

    }

})

export const { SetUnsaved, SetSaved, SetPublished, SetUnpublished } = siteStatusSlice.actions;

export default siteStatusSlice.reducer;