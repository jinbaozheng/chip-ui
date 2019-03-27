<template>
    <button class="c-button" :class="classList" @click="onClickBtn">
        <slot>
            <img v-if="icon" :src="icon" alt="">
            <span>{{text}}</span>
        </slot>
    </button>
</template>

<script>
    export default {
        name: 'cButton',
        components: {},
        filters: {},
        data() {
            return {}
        },
        props: {
            text: String,
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'S',
                validator(value) {
                    return [
                        'S',
                        'M',
                        'L'
                    ].indexOf(value) > -1;
                }
            },
            plain: {
                type: Boolean,
                default: false
            },
            icon: String
        },
        computed: {
            classList() {
                let classList = [];
                classList.push(this.size + '-size');
                if (this.disabled) {
                    classList.push('disabled')
                }
                if (this.plain) {
                    classList.push('plain')
                }
                return classList;
            }
        },
        methods: {
            onClickBtn(e) {
                if (this.disabled) {
                    return
                }
                this.$emit('clickHandler', e)
            }
        }
    };
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    @import "../../src/styles/index";
    .c-button {
        border-radius: 5px;
        background-color: $color-main;
        color: #ffffff;
        @include ellipsis();
        &.disabled {
            background-color: #bbbbbb;
            color: #666666;
        }
        &.plain {
            color: $color-main;
            border: 1px solid $color-main;
            background-color: transparent;
        }
        &.S-size {
            font-size: 12px;
            min-width: 70px;
            height: 30px;
            line-height: 30px;
        }
        &.M-size {
            font-size: 14px;
            width: 105px;
            height: 45px;
            line-height: 45px;
        }
        &.L-size {
            font-size: 16px;
            width: 100%;
            height: 45px;
            line-height: 45px;
        }
    }
</style>
