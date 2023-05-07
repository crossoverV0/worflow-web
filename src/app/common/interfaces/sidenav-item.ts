import { NavItemInterface } from "./nav-item";

export interface SideNavItemInterface{
   title: string
   icon: string
   link: string
   childs?: NavItemInterface[]
   source?: string
}