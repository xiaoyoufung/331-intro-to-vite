<script setup lang="ts">
// import { ref } from 'vue'
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()

// const event = ref({
//   id: 5928101,
//   category: 'animal welfare',
//   title: 'Cat Adoption Day',
//   description: 'Find your new feline friend at our adoption event.',
//   location: 'Meow Town',
//   date: 'January 28, 2022',
//   time: '12:00',
//   petsAllowed: true,
//   organizer: 'Kat Laydee',
// })
</script>

<template>
  <div>
    <div
      class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp"
    >
      <p>{{ event.category }}</p>
      <span>by {{ event.organizer }} </span>
    </div>
  </div>
</template>

<style scoped>
/* .event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>
