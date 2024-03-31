"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  ", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </HoveredLink>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses"> hellow coures</HoveredLink>
            <HoveredLink href="/courses"> Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses"> Advanced Cources</HoveredLink>
            <HoveredLink href="/courses"> hellow coures</HoveredLink>
            <HoveredLink href="/courses"> hellow coures</HoveredLink>
            <HoveredLink href="/courses"> hellow coures</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact US"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
