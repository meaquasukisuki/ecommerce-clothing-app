<template>
    <button type="submit" @click="$event.preventDefault()">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "CustomBtn",
    }
</script>

<style scoped>
    button {
        margin-top: 2rem;
        padding: 1rem;
        color: white;
        width: 100%;
        background-color: black;
    }
</style>