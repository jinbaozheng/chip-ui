<style scoped rel="stylesheet/scss" lang="scss">
    @import "../../src/styles/index";

    .chips-header {
        width: 100%;
        z-index: 500;
        height: 44px;
        font-size: 14px;
        background-color: #ffffff;
        box-shadow: 0 2px 5px $seg-line-color;
        @include flex-x-middle();
        .chips-header-side {
            min-width: 44px;
            height: 44px;
            @include flex-center();
        }
        .chips-header-title {
            @include flex(1);
            @include ellipsis();
            text-align: center;
            height: 44px;
            line-height: 44px;
            font-size: 16px;
        }
    }
</style>
<template>
    <header class="chips-header"
            :class="{ 'is-fixed': fixed }">
        <div class="chips-header-side">
            <svg v-show="showLeft"
                 t="1537871520939"
                 class="icon"
                 style=""
                 viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="1328"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 width="20"
                 height="20">
                <path d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"
                      p-id="1329"></path>
            </svg>
            <slot name="left"></slot>
        </div>
        <h1 class="chips-header-title" :style="{'color': titleColor}">{{title}}</h1>
        <div class="chips-header-side">
            <slot name="right"></slot>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'cHead',
        data() {
            return {}
        },
        props: {
            title: {
                type: String,
                default: '标题'
            },
            barStyle: {
                type: String,
                default: 'black'
            },
            backStyle: {
                type: String,
                default: '#fff'
            },
            titleColor: {
                type: String,
                default: '#222'
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        components: {},
        computed: {
            showLeft() {
                return !(this.$slots.left && this.$slots.left.length > 0)
            }
        },
        watch: {},
        filters: {},
        methods: {},
        created() {
        },
        mounted() {
        },
        beforeDestroy() {
        }
    };
</script>
