<template>
  <div class="tabfoolter">
    <ul>
        <li>
            <router-link to="/home" >
                <i>首页</i>
            </router-link>
        </li>
        <li>
            <router-link to="/shopping" >
                <i>商城</i>
            </router-link>
        </li>
        <li>
            <router-link to="/mall" >
                <i>直播</i>
            </router-link>
        </li>
        <li>
            <router-link to="/my" >
                <i>我</i>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabfoolter{
 color:rgb(102, 102,102);
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    z-index: 9999;
    background: white;
}

.tabfoolter ul{
    list-style: none;
    display: flex;
    justify-content: row;

}
.tabfoolter ul li{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tabfoolter ul li i{

    font-style: normal;
    width: 32px;
    height: 24px;
    font-size: 24px;

}
a.router-link-active {
  color:rgb(255, 63,123);
}
</style>
