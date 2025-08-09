import React from "react";
import "../index.css"
import Experience, { getDateRangeString } from "@types/Experience"
import { getPersonalExperiencesInfo } from "@utils/getPersonalExperiences";

const EXPERIENCES_ROOT = '/experience'
const CURRENT_PATH = window.location.pathname;

const PERSONAL_EXPERIENCES = getPersonalExperiencesInfo(true);

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
                <div className="flex grow flex-col gap-1 justify-center m-0 p-0">
                    <h3>{project.name}</h3>
                    {(project.subtitle) ? (<h6>{project.subtitle}</h6>) : null}
                </div>
                <h4 className="flex text-right">{getDateRangeString(project)}</h4>
            </div>
            <p className={(!CURRENT_PATH.startsWith(EXPERIENCES_ROOT)) ? "line-clamp-3":""}>{project.description_short}</p>
        </div>
        </>
    )
}



function PersonalExperiencesCardWrapper(experience: Experience, index: number) {
    const className = "experienceCardWrapper relative flex mx-1 sm:mx-0 sm:!flex-row scroll-mt-30"
    const experienceID = experience.name.replaceAll(" ", "");
    if (!CURRENT_PATH.startsWith(EXPERIENCES_ROOT)) {
        return (
            <a 
                key={index} 
                id={experienceID}
                className={className}
                href={(experience.href) ? EXPERIENCES_ROOT+"/"+experience.href : EXPERIENCES_ROOT+"/#"+experienceID}
            >
                {PersonalExperienceCardContents(experience)}
            </a>
        )
    }
    return (
        <div key={index} id={experienceID} className={className}>
            {PersonalExperienceCardContents(experience)}
        </div>
    )
}

function PersonalExperiencesWrapper(_title: string, _id: string, _projects: Experience[]) {
    return (
        <>
            <h2 className="font-['playwrite'] text-2xl mb-2 sm:!mb-5 md:!mb-10 sm:text-4xl md:text-5xlm">{_title}</h2>
            <div id={_id} className="experienceCardsContainer vertLine gap-3 py-3 mb-5 sm:!gap-4">
                { _projects.map((project, index) => (
                    PersonalExperiencesCardWrapper(project, index)
                ))}
            </div>
        </>
    )
}

function ShowPersonalExperiences(number_of_projects: number) {
    const other_projects_to_show = PERSONAL_EXPERIENCES.slice(0, number_of_projects);
    if (number_of_projects > 0) {
        return (
            PersonalExperiencesWrapper("Experience", "other_projects_container", other_projects_to_show)
        )
    }
    if (CURRENT_PATH.startsWith(EXPERIENCES_ROOT)) { return null };
    return (
      <a href={EXPERIENCES_ROOT}>
        <button>
            See Other Personal Experiences
        </button>
      </a>  
    );
}

function MorePersonalExperiences() {
    if (CURRENT_PATH.startsWith(EXPERIENCES_ROOT)) { return null };
    return (
      <a href={EXPERIENCES_ROOT}>
        <button>
            See Experiences
        </button>
      </a>  
    );
}

type PersonalExperienceViewerProps = {
  number_of_experiences?: number;
};

export default function PersonalExperienceViewer({ number_of_experiences = Number.MAX_VALUE }: PersonalExperienceViewerProps) {
    if (number_of_experiences > 0) {
        return (
            <div className="mx-4 px-1">
                {ShowPersonalExperiences(number_of_experiences)}
                {MorePersonalExperiences()}
            </div>
        )
    }
    return
}