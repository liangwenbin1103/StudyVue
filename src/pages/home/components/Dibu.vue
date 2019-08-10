<template>
    <div class="tail">
        <div class="zhushi">
            <span class="iconfont">&#xe724;</span>
            <span class="dz">票面价</span>
            是指通过景区指定窗口售卖的纸质门票上标注的价格
        </div>
        <div class="gongju">
            <ul class="xz">
                <li class="xx">
                    <span class="iconfont">&#xe613;</span>
                    机票
                </li>
                <li class="xx">
                    <span class="iconfont">&#xe62c;</span>
                    酒店
                </li>
                <li class="xx">
                    <span class="iconfont">&#xe61e;</span>
                    公寓
                </li>
                <li class="xx">
                    <span class="iconfont">&#xe630;</span>
                    更多
                </li>
            </ul>
        </div>
         <div class="kf">
            <span class="dl">登录</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="dl">我的订单</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="dl">最近浏览</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="dl">关于我们</span>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
export default {
    name: 'HomeDibu',
    data () {
        return {
        }
    }
}
</script>

<style lang="stylus" scoped>
    .tail
        margin-top: .4rem
        display: block
        .zhushi
            font-size: .24rem
            margin-top: .2rem
            line-height: .32rem
            color: #616161
            .dz
                font-weight: bold
        .gongju
            margin-top: .1rem
            display: block
            .xz
                position: relative
                width: 6rem
                height: .5rem
                margin: 0 auto
                padding: 10px 10px 0 10px
                overflow: hidden
                .xx
                    margin: 0px
                    padding-left: 10px
                    height: 31px
                    width: 65px
                    float: left
                    position: relative
                    background: none
                    color: gray
        .kf
            width: 100%
            height: 39px
            border-bottom: 1px solid #cacaca
            .dl
                position: relative
                color: #25a4bb
                font-size: 14px
                line-height: 39px
</style>
