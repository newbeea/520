<template>
  <div id="app">
    <swiper ref="mySwiper" :options="swiperOptions" class="my-swiper">
      <swiper-slide>
        <HelloWorld />
      </swiper-slide>
      <swiper-slide>
        <SecondStage />
      </swiper-slide>
      <swiper-slide>
        <div class="title">探索更多隐藏的爱意</div>
        <img
          class="more"
          src="//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/520.jpg"
        />
        <img
          class="more"
          src="//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/shadow.jpg"
        />
        <img
          class="more"
          src="//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/coordinate.jpg"
        />
        <img
          class="more"
          src="//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/sound.jpg"
        />
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
import configShare from './share';
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
    touchAngle: 20,
  };

  private share = {
    wstitle: '破译隐藏的“爱你”暗号',
    wsdesc: '',
    wslink: 'https://520.malianghang.com',
    wsimg: '',
  }

  mounted() {
    const xml = new XMLHttpRequest();
    const url = window.location.href;
    xml.open('get', `/wechat-api/config?url=${url}`);
    xml.onreadystatechange = () => {
      if (xml.readyState === 4 && xml.status === 200) {
        try {
          const config = JSON.parse(xml.responseText);
          configShare(config, this.share);
        } catch {
          console.log('config failed');
        }
      }
    };
    xml.send();
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
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
  .down {
    z-index: 100;
    width: 40px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -20px;
    animation: start 1.5s infinite ease-in-out;
  }
}
@keyframes start {
  0%,
  30% {
    opacity: 0;
    transform: translate(0, 10px);
  }
  60% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, -8px);
  }
}
</style>
