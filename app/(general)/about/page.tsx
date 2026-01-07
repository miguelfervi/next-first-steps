import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO title",
    description: "SEO Description",
    keywords: ['About Page', 'Miguel', 'información', '...'],
}

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}
