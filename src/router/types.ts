import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
import { defineComponent } from 'vue';

export type RouteMeta = {
  title?: string,
  icon?: string,
}

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export type AppRouteModule = AppRouteRecordRaw;

export interface LoginIgnore {
  names: string[],
  paths: string[],
  includes(route: RouteLocationNormalized): boolean;
}
