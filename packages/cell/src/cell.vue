<template>
    <div class="c-cell" @click="onClickHandler" :class="{showBorder: showBorder}">
        <div class="c-cell-left">
            <img class="c-cell-icon" v-if="icon" :src="icon">
            <slot name="left">
                <div class="left-text">
                    <span class="c-cell-text" v-text="title"></span>
                    <span v-if="label" class="c-cell-label" v-text="label"></span>
                </div>
            </slot>
        </div>
        <div class="c-cell-right">
            <slot name="right">
                <div class="c-cell-value">
                    <span v-text="value"></span>
                </div>
            </slot>
            <svg v-if="isLink"
                 class="c-link-icon"
                 t="1553658293429" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1539" width="48"
                 height="48">
                <path d="M340.688 830.24l11.312 11.328a16 16 0 0 0 22.624 0L685.76 530.448a16 16 0 0 0 0-22.64L374.624 196.688a16 16 0 0 0-22.624 0l-11.312 11.312a16 16 0 0 0 0 22.624l288.496 288.496-288.496 288.512a16 16 0 0 0 0 22.624z"
                      p-id="1540" fill="#515151"></path>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cCell',
        components: {},
        filters: {},
        data() {
            return {}
        },
        props: {
            icon: String,
            title: String,
            label: String,
            isLink: Boolean,
            value: {},
            showBorder: {
                type: Boolean,
                default: true
            }
        },
        computed: {},
        watch: {},
        methods: {
            onClickHandler(cell) {
                this.$emit('clickHandler', cell)
            }
        },
        created() {
        },
        mounted() {
        },
        beforeDestroy() {
        }
    };
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    @import "../../../src/styles/mixins";
    @import "../../../src/styles/vars";

    .c-cell {
        @include flex-x-middle();
        justify-content: space-between;
        height: 50px;
        background-color: #ffffff;
        padding: 0 15px;
        &.showBorder {
            @include border-1px();
            /*border-bottom: 1px solid $color-border;*/
        }
        .c-cell-left {
            @include flex-x-middle();
            .c-cell-icon {
                width: 20px;
                margin-right: 10px;
            }
            .left-text {
                @include flex-y();
                .c-cell-text {
                    color: #333333;
                    font-size: 15px;
                }
                .c-cell-label {
                    color: #cccccc;
                    font-size: 12px;
                }
            }
        }
        .c-cell-right {
            @include flex-x-middle();
            .c-cell-value {
                color: #333333;
                font-size: 15px;
            }
            .c-link-icon {
                width: 20px;
                height: auto;
                margin-left: 10px;
            }
        }
    }
</style>
