<template>
    <transition :name="transition">
        <div class="chips-toast"
             :style="customStyle" v-show="visible">
            <!--<i class="chips-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>-->
            <span class="chips-toast-text"
                  :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
        </div>
    </transition>
</template>

<style rel="stylesheet/scss" lang="scss">
    .chips-toast {
        position: fixed;
        z-index: 1000;
        left: 50%;
        transform: translate(-50%, 0);
        max-width: 80%;
        background-color: rgba(0, 0, 0, .6);
        text-align: center;
        border-radius: 4px;
        padding: 10px;
        &.is-placemiddle {
            top: 50%;
        }
        &.is-placetop {
            top: 20%;
        }
        &.is-placebottom {
            top: 85%;
        }
        .chips-toast-text {
            color: #ffffff;
            font-size: 14px;
        }
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
            className: {
                type: String,
                default: ''
            },
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
            customStyle() {
                var style = {};
                if (typeof this.position === 'number') {
                    style.top = this.position + 'px';
                } else {
                    switch (this.position) {
                        case 'top':
                            style.top = '20%';
                            style.transform = 'translate(-50%, -50%)';
                            break;
                        case 'bottom':
                            style.top = '85%';
                            style.transform = 'translate(-50%, -50%)';
                            break;
                        default:
                            style.top = '50%';
                            style.transform = 'translate(-50%, -50%)';
                    }
                }
                return style;
            }
        }
    };
</script>
