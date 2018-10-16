<template>
  <div>
    <web-view :src="chapterUrl"></web-view>
  </div>
</template>

<script>
// import http from '@/api/http'
export default {
  data () {
    return {
      chapterUrl: ''
    }
  },
  mounted () {
    this.chapterUrl = this.$root.$mp.query.url
    console.log(this.chapterUrl, 'this.chapterUrl')
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>

