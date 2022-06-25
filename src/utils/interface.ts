import { ANIMATION_EASING } from './constant';

export type Vector3 = {
  x: number;
  y: number;
  z: number;
};

export type FlatVector3 = [number, number, number];

export type Animation = {
  property?: string;
  from?: Vector3 | FlatVector3 | string;
  to?: Vector3 | FlatVector3 | string;
  delay?: number;
  dir?: 'normal' | 'alternate' | 'reverse';
  dur?: number;
  easing?: typeof ANIMATION_EASING[keyof typeof ANIMATION_EASING];
  elasticity?: number;
  loop?: boolean;
  round?: boolean;
  autoplay?: boolean;
  enabled?: boolean;
};
