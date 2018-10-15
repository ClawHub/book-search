<template>
  <div>
    <p>请选择数据源</p>
    <ul v-if="books.length">
      <li @click="chapterInfo(v)" v-for="(v, k) in books" :key="k">
        <span :class="'color-source-'+(k+1)">{{v.webSite}}</span>
      </li>
    </ul>
    <p class='text-footer' v-if='!more'>
      没有更多数据
    </p>
  </div>
</template>

<script>
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
    searchBookSource () {
      // let url = '/book/searchBookSource'
      // let data = {
      //   'bookId': 0
      // }
      // http(url, data).then((res) => {
      this.books = this.selfV.data
      console.log(this.books)
      // })
    }
  },
  computed: {
    colorStyle (k) {
      console.log(k, 'k')
      console.log(`$color-source-${(k + 1)}`)
      return `$color-source-${(k + 1)}`
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
      console.log(this.books)
      this.books.forEach((v, k) => {
        console.log(v, k)
      })
    }, 20)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../base/stylus/variable';
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
</style>

