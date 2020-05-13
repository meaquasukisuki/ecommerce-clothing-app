<template>
    <div class="container">
        <MenuItem v-for="section in homepageShopItems" :key="section.id" :section="section"/>
    </div>
</template>

<script>
    import MenuItem from "./Menu-Item";
    import {mapState} from "vuex";

    export default {
        name:'Directory',
        components: {MenuItem},
        data() {
            return {

            }
    },
        computed:{
            ...mapState([
                "homepageShopItems"
            ])
        }
}
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>