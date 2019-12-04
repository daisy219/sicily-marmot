import Vue from 'vue'
import { EventBus } from '@/utils/event_bus/event_bus';
import { EventType } from '@/utils/event_bus/event_type';

declare module 'vue/types/vue' {
  // 声明为 Vue 补充的东西
  interface Vue {
    // EventBus
    $$eventType: typeof EventType,
    $$eventBus: typeof EventBus;
  }
}