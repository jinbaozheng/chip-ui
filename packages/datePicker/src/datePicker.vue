<template>
    <div ref="container" class="date-swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(date, index) in dateList" :class="{'selected-slide': selectedIndex === index}">
                <span class="date-slide">{{date}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        name: 'cDatePicker',
        components: {},
        data() {
            return {
                swiperInstance: null,
                selectedIndex: 0
            }
        },
        props: {
            dateList: {
                type: Array,
                default() {
                    return []
                }
            },
            swiperOption: {
                type: Object,
                default() {
                    let vm = this;
                    return {
                        slidesPerView: 'auto',
                        freeMode: true,
                        slideToClickedSlide: true,
                        on: {
                            tap: function(ev) {
                                vm.selectedIndex = this.clickedIndex;
                                vm.$emit('clickHandler', vm.selectedIndex);
                            }
                        }
                    }
                }
            },
            initialIndex: {
                type: Number,
                default: 4
            }
        },
        watch: {},
        mounted() {
            this.selectedIndex = this.initialIndex;
            this.swiperInstance = new Swiper(this.$refs.container, this.swiperOption);
        },
        updated: function () {
            if (this.swiperInstance) {
                this.$nextTick(() => {
                    this.swiperInstance.update();
                    this.swiperInstance.slideTo(this.selectedIndex);
                })
            }
        },
        beforeDestroy() {
            if (this.swiperInstance) {
                this.swiperInstance.destroy();
                delete this.swiperInstance
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../../src/styles/mixins";
    @import "../../../src/styles/vars";

    .date-swiper-container {
        background: #fff;
        .swiper-slide {
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            &.selected-slide {
                position: relative;
                color: red;
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100px;
                    height: 2px;
                    background-color: red;
                }
            }
        }
    }
</style>
