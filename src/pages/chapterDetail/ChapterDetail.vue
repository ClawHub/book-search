<template>
  <div>
    {{word}}
  </div>
</template>

<script>
import http from '@/api/http'
export default {
  data () {
    return {
      word: ''
    }
  },
  methods: {
    read (data) {
      http('/book/readChapter', data).then((res) => {
        this.word = res.data;
      })
    }
  },
  mounted () {
    this.read(this.$root.$mp.query)
    console.log(this.$root.$mp.query, 'this.chapterUrl')
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>

