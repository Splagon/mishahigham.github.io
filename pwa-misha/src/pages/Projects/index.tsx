import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react"
import PageWrapper from "@components/PageWrapper/index";
import ProjectViewer from "@components/ExperiencesViewer/Projects/index";
import RenderExperience, {showExperienceRenderer} from "@components/ExperiencesViewer/RenderExperience";
import type { Experience } from "@types/Experience";
import { getProjectByKey } from "@utils/getProjectsInfo";

export default function Projects() {
    const { hash } = useLocation();
    const experience_key = (hash) ? (hash.slice(1,hash.length)) : "";
    const experience : Experience = getProjectByKey(experience_key);

    showExperienceRenderer(experience_key);

    return (
        <PageWrapper stickyNavbar={true}>
            <ProjectViewer/>
                <div id="ExperienceRenderer" className={"overlay" + ((!hash) ? " hidden" : "")}>
                    <RenderExperience experience_key={experience_key} experience={experience}/>
                </div>
        </PageWrapper>
    )
}