import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            todo: [
                {
                    title: "確認",
                    detail: "",
                },
            ],
        };
    },
    mutations: {
        increment(state, payload) {
            state.todo.push({
                title: payload.title,
                detail: payload.detail,
            });
        },
    },
    actions: {
        incrementActions({ commit }, payload) {
            commit("increment", payload);
        },
    },
    modules: {},
});
