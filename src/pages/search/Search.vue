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
              <li @click=selectItem1(v) class="item" v-for="v in hotKey" :key="v.id">
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
    <!-- <div class="search-result" v-show="query"> -->
    <div ref="suggest" class="suggest">
      <ul class="suggest-list">
        <li @click="selectItem(item)" class="suggest-item" v-for="item in result" :key="item.number">
          <div class="name">
            <div class="left">
              <img :src="item.picUrl" mode="aspectFit">
            </div>
            <div class="right">
              <p class="title">{{item.auther}}-{{item.name}}</p>
              <p class="remark">{{item.remark}}</p>
            </div>
          </div>
        </li>
        <loading  v-if="hasMore" title=""></loading>
      </ul>
      <div  v-if="hasMore && !result.length" class="no-result-wrapper">
        <no-result title="抱歉，暂无搜索结果"></no-result>
      </div>
    </div>
      <!-- <suggest @select="saveSearch" ref="suggest" :newQuery="query"></suggest> -->
    </div>
  <!-- </div> -->
</template>

<script type="text/ecmascript-6">
import SearchBox from '@/base/search-box'
// import Suggest from '@/base/suggest'
// import http from '@/api/http'

import Loading from '@/base/loading'
import NoResult from '@/base/no-result'
// const perpage = 20
let selfV = [{
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 80495,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 80496,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 89497,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 88498,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 87415,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 86425,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 85495,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 84496,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 84497,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 83498,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 82415,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}, {
  'attribute': '0',
  'auther': '[明]吴承恩',
  'classify': '5',
  'id': '0',
  'name': '西游记',
  'number': 81425,
  'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
  'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
  'site': '2',
  'state': '1'
}]

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
  onPageScroll () {
    console.log('onLoad')
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
    selectItem1 (item) {
      this.query = item.book
    },
    recommend () {
      // 推荐请求
      // let url = '/book/recommend'
      // let data = {
      //   'pageNum': this.pageNum,
      //   'pageSize': 10
      // }
      // http(url, data).then((res) => {
      // this.hotKey = res.data.pageRows
      this.hotKey = [{
        id: 1,
        book: '西游记'
      }, {
        id: 2,
        book: '西游记'
      }, {
        id: 3,
        book: '西游记'
      }, {
        id: 4,
        book: '西游记'
      }]
      // })
    },
    search () {
      // 查询书籍信息
      // let url = '/book/searchBookInfo'
      // let data = {
      //   'pageNum': this.page,
      //   'pageSize': 10
      // }
      // http(url, data).then((res) => {
      this.result = selfV
      // })
    },
    onReachBottom () {
      console.log('触底了')
    },
    selectItem (item) {
      console.log(item)
    },
    onPageScroll () {
      console.log('onLoad')
    }
  },
  watch: {
    query () {
      this.search()
      console.log(this.query, 'sera dsfjdslkf')
    }
  },
  created () {
    // 默认展示10条推荐
    this.recommend()
  },
  components: {
    SearchBox,
    Loading,
    NoResult
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../base/stylus/variable';
@import '../../base/stylus/mixin';

.search {
  .search-box-wrapper {
    position: fixed;
    margin: 20px;
    position: fixed;
    top: 0;
    width: 90vw;
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
    width: 90%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>