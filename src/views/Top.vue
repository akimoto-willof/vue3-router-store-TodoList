<template>
    <div class="container">
        <div class="row">
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
        </div>
    </div>
</template>

<script>
import CardList from "@/components/CardList.vue";

export default {
    components: {
        CardList,
    },
};
</script>
