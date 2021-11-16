import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            todo: {
                title: "",
                detail: "",
            },
        };
    },
    mutations: {},
    actions: {},
    modules: {},
});
