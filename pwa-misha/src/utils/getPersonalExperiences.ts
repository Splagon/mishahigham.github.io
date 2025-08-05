import Experience from "@types/Experience"
import { CSharp } from "@types/Skill"
import KclPNG from "@assets/projects/KCL.png"
import CfgPNG from "@assets/projects/CFG.png"

const PERSONAL_EXPERIENCES: Experience[] = [
    { name: "BSc Computer Science",
        image: KclPNG,
        //href: "/footy-rush",
        location: "King's College London",
        start_date: new Date("2021-09-01"),
        end_date: new Date("2024-05-01"),
        description_short: "King's College London - Final Grade (1:1)",
        description_long: "",
        bullet_point_description: "",
        skills: [CSharp]
    },
    { name: "Tech Graduate",
        image: CfgPNG,
        needs_bg: false,
        //href: "/footy-rush",
        start_date: new Date("2024-09-01"),
        end_date: new Date("2026-01-01"),
        description_short: "Tech Graduate at the CFG",
        description_long: "",
        bullet_point_description: "",
        skills: [CSharp]
    },
]

export function getPersonalExperiencesInfo(projectName?: string, sortedByDate?: boolean) {
    const _PERSONAL_EXPERIENCES : Experience[] = (!sortedByDate) ? PERSONAL_EXPERIENCES : PERSONAL_EXPERIENCES.sort((a, b) => b.end_date.getTime() - a.end_date.getTime());
    return (!projectName) ? _PERSONAL_EXPERIENCES : (
        PERSONAL_EXPERIENCES.filter((exp, i) => exp.name == projectName)
    )
}