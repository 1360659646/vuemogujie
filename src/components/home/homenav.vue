<template>
  <div class="navlist">
   <ul>
       <li v-for="(item,index) in navlist " :key="index">
           <a href="javascript:void(0);"><img :src="item.addrss" alt=""></a>
           <span>{{item.name}}</span>
        </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      navlist: [
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/180731_4hi3fb9jil564ae43l0a3ckdjb2f2_150x150.jpg_640x640.v1cAC.40.webp', name: '充值中心'},
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/181030_7gj220g20748kgh03a6h0i94ldc2f_150x150.jpg_640x640.v1cAC.40.webp', name: '29元任选'},
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/181030_1j5ee1ld73ceiegakkg027j806he9_150x150.jpg_640x640.v1cAC.40.webp', name: '限时快抢'},
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/181030_7d3294belb55f72b580kla617hkj7_150x150.jpg_640x640.v1cAC.40.webp', name: '人气女孩'},
        {addrss: 'https://s3.mogucdn.com/mlcdn/c45406/171128_520075a1kdfcec662f0d1he68k06l_150x150.png_640x640.v1cAC.40.webp', name: '签到有礼'},
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/181030_25f26824hdiib4be8897lf26fl8jg_150x150.jpg_640x640.v1cAC.40.webp', name: '当季热卖'},
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/181030_2fg742a10c7lc6ck8e85h9f9g06cg_150x150.jpg_640x640.v1cAC.40.webp', name: '内衣百货'},
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/181030_32ad0hhbcgda51g15d5f571e7f5e5_150x150.jpg_640x640.v1cAC.40.webp', name: 'TOP鞋包'},
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/181030_6bj035k6caa9adegd28d1fh9i79d2_150x150.jpg_640x640.v1cAC.40.webp', name: '美妆个护'},
        {addrss: 'https://s10.mogucdn.com/mlcdn/c45406/181030_5h91b0ba10b9eb5ljgi59ci34b1h3_150x150.jpg_640x640.v1cAC.40.webp', name: '9.9专区'}

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navlist ul{
    padding-left: 18px;
    list-style: none;
    display: flex;
    flex-direction: row;  /*主轴 */
    justify-content:space-around;/*平分空间*//*space-evenly *//*space-between 两边靠墙中间空间平分 */

    flex-wrap: wrap;/*换行 */
    align-content: center
}
.navlist ul li a{
    display: inline-block;
}
.navlist ul li {
   margin-left: 0px;
   margin-top: 10px;
    height: 50px;
    width: 20%;
     padding-left: 0px;

}

.navlist ul li:nth-child(6),
.navlist ul li:nth-child(7),.navlist ul li:nth-child(8),
.navlist ul li:nth-child(9),.navlist ul li:nth-child(10){
 margin-top: 35px;
}

.navlist ul li img {
    width: 71%;
}
.navlist ul li span{
     padding-top: 5px;
     display: block;
     padding-left: 3px;

}

</style>
