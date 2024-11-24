"use client";

import { Bell, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ToggleTheme } from "./ToggleTheme";

const links = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Inbox",
    href: "",
  },
  {
    name: "Calendar",
    href: "",
  },
  {
    name: "Insights",
    href: "",
  },
  {
    name: "Listings",
    href: "",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container pt-4 sticky top-0 left-0 z-50">
      <nav className="flex rounded-full border backdrop-blur-sm bg-background/80 justify-between items-center py-3 px-4 shadow-lg">
        <div className="font-semibold text-xl">Aves</div>
        <ul className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Button
                variant={pathname === link.href ? "default" : "ghost"}
                asChild
              >
                <Link href={link.href}>{link.name}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <ToggleTheme />
          <Button variant={"ghost"} size={"icon"}>
            <Bell size={28} />
          </Button>

          {/* mobile nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant={"ghost"} size={"icon"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="text-left">
              <SheetHeader>
                <SheetTitle className="hidden">
                  Are you absolutely sure?
                </SheetTitle>
                <SheetDescription className="hidden">
                  description
                </SheetDescription>
              </SheetHeader>
              <ul className="mt-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <SheetClose asChild>
                      <Button
                        variant={pathname === link.href ? "default" : "ghost"}
                        asChild
                        className="w-full justify-start"
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </Button>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>

          <Avatar className="w-8 h-8 ml-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Header;
