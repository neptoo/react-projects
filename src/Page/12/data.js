import React from "react";
import {
  FaFacebook,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaMastodon,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: "https://discord.com/",
    icon: <FaDiscord />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://mastodon.social/",
    icon: <FaMastodon />,
  },
  {
    id: 5,
    url: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
];
