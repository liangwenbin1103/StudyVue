<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
            </li>
        </ul>
        <button class="gengduo">查看所有景点</button>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [
            {
                id: '001',
                img: 'https://imgs.qunarzz.com/sight/p0/1907/8d/8da769b8a045ec98a3.img.jpg_200x200_f74bf17b.jpg',
                title: '深圳欢乐谷',
                desc: '★★★★★   31572条评论',
                jiaqian: '￥69.9',
                diqu: '南山区'
            },
            {
                id: '002',
                img: 'https://imgs.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
                title: '深圳小梅沙海洋世界',
                desc: '★★★★★   9158条评论',
                jiaqian: '￥150',
                diqu: '小梅沙'
            },
            {
                id: '003',
                img: 'https://imgs.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_200x200_4769276c.jpg',
                title: '世界之窗',
                desc: '★★★★★   45285条评论',
                jiaqian: '￥85',
                diqu: '华侨城'
            },
            {
                id: '004',
                img: 'https://imgs.qunarzz.com/sight/p0/1907/7a/7a027c49bb8f730aa3.water.jpg_200x200_0051bdbf.jpg',
                title: '东部华侨城大峡谷',
                desc: '★★★★★   8619条评论',
                jiaqian: '￥180',
                diqu: '东部华侨城'
            },
            {
                id: '005',
                img: 'https://imgs.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
                title: '深圳野生动物园',
                desc: '★★★★★   20110条评论',
                jiaqian: '￥57.3',
                diqu: '南山区'
            },
            {
                id: '006',
                img: 'https://imgs.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
                title: '海洋奇梦馆',
                desc: '★★★★★   4110条评论',
                jiaqian: '￥60',
                diqu: '欢乐海岸'
            }
        ]
        }
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
