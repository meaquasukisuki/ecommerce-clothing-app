<template :style="{fontSize:'1rem'}">
    <el-row type="flex">
        <el-col>
            <el-image :src="this.item.imageUrl">
                <div>loading!</div>
            </el-image>
        </el-col>
        <el-col>
            <span>
               {{this.item.name}}
            </span>
        </el-col>
        <el-col class="quantity-info">
            <span class="decrease" @click="deleteCartItem(item)">
                &lt;
            </span>
            <span>
               {{this.item.quantity}}
            </span>
            <span class="increase" @click="addCartItem(item)">
                &gt;
            </span>
        </el-col>
        <el-col>
            <span>
               {{this.item.price * this.item.quantity}}
            </span>
        </el-col>
        <el-col
            :style="{fontSize:'2rem',cursor:'pointer'}"
        >
            <span @click="removeItemFromCart(item)">
                &#215;
            </span>

        </el-col>
    </el-row>
</template>

<script>
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "CartItem",
        props:{
            item:{
                type:Object
            },
        },
        methods:{
            ...mapMutations([
                'addCartItem',
                'removeItemFromCart'
            ]),
            ...mapActions([
                'deleteCartItem'
            ])
        }
    }
</script>

<style scoped lang="scss">
    .quantity-info {
        font-weight: bold;
        .decrease {
            cursor: pointer;
        }
        .increase {
            cursor: pointer;
        }
        span {
            margin: 0.5rem;
        }
    }
</style>