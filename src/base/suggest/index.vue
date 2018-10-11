<template>
  <scroll-view scroll-y ref="suggest"
    class="suggest"
  >
    <ul class="suggest-list">
      <li @click="selectItem(item)" class="suggest-item" v-for="item in result" :key="item.id">
        <div class="name">
          <span class="text">{{item.singer}}</span>
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

  const perpage = 20

  export default {
    props: {
      query: {
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
        this.page = 1
        this.hasMore = false
        let res = [{'id': 214032860, 'mid': '003bYCKp3mZscO', 'singer': '刺客', 'name': '2123', 'album': '2123', 'duration': 189, 'image': 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000eGuBa3dBnFq.jpg?max_age=2592000', 'filename': 'C400003bYCKp3mZscO.m4a', 'url': 'http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400003bYCKp3mZscO.m4a?guid=5727274300&vkey=7E3414C99B48AEB93FF99C717542A33FB67FB1276933E9D3B43F60541DF1D32E1D880D9B4B64468EFF7A4CCD86FD83F4606DAB11258542F0&uin=0&fromtag=38'}, {'id': 214032859, 'mid': '004D40DV0Lww9t', 'singer': '刺客', 'name': '2123 (伴奏)', 'album': '2123', 'duration': 191, 'image': 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000eGuBa3dBnFq.jpg?max_age=2592000', 'filename': 'C400004D40DV0Lww9t.m4a', 'url': 'http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400004D40DV0Lww9t.m4a?guid=5727274300&vkey=CD757D3D224E68BE4EF7EFD52EB71EDE62041536667B9C7A032C9A4F0D508EA3B60E2DC1A8C187B41651CCD2F14FBA05E7698DD7EB8CE02F&uin=0&fromtag=38'}]
        this.result = res
        console.log(this.result, 'this.resutl')
        // this._checkMore(res)
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
        // if (item.type === TYPE_SINGER) {
        //   const singer = new Singer({
        //     id: item.singermid,
        //     name: item.singername
        //   })
        //   this.$router.push({
        //     path: `/search/${singer.id}`
        //   })
        //   this.setSinger(singer)
        // } else {
        //   this.insertSong(item)
        // }
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
      query (newQuery) {
        console.log(!newQuery)
        if (newQuery) {
          setTimeout(() => {
            console.log('dind')
            // this.$refs.shortcut.refresh()
            this.search()
          }, 20)
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
        display: flex
        align-items: center
        padding-bottom: 20px
        .name
          flex: 1
          font-size: $font-size-medium
          color: $color-text-d
          overflow: hidden
          .text
            no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
