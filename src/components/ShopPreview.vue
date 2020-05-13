<template>
    <div class="shopPreviewContainer">
        <ShopPreviewItem
                v-for="shopItem in allShopItems"
                :shopItem="shopItem"
                :key="shopItem.id"
        />
    </div>

</template>

<script>
    import ShopPreviewItem from "./ShopItem";
    import {mapState} from "vuex";
    export default {
        name: "ShopPreview",
        components: {ShopPreviewItem},
        computed:{
            ...mapState(
                ['allShopItems']
            )
        },

    }
</script>

<style scoped>
    .shopPreviewContainer {
        margin-top: 2rem;
    }
</style>