<template>
    <div>
        <c-header title="测试标题" :showBack="true"></c-header>
        <c-button size="L" plain @click="actionClickButton('toast')">toast</c-button>
        <c-button size="L" plain @click="actionClickButton('indicator')">indicator</c-button>
        <c-button size="L" plain @click="actionClickButton('messageBox')">messageBox</c-button>
        <c-cell title="题目" value="哈哈" label="嘻嘻" isLink showBorder></c-cell>
        <c-photo-skeleton v-for="i in 2" :key="i" :conntent-line="2" hidden-title class="photo-skeleton">
        </c-photo-skeleton>
        <c-skeleton v-for="i in 2" :key="i" :conntent-line="2" hidden-title class="skeleton">
        </c-skeleton>
    </div>
</template>
<style scoped>
    .photo-skeleton{
        margin-top: 10px;
        width: 35%;
        height: 120px;
    }
    .skeleton{
        margin-top: 10px;
        width: 100%;
        height: 80px;
    }
</style>
<script>
    import { Header } from '../src/index'
    export default {
        data() {
            return {
                dataList: []
            }
        },
        mounted() {
            this.$chips();
            setTimeout(_ => {
                this.dataList = (new Array(20)).fill(0).map((_, __) => __);
            }, 1000)
        },
        components: {
            cHeader: Header
        },
        methods: {
            actionClickButton(name){
                if (name === 'toast'){
                    this.$toast({message: '测试'});
                }
                if (name === 'indicator'){
                    this.$indicator.open();
                    setTimeout(_ => (this.$indicator.close()), 1<<11);
                }
                if (name === 'messageBox'){
                    this.$messageBox.open({type: 'confirm', message: '哈哈'})
                }
            }
        }
    }
</script>
