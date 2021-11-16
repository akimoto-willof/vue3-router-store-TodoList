<template>
    <div class="card shadow mb-2 is-animated">
        <div class="form-group py-3">
            <label for="title-form">Todo Title</label>
            <input class="form-control form-control" type="text" id="title-form" />
        </div>

        <div class="form-group">
            <label for="textarea-form">Edit</label>
            <textarea class="form-control" id="textarea-form" rows="3"></textarea>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-secondary mr-3">リセット</button>
            <button type="button" class="btn btn-primary">追加</button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {};
</script>

<style></style>
