<template>
  <div class="tab-bar">
    <ul>
      <li v-for="(item,index) in routerList" :key="index" @click="switchTab(item)">
        <i :class="$route.path.includes(item.path)? item.selected: item.class"></i>
        <span :class="$route.path.includes(item.path)? 'red': null">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'tabBar',
  data(){
    return{
      routerList: [
        {
          title:'首页',
          path: '/home',
          class: 'iconfont icon-size icon-tabbarhome',
          selected:'iconfont icon-size icon-tabbarhome red'
        },
        {
          title:'分类',
          path: '/list',
          class: 'iconfont icon-size icon-tabbar-hold',
          selected:'iconfont icon-size icon-tabbar-hold red'
        },
        {
          title:'购物车',
          path: '/car',
          class: 'iconfont icon-size icon-icontabbarshoppingup',
          selected:'iconfont icon-size icon-icontabbarshoppingup red'
        },
        {
          title:'我的',
          path: '/my',
          class: 'iconfont icon-size icon-tabbar-icon-wode-default',
          selected:'iconfont icon-size icon-tabbar-icon-wode-default red'
        },
      ]
    }
  },
  methods:{
    switchTab(item){
      if(this.$route.path == item.path) return;
      this.$router.replace(item.path);
    },
  }
}
</script>

<style scoped>
.tab-bar{
  width: 100%;
  height: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 9999999;
}
.tab-bar ul{
  display: flex;
  justify-content: space-around;
}
.tab-bar ul li{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.tab-bar ul li span{
  font-size:0.5rem;
}
.red{
  color: red;
}
</style>