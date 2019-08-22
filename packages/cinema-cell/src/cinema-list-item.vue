<template>
    <div class="cinema-list-item">

    </div>
</template>

<script>
    export default {
        name: 'cinema-list-item',
        components: {},
        filters: {},
        data() {
            return {}
        },
        props: {
            name: String,
            address: String,
            compareNames: Array,
            price: Number,
            distance: Number
        },
        computed: {},
        watch: {},
        methods: {},
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
    .cinema-list-item {

    }
</style>
