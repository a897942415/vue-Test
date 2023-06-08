<template>
  <div class="hello">
    <Header @click="handleClick($event)"></Header>
    <div class="wrapper">
      <van-tabs v-model:active="active">
        <van-tab
          v-for="(item, index) in tabs"
          :key="index"
          :title="item"
        ></van-tab>
      </van-tabs>
    </div>
    <section class="sec">
      <div class="content">
        <Swiper></Swiper>
        <Icon></Icon>
      </div>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "@/home/Header.vue";
import TabBar from "@/common/tab/TabBar.vue";
import Swiper from "@/components/shop/views/Swiper.vue";
import Icon from "@/components/shop/views/Icon.vue";
import axios from 'axios';
export default {
  name: "home-page",
  data() {
    return {
      active: 0,
      tabs: [
        "Tab 1",
        "Tab 2",
        "Tab 3",
        "Tab 4",
        "Tab 5",
        "Tab 6",
        "Tab 7",
        "Tab 8",
      ],
    };
  },
  created(){
    axios({
      url:'/api/home'
    }).then(res=>{
      console.log(res)
    })
  },
  mounted() {
    
  },
  methods: {
    handleClick(event) {
      event.stopPropagation();
    },
    swipeChange(index) {
      console.log(index);
    },
  },
  beforeUnmount() {
    window.removeEventListener("mousewheel", this.handleMouseWheel);
  },
  components: {
    TabBar,
    Header,
    Swiper,
    Icon,
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  position: relative;
  padding-top: 2rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>