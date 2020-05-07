<template>
  <div id="game">
    <img src="/img/heart.png" alt="" id="heart" />
    <div id="code">__爱的密码__</div>
    <div id="question">破译隐藏的"爱你"暗号</div>
    <div id="stage">第一关</div>

    <div id="bottom" :style="{ bottom: width / 4 + 'px' }">
      <div id="anwser">
        <img
          src="/img/5.png"
          alt=""
          id="a5"
          :class="{ gray: anwser.length < 1 }"
        />
        <img
          src="/img/2.png"
          alt=""
          id="a2"
          :class="{ gray: anwser.length < 2 }"
        />
        <img
          src="/img/0.png"
          alt=""
          id="a0"
          :class="{ gray: anwser.length < 3 }"
        />
      </div>
      <div
        id="necklace"
        @touchstart="onTouchstart"
        @touchmove="onTouchmove"
        @touchend="onTouchend"
      >
        <img
          v-for="(img, index) in imageList"
          :key="index"
          v-show="index == current"
          :src="img"
        />
        <div id="svg-5" class="svg"></div>
        <div id="svg-2" class="svg"></div>
        <div id="svg-0" class="svg"></div>
        <img src="../assets/images/swipe.png" alt="" id="rotate" />
        <div id="tips">{{ tips }}</div>
      </div>
    </div>
    <img v-show="pass" class="down" src="../assets/images/up.png" />
  </div>
</template>

<script lang="ts">
/* eslint-disable no-new */
import { Component, Vue } from 'vue-property-decorator';
import Vivus from 'vivus';
// import VConsole from 'vconsole';

const IMAGE_NUM = 37;
@Component
export default class HelloWorld extends Vue {
  private imageList = new Array(IMAGE_NUM)
    .fill('')
    .map(
      (item, index) => `//malianghang.oss-cn-zhangjiakou.aliyuncs.com/520/untitled.${index + 1}.png`,
    );

  private imageMap = Object.fromEntries(this.imageList.map((item, index) => [index, item]));

  private current = 4;

  private xStart = 0;

  private offset = 4;

  private svg5!: Vivus;

  private svg2!: Vivus;

  private svg0!: Vivus;

  private last = 0;

  private start = true;

  private playing = false;

  private anwser = '';

  private pass = false;

  private width = 0;

  private tips = '左右360°拖动项链，找到隐藏的520';

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
        this.svg5.play(1, () => {
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
        this.tips = '520被你发现了，上滑进入第二关';
        this.pass = true;
        this.svg0.play(1, () => {
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
        this.svg2.play(1, () => {
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
    this.width = document.documentElement.clientWidth;
    // const vConsole = new VConsole();
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
  padding-top: 5vh;
  height: 100%;
  background-image: url("/img/bg.jpg");
  background-size: 100% 100%;
  #question {
    font-size: 1.8rem;
    margin: 20px 0;
  }
  #stage {
    font-size: 1.2rem;
  }
  #bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    #necklace {
      position: relative;
      img {
        width: 100%;
      }
      #rotate {
        width: 50px;
        position: absolute;
        bottom: 60px;
        margin-left: -25px;
        left: 50%;
        z-index: 100;
        animation: swipe 1.5s infinite ease-in-out;
        animation-direction: alternate;
      }
      @keyframes swipe {
        0% {
          transform: translate(-10px, 0);
        }

        100% {
          transform: translate(10px, 0);
        }
      }
    }
    .svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    #anwser {
      .gray {
        filter: grayscale(80%);
      }
      img {
        position: absolute;
      }
      #a5 {
        width: 80px;
        top: -96px;
        left: 50%;
        z-index: 10;
        margin-left: -120px;
      }
      #a2 {
        width: 80px;
        top: -95px;
        left: 50%;
        z-index: 9;
        margin-left: -50px;
      }
      #a0 {
        width: 110px;
        top: -91px;
        left: 50%;
        z-index: 8;
        margin-left: 20px;
      }
    }
    #tips {
      margin-top: 60px;
      font-size: 14px;
      color: #555;
    }
  }

  #heart {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
