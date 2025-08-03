export type Project = {
    name: string
    image: string
    needs_bg?: boolean
    href?: string
    start_date: Date,
    end_date: Date,
    description_short: string
    description_long?: string
    bullet_point_description?: string[]
};