import Vue from 'vue';
import { EventType } from './event_type';

type eventCallBack = (...args: any[]) => void;

const eventBus = new Vue();

export class EventBus {

  public static fire(event: EventType, arg: any) {
    eventBus.$emit(event, arg);
  }

  public static on(event: EventType, cb: eventCallBack) {
    eventBus.$on(event, cb);
  }

  public static once(event: EventType, cb: eventCallBack) {
    eventBus.$once(event, cb);
  }

  public static off(event: EventType, cb?: eventCallBack) {
    eventBus.$off(event, cb);
  }

}
