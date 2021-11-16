import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            todo: {
                title: "確認",
                detail: "",
            },
        };
    },
    mutations: {
        increment(state, payload) {
            console.log(payload);
        },
    },
    actions: {
        incrementActions({ commit }, payload) {
            commit("increment", payload);
        },
    },
    modules: {},
});
