import Link from "next/link";
import s from "./Navigation.module.scss";
import { menus } from "./menu.data";

const Navigation = () => {
  return (
    <div className={s.nav}>
      <Link href={"/"}>LOGO</Link>
      <input type="text" placeholder="Search..." />
      <div className={s.menu}>
        {/* {menus.map((item) => (
         
        ))} */}
      </div>
    </div>
  );
};

export default Navigation;
