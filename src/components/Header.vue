<template>
    <el-header>
        <div class="logo">
            <router-link to="/">
                <img src="../assets/crown.svg">
            </router-link>
        </div>
        <div class="group-items">
            <router-link to="/shop">
                <span class="shop">
                    SHOP
                </span>
            </router-link>
            <router-link to="/contact">
                <span class="contact">
                    CONTACT
                </span>
            </router-link>

            <router-link to="/signin">
                <span class="sign-in">
                    SIGN IN
                </span>
            </router-link>

            <router-link to="/cart">
                <span class="cart-icon">
                    <img src="../assets/shopping-bag.svg">
                </span>
            </router-link>



        </div>
    </el-header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    .el-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .group-items {
            display: flex;
            justify-content: flex-end;
            margin-right: 5%;
        }
        a {
            text-decoration: none;
            color: black;
        }
        img {
            max-width: 50px;
            max-height: 50px;

        }
    }

    span {
        margin-left: 2rem;
        cursor: pointer;
    }

</style>