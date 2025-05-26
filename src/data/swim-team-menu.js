
export const menu  = [
  {title: "Home",path: "/",}, 
  
  { title: "General Info", path: "/swim-team" },  
  { title: "Registration", path: "/swim-team/registration" },
  { title: "Team Suit", path: "/swim-team/team-suit" },
  { title: "Swimmingly", path: "/swim-team/swimmingly" },
  {
    title: "Swim Meets",
    path: "#",
    children: [
      { title: "Important Info", path: "/swim-team/swim-meets" },
      { title: "Declare Swimmer", path: "/swim-team/swim-meets/declare-your-swimmer" },
      { title: "Volunteer Positions", path: "/swim-team/swim-meets/volunteer-positions" },
      { title: "Visiting Teams", path: "/swim-team/swim-meets/visiting-teams" }
    ]
  }
];