<template  style="background:#222;">
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @queryTips="queryTips"></search-box>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-if="!query">
      <scroll-view scroll-y class="shortcut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="item in hotKey" :key="item.n">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear">
                <i class="icon-clear"></i>
              </span>
            </h1>
          </div>
        </div>
      </scroll-view>
    </div>
    <div class="search-result" v-if="query">
      <suggest @select="saveSearch" ref="suggest" :query="query"></suggest>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBox from '@/base/search-box'
  import Suggest from '@/base/suggest'
  export default {
    data () {
      return {
        query: '',
        hotKey: [{'k': '沙漠骆驼 ', 'n': 1923198}, {'k': 'LOST RIVERS ', 'n': 477388}, {'k': 'GIVE ME A CHANCE ', 'n': 300228}, {'k': '那年错过的爱情 ', 'n': 265463}, {'k': '骆驼沙漠 ', 'n': 197162}, {'k': '倒霉鬼 ', 'n': 157284}, {'k': '旦增尼玛 ', 'n': 153583}, {'k': '阿果吉曲 ', 'n': 144260}, {'k': '李健 ', 'n': 120397}, {'k': '静悄悄 ', 'n': 113254}, {'k': '沙漠骆驼 ', 'n': 1923198}, {'k': 'LOST RIVERS ', 'n': 477388}, {'k': 'GIVE ME A CHANCE ', 'n': 300228}, {'k': '那年错过的爱情 ', 'n': 265463}, {'k': '骆驼沙漠 ', 'n': 197162}, {'k': '倒霉鬼 ', 'n': 157284}, {'k': '旦增尼玛 ', 'n': 153583}, {'k': '阿果吉曲 ', 'n': 144260}, {'k': '李健 ', 'n': 120397}, {'k': '静悄悄 ', 'n': 113254}]
      }
    },
    methods: {
      queryTips (data) {
        // 处理带空格的情况
        this.query = data.trim()
        console.log(data, 'sera')
      }
    },
    components: {
      SearchBox,
      Suggest
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../base/stylus/variable"
  @import "../../base/stylus/mixin"
  page
    background: #222
  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 89px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 89px
      bottom: 0
</style>