<template>
    <div id="form">
        <Envelope :status="'neutral'" />
        <div>
            <div class="description noselect">
                <h1><a class="link bold" style="color: #fff" href="/">Verify Email Address</a></h1>
            </div>
            <div id="input-container" class="input-container noselect" >
                <div class="center" data-children-count="1">
                    <input id="url" class="url-input" v-model="email" autocomplete="off" placeholder="richard@piedpiper.com">
                </div>
            </div>
            <Button v-on:click.native="render">Verify</Button>
            <p v-if="error" class="error">{{errorMsg}}</p>
        </div>
    </div>
</template>

<script>
    import Envelope from './Envelope'
    import Button from './Button'

    export default {
        name: 'Form',
        components: {
            Envelope,
            Button
        },
        methods: {
            render: function () {
                if (this.validEmail(this.email)) {
                    this.$store.dispatch("retrieveAPIData", this.email);
                } else {
                    this.$store.commit("setResponse", {
                        valid: false,
                        message: "Not a valid format"
                    })
                }
            },
            validEmail: function (value) {
                const expression = /\S+@\S+\.\S+/
                const regexp = new RegExp(expression);
                return regexp.test(value);
            }
        },
        computed: {
            email: {
                get: function () {
                    return this.$store.state.email;
                },
                set: function (newEmail) {
                    this.$store.dispatch('changeEmail', newEmail);
                }
            },
            valid: function () {
                return this.$store.state.valid;
            },
            error: function () {
                return this.$store.state.error;
            },
            errorMsg: function () {
                return this.$store.state.errorMsg;
            }
        }

    }
</script>

<style scoped>
    #form {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row-reverse;
    }

    .description {
        margin: auto;
    }

    .description h1 {
        margin-bottom: 5px;
    }

    .description a {
        margin-bottom: 5px;
        text-decoration: none;
        color: var(--primary);
        font-weight: 700;
    }

    .description p {
        margin-top: 5px;
        margin-bottom: 2.5rem;
    }

    .error {
        color: var(--red);
        font-weight: 600;
        margin: 0;
        position: absolute;
        left: 0;
        right: 0;
    }

    .form {
        margin: 1rem;
    }

    .url-input {
        height: 45px;
        font-size: 15px;
        padding: 2px 20px;
        outline: 0;
        font: #000;
        background: var(--font);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        border-radius: 30px;
        width: 300px;
        transition: width 0.25s, border 0.25s;
        margin-bottom: 2rem;
        margin-top: 2rem;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    }

    .input-container {
        position: relative;
    }

    .center {
        text-align: center;
    }

    @media screen and (max-width: 1200px) { 
        .description h1 {
            font-size: 20px; 
        }

         #form {
            flex-direction: column;
        }
        
    }

    @media screen and (max-width: 400px) { 
        .url-input {
            width: 85%;
        }

        .clean{
            width: 80%;
        }
        
    }
</style>