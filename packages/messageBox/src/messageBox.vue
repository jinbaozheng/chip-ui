<template>
    <div class="v-msgbox-wrapper" v-show="visible">
        <div class="v-msgbox">
            <svg @click="onClickClose" t="1553668140989" class="close-icon" style="" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1539" xmlns:xlink="http://www.w3.org/1999/xlink" width="48"
                 height="48">
                <path d="M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z"
                      p-id="1540"></path>
            </svg>
            <div class="v-msgbox-header">
                <slot name="header">
                    <div class="v-msgbox-title">{{ title }}</div>
                </slot>
            </div>
            <div class="v-msgbox-content">
                <slot name="content">
                    <div class="v-msgbox-message" v-html="message"></div>
                </slot>
            </div>
            <div class="v-msgbox-btns" :class="{'single': !showCancelButton}">
                <slot name="btns">
                    <c-button v-if="showCancelButton" size="M" @clickHandler="onClickCancel" plain>{{cancelButtonText}}
                    </c-button>
                    <c-button :size="showCancelButton ? 'M' : 'L'" :disabled="disabled" @clickHandler="onClickConfirm">
                        {{confirmButtonText}}
                    </c-button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VMessageBox',
        data() {
            return {
                visible: false
            }
        },
        props: {
            title: {
                type: String,
                default: '提示'
            },
            message: String,
            type: {
                type: String,
                default: 'alert'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            confirmHandle: {
                type: Function,
                default: () => {
                    console.log('confirm')
                }
            },
            cancelHandle: {
                type: Function,
                default: () => {
                    console.log('cancel')
                }
            },
            cancelButtonText: {
                type: String,
                default: '取消'
            },
            confirmButtonText: {
                type: String,
                default: '确认'
            },
            closeHandle: {
                type: Function,
                default: () => {
                    console.log('close');
                }
            }
        },
        computed: {
            showCancelButton() {
                return this.type === 'confirm'
            }
        },
        watch: {},
        methods: {
            onClickCancel() {
                this.visible = false;
                this.cancelHandle();
            },
            onClickConfirm() {
                this.visible = false;
                this.confirmHandle();
            },
            onClickClose() {
                this.visible = false;
                this.closeHandle();
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

    .v-msgbox-wrapper {
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        @include isFixed(top, 0, 10);
        .v-msgbox {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #ffffff;
            width: 300px;
            border-radius: 5px;
            padding: 25px 0;
            .close-icon {
                position: absolute;
                right: 10px;
                top: 10px;
                width: 30px;
                height: 30px;
            }
            .v-msgbox-header {
                text-align: center;
                .state-icon {
                    width: 40px;
                }
                .v-msgbox-title {
                    font-size: 18px;
                    font-weight: 500;
                    color: #333333;
                }
            }
            .v-msgbox-content {
                padding: 15px 0;
                text-align: center;
                font-size: 16px;
                color: #666666;
                .v-msgbox-message {
                    padding: 10px 15px;
                }
            }
            .v-msgbox-btns {
                @include flex-x-middle();
                justify-content: space-between;
                font-size: 17px;
                padding: 0 15px;
            }
        }
    }
</style>
