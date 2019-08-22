<template>
    <transition :name="transition">
        <div v-show="visible" class="toast-message">{{message}}</div>
    </transition>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "../../../src/styles/mixins";
    @import "../../../src/styles/vars";

    .toast-message {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(0, 0, 0);
        opacity: 0.6;
        border-radius: 10px;
        color: #ffffff;
        font-size: 16px;
        padding: 10px 20px;
        transition: all 0.5s linear;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

<script type="text/babel">
    export default {
        props: {
            message: String,
            position: {
                type: String,
                default: 'middle'
            }
        },

        data() {
            return {
                visible: false,
                transition: 'fade'
            };
        },

        computed: {
        }
    };
</script>
