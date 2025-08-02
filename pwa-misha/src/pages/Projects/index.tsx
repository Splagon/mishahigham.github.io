import React from "react"
import type { ReactNode } from "react"
import PageWrapper from "@components/PageWrapper/index";
import ProjectViewer from "@components/ProjectViewer/index";

export default function Projects() {
    return (
        <PageWrapper stickyNavbar={true}>
            <ProjectViewer />
        </PageWrapper>
    )
}