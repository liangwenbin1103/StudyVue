<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <router-link
            tag="li"
            class="item border-bottom"
            v-for="item of list"
            :key="item.id"
            :to="'/detail/' + item.id">
                <img class="img" :src="item.img" />
                <div class="item-info">
                    <p class="item-title" v-text="item.title"></p>
                    <p class="item-desc" v-text="item.desc"></p>
                    <p class="menpiao">
                        <span class="jiaqian" v-text="item.jiaqian"></span>
                        起
                        <span class="diqu" v-text="item.diqu"></span>
                    </p>
                </div>
            </router-link>
        </ul>
        <button class="gengduo">查看所有景点</button>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
        color:red
        font-size: .4rem
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            .item-title
                line-height: .54rem
                font-size: .32rem
            .item-desc
                line-height: .4rem
                font-size: .32rem
                color: #ff9300
            .menpiao
                line-height: .44rem
                margin-top: .16rem
                padding: 0.2rem
                border-radius: .06rem
                .jiaqian
                    font-size: .4rem
                    color: #ff9300
                .diqu
                    float: right
    .gengduo
        margin-top: .2rem
        line-height: .8rem
        text-indent: .2rem
        width: 100%
        color:#00bcd4
        background: #fff
        font-size: .3rem
        text-align: center
</style>
