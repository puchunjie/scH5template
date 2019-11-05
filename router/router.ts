import pg404 from '@/commonPages/error-page/404.vue'
import authErr from '@/commonPages/error-page/authError.vue';
import auth from '@/commonPages/loginTemp.vue'

export const page404 = {
  path: '*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: pg404
};

export const authError = {
  path: '/authError',
  name: 'authError',
  meta: {
    title: '权限不足'
  },
  component: authErr
};

export const authRouter = {
  path: '/',
  name: 'auth',
  meta: {
    title: 'auth - 登录'
  },
  component: auth
};



export const routers = [
  authRouter,
  authError,
  page404
];