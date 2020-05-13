<template>
    <el-container>
        <CartHeader/>
        <CartItem
            v-for="item in this.getCartItems"
            :item="item"
            :price="item.price"
            :image-url="item.imageUrl"
            :name="item.name"
            :quantity="item.quantity"
            :key="item.id"
        />
        <el-col class="total">
            <span>
                total: {{this.getTotalMoney}}
            </span>
        </el-col>
    </el-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import CartHeader from "./CartHeader";
    import CartItem from "./CartItem";

    export default {
        name: "Cart",
        components: {CartItem, CartHeader},
        computed: {
            ...mapGetters(['getCartItems','getTotalMoney']),

        },
        mounted() {

        }
    }

</script>

<style scoped lang="scss">
    .el-container {
        width: 70%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    .total {
        margin-top: 10%;
        margin-left: 40%;
        font-size: 3rem;
    }
</style>