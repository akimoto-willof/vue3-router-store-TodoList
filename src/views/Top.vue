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

export default {
    components: {
        AddTodo,
        CardList,
    },
    // setup(props) {
    //     const posts = ref([]);
    //     const error = ref(null);

    //     const load = async () => {
    //         try {
    //             // postsというcollectionにつなげる文、getがデータを取ってくるメソッド
    //             // 非同期なのでawaitをつける
    //             const res = await projectFirestore.collection("posts").get();
    //             console.log(res.docs); //ここにデータがある
    //             posts.value = res.docs.map((doc) => {
    //                 // console.log(doc.data())//doc.dataに実際のデータが格納されている
    //                 console.log(doc.id); //doc.idにidが格納されている
    //                 return { ...doc.data(), id: doc.id }; //スプレッド構文を使って一つのオブジェクトにまとめる
    //             });
    //         } catch (err) {
    //             error.value = err.message;
    //             console.log(error.value);
    //         }
    //     };

    //     // 使えるようにreturnする必要がある
    //     return { posts, error, load };
    //     // load()はHome.vueから呼び出したい
    //     // load()
    // },
};
</script>
