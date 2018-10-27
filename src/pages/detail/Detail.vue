<template>
  <div class="detail-wrapper">
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
    <div v-if="books.length" class="book-store" @click="addBook">
      <icon :icon="icon"></icon>
      <p>收藏至书架</p>
    </div>
    <p class='text-footer' v-if='!more'>
      没有更多数据
    </p>
  </div>
</template>

<script>
import http from '@/api/http'
import icon from '@/base/icon'
import { showModal } from '@/utils'
export default {
  components: {
    icon
  },
  data () {
    return {
      bookId: '',
      books: [],
      more: true,
      icon: 'icon--'
    }
  },
  methods: {
    chapterInfo (v) { // 跳转至章节详情
      wx.navigateTo({
        url: `/pages/chapter/main?sourceId=${v.sourceId}&webSite=${v.webSite}&catalogUrl=${v.catalogUrl}`
      })
    },
    searchBookSource (bookId) { // 查询书籍源
      let url = '/book/searchBookSource'
      let data = {
        'bookId': bookId
      }
      http(url, data).then((res) => {
        if (!res.data.length) {
          setTimeout(() => {
            wx.navigateBack(1)
          }, 1000)
        } else {
          this.books = res.data
        }
      })
    },
    addBook () {
      if (!wx.getStorageSync('openid')) {
        showModal('你还未登录', '是否前往登陆', function () {
          wx.switchTab({
            url: '/pages/me/main'
          })
        })
        return
      }
      let data = {
        openId: wx.getStorageSync('openid'),
        bookId: this.bookId
      }
      http('/bookShelf/add', data).then((res) => {
        showModal(res.msg.msgText, '')
      })
    }
  },
  onShow () {
    this.bookId = this.$root.$mp.query.id
    this.searchBookSource(this.bookId)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../base/stylus/variable';

page {
  height: 100% !important;

  .detail-wrapper {
    height: 100%;

    .title {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      color: color-background-d;
      font-family: '微软雅黑';
      font-size: $font-size-medium-x;
      padding-left: 5%;
    }

    .book-store {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 60px;
      background: $color-theme-background;

      i {
        width: 100%;
        height: 30px;
        position: absolute;
        top: 0;
        line-height: 30px;
        text-align: center;
        color: $color-text;
      }

      p {
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: $color-text-g;
        font-size: $font-size-medium-x;
      }
    }

    .website-wrapper {
      display: flex;
      flex-wrap: wrap;

      div {
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
          border-radius: 12rpx;
          width: 100%;
        }
      }

      .color-source-1 {
        background: $color-source-1;
      }

      .color-source-2 {
        background: $color-source-2;
      }

      .color-source-3 {
        background: $color-source-3;
      }

      .color-source-4 {
        background: $color-source-4;
      }

      .color-source-5 {
        background: $color-source-5;
      }

      .color-source-6 {
        background: $color-source-6;
      }

      .color-source-7 {
        background: $color-source-7;
      }

      .color-source-8 {
        background: $color-source-8;
      }

      .color-source-9 {
        background: $color-source-9;
      }

      .color-source-10 {
        background: $color-source-10;
      }
    }
  }
}
</style>

