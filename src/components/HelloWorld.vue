<template>
  <div class="hello"
    @touchstart.stop.prevent="onTouchstart"
    @touchmove.stop.prevent="onTouchmove"
    @touchend.stop.prevent="onTouchend"
  >
    <img
      v-for="(img, index) in imageList" :key="index"
      v-show="index == current"
      :src="img"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private imageList = new Array(31).fill('').map((item, index) => `/img/untitled.${index + 1}.jpg`);

  private imageMap = Object.fromEntries(this.imageList.map((item, index) => [index, item]));

  private current = 0;

  private xStart = 0;

  private offset = 0;

  onTouchstart(e: TouchEvent): void {
    this.xStart = e.targetTouches[0].pageX;
  }

  onTouchmove(e: TouchEvent): void {
    const xCurrent = e.targetTouches[0].pageX;
    const offset = Math.floor((xCurrent - this.xStart) / 20);
    this.current = this.offset - offset;
    this.current = ((this.current % 31) + 31) % 31;
  }

  onTouchend(): void {
    this.offset = this.current;
  }

  // mounted(): void {
  //   this.preload();
  // }

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
img {
  width: 100%;
}
</style>
