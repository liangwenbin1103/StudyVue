<template>
    <div class= "caidan">
        <swiper :options="swiperOption">
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
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            imgList: [
                {
                    id: '001',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    title: '景区门票'
                },
                {
                    id: '002',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    title: '深圳必游'
                },
                {
                    id: '003',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                    title: '暑期夜场'
                },
                {
                    id: '004',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                    title: '海洋馆'
                },
                {
                    id: '005',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    title: '一日游'
                },
                {
                    id: '006',
                    url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png',
                    title: '深圳动物园'
                },
                {
                    id: '007',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png',
                    title: '世界之窗'
                },
                {
                    id: '008',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                    title: '东部华侨城'
                },
                {
                    id: '009',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                    title: '玛雅水乐园'
                },
                {
                    id: '010',
                    url: 'https://imgs.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                    title: '玩转长隆'
                }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.imgList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
            }
    }
}
</script>

<style lang="stylus" scoped>
    .caidan >>> .swiper-container
        height: 0
        padding-bottom: 50%
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
