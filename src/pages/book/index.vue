<template>
  <div style="height: 1000px: overflow: auto;">
    <icon :icon="icon"></icon>
  </div>
</template>

<script>
import icon from '@/base/icon'
export default {
  components: {
    icon
  },
  data () {
    return {
      icon: 'icon--'
    }
  },
  methods: {
    bindGetUserInfo: function (e) {
      // let backtype = this.data.backType
      console.log(e)
    }
  },
  onPullDownRefresh () {
    console.log('加载更多')
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../base/stylus/variable';
</style>
