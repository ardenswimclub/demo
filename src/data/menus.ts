import { menu as mainMenu }  from './main-menu';
import { menu as swimTeamMenu }  from './swim-team-menu';
import { menu as swimMeetMenu }  from './swim-meet-menu';
import { array } from 'astro:schema';

interface menuItem {
    title: string | undefined,
    path: string,
    children: menuItem[]
};

export const menus = { 
    'main': mainMenu, 
    'swim-meet': swimMeetMenu ,
    'swim-team': swimTeamMenu , 
};

// function injectChildren(key, childMenu, targetMenu) {    
    
//     return {
//         heading: targetMenu.heading,
//         items: targetMenu.items.map(item => item.path.includes(key) ?
//         {
//             title: item.title,
//             path: '#',
//             children: childMenu
//         } : item)
//     };
// }

// const swimTeamMenu2 = injectChildren('swim-meets', swimMeetMenu, swimTeamMenu);
// const mainMenu2 = injectChildren('swim-team', swimTeamMenu2, mainMenu);

// interface s {
//     heading: string | undefined,
//     items: menuItem[]
// }

// export const accordionMenu = mainMenu2;

//console.log(JSON.stringify(accordionMenu,null, 3));
