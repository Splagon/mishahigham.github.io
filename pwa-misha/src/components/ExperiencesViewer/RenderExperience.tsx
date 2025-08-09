import React, { useEffect } from "react"
import { XIcon } from "lucide-react";

import type { Experience } from "@types/Experience";
import { getProjectByKey } from "@utils/getProjectsInfo";
const PROJECTS_ROOT = '/projects'

function hideExperienceRenderer() {
    const er = document.getElementById("ExperienceRenderer");
    er?.classList.add("hidden");
    // document.body.style.position = "inherit";
    // const experienceId = er?.childNodes[0].id;
    // (document.body.style.top != '0px') ? window.scrollBy(0, -parseInt(document.body.style.top,10)): document.getElementById(experienceId)?.scrollIntoView();
}

export function showExperienceRenderer(id?:string) {
    const er = document.getElementById("ExperienceRenderer");
    er?.classList.remove("hidden");
    // const experienceId = er?.childNodes[0].id;
    // const exp = document.getElementById(experienceId);
    // exp?.scrollIntoView({ behavior: "smooth", block: "start" });
    // const scrollY = window.scrollY
    // document.body.style.position = "fixed";
    // (scrollY!=0) ? document.body.style.top = `-${scrollY}px` : null;
    // console.log("top: ",document.body.style.top);
}

type RenderExperienceProps = {
  experience_key:string;
  experience: Experience;
};

export default function RenderExperience({experience_key, experience} : RenderExperienceProps) {
    if (!experience) return null;
    return (
        <div id={experience_key} className="experienceCardsContainer gap-3 !mt-5 !mx-5">
            <div className="experienceRenderCard flex-row gap-2">
                <h1 className="flex grow">{experience?.name}</h1>
                <button className="skinny" onClick={hideExperienceRenderer}><XIcon/></button>
            </div>
            <div className="experienceRenderCard flex-col gap-3">
                {(experience.subtitle) ? (<h2>{experience.subtitle}</h2>) : null}
                <p>
                        {experience.description_long ? experience.description_long : experience.description_short}
                </p>
                {(experience.bullet_point_description) ? (
                    <ul>
                        {experience.bullet_point_description.map((bullet_point: string) =>
                            <li>{bullet_point}</li>
                        )}
                    </ul>
                ) : null}
            </div>
        </div>
    )
}

    // name: string
    // image?: string
    // needs_bg?: boolean
    // href?: string
    // location?: string
    // start_date: Date
    // subtitle?: string
    // end_date: Date
    // description_short: string
    // description_long?: string
    // bullet_point_description?: string[]
    // skills?: Skill[]