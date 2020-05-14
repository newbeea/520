declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}
declare module 'wx';
declare module 'vue-baidu-tongji';
declare module 'vue/types/vue' {
  interface Vue {
    /* eslint-disable */
    readonly $trackBaiduEvent: any;
    readonly $trackBaiduPv: any;
  }
}
