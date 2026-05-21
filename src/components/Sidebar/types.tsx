import type { ReactElement } from "react"

export type NavItems = {
    path: string
    text: string
    icon: ReactElement
}

export type SidebarItem = {
    category: string,
    items: NavItems[],
}

export type Sidebar = SidebarItem[];