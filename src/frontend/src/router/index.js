import Vue from 'vue';
import Router from 'vue-router';
import { Menu, Home, Profile } from '@/components';
import { Notes } from '@/notes';
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import AmplifyStore from '../store';


Vue.use(Router);
Vue.use(AmplifyPlugin, AmplifyModules);

let user;

getUser().then((user, error) => {
if (user) {
    router.push({path: '/'})
}
})

AmplifyEventBus.$on('authState', async (state) => {
if (state === 'signedOut'){
    user = null;
    AmplifyStore.commit('setUser', null);
    router.push({path: '/auth'})
} else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/'})
}
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      AmplifyStore.commit('setUser', data);
      return data;
    } 
  }).catch((e) => {
    AmplifyStore.commit('setUser', null);
    return null
  });
}

const router = new Router({
routes: [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true}
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
    params: {
      'foo': 'bar'
    },
    meta: { requiresAuth: true}
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta: { requiresAuth: true}
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true}
  },
  {
    path: '/auth',
    name: 'Authenticator',
    component: components.Authenticator
  }
]
});

router.beforeResolve(async (to, from, next) => {
if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser();
    if (!user) {
    return next({
        path: '/auth',
        query: {
        redirect: to.fullPath,
        }
    });
    }
    return next()
}
return next()
})

export default router