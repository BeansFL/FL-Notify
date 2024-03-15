import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notifyTypes: [
        { id: 1, icon: "./icons/error.svg", type: "error" },
        { id: 2, icon: "./icons/success.svg", type: "success" },
        { id: 3, icon: "./icons/notifies.svg", type: "notify" },
        { id: 4, icon: "./icons/info.svg", type: "info" },
        { id: 5, icon: "./icons/badge.svg", type: "badge" },
        { id: 6, icon: "./icons/cash.svg", type: "cash" },
        { id: 7, icon: "./icons/server.png", type: "server" },
    ],

    notifies: [
        /*{
            id: 1, timeout: 3000, position: 0, type: 1,
            title: "Some really cool headline",
            subTitle: "And a not-so-cool subtitle",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        },
        {
            id: 2, timeout: 3000, position: 0, type: 2,
            title: "Some really cool headline",
            subTitle: "And a not-so-cool subtitle",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        },
        {
            id: 3, timeout: 3000, position: 1, type: 3,
            title: "Some really cool headline",
            subTitle: "And a not-so-cool subtitle",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        },
        {
            id: 4, timeout: 3000, position: 1, type: 4,
            title: "Some really cool headline",
            subTitle: "And a not-so-cool subtitle",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        },
        {
            id: 5, timeout: 3000, position: 2, type: 5,
            title: "Some really cool headline",
            subTitle: "And a not-so-cool subtitle",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        },
        {
            id: 6, timeout: 3000, position: 2, type: 6,
            title: "Some really cool headline",
            subTitle: "And a not-so-cool subtitle",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        },
        {
            id: 7, timeout: 3000, position: 3, type: 7,
            title: "Some really cool headline",
            subTitle: "And a not-so-cool subtitle",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        },*/
    ],
};

export const notifySlice = createSlice({
    initialState,
    name: 'notifySlice',
    reducers: {
        loadNotifies: (state, action) => {
            state.notifies = action.payload;
        },

        removeNotify: (state, action) => {
            state.notifies = state.notifies.filter(
                (item) => item.id !== action.payload
            );
        },

        saveTime: (state, action) => {
            state.notifies = state.notifies.map(
                (item) => {
                    if(item.id === action.payload.id) {
                        item.time = action.payload.time;
                    }

                    return item;
                }
            );
        },
    },
});

export default notifySlice.reducer;

export const {
    saveTime,
    removeNotify,
    loadNotifies,
} = notifySlice.actions;