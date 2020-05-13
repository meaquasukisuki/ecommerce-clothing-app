<template>
    <el-col :span="6">
        <el-card
            :body-style="{padding:'0px'}"
            shadow="hover"
            class="item-card-container"
        >
            <el-button @click="addCartItem(item)">
                ADD TO CART
            </el-button>
            <el-image
                :src="this.item.imageUrl"
                class="image"
                lazy
            >
                <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                </div>
            </el-image>
            <div style="padding: 14px;">
                <div class="info">
                    <span class="name">
                        {{this.item.name}}
                    </span>
                    <span class="price">
                        {{this.item.price}}
                    </span>
                </div>
            </div>
        </el-card>
    </el-col>
</template>

<script>
    import {mapMutations} from "vuex";
    import {ADD_ITEM_TO_CART} from "../store/mutations/mutation-types";

    export default {
        name: "ItemCard",
        props:{
            item: {
                type:Object
            }
        },
        methods:{
            ...mapMutations({
                addItemToCart:ADD_ITEM_TO_CART,
                increaseCounter:"increaseCounter",
                addCartItem:"addCartItem"
            })
        }
    }
</script>

<style scoped lang="scss">

    .info {
        display: flex;
        justify-content: space-between;
    }
    .el-image {
        width: 240px;
        height: 310px;
    }
    .el-col {
        cursor: pointer;
        margin-bottom: 3rem;
        & :hover {
            .el-button {
                display: block;
            }
        }
    }
    .item-card-container {
        position: relative;
    }

    .el-button {
        position: absolute;
        left: 22%;
        top: 30%;
        z-index: 1;
        background-color: black;
        color: white;
        display: none;
        padding: 2rem;
    }

</style>