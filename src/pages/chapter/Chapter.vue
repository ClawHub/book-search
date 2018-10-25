<template>
  <div class="chapter-wrapper">
    <div @click="read(v)" v-for="(v, k) in result" :key="k">{{v.name}}</div>
  </div>
</template>

<script>
import http from '@/api/http'
import { showSuccess } from '@/utils'
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
        url: `/pages/chapterDetail/main?chapterUrl=${v.url}&webSite=${this.$root.$mp.query.webSite}&title=${v.name}&sourceId=${this.$root.$mp.query.sourceId}`
      })
    },
    chapterInfo (data) {
      http('/book/searchChapter', data).then((res) => {
        if (!res.data) {
          showSuccess('暂无数据', 'none')
          setTimeout(() => {
            wx.navigateBack(1)
          }, 1000)
        } else {
          this.result = res.data
        }
      })
    }
  },
  onShow () {
    this.result = []
    this.chapterInfo(this.$root.$mp.query)
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
    line-height: 50px
    color: $color-text-l;
    font-size: $font-size-medium-x;
    padding-left: 10px;
</style>

