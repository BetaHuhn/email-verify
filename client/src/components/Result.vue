<template>
    <div id="result">
        <Envelope :status="validString" />
        <div>
            <div id="code">
                <h1 class="big">{{email}} is <span v-if="valid" style="color: var(--green)">valid</span><span v-else style="color: var(--red)">not valid</span></h1>
            </div>
            <p v-if="!showM" @click="showMessage" class="more">Show more info</p>
            <div v-if="showM" class="more-content">
                <div class="info">
                    <p v-if="mx"><font-awesome-icon icon="server" size="lg" /> {{mx}}</p>
                    <p v-if="code"><font-awesome-icon icon="reply" size="lg" /> {{code}}</p>
                    <p v-if="time"><font-awesome-icon icon="stopwatch" size="lg" /> {{time}} ms</p>
                </div>
                <p v-if="message" class="response">Response: {{message}}</p>
            </div>
            <Button v-on:click.native="reset">Check again</Button>
        </div>
    </div>
</template>

<script>
    import Envelope from './Envelope'
    import Button from './Button'

    export default {
        name: 'Result',
        components: {
            Envelope,
            Button
        },
        data(){
            return{
                showM: false
            }
        },
        methods: {
            reset: function () {
                this.$store.dispatch("resetState")
            },
            showMessage: function(){
                this.showM = true;
            }
        },
        computed: {
            email: function () {
                return this.$store.state.email;
            },
            valid: function () {
                return this.$store.state.valid;
            },
            validString: function(){
                if(this.valid){
                    return 'valid'
                }else{
                    return 'invalid'
                }
            },
            code: function () {
                return this.$store.state.code;
            },
            mx: function () {
                return this.$store.state.mx;
            },
            time: function () {
                return this.$store.state.time;
            },
            message: function () {
                return this.$store.state.message;
            }
        }
    }
</script>

<style scoped>
    #result {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row-reverse;
    }

    .info{
        display: flex;
        justify-content: center;
    }

    .info svg{
        margin-right: 5px; 
    }

    .info p{
        margin: 5px;
    }

    .big{
        margin-bottom: 0.7rem;
    }

    .more{
        cursor: pointer;
    }

    .more-content{
        margin-bottom: 2rem;
    }

    .response{
        max-width: 400px;
        margin: auto;
    }

    @media screen and (max-width: 1200px) { 
        .big {
            font-size: 20px; 
        }

         #result {
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