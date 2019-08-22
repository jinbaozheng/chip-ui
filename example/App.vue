<template>
    <div>
        <c-header title="测试标题" :showBack="true"></c-header>
        <c-button size="L" disabled plain>确定</c-button>
        <c-cell title="题目" value="哈哈" label="嘻嘻" isLink showBorder></c-cell>
        <c-date-picker :date-list="dateList"></c-date-picker>
    </div>
</template>
<style>
    @import "../node_modules/swiper/dist/css/swiper.min.css";
</style>
<script>
    import { Header } from '../src/index'
    export default {
        mounted() {
            this.$chips();
            this.dateList = ["2019-07-17", "2019-07-18", "2019-07-19", "2019-07-19", "2019-07-19", "2019-07-19"]
            // this.$toast({message: '测试'});
            // this.$indicator.open();
            // this.$messageBox.open({type: 'confirm', message: '哈哈'})
        },
        components: {
            cHeader: Header
        },
        data() {
            return {
                dateList: []
            }
        }
    }
</script>
