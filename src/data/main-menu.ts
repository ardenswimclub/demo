import type { menuT } from '@/data/menus.ts';


export const menu : menuT = {
  heading: 'Main',
  key: 'main',
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
      title: "Lessons",
      path: "/swim-lessons",
    },
    {
      title: "Pool Rules",
      path: "/pool-rules",
    },
    {
      title: "Eats",
      path: "/eats",
    }
  ]
};


export const contact : menuT = {
  heading: 'Learn more',
  key: 'contact',
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

export const footerMain : menuT = {
  heading: menu.heading,
  key: 'footer',
  items: menu.items.filter(o=>o.path != '/swim-team')
}