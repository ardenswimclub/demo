import type { menuT } from '@/data/menus.ts';

export const contact : menuT = {
  heading: 'More',
  items: [
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "About Us",
      path: "/about",
    }
  ]
}

export const menu : menuT = {
  heading: 'Main',
  items: [
    {
      title: "Hours",
      path: "/hours",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Membership",
      path: "/membership",
    },
    {
      title: "Swim Team",
      path: '/swim-team'
    },
    {
      title: "Food",
      path: "/food",
    },
    {
      title: "Pool Rules",
      path: "/pool-rules",
    }
  ]
};

export const footerMain : menuT = {
  heading: menu.heading,
  items: menu.items.filter(o=>o.path != '/swim-team')
}