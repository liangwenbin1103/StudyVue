<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img">
                    <img class="img" :src="item.img" />
                </div>
                <div class="item-info">
                    <p class="item-title" v-text="item.title"></p>
                    <p class="item-desc" v-text="item.desc"></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [
            {
                id: '001',
                img: 'https://imgs.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
                title: '深圳周边游',
                desc: '远离城市拥堵，去周边开启清新假期吧。'
            },
            {
                id: '002',
                img: 'https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
                title: '清远周边逛',
                desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
            },
            {
                id: '003',
                img: 'https://imgs.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                title: '浮在海上的绿洲',
                desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
            },
            {
                id: '004',
                img: 'https://imgs.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
                title: '深圳必打卡',
                desc: '来到深圳，你需要来这里签到'
            },
            {
                id: '005',
                img: 'https://imgs.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
                title: '欢乐长隆',
                desc: '世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验'
            }
        ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
        color:red
        font-size: .4rem
    .item-img
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .img
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #616161
            font-size: .30rem
            ellipsis()
</style>
