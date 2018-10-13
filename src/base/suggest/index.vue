<template>
  <scroll-view scroll-y ref="suggest"
    class="suggest"
  >
    <ul class="suggest-list">
      <li @click="selectItem(item)" class="suggest-item" v-for="item in result" :key="item.number">
        <div class="name">
          <div class="left">
            <img :src="item.picUrl">
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
  </scroll-view>
</template>

<script type="text/ecmascript-6">
  import Loading from '../loading'
  import NoResult from '../no-result'
  import http from '@/api/http'
  const perpage = 20
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
    'number': 80497,
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
    'number': 80498,
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
    'number': 80415,
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
    'number': 80425,
    'picUrl': 'https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/doc/pic/item/9c16fdfaaf51f3deaa53eb0698eef01f3b2979ea.jpg',
    'remark': ' 本书是中国古代魔幻小说中的巅峰之作，讲述了唐僧师徒四人一路降妖伏魔、历经艰险到西天求取真经的故事。书中借助惊险的故事充分展现了作者丰富的知识、惊人的想象力和高超的写作技巧。',
    'site': '2',
    'state': '1'
  }]
  export default {
    props: {
      newQuery: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        page: 1,
        hasMore: false,
        result: []
      }
    },
    components: {
      Loading,
      NoResult
    },
    methods: {
      refresh () {
        this.$refs.suggest.refresh()
      },
      search () {
        console.log(this.newQuery, 'suggest search方法')
        // 查询书籍信息
        let url = '/book/searchBookInfo'
        let data = {
          'pageNum': this.page,
          'pageSize': 10
        }
        http(url, data).then((res) => {
          console.log(selfV)
          this.result = selfV
        })
      },
      searchMore () {
        if (!this.hasMore) {
          return
        }
        this.page++
        let res = [{'id': 214032860, 'mid': '003bYCKp3mZscO', 'singer': '刺客', 'name': '2123', 'album': '2123', 'duration': 189, 'image': 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000eGuBa3dBnFq.jpg?max_age=2592000', 'filename': 'C400003bYCKp3mZscO.m4a', 'url': 'http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400003bYCKp3mZscO.m4a?guid=5727274300&vkey=7E3414C99B48AEB93FF99C717542A33FB67FB1276933E9D3B43F60541DF1D32E1D880D9B4B64468EFF7A4CCD86FD83F4606DAB11258542F0&uin=0&fromtag=38'}, {'id': 214032859, 'mid': '004D40DV0Lww9t', 'singer': '刺客', 'name': '2123 (伴奏)', 'album': '2123', 'duration': 191, 'image': 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000eGuBa3dBnFq.jpg?max_age=2592000', 'filename': 'C400004D40DV0Lww9t.m4a', 'url': 'http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400004D40DV0Lww9t.m4a?guid=5727274300&vkey=CD757D3D224E68BE4EF7EFD52EB71EDE62041536667B9C7A032C9A4F0D508EA3B60E2DC1A8C187B41651CCD2F14FBA05E7698DD7EB8CE02F&uin=0&fromtag=38'}]
        this.result = res
        this._checkMore(res)
        this._genResult(res).then((result) => {
          this.result = this.result.concat(result)
        })
        this._checkMore(res)
      },
      listScroll () {
        this.$emit('listScroll')
      },
      selectItem (item) {
        this.$emit('select', item)
      },
      getDisplayName (item) {
        return `${item.name}-${item.singer}`
      },
      _checkMore (data) {
        const song = data.song
        if (!song.list.length || (song.curnum + (song.curpage - 1) * perpage) >= song.totalnum) {
          this.hasMore = false
        }
      }
    },
    watch: {
      newQuery (newQuery) {
        console.log(newQuery, 'newQuery')
        if (newQuery) {
          this.search()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../stylus/variable"
  @import "../stylus/mixin"

  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        height: 100px
        margin-bottom: 20px
        .name
          display: flex
          font-size: $font-size-medium
          color: $color-text-ll
          overflow: hidden
          width: 100%
          height: 100%
          .left
            flex: 1
            img
              width: 100%
              height: 100%
          .right
            flex: 2.5
            .title
              height: 40px
              line-height: 40px
              font-size: $font-size-medium-x
              color: $color-background
              padding-left: 10px
            .remark
              height: 60px
              line-height: 20px
              font-size: $font-size-medium
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 3
              overflow: hidden
              padding-left: 10px
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
