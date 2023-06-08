<template>
  <div class="header">
    <div class="logoImg">
      <img src="" alt="" />
    </div>
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <span>请输入搜索内容...</span>
    </div>
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-page",
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  background: pink;
  width: 100%;
  height: 2rem;
  position: fixed;
  z-index: 999999;
}
.search {
  width: 9rem;
  height: 1.25rem;
  background: #fff;
  border-radius: 1.25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3.5rem;
}
.search i {
  padding-left: 0.5rem;
}
.search span {
  font-size: 0.3rem;
  color: #9999;
  padding-left: 0.3rem;
}
.kefu {
  padding-left: 1.5rem;
}
</style>