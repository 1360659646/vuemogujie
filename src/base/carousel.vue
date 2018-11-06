<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {

      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [
        'https://s11.mogucdn.com/mlcdn/c45406/181026_1183ggj0f09g2ll6dhg0eldc929ca_750x300.jpg_999x999.v1c0.100.webp',
        'https://s10.mogucdn.com/mlcdn/c45406/181105_7fg5l39fibbk9k2i9aekdce4gd8b1_750x300.jpg_999x999.v1c0.100.webp',
        'https://s10.mogucdn.com/mlcdn/c45406/181101_20l22ch22kacd0e57dfik9i5gkec9_750x300.jpg_999x999.v1c0.100.webp',
        'https://s11.mogucdn.com/mlcdn/c45406/181031_6gh63e32a1bgfed73gcc6djhehgl5_750x300.jpg_999x999.v1c0.100.webp',
        'https://s11.mogucdn.com/mlcdn/c45406/181101_75edl3bfbb3lbk2ee7hfi24jkl0jj_750x300.jpg_999x999.v1c0.100.webp',
        'https://s11.mogucdn.com/mlcdn/c45406/181105_1jd7feg4dl2k449e8hd465chj918e_750x300.jpg_999x999.v1c0.100.webp'

      ]
    }
  },
  mounted () {
    setInterval((index) => {
    //   console.log('simulate async data')
      if (index) {

      }
    }, 500)
  }
}
</script>
<style scoped>
 img{
     width: 100%;
     height: 150px;
 }

</style>
