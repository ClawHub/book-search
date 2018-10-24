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
              <li @click=selectItem(v) class="item" v-for="v in hotKey" :key="v.id">
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
    <div ref="suggest" class="suggest" v-show="query">
      <ul class="suggest-list">
        <li @click="selectItemInfo(item)" class="suggest-item" v-for="item in result" :key="item.number">
          <!-- <a :href="detailUrl"> -->
          <div class="name">
            <div class="left">
              <img :src="item.picUrl" mode="aspectFit">
            </div>
            <div class="right">
              <p class="title">{{item.auther}}-{{item.name}}</p>
              <p class="remark">{{item.remark}}</p>
            </div>
          </div>
          <!-- </a> -->
        </li>
        <loading  v-if="hasMore" title=""></loading>
      </ul>
      <div v-if="!result.length" class="no-result-wrapper">
        <p>抱歉，暂无搜索结果</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchBox from '@/base/search-box'
import http from '@/api/http'

import Loading from '@/base/loading'
// const perpage = 20
const MAX_PAGE_NUM = 10
export default {
  data () {
    return {
      query: '',
      pageNum: 1,
      hotKey: [],
      result: []
    }
  },
  onReachBottom () {
    // wx.navigateTo({
    //   url: '/pages/detail/main'
    // })
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
    search () {
      // 查询书籍信息
      let url = '/book/searchBookInfo'
      let data = {
        'pageNum': this.page,
        'pageSize': 10,
        'name': this.query
      }
      http(url, data).then((res) => {
        if (res.data.pageRows.length) {
          this.result = res.data.pageRows
        }
      })
    },
    selectItemInfo (item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      })
    }
  },
  watch: {
    query () {
      this.search()
    }
  },
  created () {
    // 默认展示10条推荐
    this.recommend()
  },
  components: {
    SearchBox,
    Loading
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../base/stylus/variable';
@import '../../base/stylus/mixin';

.search {
  .search-box-wrapper {
    position: fixed;
    margin: 0 20px;
    position: fixed;
    top: 0;
    width: 90vw;
    border-top: 20px solid $color-text;
    border-bottom: 20px solid $color-text;
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
}

.suggest {
  height: 100%;
  overflow: hidden;
  margin-top: 80px;

  .suggest-list {
    padding: 0 30px;

    .suggest-item {
      height: 100px;
      margin-bottom: 20px;

      .name {
        display: flex;
        font-size: $font-size-medium;
        color: $color-text-ll;
        overflow: hidden;
        width: 100%;
        height: 100%;

        .left {
          flex: 1;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .right {
          flex: 2.5;

          .title {
            height: 40px;
            line-height: 40px;
            font-size: $font-size-medium-x;
            color: $color-background;
            padding-left: 10px;
          }

          .remark {
            height: 60px;
            line-height: 20px;
            font-size: $font-size-medium;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            padding-left: 10px;
          }
        }
      }
    }
  }

  .no-result-wrapper {
    position: absolute;
    width: 100%;
    top: 20%;
    text-align: center;
    color: $color-text-l;
    font-size: $font-size-medium-x;
  }
}
</style>