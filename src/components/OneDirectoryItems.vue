<template>
    <el-container>
        <el-header>
            {{this.title.toUpperCase()}}
        </el-header>
        <el-row :gutter="30">
            <ItemCard
                v-for="(item) in this.getShopItemByTitle(this.title).items"
                :key="item.id"
                :item="item"
            />
        </el-row>
    </el-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import ItemCard from "./ItemCard";
    export default {
        name: "OneDirectoryItems",
        components: {ItemCard},
        computed:{
            ...mapGetters([
                'getShopItemByTitle'
            ])
        },
        data() {
            return {
                title:this.$route.params.directoryType
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .el-header {
        font-size: 3rem;
    }
</style>