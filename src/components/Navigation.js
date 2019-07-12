import React from "react"

import BottomNav from "./BottomNav"

const Navigation = ({ visible, position, path }) => {
  return <BottomNav visible={visible} position={position} path={path} />
}

export default Navigation
