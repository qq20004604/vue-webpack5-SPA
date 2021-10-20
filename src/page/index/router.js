import Vue from 'vue';
import Router from 'vue-router';
import Main from './main';

Vue.use(Router);

const router = new Router({
    // history 模式下， 后端配置参考 https://juejin.cn/post/6844903856359342087
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        }
    ]
});
export default router;

