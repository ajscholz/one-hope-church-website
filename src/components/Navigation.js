import React, { useState } from "react"

import BottomNav from "./BottomNav"

const Navigation = ({ visible, position }) => {
  return <BottomNav visible={visible} position={position} />
}

export default Navigation
