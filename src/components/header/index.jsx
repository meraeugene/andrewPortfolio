"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Burger from "./burger";
import Stairs from "./stairs";
import Menu from "./menu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <div>
      {!menuIsOpen && ( // Check if menuIsOpen is false (i.e., burger should be visible)
        <Burger openMenu={openMenu} />
      )}
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu closeMenu={closeMenu} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
