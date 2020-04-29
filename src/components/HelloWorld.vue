<template>
  <div id="game">
    <div id="anwser">{{anwser}}</div>
    <div id="necklace"
      @touchstart.stop.prevent="onTouchstart"
      @touchmove.stop.prevent="onTouchmove"
      @touchend.stop.prevent="onTouchend"
    >
      <img
        v-for="(img, index) in imageList" :key="index"
        v-show="index == current"
        :src="img"
      >
      <div id="svg-5" class="svg"></div>
      <div id="svg-2" class="svg"></div>
      <div id="svg-0" class="svg"></div>
    </div>
    <div id="tips">左右拖动项链，你能找到隐藏的520么</div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-new */
import { Component, Vue } from 'vue-property-decorator';
import Vivus from 'vivus';
import VConsole from 'vconsole';

const IMAGE_NUM = 37;
@Component
export default class HelloWorld extends Vue {
  private imageList = new Array(IMAGE_NUM).fill('').map((item, index) => `/img/untitled.${index + 1}.jpg`);

  private imageMap = Object.fromEntries(this.imageList.map((item, index) => [index, item]));

  private current = 4;

  private xStart = 0;

  private offset = 4;

  private svg5: any;

  private svg2: any;

  private svg0: any;

  private last = 0;

  private start = true;

  private playing = false;

  private anwser = '';

  onTouchstart(e: TouchEvent): void {
    if (this.playing) return;
    this.xStart = e.targetTouches[0].pageX;
  }

  onTouchmove(e: TouchEvent): void {
    if (this.playing) return;
    const xCurrent = e.targetTouches[0].pageX;
    const offset = Math.floor((xCurrent - this.xStart) / 30);
    this.current = this.offset + offset;
    this.current = ((this.current % IMAGE_NUM) + IMAGE_NUM) % IMAGE_NUM;
    if (this.current === 0) {
      if (this.last === 0 && this.start) {
        this.offset = this.current;
        this.playing = true;
        this.last = 5;
        this.start = false;
        this.anwser = '5';
        this.svg5.play(() => {
          this.playing = false;
          this.svg5.reset();
        });
      }
      if (this.last === 2) {
        this.offset = this.current;
        this.playing = true;
        this.last = 0;
        this.start = false;
        this.anwser = '520';
        this.svg0.play(() => {
          this.playing = false;
          this.svg0.reset();
        });
      }
    }
    if (this.current === 18) {
      this.start = true;
      if (this.last === 5) {
        this.offset = this.current;
        this.playing = true;
        this.last = 2;
        this.anwser = '52';
        this.svg2.play(() => {
          this.playing = false;
          this.svg2.reset();
        });
      }
    }
  }

  onTouchend(): void {
    if (this.playing) return;
    this.offset = this.current;
  }

  mounted(): void {
    const vConsole = new VConsole();
    this.svg5 = new Vivus('svg-5', {
      duration: 100,
      file: '/img/svg/5.svg',
      delay: 0,
      animTimingFunction: Vivus.EASE_OUT,
      start: 'manual',
    });
    this.svg2 = new Vivus('svg-2', {
      duration: 100,
      file: '/img/svg/2.svg',
      delay: 0,
      animTimingFunction: Vivus.EASE_OUT,
      start: 'manual',
    });
    this.svg0 = new Vivus('svg-0', {
      duration: 100,
      file: '/img/svg/0.svg',
      delay: 0,
      animTimingFunction: Vivus.EASE_OUT,
      start: 'manual',
    });
  }

  // preload(): void {
  //   this.imageList.forEach((image) => {
  //     const i = new Image();
  //     i.src = image;
  //   });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#game {
  position: absolute;
  bottom: 100px;
  #necklace {
    position: relative;
  }
}
img {
  width: 100%;
}
.svg {
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
}
#anwser {
  font-size: 4rem;
  margin-bottom: 3rem;
  color: #ff9d9d;
}
#tips {
  color: #999;
}
</style>
