"use client";
import Link from "next/link";
import s from "./Navigation.module.scss";
import { menus } from "./menu.data";
import Filters from "@/app/home/filters/Filters";
import { PUBLIC_PAGES } from "@/config/public.config";
import { Popcorn } from "lucide-react";

const Navigation = () => {
  return (
    <div className={s.nav}>
      <Link className={s.logo} href={PUBLIC_PAGES.HOME}>
        Sanday <Popcorn /> Cinema
      </Link>
      <div>
        <Filters />
      </div>
    </div>
  );
};

export default Navigation;
