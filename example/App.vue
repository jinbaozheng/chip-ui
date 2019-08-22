<template>
    <div>
        <c-header title="测试标题" :showBack="true"></c-header>
        <c-button size="L" plain @click="actionClickButton('toast')">toast</c-button>
        <c-button size="L" plain @click="actionClickButton('indicator')">indicator</c-button>
        <c-button size="L" plain @click="actionClickButton('messageBox')">messageBox</c-button>
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
        },
        components: {
            cHeader: Header
        },
        methods: {
            actionClickButton(name){
                if (name === 'toast'){
                    console.log('aaa')
                    this.$toast({message: '测试'});
                }
                if (name === 'indicator'){
                    this.$indicator.open();
                }
                if (name === 'messageBox'){
                    this.$messageBox.open({type: 'confirm', message: '哈哈'})
                }
            }
        }
    }
</script>
