<template>
    <div class="card shadow mb-2 is-animated">
        <div class="form-group py-3">
            <label for="title-form">Todo Title</label>
            <input class="form-control form-control" type="text" id="title-form" v-model="todoInput" />
        </div>

        <div class="form-group">
            <label for="textarea-form">Edit</label>
            <textarea class="form-control" id="textarea-form" rows="3" v-model="todoTextarea"></textarea>
        </div>
        <div class="form-group">
            <a type="button" class="btn btn-secondary mr-3" @click="todoReset">リセット</a>
            <a type="button" class="btn btn-primary" @click="todoSet">追加</a>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    setup(props) {
        const store = useStore();
        const todoInput = ref();
        const todoTextarea = ref();

        const todoReset = () => {
            todoInput.value = "";
            todoTextarea.value = "";
        };

        const todoSet = () => {
            store.dispatch("incrementActions", {
                title: todoInput.value,
                detail: todoTextarea.value,
            });

            todoReset();
        };

        return {
            todoInput,
            todoTextarea,
            todoReset,
            todoSet,
        };
    },
};
</script>

<style></style>
