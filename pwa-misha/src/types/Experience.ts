import Skill from "@types/Skill"

export type Experience = {
    name: string
    image?: string
    needs_bg?: boolean
    href?: string
    location?: string
    start_date: Date,
    end_date: Date,
    description_short: string
    description_long?: string
    bullet_point_description?: string[]
    skills?: Skill[]
};

export function getDateRangeString(experience: Experience, alwaysIncludeMonths?:boolean, longMonthText?:boolean): string {
    const experience_start_date_year : number = experience.start_date.getFullYear()
    const experience_end_date_year : number = experience.end_date.getFullYear()
    const month_type : string = (longMonthText) ? "long" : "short"
    if (experience_start_date_year == experience_end_date_year || alwaysIncludeMonths) {
        return (
            experience.start_date.toLocaleString('default', { month: month_type }) +
            ((experience_start_date_year != experience_end_date_year && alwaysIncludeMonths) ? String(experience_start_date_year) : "") +
            " - " +
            experience.end_date.toLocaleString('default', { month: month_type }) +
            " " +
            experience_end_date_year
        )
    }
    return experience_start_date_year + " - " + experience_end_date_year
}
