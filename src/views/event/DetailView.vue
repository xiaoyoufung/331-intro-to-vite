<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/types'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
const eventStore = useEventStore()
const { eventMsg } = storeToRefs(eventStore)

const props = defineProps<{
  event: Event
  id: string
}>()

const { event } = toRefs(props)
</script>
<template>
  <div id="flashMessage" v-if="eventMsg">
    <h4>{{ eventMsg }}</h4>
  </div>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
