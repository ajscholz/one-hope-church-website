import {
  FaHome,
  FaMapMarkerAlt,
  FaDonate,
  FaQuestion,
  FaShoePrints,
} from "react-icons/fa"

export const links = [
  {
    path: "/",
    text: "home",
    icon: FaHome,
  },
  {
    path: "/about",
    text: "about",
    icon: FaQuestion,
  },
  {
    path: "/next-steps",
    text: "next steps",
    icon: FaShoePrints,
  },
  {
    path: "/visit",
    text: "visit",
    icon: FaMapMarkerAlt,
  },
  {
    path: "/give",
    text: "give",
    icon: FaDonate,
  },
]