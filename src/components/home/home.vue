<template>
  <div class="box">
   <!-- 搜索头部 -->
    <search/>
    <!-- 轮播 -->
    <carousel/>
    <!-- nav -->
    <homenav/>
  </div>
</template>

<script>
import search from '@/base/search'
import carousel from '@/base/carousel'
import homenav from '@/components/home/homenav'
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {
    search,
    carousel,
    homenav

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
