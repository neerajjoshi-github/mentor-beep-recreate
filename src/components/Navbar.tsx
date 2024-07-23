import React, { useState } from "react";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useAnimate,
} from "framer-motion";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const programs = [
  { title: "Job Guarantee", description: "Get 100% job guarantee" },
  {
    title: "Certifications",
    description: "Acquire industry-recognized certifications",
  },
  {
    title: "Internship Program",
    description: "Hands-on internship experience with top companies",
  },
  {
    title: "UI-UX",
    description: "Master UI/UX design with practical projects",
  },
  {
    title: "Others",
    description: "Explore a variety of other courses and programs",
  },
];

const navLinks = [
  { href: "/home", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/blog", title: "Blog" },
  { href: "/more", title: "More" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();
  const [removed, setRemoved] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > (scrollY.getPrevious() || 0) && !removed) {
      animate(
        scope.current,
        { y: "-100%" },
        {
          duration: 0.35,
          ease: "easeInOut",
          type: "tween",
        }
      );
      setRemoved(true);
    }

    if (latest <= (scrollY.getPrevious() || 0) && removed) {
      animate(
        scope.current,
        { y: 0 },
        {
          duration: 0.35,
          ease: "easeInOut",
          type: "tween",
        }
      );
      setRemoved(false);
    }
  });

  return (
    <motion.div
      ref={scope}
      className="z-[20] bg-background fixed border-b border-border backdrop-blur-md top-0 left-0 h-14 flex items-center justify-between w-full px-4 sm:px-10 md:px-14 lg:px-20"
    >
      <a href="/" className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Mentor Beep Logo"
          className="w-10 aspect-square"
        />
        <span className="text-lg font-bold">MentorBeep</span>
      </a>
      <NavigationMenu className="max-md:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-2 w-[250px]">
                {programs.map((program) => (
                  <ListItem
                    key={program.title}
                    href="/docs"
                    title={program.title}
                  >
                    {program.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {navLinks.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                className={navigationMenuTriggerStyle()}
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
