import Project from "@types/Project"
import footyRushPNG from "@assets/projects/FootyRush.png"
import greggorfcPNG from "@assets/projects/GFC.png"
import musicPNG from "@assets/projects/Music.png"

const TOP_PROJECTS: Project[] = [
    { name: "Footy Rush",
        image: footyRushPNG,
        //href: "/footy-rush",
        start_date: new Date("2019-09-01"),
        end_date: new Date("2022-08-01"),
        description_short: "An Endless Runner Mobile game released onto the iOS Store"
    },
]

const OTHER_PROJECTS: Project[] = [
    { name: "Greggor Financial Companion",
        image: greggorfcPNG,
        needs_bg: true,
        start_date: new Date("2023-01-01"),
        end_date: new Date("2023-03-01"),
        description_short: "An interactive, gamified Finance Tracker - KCL coursework",
        description_long: "A website made to allow for users to track income and expenditure using gamification to encourage users to stick to their goals. Made as part of a coursework at King's College London.",
        bullet_point_description: ["Partook in a website development project using Django, Python, and HTML", "Developed the front- and backend of the system which allows the user to log into their own account and protect their confidential financial data.","Incorporated package APIs to allow to up-to-date conversions between currencies.","Developed the gamification elements of the system such as adding a fun, interactive mascot to encourage users to stay within targets and user groups to allow for friendly competition to encourage meeting targets.","Used Git and GitHub to employ automated testing protections on master and peer code approval and reviews to maintain code quality and ensure functionality.","Developed as part of a group of 8."]
    },
    { name: "Music School Booking System",
        image: musicPNG,
        start_date: new Date("2022-11-01"),
        end_date: new Date("2022-12-01"),
        description_short: "A Music Lesson Booking Website - KCL coursework",
        description_long: "A website made to allow for users to book lessons for a Music School. Made as part of a coursework at King’s College London.",
        bullet_point_description: ["Partook in a website development project using Django, Python, and HTML.","Developed the front- and backend of the system including the ability for users to make requests and admins to accept and manage these requests via the admin backend.","Utilised theoretical knowledge gained from the Database Systems module to implement a Relational Database using SQLite.","Used Git and GitHub to employ automated testing and branch usage in order to ensure good coding practices and working code."]
    }
]

const PROJECTS = [
    {
        "top_projects": TOP_PROJECTS,
        "other_projects": OTHER_PROJECTS
    }
]

export function getTopProjectsInfo() {
  return TOP_PROJECTS
}

export function getOtherProjectsInfo() {
    return OTHER_PROJECTS
}