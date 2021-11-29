<!-- @format -->

<template>
    <div id="wrapper">
        <Header />
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <AppNavi />
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import AppNavi from "./components/AppNavi.vue";

export default {
    name: "App",
    components: {
        Header,
        AppNavi,
    },
};
</script>

<style></style>
