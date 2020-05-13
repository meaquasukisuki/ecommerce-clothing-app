<template>
    <el-main>
        <el-row v-for="j in array.length / divides"
        >
            <el-col :span="24/divides" v-for="i in divides">
                <slot></slot>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: "DynamicCol",
        props:['array','divides'],
        data() {
            return {

            }
        },

    }
</script>

<style scoped>

</style>