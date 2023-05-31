<template>
  <div class="hello">
    这是首页
    <TabBar/>
  </div>
</template>

<script>
import TabBar from '@/common/tab/TabBar.vue';
export default {
  name: 'HelloWorld',
  components:{
    TabBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 2.5rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0.625rem;
}
a {
  color: #42b983;
}
</style>
