"use client";
import Link from "next/link";
import s from "./Navigation.module.scss";
import { menus } from "./menu.data";
import Filters from "@/app/home/filters/Filters";

const Navigation = () => {
  return (
    <div className={s.nav}>
      <Link href={"/"}>Cinema</Link>
      <div>
        <Filters />
      </div>
    </div>
  );
};

export default Navigation;
