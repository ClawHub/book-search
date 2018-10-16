<template>
  <div>
    <p class="title">请选择数据源</p>
    <div v-if="books.length" class="website-wrapper">
      <div @click="chapterInfo(v)" v-for="(v, k) in books" :key="k" :class="'color-source-'+(k+1)">
        <span>
          {{v.webSite}}
        </span>
        <span>
          更新时间：{{v.updateTime}}
        </span>
      </div>
    </div>
    <p class='text-footer' v-if='!more'>
      没有更多数据
    </p>
  </div>
</template>

<script>
// import http from '@/api/http'
export default {
  data () {
    return {
      bookId: '',
      books: [],
      more: true,
      selfV: {
        'data': [{
          'bookId': '0',
          'catalogUrl': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
          'sourceId': '0',
          'updateTime': 0,
          'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
          'webSite': '百度阅读'
        }],
        'msg': {
          'msgCode': '1000',
          'msgText': '操作成功'
        },
        'status': true
      }
    }
  },
  methods: {
    chapterInfo (v) {
      wx.navigateTo({
        url: `/pages/chapter/main?sourceId=${v.sourceId}`
      })
    }
  },
  mounted () {
    this.bookId = this.$root.$mp.query.id
    setTimeout(() => {
      this.books = [{
        'bookId': '0',
        'catalogUrl': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'sourceId': '0',
        'updateTime': 0,
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'webSite': '百度阅读'
      }, {
        'bookId': '0',
        'catalogUrl': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'sourceId': '0',
        'updateTime': 0,
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'webSite': '百度阅读'
      }, {
        'bookId': '0',
        'catalogUrl': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'sourceId': '0',
        'updateTime': 0,
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'webSite': '百度阅读'
      }, {
        'bookId': '0',
        'catalogUrl': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'sourceId': '0',
        'updateTime': 0,
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'webSite': '百度阅读'
      }, {
        'bookId': '0',
        'catalogUrl': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'sourceId': '0',
        'updateTime': 0,
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'webSite': '百度阅读'
      }, {
        'bookId': '0',
        'catalogUrl': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'sourceId': '0',
        'updateTime': 0,
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'webSite': '百度阅读'
      }, {
        'bookId': '0',
        'catalogUrl': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'sourceId': '0',
        'updateTime': 0,
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?fr=aladdin&key=%E8%A5%BF%E6%B8%B8%E8%AE%B0',
        'webSite': '百度阅读'
      }]
    }, 20)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../base/stylus/variable';
@import '../../base/stylus/mixin';
  .title {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    color: color-background-d;
    font-family: '微软雅黑';
    font-size: $font-size-large;
  }
  .website-wrapper {
    display: flex;
    flex-wrap: wrap;
    div{
      width: 42%;
      margin-left: 5%;
      margin-top: 10px;
      border-radius: 10px;
      span {
        display: flex;
        flex-wrap: wrap;
        padding: 5px 10px;
        color: $color-background;
        font-size: $font-size-small;
        margin: 5px 10px;
        border-radius:12rpx;
        width: 100%;
      }
    }
    .color-source-1 {
      background: $color-source-1
    }
    .color-source-2 {
      background: $color-source-2
    }
    .color-source-3 {
      background: $color-source-3
    }
    .color-source-4 {
      background: $color-source-4
    }
    .color-source-5 {
      background: $color-source-5
    }
    .color-source-6 {
      background: $color-source-6
    }
    .color-source-7 {
      background: $color-source-7
    }
    .color-source-8 {
      background: $color-source-8
    }
    .color-source-9 {
      background: $color-source-9
    }
    .color-source-10 {
      background: $color-source-10
    }
  }


</style>

