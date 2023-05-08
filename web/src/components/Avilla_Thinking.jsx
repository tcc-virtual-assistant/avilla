/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Avilla_Thinking(props) {
  const { nodes, materials } = useGLTF("/avilla_thinking2.glb");
  return (
    <group {...props} dispose={null} position={[0,-1.5,4.5]}>
      <primitive object={nodes.Hips} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Avatar.geometry}
        material={materials.Wolf3D_Avatar}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Avatar_Transparent.geometry}
        material={materials.Wolf3D_Avatar_Transparent}
      />
    </group>
  );
}

useGLTF.preload("/avilla_thinking2.glb");