import Experience, {getExperienceKey} from "@types/Experience"
import { CSharp } from "@types/Skill"
import KclPNG from "@assets/projects/KCL.png"
import KsmPNG from "@assets/projects/KSM.png"
import CfgPNG from "@assets/projects/CFG.png"

const PERSONAL_EXPERIENCES: Experience[] = [
    { name: "GCSEs",
        image: KsmPNG,
        needs_bg: false,
        start_date: new Date("2007-09-01"),
        end_date: new Date("2019-05-30"),
        subtitle: "King's School in Macclesfield",
        description_short: "3x9s (Computing, German, Biology), 4x8s (Mathematics, Physics, Chemistry, Religion & Philosophy), 3x7s (English Language, English Literature, Music)",
        description_long: "",
        bullet_point_description: "",
        skills: []
    },
    { name: "A-Levels",
        image: KsmPNG,
        needs_bg: false,
        start_date: new Date("2019-09-01"),
        end_date: new Date("2021-05-30"),
        subtitle: "King's School in Macclesfield",
        description_short: "Computer Science (A*), Maths (A), German (A)",
        description_long: "",
        bullet_point_description: "",
        skills: [CSharp]
    },
    { name: "BSc Computer Science",
        image: KclPNG,
        location: "King's College London",
        start_date: new Date("2021-09-01"),
        end_date: new Date("2024-05-01"),
        subtitle: "King's College London",
        description_short: "Final Grade (1:1)",
        description_long: "",
        bullet_point_description: "",
        skills: [CSharp]
    },
    { name: "Fan Tech SysOps",
        image: CfgPNG,
        needs_bg: false,
        //href: "/footy-rush",
        start_date: new Date("2024-09-01"),
        end_date: new Date("2025-03-31"),
        subtitle: "Tech Graduate @ CFG",
        description_short: "Supported catering tech and match-day ops and provided 2nd line support across fan systems",
        description_long: "",
        bullet_point_description: "",
        skills: []
    },
    { name: "Football Solutions",
        image: CfgPNG,
        needs_bg: false,
        //href: "/footy-rush",
        start_date: new Date("2025-04-01"),
        end_date: new Date("2025-09-30"),
        subtitle: "Tech Graduate @ CFG",
        description_short: "Developed and revised Core Data Pipelines to improve efficiency and quailty. Co-led a project to create a central contracts data repository",
        description_long: "",
        bullet_point_description: "",
        skills: []
    },
]

export function getPersonalExperiencesInfo(sortedByDate?: boolean): Experience[] {
    const _PERSONAL_EXPERIENCES : Experience[] = (!sortedByDate) ? PERSONAL_EXPERIENCES : PERSONAL_EXPERIENCES.sort((a, b) => b.end_date.getTime() - a.end_date.getTime());
    return _PERSONAL_EXPERIENCES;
}

export function getPersonalExperienceByKey(key: string): Experience {
    return PERSONAL_EXPERIENCES.filter((exp, i) => getExperienceKey(exp) == key)[0]
}