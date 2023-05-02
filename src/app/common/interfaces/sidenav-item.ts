import { NavItemInterface } from "./nav-item";

export interface SideNavItemInterface{
   title: string
   class: string
   link: string
   childs?: NavItemInterface[]
   source?: string
}