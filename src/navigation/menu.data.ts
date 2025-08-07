import { Plane } from "lucide-react";
import { IMenu } from "./menu.interface";

export const firstMenu: IMenu = {
  title: "Menu",
  items: [
    {
      icon: Plane,
      link: "/",
      title: "Home",
    },
    {
      icon: Plane,
      link: "/",
      title: "Discovery",
    },
    {
      icon: Plane,
      link: "/",
      title: "Fresh movies",
    },
    {
      icon: Plane,
      link: "/",
      title: "Trending now",
    },
  ],
};

export const userMenu: IMenu = {
  title: "General",
  items: [],
};

export const menus: IMenu[] = [firstMenu, userMenu];
