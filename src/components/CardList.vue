<template>
    <div class="card shadow mb-2 is-animated">
        <a href="#" class="d-block card-header py-3" role="button" @click="showDetail = !showDetail">
            <h6 class="m-0 font-weight-bold text-primary">
                {{ todoTitle }}
                <font-awesome-icon :icon="showDetail ? 'angle-down' : 'angle-right'" />
            </h6>
        </a>
        <div class="collapse show" v-if="showDetail">
            <div class="card-body">{{ todoDetail }}</div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    props: {
        todoTitle: {
            type: String,
            default: "ここにタイトル",
        },
        todoDetail: {
            type: String,
            default: "ここに内容が入ります。",
        },
    },
    setup(props) {
        const showDetail = ref(true);

        return {
            showDetail,
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
