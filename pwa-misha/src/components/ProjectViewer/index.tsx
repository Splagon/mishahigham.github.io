import React from "react";
import "./index.css"
import footyRushPNG from "@assets/FootyRush.png"
import roseLogoPNG from "@assets/RoseLogo.png"
import moutains from "@assets/Mountains.png"


type Project = {
    name: string;
    image: string;
    href: string
    start_date: Date,
    end_date: Date,
    description_short: string
};

const PROJECTS_ROOT = '/projects'

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

function ProjectCard(project: Project, index: number) {
    return (
        <a key={index} className="projectCardWrapper relative flex mx-1 sm:mx-0 sm:!flex-row" href={PROJECTS_ROOT+project.href}>
            <div className="image z-1 w-full -mb-3 sm:!mb-0 sm:!-mx-3 sm:!w-fit sm:!max-w-[6rem] md:!max-w-[7rem] lg:!max-w-[8rem]">
                <img
                    src={project.image}
                    alt={project.name}
                    className="!h-[3rem] sm:!h-full"
                />
            </div>
            <div className="info z-0 sm:!ps-5">
                <div className="flex gap-3">
                    <h3 className="flex-grow">{project.name}</h3>
                    <h4 className="flex-end">{project.start_date.getFullYear()} - {project.end_date.getFullYear()}</h4>
                </div>
                <p>{project.description_short}</p>
            </div>
        </a>
    )
}

function ProjectsWrapper(_title: string, _id: string, _projects: Project[]) {
    return (
        <>
            <h2 className="font-['playwrite'] text-2xl mb-5 sm:text-4xl md:text-5xlm">{_title}</h2>
            <div id={_id} className="flex flex-col gap-2 sm:!gap-4 py-3 mb-5">
                { _projects.map((project, index) => (
                    ProjectCard(project, index)
                ))}
            </div>
        </>
    )
}

function MyTopProjects(number_of_projects: number) {
    const top_projects_to_show = TOP_PROJECTS.slice(0, number_of_projects);
    if (number_of_projects > 0) {
        return (
            ProjectsWrapper("My Top Projects", "top_projects_container", top_projects_to_show)
        )
    }
    return null;
}

function OtherProjects(number_of_projects: number) {
    const other_projects_to_show = OTHER_PROJECTS.slice(0, number_of_projects);
    if (other_projects_to_show.length > 0) {
        return (
            ProjectsWrapper("Other Projects", "other_projects_container", other_projects_to_show)
        )
    }
    return (
      <a href={PROJECTS_ROOT}>
        <button>
            See Other Projects
        </button>
      </a>  
    );
}

type ProjectViewerProps = {
  number_of_projects?: number;
};

export default function ProjectViewer({ number_of_projects = Number.MAX_VALUE }: ProjectViewerProps) {
    if (number_of_projects > 0) {
        const projects_shown = Math.min(NUMBER_OF_TOP_PROJECTS, number_of_projects)
        return (
            <div className="mx-4 px-1">
                {MyTopProjects(number_of_projects)}
                {OtherProjects(number_of_projects - projects_shown)}
            </div>
        )
    }
    return
}