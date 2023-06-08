<template>
  <div class="swiper-page">
    <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide class="slide"><img src="@/assets/logo.png" /></swiper-slide>
      <swiper-slide class="slide"><img src="@/assets/logo.png" /></swiper-slide>
      <swiper-slide class="slide"><img src="@/assets/logo.png" /></swiper-slide>
      <swiper-slide class="slide"><img src="@/assets/logo.png" /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
export default {
  name: "swiper-page",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style>
</style>