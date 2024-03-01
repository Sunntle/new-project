"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

const menuList = [
  {
    label: "Promotion",
    to: "promotion"
  },
  {
    label: "Flight schedule",
    to: "list"

  },
  {
    label: "About us",
    to: "about"

  },
  {
    label: "Payment guide",
    to: "payment"

  },
];
const Navbar = () => {
  const generateMenuList = useMemo(() => {
    return menuList.map((item, key) => (
      <NavigationMenuItem key={key}>
        <Link href={`/${item.to}`} legacyBehavior passHref>
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "button-navbar-custom")}>
            {item.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    ));
  }, []);
  return (
    <NavigationMenu>
      <NavigationMenuList>{generateMenuList}</NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
