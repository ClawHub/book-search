<template>
  <div class="chapter-wrapper">
    <div class="charpter-title">{{title}}</div>
    <text class="charpter-word">{{word}}</text>
    <div class="charpter-operators">
      <div class="charpter-turn">
        <span class="charpter-left">上一章</span>
        <span class="charpter-right">下一章</span>
      </div>
      <div class="charpter-other">
        <span class="charpter-left">分享一下</span>
        <span @click="goContent" class="charpter-right">目录</span>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/api/http'
import { showSuccess } from '@/utils'
export default {
  data () {
    return {
      word: '',
      title: '',
      catalogUrl: '',
      sourceId: '',
      webSite: ''
    }
  },
  methods: {
    read (data) {
      http('/book/readChapter', data).then((res) => {
        if (!res.data) {
          showSuccess('暂无数据', 'none')
          setTimeout(() => {
            wx.navigateBack(1)
          }, 1000)
          return
        }
        this.word = res.data
      })
    },
    goContent () {
      wx.navigateTo({
        url: `/pages/chapter/main?webSite=${this.webSite}&sourceId=${this.sourceId}&catalogUrl=${this.catalogUrl}`
      })
    }
  },
  onShow () {
    this.title = this.$root.$mp.query.title
    this.catalogUrl = this.$root.$mp.query.catalogUrl
    this.sourceId = this.$root.$mp.query.sourceId
    this.webSite = this.$root.$mp.query.webSite
    this.read(this.$root.$mp.query)
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../base/stylus/variable';
  .chapter-wrapper
    padding: 0 20px 20px 20px;
    color: $color-text-l;
    font-size: $font-size-medium-x;
    .charpter-title
      height 40px
      line-height 40px
      font-size $font-size-large
      color $color-background
      text-align center
    .charpter-word 
     line-height 25px
    .charpter-operators
      margin-top 20px
      margin-bottom: 10px
      height: 60px
      div 
        width: 100%
        height 30px
        line-height 30px
        position relative
        span
          position absolute
          width 45%
          heigh 50%
          text-align center
          line-heigh 100%
          &.charpter-left
            left 0
          &.charpter-right
            right 0
</style>

