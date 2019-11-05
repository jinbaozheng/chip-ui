<template>
    <div class="photo-skeleton flex-y">
        <div class="photo item">
        </div>
        <ul v-show="!hiddenTitle" class="title flex-center-y">
            <li class="item title-item">
            </li>
        </ul>
        <ul class="content flex-y">
            <li v-for="i in conntentLine" :key="i" class="item">
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "c-photo-skeleton",
        mounted() {
            console.log('aaa')
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes chips-skeleton-loading {
        0% {
            background-position:100% 50%;
        }
        100% {
            background-position:0 50%;
        }
    }
    .photo-skeleton{
        background: white;
        padding: 0 15px;
        justify-content: space-around;
        .item{
            width: 100%;
            height: 20px;
            background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
            background-size: 400% 100%;
            background-position:100% 50%;
            animation: chips-skeleton-loading 1.4s ease infinite;
            &:last-child{
                width: 50%;
            }
        }
        .title{
            width: 100%;
            height: 50px;
            .title-item{
                width: 100%;
            }
        }
        .content{
            flex: 1;
            justify-content: space-around;
        }
        .photo{
            width: 100%;
            height: 100%;
            margin-top: 10px;
        }
    }
</style>