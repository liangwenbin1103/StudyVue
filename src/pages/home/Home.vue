<template>
<div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="imgList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    <home-dibu></home-dibu>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeDibu from './components/Dibu'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
        HomeDibu
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.swiperList = data.swiperList
                this.imgList = data.imgList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    },
    data () {
        return {
            lastCity: '',
            swiperList: [],
            imgList: [],
            recommendList: [],
            weekendList: []
        }
    }
}
</script>

<style scoped>
</style>
