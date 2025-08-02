import Project from "@types/Project"
import footyRushPNG from "@assets/FootyRush.png"
import roseLogoPNG from "@assets/RoseLogo.png"
import moutains from "@assets/Mountains.png"

const TOP_PROJECTS: Project[] = [
    { name: "Footy Rush",
        image: footyRushPNG,
        href: "/footy-rush",
        start_date: new Date("01/09/2019"),
        end_date: new Date("01/08/2022"),
        description_short: "An Endless Runner Mobile game released onto the iOS Store"
    },
    { name: "Roses",
        image: roseLogoPNG,
        href: "/roses",
        start_date: new Date("01/09/2018"),
        end_date: new Date("01/08/2025"),
        description_short: "An Endless Runner Mobile game released onto the iOS Store"
    },
    { name: "Mountains",
        image: moutains,
        href: "/mountains",
        start_date: new Date("01/09/2000"),
        end_date: new Date("01/08/2030"),
        description_short: "Beautiful Mountains starked against a picturesque backdrop"
    }
]
const NUMBER_OF_TOP_PROJECTS = TOP_PROJECTS.length;

const OTHER_PROJECTS: Project[] = [

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