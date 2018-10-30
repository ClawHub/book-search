<template>
  <div class="book-wrapprt">
    <div class="recommend-tip" v-if="!flag">你的仓库空空如也,给你推荐几本吧</div>
    <div class="img-wrapper" v-if="flag">
      <div class="img-box" v-for="v in result" :key="v.id" @click="goRead(v)">
        <img :src="v.bookInfo.picUrl" mode="aspectFit">
      </div>
    </div>
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
      result: [],
      flag: false
    }
  },
  methods: {
    view: function () {
      let data = {
        'openId': wx.getStorageSync('openid')
      }
      http('/bookShelf/view', data).then((res) => {
        this.flag = !!res.data.length
        this.result = res.data
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

.recommend-tip {
  font-size: $font-size-medium-x;
  color: $color-sub-theme;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-style: italic;
}

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
