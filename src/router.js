import { createRouter, createWebHistory } from 'vue-router'

import AttributBinding from './components/AttributBinding.vue'
import ListRendering from './components/ListRendering.vue'
import FormBindings from './components/FormBindings.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ComputedProperty from './components/ComputedProperty.vue'
import LifecycleRefs from './components/LifecycleRefs.vue'
import watchers from './components/watchers.vue'
import DeclarativeRendering from './components/DeclarativeRendering.vue'
import EventListeners from './components/EventListeners.vue'

const routes = [
  { path: '/AttributBinding', component: AttributBinding },
  { path: '/listrendering', component: ListRendering },
  { path: '/FormBindings', component: FormBindings },
  { path: '/ConditionalRendering', component: ConditionalRendering },
  { path: '/ComputedProperty', component: ComputedProperty },
  { path: '/LifecycleRefs', component: LifecycleRefs },
  { path: '/watchers', component: watchers },
  { path: '/DeclarativeRendering', component: DeclarativeRendering },
  {path: '/EventListeners',component: EventListeners}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
