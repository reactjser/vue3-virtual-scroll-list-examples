import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home/Main.vue';
import DynamicSize from '../views/dynamic-size/Main.vue';
import InfinitiLoading from '../views/infinite-loading/Main.vue';
import ChatRoom from '../views/chat-room/Main.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dynamic-size',
    name: 'DynamicSize',
    component: DynamicSize,
  },
  {
    path: '/infinite-loading',
    name: 'InfinitiLoading',
    component: InfinitiLoading,
  },
  {
    path: '/chat-room',
    name: 'ChatRoom',
    component: ChatRoom,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
