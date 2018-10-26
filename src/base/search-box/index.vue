<template>
  <div class="search-box">
    <i class="icon-search" @click="queryItem"></i>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
    <i @click="clear" v-show="query" class="icon-dismiss"></i>
  </div>
</template>

<script type="text/ecmascript-6">
import { debounce } from '@/utils/index'

export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索小说、作者或者出版社'
    },
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    },
    blur () {
      this.$refs.query.blur()
    },
    queryItem () {
      console.log(this.query)
    }
  },
  created () {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('queryTips', newQuery)
    }, 200))
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../stylus/variable';
@import '../stylus/icon';

.search-box {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  height: 40px;
  background: $color-text-g;
  border-radius: 6px;

  .icon-search {
    font-size: 24px;
    color: $color-background;
  }

  .box {
    flex: 1;
    margin: 0 5px;
    line-height: 18px;
    background: $color-text-g;
    color: $color-background;
    font-size: $font-size-medium;
    outline: 0;

    &::placeholder {
      color: $color-text;
    }
  }

  .icon-dismiss {
    font-size: 16px;
    color: $color-background;
  }
}
</style>