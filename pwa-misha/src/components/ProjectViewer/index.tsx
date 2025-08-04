import React from "react";
import "./index.css"
import Project from "@types/Project"
import { getTopProjectsInfo, getOtherProjectsInfo } from "@utils/getProjectsInfo";

const PROJECTS_ROOT = '/projects'

const TOP_PROJECTS: Project[] = getTopProjectsInfo();
const OTHER_PROJECTS: Project[] = getOtherProjectsInfo(true);
const NUMBER_OF_TOP_PROJECTS = TOP_PROJECTS.length;

function getDateRangeString(project: Project): string {
    const project_start_date_year = project.start_date.getFullYear()
    const project_end_date_year = project.end_date.getFullYear()
    if (project_start_date_year == project_end_date_year) {
        return (
            project.start_date.toLocaleString('default', { month: 'short' }) +
            " - " +
            project.end_date.toLocaleString('default', { month: 'short' }) +
            " " +
            project_end_date_year
        )
    }
    return project_start_date_year + " - " + project_end_date_year
}

function ProjectCardImage(project: Project) {
    const img_bg = (project.needs_bg) ? "needsBG" + " " : ""
    return (
        <div className="image z-1 w-full -mb-2 sm:!mb-0 sm:!-mx-3 sm:!w-fit sm:!max-w-[6rem] md:!max-w-[7rem] lg:!max-w-[8rem]">
            <img
                src={project.image}
                alt={project.name}
                className={img_bg + "!h-[3rem] sm:!h-full"}
            />
        </div>
    )
}

function ProjectCardContents(project: Project) {
    return (
        <>
        {(project.image) ? ProjectCardImage(project) : null}
        <div className="info z-0 sm:!ps-6">
            <div className="flex gap-3">
                <h3 className="flex-grow">{project.name}</h3>
                <h4 className="flex-end text-right">{getDateRangeString(project)}</h4>
            </div>
            <p className="">{project.description_short}</p>
        </div>
        </>
    )
}



function ProjectCardWrapper(project: Project, index: number) {
    const className = "projectCardWrapper relative flex mx-1 sm:mx-0 sm:!flex-row"
    if (project.href) {
        return (
            <a 
                key={index} 
                id={project.name} 
                className={className}
                href={PROJECTS_ROOT+project.href}
            >
                {ProjectCardContents(project)}
            </a>
        )
    }
    return (
        <div key={index} id={project.name} className={className}>
            {ProjectCardContents(project)}
        </div>
    )
}

function ProjectsWrapper(_title: string, _id: string, _projects: Project[]) {
    return (
        <>
            <h2 className="font-['playwrite'] text-2xl mb-2 sm:!mb-5 sm:text-4xl md:text-5xlm">{_title}</h2>
            <div id={_id} className="flex flex-col gap-2 sm:!gap-4 py-3 mb-5">
                { _projects.map((project, index) => (
                    ProjectCardWrapper(project, index)
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
    const currentPath = window.location.pathname;
    if (currentPath == PROJECTS_ROOT) { return null };
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