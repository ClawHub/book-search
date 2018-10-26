<template>
  <i :class="icon"></i>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      icon: {
        type: String,
        default: 'er'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../stylus/variable';
@import '../stylus/icon';
</style>