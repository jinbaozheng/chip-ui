<template>
    <transition>
        <div class="v-indicator" v-show="visible">
            <div class="v-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
                <div class="v-indicator-spinner">
                    <div class="circle"></div>
                </div>
                <span class="v-indicator-text" v-show="text">{{ text }}</span>
            </div>
            <div class="v-indicator-mask" @touchmove.stop.prevent></div>
        </div>
    </transition>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "../../../src/styles/mixins";
    @import "../../../src/styles/vars";

    .v-indicator {
        transition: opacity .2s linear;
        .v-indicator-wrapper {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
            border-radius: 5px;
            color: white;
            box-sizing: border-box;
            text-align: center;
            /*background-color: rgba(0, 0, 0, 0.3);*/
        }
        .v-indicator-text {
            display: block;
            color: #fff;
            text-align: center;
            margin-top: 10px;
            font-size: 16px;
        }
        .v-indicator-spinner {
            text-align: center;
            .circle {
                width: 50px;
                height: 50px;
                border: 4px solid $color-main;
                border-radius: 30px;
                border-top-color: transparent;
                animation: loadingMove 0.6s linear infinite;
            }
            @keyframes loadingMove {
                from {
                    transform: rotate(0);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        }

        .v-indicator-mask {
            position: fixed;
            left: 0;
            top: 0;
            opacity: 0;
            background: transparent;
        }
    }

    .mint-indicator-enter,
    .mint-indicator-leave-active {
        opacity: 0;
    }
</style>

<script type="text/babel">
    export default {
        data() {
            return {
                visible: false
            };
        },
        components: {},
        computed: {},
        props: {
            text: String,
            size: Number,
            spinnerType: {
                type: String,
                default: 'snake'
            }
        }
    };
</script>
