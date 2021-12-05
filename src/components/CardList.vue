<template>
    <template v-for="item in todoData" :key="todo">
        <div class="card shadow mb-2 is-animated">
            <a class="d-block card-header py-3" role="button">
                <h6 class="m-0 font-weight-bold text-primary">
                    {{ item.title }}
                </h6>
            </a>
            <div>
                <div class="card-body">{{ item.detail }}</div>
            </div>
        </div>
    </template>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    setup(props) {
        const store = useStore();
        const todoData = ref(store.state.todo);

        return {
            todoData,
        };
    },
};
</script>

<style scoped>
.card.is-animated {
    animation: fadeup 1s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
}

@keyframes fadeup {
    0% {
        transform: translateY(-30px);
        opacity: 0;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
