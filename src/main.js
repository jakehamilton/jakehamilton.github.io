import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from 'routes/Home'
import Resume from 'routes/Resume'
import ResumeAbout from 'routes/Resume-About'
import ResumeTheater from 'routes/Resume-Theater'
import ResumeWebdev from 'routes/Resume-Webdev'
import Contact from 'routes/Contact'

Vue.use(VueRouter)
Vue.use(VueResource)

const vm = Vue.extend({
  components: { App }
})

const router = new VueRouter({
  history: true,
  hashbang: false
})

router.map({
  '/': {
    component: Home
  },
  '/resume': {
    component: Resume,
    subRoutes: {
      '/': {
        component: ResumeAbout
      },
      '/theater': {
        component: ResumeTheater
      },
      '/webdev': {
        component: ResumeWebdev
      }
    }
  },
  '/contact': {
    component: Contact
  },
  '/project/blink': {
    component: {
      template: '<center><h2>coming soon</h2></center>'
    }
  }
})

router.start(vm, 'body')
