<template>
    <router-link :to="this.sectionData.linkUrl">
        <div class="menu-item" :style='{backgroundImage:`url(${this.sectionData.imageUrl})`}'>
            <div class="info">
                {{this.sectionData.title}}
                <span>SHOP NOW!</span>
            </div>

        </div>
    </router-link>

</template>

<script>
    export default {
        name: "MenuItem",
        props:["section"],
        data() {
            return {
                sectionData:this.section
            }
        },
    }
</script>

<style scoped>
    .menu-item {
        height: 240px;
        border: black 1px solid;
        position: relative;
        min-width: 400px;
        margin-bottom: 40px;
    }
    .info {
        color: black;
        display: flex;
        width: 100px;
        background-color: white;
        flex-direction: column;
        position: absolute;
        left: 30%;
        top: 30%;
        border: black solid 1px;
    }

</style>