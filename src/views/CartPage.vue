<template>
    <Cart/>
</template>

<script>
    import Cart from "../components/Cart";
    export default {
        name: "CartPage",
        components: {Cart},
        beforeRouteEnter(to,from,next) {
            import('../store/state/state').then(state => {
                if (!state.default.userObj) {
                    next('/404');
                }
                else {
                    next()
                }
            })
        }
    }
</script>

<style scoped>

</style>