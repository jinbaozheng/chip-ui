<template>
    <div>
        <c-header title="测试标题" :showBack="true"></c-header>
        <c-button size="L" disabled plain>确定</c-button>
        <c-cell title="题目" value="哈哈" label="嘻嘻" isLink showBorder></c-cell>
    </div>
</template>
<style>
</style>
<script>
    import { Header } from '../src/index'
    export default {
        mounted() {
            this.$chips();
            // this.$toast({message: '测试'});
            // this.$indicator.open();
            this.$messageBox.open({type: 'confirm', message: '哈哈'})
        },
        components: {
            cHeader: Header
        }
    }
</script>
