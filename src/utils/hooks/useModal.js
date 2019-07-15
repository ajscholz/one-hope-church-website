import { useState } from "react"

export default () => {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = () => {
    isShowing
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden")
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle,
  }
}
