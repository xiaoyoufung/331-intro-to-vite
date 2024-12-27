import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentView from '@/views/StudentView.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        perPage: parseInt(route.query.perPage?.toString() || '2'),
      }),
    },
    {
      path: '/event/:id',
      name: 'event-detail-view',
      component: EventDetailView,
      props: true,
    },
    {
      path: '/event/:id/register',
      name: 'event-register-view',
      component: EventRegisterView,
      props: true,
    },
    {
      path: '/event/:id/edit',
      name: 'event-edit-view',
      component: EventEditView,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/student',
      name: 'students-list-view',
      component: StudentView,
    },
  ],
})

export default router
