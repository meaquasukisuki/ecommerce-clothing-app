<template>
    <el-row
        type="flex"
        justify="center"
        :gutter="20"
        class="header-container"
        :style="{ margin:'3rem auto' }"
    >
        <el-col>
            Product
        </el-col>
        <el-col>
            Description
        </el-col>
        <el-col>
            Quantity
        </el-col>
        <el-col>
            Price
        </el-col>
        <el-col>
            Remove
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "CartHeader"
    }
</script>

<style scoped>
    .header-container {
        width: 100%;
        border-bottom: black 1px solid;
        padding-bottom: 2rem;
    }
</style>