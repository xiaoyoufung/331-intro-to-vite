<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import { useEventStore } from '@/stores/event'

const props = defineProps<{
  event: Event
  id: string
}>()

const { event } = toRefs(props)
const router = useRouter()
const store = useEventStore()

const edit = () => {
  store.updateMessage('You are successfully edited for ' + props.event.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.id } })
}
</script>
<template>
  <p>Edit event here</p>
  <button @click="edit">Edit</button>
</template>
