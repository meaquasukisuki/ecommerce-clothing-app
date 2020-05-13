<template>

    <div class="shopItemContainer">
        <el-row justify="start" class="start-title">
            <router-link :to="'/shop/'+this.shopItem.routeName">
                <el-col :span="1">
                    {{shopItem.title.toUpperCase()}}
                </el-col>
            </router-link>

        </el-row>
        <el-row :gutter="30">
            <ItemCard
                v-for="(item) in filteredArray"
                :key="item.id"
                :item="item"
            />

        </el-row>
    </div>
</template>

<script>
    import ItemCard from "./ItemCard";
    export default {
        name: "ShopPreviewItem",
        components: {ItemCard},
        props:{
            shopItem: {
                type:Object
            }
        },
        data() {
            return {
                filteredArray:this.shopItem.items.filter((item,index) => {
                    return index < 4
                })
            }
        },


    }
</script>

<style scoped lang="scss">
    .shopItemContainer {
        width: 100%;
        cursor: pointer;
        margin-top: 2rem;
        margin-bottom: 1rem;
        .start-title {
            font-size: 2rem;
            margin-bottom: 2rem;
            .el-col {
                color: black;
            }
        }
    }

</style>