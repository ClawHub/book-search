<template  style="background:#222;">
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @queryTips="queryTips" :query="query"></search-box>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <scroll-view scroll-y class="shortcut">
        <div>
          <div class="hot-key">
            <div style="display: flex;justify-content:space-between;">
              <h1 class="title">热门搜索</h1>
              <h1 @click="changeBooks" class="title">换一批</h1>
            </div>
            <ul>
              <li @click=selectItem(v) class="item" v-for="(v, k) in hotKey" :key="v.id">
                <span>{{v.book}}</span>
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
    <div class="search-result" v-show="query">
      <suggest @select="saveSearch" ref="suggest" :newQuery="query"></suggest>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchBox from '@/base/search-box'
import Suggest from '@/base/suggest'
import http from '@/api/http'
const MAX_PAGE_NUM = 10
export default {
  data () {
    return {
      query: '',
      pageNum: 1,
      hotKey: []
    }
  },
  methods: {
    queryTips (data) {
      // 处理带空格的情况
      this.query = data
    },
    changeBooks () {
      this.pageNum += 1
      if (this.pageNum > MAX_PAGE_NUM) {
        this.pageNum = 1
      }
      this.recommend()
    },
    selectItem (item) {
      this.query = item.book
    },
    recommend () {
      // 推荐请求
      let url = '/book/recommend'
      let data = {
        'pageNum': this.pageNum,
        'pageSize': 10
      }
      http(url, data).then((res) => {
        this.hotKey = res.data.pageRows
      })
    },
    onReachBottom () {
      console.log('触底了')
    },
    onPullDownRefreash () {
      console.log('onPullDownRefreash')
    }
  },
  watch: {
    query () {
      console.log(this.query, 'sera dsfjdslkf')
    }
  },
  created () {
    // 默认展示10条推荐
    this.recommend()
  },
  components: {
    SearchBox,
    Suggest
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../base/stylus/variable';
@import '../../base/stylus/mixin';

.search {
  .search-box-wrapper {
    margin: 20px;
  }

  .shortcut-wrapper {
    position: fixed;
    top: 89px;
    bottom: 0;
    width: 100%;

    .shortcut {
      height: 100%;
      overflow: hidden;

      .hot-key {
        margin: 0 20px 20px 20px;

        .title {
          margin-bottom: 20px;
          font-size: $font-size-medium;
          color: $color-text-l;
        }

        .item {
          display: inline-block;
          padding: 5px 10px;
          margin: 0 20px 10px 0;
          border-radius: 6px;
          background: $color-text-l;
          font-size: $font-size-medium;
          color: $color-text;
        }
      }

      .search-history {
        position: relative;
        margin: 0 20px;

        .title {
          display: flex;
          align-items: center;
          height: 40px;
          font-size: $font-size-medium;
          color: $color-text-l;

          .text {
            flex: 1;
          }

          .clear {
            extend-click();

            .icon-clear {
              font-size: $font-size-medium;
              color: $color-text-d;
            }
          }
        }
      }
    }
  }

  .search-result {
    position: fixed;
    width: 100%;
    top: 68px;
    bottom: 0;
  }
}
</style>