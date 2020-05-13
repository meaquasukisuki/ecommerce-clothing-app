<template>
    <div class="container">
        <SignIn/>
        <SignUp/>
    </div>
</template>

<script>
    import SignIn from "./SignIn";
    import SignUp from "./SignUp";
    export default {
        name: "SignInAndSignUp",
        components: {SignUp, SignIn}
    }
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        flex-basis: 100%;
        /*justify-content: flex-start;*/
        align-items: baseline;
        font-size: 2rem;
        /*justify-content: center;*/
    }
    @media screen and (max-width: 700px) {
        .container {
            flex-direction: column;

            & :nth-child(1) {
                margin-top: 2rem;
            }
            & > * {
                margin-bottom: 20%;
            }
        }
    }
    /*.container {*/
    /*    width: 80%;*/
    /*    display: flex;*/
    /*    flex-direction: row;*/
    /*    margin: 0 auto;*/
    /*}*/


</style>