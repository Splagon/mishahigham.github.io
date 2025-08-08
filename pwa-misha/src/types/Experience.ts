import Skill from "@types/Skill"

export type Experience = {
    name: string
    image?: string
    needs_bg?: boolean
    href?: string
    location?: string
    start_date: Date
    subtitle?: string
    end_date: Date
    description_short: string
    description_long?: string
    bullet_point_description?: string[]
    skills?: Skill[]
};

function subtractDatesInDays(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const diffInMilliseconds = date1.valueOf() - date2.valueOf();
    return Math.round(diffInMilliseconds / oneDay); // Convert milliseconds to hours
}

function getShortYearTexts(start_date: Date, end_date: Date): string[] {
    const startYear : string = start_date.getFullYear().toString();
    const endYear : string = end_date.getFullYear().toString();
    if (startYear.slice(0,2) == endYear.slice(0,2)) {
        return [startYear.slice(2,4), endYear.slice(2,4)]
    }
    return [startYear, endYear]
}

export function getDateRangeString(experience: Experience, alwaysIncludeMonths?:boolean, longMonthText?:boolean): string {
    const experience_start_date_year : number = experience.start_date.getFullYear()
    const experience_end_date_year : number = experience.end_date.getFullYear()
    const lessThanNineMonths : boolean = subtractDatesInDays(experience.end_date, experience.start_date) < 30*9
    const autoIncludeMonths : boolean = lessThanNineMonths && experience_start_date_year != experience_end_date_year
    const shortYears: string[] = getShortYearTexts(experience.start_date, experience.end_date)
    const month_type : string = (longMonthText) ? "long" : "short"
    if (
        experience_start_date_year == experience_end_date_year ||
        autoIncludeMonths ||
        alwaysIncludeMonths
    ) {
        return (
            experience.start_date.toLocaleString('default', { month: month_type }) +
            " " +
            ((autoIncludeMonths || alwaysIncludeMonths) ? shortYears[0] : "") +
            " - " +
            experience.end_date.toLocaleString('default', { month: month_type }) +
            "  " +
            "" + shortYears[1]
        )
    }
    return experience_start_date_year + " - " + experience_end_date_year
}
