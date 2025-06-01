import type { menuT } from '@/data/menus.ts';

export const contact : menuT = {
  heading: 'Learn more',
  items: [
    {
      title: "Donate",
      path: "/donate",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },    
    {
      title: "Facebook",
      path: "https://www.facebook.com/ArdenSwimClub/",
    },
    {
      title: "Venmo",
      path: "https://venmo.com/Arden-Swim?txn=pay",
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
      title: "Eats",
      path: "/eats",
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