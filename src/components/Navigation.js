import React, { useState } from "react"

import BottomNav from "./BottomNav"

const Navigation = ({ visible, position, homepage }) => {
  return <BottomNav visible={visible} position={position} homepage={homepage} />
}

export default Navigation
