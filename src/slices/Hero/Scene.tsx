"use client"

import FloatingCan from "@/components/FloatingCan";
import { Environment } from "@react-three/drei";
import React from "react";

type Props = {};

const Scene = (props: Props) => {
  return (
    <group>
      <FloatingCan />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default Scene