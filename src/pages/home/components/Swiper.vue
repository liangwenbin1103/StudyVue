<template>
<div class="wiper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.Url" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: true,
                speed: 3000
            },
            swiperList: [
                {
                    id: '01',
                    Url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/9e2844a063da32c591708053870e7eac.jpg_750x200_39fb08c6.jpg'
                },
                {
                    id: '02',
                    Url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/5cf51617d7efdc4f7537b2c3ac77b2c5.jpg_750x200_58db926b.jpg'
                },
                {
                    id: '03',
                    Url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/36358222d41ad18b66efe3dea09df24b.jpg_750x200_0005bed8.jpg'
                },
                {
                    id: '04',
                    Url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/af0433923612be13281fda633920232e.jpg_750x200_6eb5a9f0.jpg'
                },
                {
                    id: '05',
                    Url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/5e02c14d35097f40d656f455837b63eb.jpg_750x200_adebb937.jpg'
                }
            ]
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
