<template>
  <el-container class="container">
    <Directory/>
  </el-container>
</template>

<script>
// @ is an alias to /src


import Directory from "../components/Directory";
export default {
  name: 'Home',
  data() {
    return {

    }
  },  
  components: {
    Directory
  },

}
</script>

<style lang="scss" scoped>
  .container {
    width: 90%;
    height: 60%;
  }
</style>
