import Vue from 'vue';
import baiduAnalytics from 'vue-baidu-tongji';
import App from './App.vue';
import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(baiduAnalytics, {
  siteIdList: [
    '446a41bf026fc9f9672a939142f1db1e',
  ],
  debug: true,
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
