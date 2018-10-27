<template>
  <div class="book-wrapprt">
    <div class="img-wrapper" v-if="!this.result.length">
      <div class="img-box" v-for="v in result" :key="v.id">
        <img :src="v.bookInfo.picUrl" mode="aspectFit">
      </div>
    </div>
    <div v-if="this.result.length">你的仓库空空如也</div>
  </div>
</template>

<script>
import icon from '@/base/icon'
import http from '@/api/http'
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
        console.log(this.result)

        this.result.forEach((v, k) => {
          console.log(v, 'v')
          console.log(k, 'k')
        })
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
}

img {
  width: 100%;
  height: 100%;
}
</style>
