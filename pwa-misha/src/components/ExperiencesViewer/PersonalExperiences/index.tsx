import React from "react";
import "../index.css"
import Experience, { getDateRangeString } from "@types/Experience"
import { getPersonalExperiencesInfo } from "@utils/getPersonalExperiences";

const PROJECTS_ROOT = '/projects'

const PERSONAL_EXPERIENCES = getPersonalExperiencesInfo(null,true);

function PersonalExperiencesCardImage(project: Experience) {
    const img_bg = (project.needs_bg) ? "needsBG" + " " : ""
    return (
        <div className="image !justify-start z-1 w-full ms-4 -mb-2 sm:ms-0 sm:!mb-0 sm:!-mx-3 sm:!w-fit sm:!max-w-[5rem] md:!max-w-[6rem] lg:!max-w-[7rem]">
            <img
                src={project.image}
                alt={project.name}
                className={img_bg + "!h-[3rem] sm:!h-full"}
            />
        </div>
    )
}

function PersonalExperienceCardContents(project: Experience) {
    return (
        <>
        {(project.image) ? PersonalExperiencesCardImage(project) : null}
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



function PersonalExperiencesCardWrapper(project: Experience, index: number) {
    const className = "experienceCardWrapper relative flex mx-1 sm:mx-0 sm:!flex-row"
    if (project.href) {
        return (
            <a 
                key={index} 
                id={project.name} 
                className={className}
                href={PROJECTS_ROOT+project.href}
            >
                {PersonalExperienceCardContents(project)}
            </a>
        )
    }
    return (
        <div key={index} id={project.name} className={className}>
            {PersonalExperienceCardContents(project)}
        </div>
    )
}

function PersonalExperiencesWrapper(_title: string, _id: string, _projects: Experience[]) {
    return (
        <>
            <h2 className="font-['playwrite'] text-2xl mb-2 sm:!mb-5 sm:text-4xl md:text-5xlm">{_title}</h2>
            <div id={_id} className="experienceCardsContainer vertLine gap-3 py-3 mb-5 sm:!gap-4">
                { _projects.map((project, index) => (
                    PersonalExperiencesCardWrapper(project, index)
                ))}
            </div>
        </>
    )
}

function MyTopPersonalExperiences(number_of_projects: number) {
    const other_projects_to_show = PERSONAL_EXPERIENCES.slice(0, number_of_projects);
    if (other_projects_to_show.length > 0) {
        return (
            PersonalExperiencesWrapper("Experience", "other_projects_container", other_projects_to_show)
        )
    }
    const currentPath = window.location.pathname;
    if (currentPath == PROJECTS_ROOT) { return null };
    return (
      <a href={PROJECTS_ROOT}>
        <button>
            See Other Personal Experiences
        </button>
      </a>  
    );
}

type PersonalExperienceViewerProps = {
  number_of_projects?: number;
};

export default function PersonalExperienceViewer({ number_of_projects = Number.MAX_VALUE }: PersonalExperienceViewerProps) {
    if (number_of_projects > 0) {
        return (
            <div className="mx-4 px-1">
                {MyTopPersonalExperiences(number_of_projects)}
            </div>
        )
    }
    return
}