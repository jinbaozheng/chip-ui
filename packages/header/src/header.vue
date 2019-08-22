<template>
    <header class="c-header flex-middle-x"
            :class="{ 'is-fixed': fixed, 'show-border': showBorder }">
        <div class="c-header-button flex-middle-x is-left">
            <slot name="left">
                <svg v-show="showBack"
                     @click="$router.go(-1)"
                     t="1553658308327" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     p-id="1718" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48">
                    <path d="M685.76 830.24l-11.312 11.328a16 16 0 0 1-22.64 0L340.688 530.448a16 16 0 0 1 0-22.64l311.12-311.12a16 16 0 0 1 22.64 0l11.312 11.312a16 16 0 0 1 0 22.624L397.248 519.12 685.76 807.632a16 16 0 0 1 0 22.624z"
                          p-id="1719"></path>
                </svg>
            </slot>
        </div>
        <div class="c-header-title" v-text="title"></div>
        <div class="c-header-button flex-middle-x is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'cHeader',
        props: {
            fixed: {
                type: Boolean,
                default: false
            },
            title: String,
            showBorder: {
                type: Boolean,
                default: false
            },
            showBack: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    @import "../../../src/styles/index";
    .c-header {
        background-color: #ffffff;
        color: #333333;
        font-size: 15px;
        width: 100%;
        height: 50px;
        padding: 0 15px;
        position: relative;
        white-space: nowrap;
        text-align: center;
        &.show-border {
            box-shadow: 0 2px 5px $seg-line-color;
        }
        &.is-fixed {
            @include isFixed();
        }
        .c-header-button {
            flex: .5;
            &.is-right {
                text-align: right;
            }
            &.is-left {
                text-align: left;
            }
            img {
                height: 18px;
            }
            svg {
                width: 30px;
                height: 30px;
            }
        }
        .c-header-title {
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1;
        }
    }
</style>
