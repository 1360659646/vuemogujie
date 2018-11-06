<template>
  <div id="app">
    <router-view/>
    <tab/>
  </div>
</template>

<script>
import tab from '@/base/tab'
export default {
  name: 'App',
  components: {
    tab
  }
}
</script>

<style>
@import url("./css/resect.css");
@import url("./css/common.css");
</style>
