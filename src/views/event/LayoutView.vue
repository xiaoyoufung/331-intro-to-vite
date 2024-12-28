<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const { event } = storeToRefs(store)
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <router-link :to="{ name: 'event-detail-view' }">Details</router-link> |
      <router-link :to="{ name: 'event-register-view' }">Register</router-link> |
      <router-link :to="{ name: 'event-edit-view' }">Edit</router-link>
    </nav>
    <RouterView :event="event" />
  </div>
</template>
