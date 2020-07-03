<template>
        <div id="home">
            <main>
                <div class="content">
                    <transition name="fade" mode="out-in">
                        <Result v-if="show == 'result'" />
                        <Form v-else-if="show == 'normal'" />
                        <div v-else-if="show == 'loading'">
                            <div class="circles-to-rhombuses-spinner">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                        <div v-else class="error">
                            <Envelope :status="'error'" />
                            <div>
                                <h1>{{errorMsg}}</h1>
                                <Button v-on:click.native="reset">Check again</Button>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="wave-container">
                    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--bg-dark)" fill-opacity="1" d="M0,96L48,133.3C96,171,192,245,288,282.7C384,320,480,320,576,272C672,224,768,128,864,90.7C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <By />
            </main>
            <Footer />
        </div>
</template>

<script>
    import Result from '@/components/Result'
    import Form from '@/components/Form'
    import Footer from '@/components/Footer'
    import By from '@/components/By'
    import Envelope from '@/components/Envelope'
    import Button from '@/components/Button'

    export default {
        name: 'App',
        computed: {
            show: function () {
                return this.$store.state.show
            },
            error: function () {
                return this.$store.state.error;
            },
            errorMsg: function () {
                return this.$store.state.errorMsg;
            }
        },
        methods: {
            reset: function () {
                this.$store.dispatch("resetState")
            },
        },
        components: {
            Result,
            Form,
            Footer,
            By,
            Envelope,
            Button
        }
    }
</script>

<style scoped>
    #home {
        height: 100%;
    }

    #home .content {
        width: 85%;
        margin: auto;
        text-align: center;
        position: absolute;
        top: 42%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-animation: fadein 1s;
        -moz-animation: fadein 1s;
        -ms-animation: fadein 1s;
        -o-animation: fadein 1s;
        animation: fadein 1s;
    }

    @media screen and (max-width: 1200px) { 
         h1 {
            font-size: 20px; 
        }
    }

    .error{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 1200px) { 
        .error h1 {
            font-size: 20px; 
        }

        .error {
            flex-direction: column;
        }
        
    }

    .wave-container{
        display: grid;
        width: 100%;
        height: 100%
    }

    .wave{
        align-self: end;
    }

    .fade-enter-active {
        transition: opacity 0.2s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-leave-active {
        transition: opacity 0.1s;
    }

    .circles-to-rhombuses-spinner, .circles-to-rhombuses-spinner * {
      box-sizing: border-box;
    }

    .circles-to-rhombuses-spinner {
      height: 15px;
      width: calc( (15px + 15px * 1.125) * 3);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

    .circles-to-rhombuses-spinner .circle {
      height: 15px;
      width: 15px;
      margin-left: calc(15px * 1.125);
      transform: rotate(45deg);
      border-radius: 10%;
      border: 3px solid var(--primary);
      overflow: hidden;
      background: transparent;
      animation: circles-to-rhombuses-animation 1200ms linear infinite;
    }

    .circles-to-rhombuses-spinner .circle:nth-child(1) {
      animation-delay: calc(150ms * 1);
      margin-left: 0
    }

    .circles-to-rhombuses-spinner .circle:nth-child(2) {
      animation-delay: calc(150ms * 2);
    }

    .circles-to-rhombuses-spinner .circle:nth-child(3) {
      animation-delay: calc(150ms * 3);
    }

    @keyframes circles-to-rhombuses-animation {
      0% {
        border-radius: 10%;
      }

      17.5% {
        border-radius: 10%;
      }

      50% {
        border-radius: 100%;
      }


      93.5% {
        border-radius: 10%;
      }

      100% {
        border-radius: 10%;
      }
    }

    @keyframes circles-to-rhombuses-background-animation {
      50% {
        opacity: 0.4;
      }
    }
    
</style>