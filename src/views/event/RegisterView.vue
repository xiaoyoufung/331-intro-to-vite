<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
  id: string
}>()

const { event } = toRefs(props)

const register = () => {
  // If the register API is call successful
  // Pull back to the event details view
  console.log('Register event')
}
</script>
<template>
  <p>Register event here</p>
  <button @click="register">Register</button>
</template>
