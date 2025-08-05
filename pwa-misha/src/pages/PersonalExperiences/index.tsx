import React from "react"
import type { ReactNode } from "react"
import PageWrapper from "@components/PageWrapper/index";
import PersonalExperiencesViewer from "@components/ExperiencesViewer/PersonalExperiences/index";

export default function Projects() {
    return (
        <PageWrapper stickyNavbar={true}>
            <PersonalExperiencesViewer />
        </PageWrapper>
    )
}