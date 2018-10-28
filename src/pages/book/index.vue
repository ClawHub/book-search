<template>
  <div class="book-wrapprt">
    <div class="img-wrapper">
      <div class="img-box" v-for="v in result" :key="v.id" @click="goRead(v)">
        <img :src="v.bookInfo.picUrl" mode="aspectFit">
      </div>
    </div>
    <div v-if="this.result.length">你的仓库空空如也</div>
  </div>
</template>

<script>
import icon from '@/base/icon'
import http from '@/api/http'
// import { showModal } from '@/utils'
export default {
  components: {
    icon
  },
  data () {
    return {
      icon: 'icon--',
      result: []
    }
  },
  methods: {
    view: function () {
      let data = {
        'openId': wx.getStorageSync('openid')
      }
      http('/bookShelf/view', data).then((res) => {
        if (res.data.length) {
          this.result = res.data
        }
      })
    },
    goRead (v) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + v.bookInfo.id
      })
    }
  },
  onShow () {
    this.view()
  }
}
</script>

<style scoped lang="stylus">
@import '../../base/stylus/variable';

.img-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.img-box {
  width: 30%;
  height: 200px;
  position: relative;
  z-index: 101;
}

img {
  width: 100%;
  height: 100%;
}
</style>
