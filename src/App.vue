<template>
  <div id="app">
    <swiper ref="mySwiper" :options="swiperOptions" class="my-swiper">
      <swiper-slide>
        <img class="bg2" src="./assets/images/bg2.png" alt="" />
        <img src="./assets/images/heart.png" alt="" class="heart" />
        <HelloWorld />
      </swiper-slide>
      <swiper-slide>
        <img class="bg2" src="./assets/images/bg2.png" alt="" />
        <SecondStage />
      </swiper-slide>
      <swiper-slide>
        <img class="bg2" src="./assets/images/bg2.png" alt="" />
        <div class="title">探索更多隐藏的爱意</div>
        <div class="container">
          <div class="left">
            <a
              @click="toMalianghang('520')"
              href="http://www.malianghang.com/shop/infinite-520-necklace/summary?material=silver"
            >
              <img class="more" src="./assets/images/520.jpg" />
            </a>
            <a
              @click="toMalianghang('morse')"
              href="http://www.malianghang.com/shop/morse-iloveu-necklace/summary/material?material=silver"
            >
              <img class="more" src="./assets/images/morse.jpg" />
            </a>
            <a
              @click="toMalianghang('side')"
              href="http://www.malianghang.com/shop/ones-sdb-necklace/summary?material=silver"
            >
              <img class="more" src="./assets/images/side.jpg" />
            </a>
          </div>
          <div class="right">
            <a
              @click="toMalianghang('shadow')"
              href="http://www.malianghang.com/shop/shadow-necklace/summary?material=silver"
            >
              <img class="more" src="./assets/images/shadow.jpg"
            /></a>
            <a
              @click="toMalianghang('coordinate')"
              href="http://www.malianghang.com/shop/coordinates-lovers-necklace/summary?material=silver"
            >
              <img class="more" src="./assets/images/coordinate.jpg"
            /></a>
            <a
              @click="toMalianghang('sound')"
              href="http://www.malianghang.com/shop/soundwave-customize-ring/summary/material?material=silver"
              ><img class="more" src="./assets/images/sound.jpeg"
            /></a>
          </div>
        </div>
        <img src="./assets/images/qrcode.png" alt="" class="qrcode" />
        <div class="pub">长按识别二维码，关注公众号</div>
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
    on: {
      activeIndex: 0,
      slideChange() {
        Vue.prototype.$trackBaiduPv(`/page-${this.activeIndex}`);
      },
    },
  };

  private share = {
    wstitle: '520闯关——你能破译所有隐藏的表白暗号么',
    wsdesc: '聪明的你一定懂我',
    wslink: 'https://520.malianghang.com',
    wsimg: 'https://520.malianghang.com/img/share.jpg',
  }

  /* eslint-disable class-methods-use-this */
  toMalianghang(url: string) {
    Vue.prototype.$trackBaiduEvent('malianghang', 'link', url, 10);
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
img {
  vertical-align: bottom;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .heart,
  .bg2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .my-swiper {
    height: 100%;

    .swiper-slide {
      background-image: url("./assets/images/bg.jpg");
      background-size: 100% 100%;

      .title {
        margin: 1.2rem 0;
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
  .container {
    position: relative;
    background: #fff;
    width: 80%;
    margin: auto;
    overflow: hidden;
    z-index: 2;
    padding: 6px;
    .left {
      width: 50%;
      float: left;
    }
    .right {
      float: left;
      width: 50%;
    }
    .more {
      padding: 6px;

      width: 100%;
      vertical-align: bottom;
    }
  }
  .qrcode {
    margin: 20px 0 5px;
    width: 90px;
  }
  .pub {
    font-size: 12px;
    color: white;
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
