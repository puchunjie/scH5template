import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from './router'
import { getToken } from '@/utils/auth';
import store from '../store';
const WHITE_LIST = ['auth']

Vue.use(VueRouter);

// 路由配置
export const router = new VueRouter({
    mode: 'hash',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    base: process.env.BASE_URL,
    routes: routers
});

router.beforeEach(async (to, from, next) => {
    let PageTitle = to.meta.title;
    if(PageTitle){
        document.title = PageTitle;
    }
    if(!store.state.userInfo && !WHITE_LIST.includes(to.name)){
        let token = process.env.NODE_ENV === 'development' ? localStorage.getItem('token') : getToken();
        await store.dispatch('setUser', token)
        next();
    }
    next();

});

router.afterEach((to) => {
    window.scrollTo(0, 0);
});