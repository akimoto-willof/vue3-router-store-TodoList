<template>
    <div class="container">
        <div class="row">
            <AddTodo />
            <CardList />
        </div>
    </div>
</template>

<script>
import AddTodo from "../components/AddTodo.vue";
import CardList from "../components/CardList.vue";
import { ref } from "vue";
import { projectFirestore } from "../firebase/config.js";

export default {
    components: {
        AddTodo,
        CardList,
    },
    setup(props) {
        console.log(projectFirestore.collection("test"));
    },
};
</script>
