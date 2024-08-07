import React from "react";
// 记得引入React 不然图标会报错
import { FaLinkedin, FaTwitter, FaDiscord, FaMastodon } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
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
];
