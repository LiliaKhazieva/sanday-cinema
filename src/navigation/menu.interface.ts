import { LucideIcon } from "lucide-react";

export interface IMenuItem {
  icon: LucideIcon;
  title: string;
  link: string;
}

export interface IMenu {
  title: string;
  items: IMenuItem[];
}
