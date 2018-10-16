<template>
  <div class="chapter-wrapper">
    <div>
      <div @click="read(v)" v-for="(v, k) in result" :key="k">{{v.name}}</div>
    </div>
    <!-- <div class="chapter-read">
      <web-view :src="chapterUrl"></web-view>
    </div> -->
    <!-- <div class="chapter-opreators">
      <div class="chapter-turning">
        <span>上一章</span>
        <span>下一章</span>
      </div>
      <div class="chapter-contents">
        <span>分享小说</span>
        <span>目录</span>
      </div>
    </div> -->
  </div>
</template>

<script>
// import http from '@/api/http'
export default {
  data () {
    return {
      result: [],
      chapterUrl: ''
    }
  },
  methods: {
    read (v) {
      wx.navigateTo({
        url: `/pages/chapterDetail/main?url=${v.url}`
      })
    },
    chapterInfo (sourceId) {
      // http('/book/search', {sourceId: sourceId}).then((res) => {
      this.result = [{
        'dateTime': 0,
        'id': '0',
        'name': '前言',
        'number': 0,
        'sort': 0,
        'sourceId': '0',
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?pn=1&pa=1'
      }, {
        'dateTime': 0,
        'id': '1',
        'name': '推荐序',
        'number': 0,
        'sort': 1,
        'sourceId': '0',
        'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?pn=2&pa=1'
      }, {
        'dateTime': 0,
        'id': '2',
        'name': '仙猴出世',
        'number': 0,
        'sort': 2,
        'sourceId': '0',
        // 'url': 'https://yuedu.baidu.com/ebook/e8d823a7ab00b52acfc789eb172ded630b1c9829?pn=3&pa=1'
        'url': 'https://read.qidian.com/chapter/hloRuYOgNj1Qv4sKnwMhGg2/6hiqQQzDoUPgn4SMoDUcDQ2'
      }]
      // this.chapterUrl = this.result[2].url
      // console.log(this.chapterUrl, 'this.chapterUrl')
      // })
    }
  },
  mounted () {
    let sourceId = this.$root.$mp.query.sourceId
    this.chapterInfo(sourceId)
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../base/stylus/variable';
@import '../../base/stylus/mixin';

.chapter-wrapper 
  background: $color-source-tea-d
  div 
    height:50px
  .web
    margin-top: 50px;
</style>

