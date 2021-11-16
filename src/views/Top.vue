<template>
    <div class="container">
        <div class="row">
            <AddTodo />
            <CardList />
        </div>
    </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import CardList from "@/components/CardList.vue";

export default {
    components: {
        AddTodo,
        CardList,
    },
};
</script>
