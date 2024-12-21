<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref } from 'vue'
const events = ref<Event[]>([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at our adoption event.',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee',
  },
  {
    id: 4582797,
    category: 'food',
    title: 'Community Gardening',
    description: 'Join us as we tend to the community edible plants.',
    location: 'Flora City',
    date: 'February 1, 2022',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Gardener Gail',
  },
  {
    id: 8419988,
    category: 'sustainability',
    title: 'Beach Cleanup',
    description: 'Help us keep our beaches clean and safe for all.',
    location: 'Sandy Shores',
    date: 'February 2, 2022',
    time: '9:00',
    petsAllowed: false,
    organizer: 'Sandy Sam',
  },
])
</script>

<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
