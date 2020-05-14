<template>
  <div id="game">
    <div id="code">__爱的密码__</div>
    <div id="question">破译隐藏的"爱你"暗号</div>
    <div id="stage">第二关</div>
    <swiper ref="mySwiper" :options="swiperOptions" class="my-swiper2">
      <swiper-slide>
        <img src="../assets/images/1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/520-model.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/3.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img
          v-show="!copy"
          class="btn"
          data-clipboard-text="$ARNC1LvKW3R$"
          src="../assets/images/4.jpg"
          alt=""
        />
        <div v-show="copy" id="copyed">
          <img class="bg" src="../assets/images/5.jpg" alt="" />
          <div class="desc">
            <div class="ticket">您抽中了100元单品券</div>
            <div class="result">{{ copyTips }}</div>

            <div class="open">打开手机淘宝</div>
            <div class="open">探索答案</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div id="got">
      <div>我懂了</div>
      <input
        maxlength="3"
        class="input"
        type="text"
        v-model="anwser"
        @input="onInput"
        placeholder="点击输入答案"
      />
      <div v-if="!pass">{{ result }}</div>
      <div v-else>
        <div>“LVU”(love you)被你发现了，上滑探索更多</div>
      </div>
    </div>
    <img v-show="pass" class="down" src="../assets/images/up.png" />
  </div>
</template>

<script lang="ts">
/* eslint-disable no-new */
import { Component, Vue } from 'vue-property-decorator';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper/src/index';
import 'swiper/css/swiper.css';
import ClipboardJS from 'clipboard';


@Component({
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class HelloWorld extends Vue {
  private tips = '破译隐藏的“爱你”暗号';

  private anwser = '';

  private result = '';

  private pass = false;

  private copy = false;

  private copyTips = '通关码已经复制成功!';

  private swiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 40,
      stretch: 10,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
  };


  onInput(): void {
    const anwser = this.anwser.toLowerCase();
    if (anwser.length === 1) {
      if (anwser !== 'l') {
        this.result = '不对哦';
      } else {
        this.result = '还有两个字母';
      }
    } else if (anwser.length === 2) {
      if (anwser !== 'lv') {
        this.result = '不对哦';
      } else {
        this.result = '还有1个字母';
      }
    } else if (anwser.length === 3) {
      if (anwser !== 'lvu') {
        this.result = '不对哦';
        Vue.prototype.$trackBaiduEvent('action', 'stage2', 'wrong', 5);
      } else {
        this.result = '“LVU”(love you)被你发现了上滑探索更多';
        this.pass = true;
        Vue.prototype.$trackBaiduEvent('action', 'stage2', 'lvu', 5);
      }
    }
  }

  mounted() {
    const clipboard = new ClipboardJS('.btn');
    clipboard.on('success', () => {
      this.copy = true;
      Vue.prototype.$trackBaiduEvent('action', 'code', 'copyed', 8);
    });
    clipboard.on('error', () => {
      this.copyTips = '复制通关码：$ARNC1LvKW3R$';
      this.copy = true;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#game {
  padding-top: 10vh;
  position: relative;
  height: 100vh;
  #question {
    font-size: 1.8rem;
    margin: 20px 0;
  }
  #stage {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  #tips {
    margin-bottom: 30px;
    color: #999;
  }
  .my-swiper2 {
    .swiper-slide {
      background: #eee;
      width: 80%;
      img {
        width: 100%;
      }
      #copyed {
        position: relative;
        .desc {
          position: absolute;
          left: 0;
          width: 100%;
          bottom: 80px;
          color: #666;
          .ticket {
            // color: #fff;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  #got {
    background: #e988bcb2;
    position: absolute;
    bottom: 0px;
    width: 100%;
    z-index: 1;
    padding-top: 6px;
    height: 100px;
    .input {
      margin-top: 6px;
      border: none;
      line-height: 30px;
      border-radius: 60px;
      padding-left: 10px;
      text-align: center;
      margin-bottom: 3px;
    }
  }
}
</style>
