import type { EventState } from '@/types'
import { defineStore } from 'pinia'
export const useEventStore = defineStore('eventMsg', {
  state: (): EventState => ({
    eventMsg: '',
  }),
  actions: {
    updateMessage(eventMsg: string): void {
      this.eventMsg = eventMsg
    },
    resetMessage(): void {
      this.eventMsg = ''
    },
  },
})
