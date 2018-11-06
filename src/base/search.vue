<template>
 <div class="box">
        <a class="logo" href="javascript:void(0);"></a>
     <div class="search">
         <i></i>
         <span>毛衣</span>
     </div>
    <a class="meu" href="javascript:void(0);"></a>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'homeasda d'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .box{
   height: 46px;
   width: 100%;
   display: flex;
   flex-direction: row;

 }
 .box .logo{
     width:52px;
     height:30px;
     background: url("../imges/fenlei.png") no-repeat center
     center;
     background-size:57%;
     margin-top: 6px;
     margin-left: 6px;
     box-sizing: border-box;
}
.box .search{
    display: flex;
     align-items: center; /*主轴对齐 */
     flex: 1;
     height: 30px;
     border-radius: 2px;
     background: #eee;
     margin-top:6px;
}
.box .search i{
    margin-left: 5px;
    width: 21px;
    height: 30px;
    display: inline-block;
    background: url("../imges/sousuo.png") no-repeat center center;
    background-size:100%
}
.box .search span{
    color:#949494;
    font-size: 12px;
    margin-left: 5px;
}
 .box .meu{
     width:52px;
     height:30px;
     background: url("../imges/zaixiankefu.png") no-repeat center
     center;
     background-size:50%;
     padding-top: 11px;
}
</style>
