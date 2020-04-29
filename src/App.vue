<template>
  <div id="app">
    <swiper ref="mySwiper" :options="swiperOptions" class="my-swiper">
      <swiper-slide>
        <HelloWorld/>
      </swiper-slide>
      <swiper-slide>
        <SecondStage/>
      </swiper-slide>
      <swiper-slide>
        <div class="title">探索更多隐藏的爱意</div>
        <img class="more" src="//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/520.jpg">
        <img class="more" src="//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/shadow.jpg">
        <img class="more" src="//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/coordinate.jpg">
        <img class="more" src="//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/sound.jpg">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'vue-awesome-swiper/src/index';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import SecondStage from './components/SecondStage.vue';
import 'swiper/css/swiper.css';

@Component({
  components: {
    Swiper,
    SwiperSlide,
    HelloWorld,
    SecondStage,
  },
})
export default class App extends Vue {
  private swiperOptions = {
    direction: 'vertical',
  };
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .my-swiper {
    height: 100%;
    .swiper-slide {
      background: #fff;
      .title {
        margin: 3rem 0;
      }
      .more {
        width: 48%;
      }
    }
  }
}
</style>
