<template>
  <div id="game">
    <div id="question">隐藏的“爱你”</div>
    <div id="stage">第二关</div>
    <div id="tips">{{tips}}</div>
    <swiper ref="mySwiper" :options="swiperOptions" class="my-swiper2">
      <swiper-slide>
        <div class="helper">你听说过摩斯密码么</div>
        <img src="/img/morse.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <div class="helper">发现项链中的摩斯密码了么</div>
        <img src="/img/1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <div class="helper">破译一下是哪三个爱意字母</div>
        <img src="/img/2.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <div id="detail">
          <div class="helper">猜不出来，看答案</div>
          <button class="btn"
            data-clipboard-text="fu至这段话€NhcH1N700eB€转移至氵匋宝或點击链街https://m.tb.cn/h.Viw6hpZ?sm=d5299a 至瀏..覽..噐【马良行摩斯密码定制项链925纯银吊坠男锁骨链女简约颈链情侣礼品】">
            点击复制通关码
          </button>
          <div class="helper">打开手机淘宝详细解密</div>
        </div>
      </swiper-slide>
    </swiper>
    <div id="got">
      <div>我懂了</div>
      <input type="text" v-model="anwser" @input="onInput" placeholder="点击输入答案">
      <div>{{result}}</div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-new */
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper/src/index';
import 'swiper/css/swiper.css';
import ClipboardJS from 'clipboard';

new ClipboardJS('.btn');
@Component({
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class HelloWorld extends Vue {
  @Prop({ default: 'default value' })
  initTip!: string;

  private tips = this.initTip;

  private anwser = '';

  private result = '';

  private swiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  };

  onInput(): void {
    if (this.anwser.toLowerCase() === 'lvu') {
      this.result = '“LVU”(love you)被你发现了!';
    } else if (this.anwser.length === 3) {
      this.result = '不对哦';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#game {
  padding-top: 10vh;
  #question {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  #stage {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  #tips {
    margin-bottom: 30px;
    color: #999;
  }
  .my-swiper2 {
    .swiper-slide {
      background: #eee;
      width: 80%;
      height: 260px;
      img {
        width: 100%;
      }
      .helper {
        padding: 10px;
        color: #999;
      }
      #detail {
        .btn {
          margin-top: 50px;
        }
      }
    }
  }
  #got {
    background: #fff;
    position: absolute;
    bottom: 0px;
    width: 100%;
    z-index: 1;
    height: 100px;
  }
}

</style>
