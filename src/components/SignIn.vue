<template>
    <div class="container">
        <div class="titles">
            <span class="title">
                I have an account.
            </span>

            <span class="subTitle">
            Sign in with your email and password.
            </span>
        </div>
        <form>
            <InputField
                    v-for="inputObj in this.inputFieldObject"
                    :input-type="inputObj.type"
                    :input-title="inputObj.value"
                    :key="inputObj.value"
            />
            <CustomBtn>
                SIGN IN
            </CustomBtn>
        </form>
    </div>
</template>

<script>
    import InputField from "./InputField";
    import CustomBtn from "./CustomBtn";
    export default {
        name: "SignIn",
        components:{CustomBtn, InputField},
        data() {
            return {
                inputFieldObject:[
                    {
                        type:'email',
                        value:'email'
                    },
                    {
                        type: 'password',
                        value:'password'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        flex-basis: 100%;
        flex-direction: column;
        align-items: baseline;
        margin: 0 auto;
        .titles {
            display: flex;
            flex-direction: column;
            align-items: baseline;
        }

    }
    /*.el-container {*/
    /*    font-size: 2rem;*/
    /*    width: 30%;*/
    /*    margin-left: 20%;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    margin-top: 2rem;*/
    /*    form {*/
    /*        margin-top: 2rem;*/
    /*    }*/
    /*    .titles {*/
    /*        display: flex;*/
    /*        flex-direction: column;*/
    /*        .subTitle {*/
    /*            margin-top: 1.5rem;*/
    /*            font-size: 1.5rem;*/
    /*        }*/
    /*    }*/
    /*}*/
</style>