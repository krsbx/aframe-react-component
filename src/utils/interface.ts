import React from 'react';
import { ANIMATION_EASING } from './constant';

export type Vector2 = {
  x: number;
  y: number;
};

export type Vector3 = Vector2 & {
  z: number;
};

export type FlatVector2 = [number, number];

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

export type Primitive = {
  color?: string;
  material?: string;
  position?: Vector3 | FlatVector3 | string;
  scale?: Vector3 | FlatVector3 | string;
  rotation?: Vector3 | FlatVector3 | string;
  animation?: Animation | Animation[];
  visible?: boolean;
  type: string;
  height?: number;
  width?: number;
  src?: string;
  fog?: boolean;
  depth?: number;
  'segments-height'?: number;
  'segments-width'?: number;
  children?: React.ReactNode;
};

// Use this to extends any types that has rounded stuff
export type Rounded = {
  'theta-start'?: number;
  'theta-length'?: number;
};

// Use this to extends any types that has radius stuff
export type Radiuses = {
  'radius-top'?: number;
  'radius-bottom'?: number;
};

export type BasePrimitive = Omit<Primitive, 'type'>;

export type Box = BasePrimitive;

export type Circle = BasePrimitive &
  Rounded & {
    radius: number;
    segments?: number;
  };

export type Cone = BasePrimitive &
  Rounded &
  Radiuses & {
    'open-ended'?: boolean;
  };

export type Cylinder = Cone;

export type Image = Omit<BasePrimitive, 'material'> & {
  metalness?: number;
  options?: number;
  repeat?: Vector2 | FlatVector2 | string;
  roughness?: number;
  shader?: string;
  side?: string;
  transparent?: boolean;
};

export type Plane = Box;

export type Sphere = Circle & {
  'phi-start'?: number;
  'phi-length'?: number;
};

export type GLTFModel = Box;

export type Entity = Box & {
  geometry?: string;
  'gltf-model'?: string;
};

export type Text = {
  align: 'left' | 'center' | 'right';
  'alpha-test': number;
  anchor: 'left' | 'center' | 'right' | 'align';
  baseline: 'top' | 'center' | 'bottom';
  color: string;
  font: string;
  'font-image': string;
  height: number;
  'letter-spacing': number;
  'line-height': number;
  opacity: number;
  rotation: Vector3 | FlatVector3 | string;
  shader: string;
  side: 'front' | 'back' | 'double';
  'tab-size': number;
  transparent: boolean;
  value: string;
  'white-space': 'normal' | 'pre' | 'nowrap';
  width: number;
  'wrap-count': number;
  'wrap-pixels': number;
  'z-offset': number;
  children?: React.ReactNode;
};

export type Camera = {
  position: Vector3 | FlatVector3 | string;
  'look-controls'?: boolean;
  active?: boolean;
};

export type Scene = {
  stats?: boolean;
  embedded?: boolean;
  orientationUI?: boolean;
  vrModeUI?: boolean;
  renderer?: string;
  children?: React.ReactNode;
  colorSpace?: string;
};

export type Assets = {
  timeout?: number;
  children: React.ReactNode;
};

export type Audio = {
  id: string;
  src: string;
  autoplay?: boolean;
};

export type Video = Audio;

export type Item = {
  id: string;
  'response-type'?: string;
  src: string;
};
