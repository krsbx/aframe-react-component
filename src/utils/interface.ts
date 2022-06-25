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
  depth?: number;
  material?: string;
  position?: Vector3 | FlatVector3 | string;
  scale?: Vector3 | FlatVector3 | string;
  rotation?: Vector3 | FlatVector3 | string;
  animation?: Animation | Animation[];
  fog?: boolean;
  height?: number;
  metalness?: number;
  repeat?: Vector2 | FlatVector2 | string;
  roughness?: number;
  'segments-depth'?: number;
  'segments-height'?: number;
  'segments-width'?: number;
  shader?: string;
  src?: string;
  width?: number;
  visible?: boolean;
  type: string;
  children?: React.ReactNode;
  wireframe?: boolean;
  'wireframe-linewidth'?: number;
};

// Use this to extends any types that has rounded stuff
export type Rounded = {
  'theta-start'?: number;
  'theta-length'?: number;
};

// Use this to extends any types that has lot of vertex
export type Phis = {
  'phi-start'?: number;
  'phi-length'?: number;
};

// Use this to extends any types that has more segments
export type Segments = {
  'segment-phi'?: number;
  'segment-theta'?: number;
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

export type CurvedImage = Omit<Image, 'options'> &
  Rounded & {
    opacity?: number;
    'open-ended'?: boolean;
    radius?: number;
    transparent?: boolean;
  };

export type Dodecahedron = Box &
  Radiuses &
  Rounded & {
    'open-ended'?: boolean;
    'segment-radial'?: number;
  };

export type Icosahedron = Omit<Dodecahedron, 'open-ended' | 'segment-radial'> & {
  radius?: number;
};

export type Octahedron = Icosahedron;
export type Tetrahedron = Icosahedron;

export type GLTFModel = Box;

export type Image = Omit<BasePrimitive, 'material'> & {
  options?: number;
  shader?: string;
  side?: string;
  transparent?: boolean;
};

export type Plane = Box;

export type Ring = Box &
  Rounded &
  Segments & {
    'radius-inner'?: number;
    'radius-outer'?: number;
  };

export type Sky = Rounded &
  Phis &
  Pick<
    Box,
    | 'color'
    | 'metalness'
    | 'repeat'
    | 'roughness'
    | 'segments-height'
    | 'segments-width'
    | 'shader'
    | 'src'
    | 'children'
  >;

export type Sphere = Circle & Phis;

export type Torus = Box & {
  arc?: number;
  radius?: number;
  'radius-tubular'?: number;
  'segment-radial'?: number;
  'segment-tubular'?: number;
};

export type TorusKnot = Torus & {
  p: number;
  q: number;
};

export type Triangle = Box & {
  'vertex-a'?: Vector3 | FlatVector3 | string;
  'vertex-b'?: Vector3 | FlatVector3 | string;
  'vertex-c'?: Vector3 | FlatVector3 | string;
};

export type Sound = {
  autoplay?: boolean;
  on?: string;
  src?: string;
  volume?: number;
};

export type Video = Omit<Image, 'options'> & {
  opacity?: number;
};

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

export type AudioAsset = {
  id: string;
  src: string;
  autoplay?: boolean;
};

export type VideoAsset = AudioAsset;

export type Item = {
  id: string;
  'response-type'?: string;
  src: string;
};
