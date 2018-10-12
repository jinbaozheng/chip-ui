<template>
    <div>
        <c-header></c-header>
    </div>
</template>
<style>
</style>
<script>
    import { Header } from '../src/index'
    export default {
        mounted() {
            this.$chips();
            this.$toast({message: '测试'})
        },
        components: {
            cHeader: Header
        }
    }
</script>
