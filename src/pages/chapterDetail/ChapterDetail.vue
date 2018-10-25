<template>
  <div class="chapter-wrapper">
    <div class="charpter-title">{{title}}</div>
    <div class="charpter-word">{{word}}</div>
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
export default {
  data () {
    return {
      word: '',
      title: ''
    }
  },
  methods: {
    read (data) {
      http('/book/readChapter', data).then((res) => {
        if (!res.data) {
          this.goContent()
          return
        }
        this.word = res.data
      })
    },
    goContent () {
      wx.navigateTo({
        url: `/pages/chapter/main`
      })
    }
  },
  mounted () {
    this.title = this.$root.$mp.query.title
    this.read(this.$root.$mp.query)
  },
  onShow () {
    this.title = ''
    this.word = ''
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
     text-indent 2em
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

