<template>
    <div class="card shadow mb-4">
        <a href="#" class="d-block card-header py-3" role="button" @click="arrowSwitch">
            <h6 class="m-0 font-weight-bold text-primary">
                todo title
                <font-awesome-icon :icon="arrowIcon" />
            </h6>
        </a>
        <transition name="open">
            <div class="collapse show" v-if="showDetail">
                <div class="card-body">ここにTODO内容を記述する</div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup(props) {
        const arrowIcon = ref("angle-right");
        const showDetail = ref(false);

        const arrowSwitch = () => {
            if (showDetail.value) {
                arrowIcon.value = "angle-right";
                showDetail.value = false;
            } else {
                arrowIcon.value = "angle-down";
                showDetail.value = true;
            }
        };

        return {
            arrowIcon,
            showDetail,
            arrowSwitch,
        };
    },
};
</script>

<style>
@keyframes open {
    0% {
        opacity: 0;
        transform: translateY(-5px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
.open-enter-active {
    animation: open 0.2s;
}
.open-leave-active {
    animation: open 0.2s linear reverse;
}
</style>
