<template>
<div class="wiper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.Url" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: true,
                // 用户操作swiper之后，是否禁止autoplay
                autoplayDisableOnInteraction: false,
                speed: 3000
            }
        }
    },
    computed: {
        showSwiper () {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wiper >>> .swiper-pagination-bullet-active
        background : #fff
    .wiper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.6%
        background : #eee
        .swiper-img
            width: 100%
 </style>
