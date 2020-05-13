<template>
    <div class="container">
        <label>
            <span class="title">
                {{this.inputTitle}}
            </span>
            <input
                @input="onInputChange"
                type="password"
            />
        </label>
    </div>
</template>

<script>
    export default {
        name: "InputField",
        props:{
            inputTitle:{
                type:String
            },
            inputType:{
                type:String
            }
        },
        methods: {
            onInputChange(event) {
                this.inputText = event.target.value;
            }
        },
        data() {
            return {
                inputText:''
            }
        }
    }
</script>

<style scoped lang="scss">
    label {
        display: flex;
        flex-direction: column;

        input {
            margin-top: 2rem;
            &:focus {
                outline: none;
            }
            background: none;
            border: none;
            border-bottom: black 1px solid;
        }
    }
    /*.container {*/
        /*<!--margin-bottom: 1.5rem;-->*/
        /*<!--font-size: 1.8rem;-->*/

        /*<!--.title {-->*/
        /*<!--    transform: translateX(-30%);-->*/
        /*<!--}-->*/
    /*}*/
    /*label {*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    align-items: center;*/
    /*}*/
    /*input {*/
    /*    background: none;*/
    /*    font-size: 2rem;*/
    /*    padding: 1rem;*/
    /*    border: none;*/
    /*    border-bottom: black solid 1px;*/
    /*    &:focus {*/
    /*        background-color: lightblue;*/
    /*    }*/
    /*}*/

    /*@media (max-width: 700px) {*/
    /*    font-size: 1rem;*/
    /*    margin: 0;*/
    /*}*/

</style>