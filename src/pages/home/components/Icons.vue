<template>
    <div class= "caidan">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class= "img" v-for="item of page" :key="item.id">
                    <div class= "tubiao">
                        <img class="jingdian" :src= "item.url" />
                    </div>
                    <p class="text" v-text="item.title"></p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed: {
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
            },
        showSwiper () {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    .caidan >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .caidan
        margin-top: .1rem
        .img
            overflow: hidden
            width: 25%
            height: 0
            padding-bottom: 25%
            float: left
            position: relative
            .tubiao
                position: absolute
                top: 0rem
                right: 0rem
                left: 0rem
                bottom: .44rem
                .jingdian
                    height: 100%
                    margin: 0 auto
                    display: block
            .text
                position: absolute
                right: 0rem
                left: 0rem
                bottom: 0rem
                height: .44rem
                line-height: .44rem
                text-align: center
</style>
