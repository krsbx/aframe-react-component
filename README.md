# Aframe React Component

Use entity/primitive from Aframe with React just like a normal component works in React.

# How to start

- Install Aframe React Component as Depedencies

```
npm i aframe-react-component
```

- Install Aframe, since it's depends on aframe

```
npm i aframe
```

- Import the components in your React projects

```js
import { Scene, Camera, Box } from 'aframe-react-component';

///

return (
  <Scene vr-mode-ui={false}>
    <Camera position={[0, 0, 0]} />
    <Box position={[0, 0, 5]} />
  </Scene>
);
```
