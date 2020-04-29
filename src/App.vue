<template>
  <div id="app">
    <swiper ref="mySwiper" :options="swiperOptions" class="my-swiper">
      <swiper-slide>
        <HelloWorld/>
      </swiper-slide>
      <swiper-slide>
        <SecondStage init-tip="你能找到隐藏的“爱你”么"/>
      </swiper-slide>
      <swiper-slide>
        <div class="title">探索更多隐藏的“爱”</div>
        <img class="more" src="//cdn.malianghang.com/product/5cda767c7b968a00759c946d.jpg" alt="">
        <img class="more" src="//cdn.malianghang.com/product/593a8558128fe1006acbc6fd_1.jpg" alt="">
        <img class="more" src="//cdn.malianghang.com/product/5b485e3cfe88c200355016e8.jpg" alt="">
        <img class="more" src="//cdn.malianghang.com/product/5c2dfee0fb4ffe005fe406ae.jpg" alt="">
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
