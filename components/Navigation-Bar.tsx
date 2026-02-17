"use client"
import { Database, CloudUpload, Boxes, Users, Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";

const navigationLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about-us",
    label: "About Us",
    submenu: true,
    type: "description",
    items: [
      {
        href: "/about-us/#introduction",
        label: "Introduction",
        description: "Brief overview of our journey",
      },
      {
        href: "/about-us/#team",
        label: "Team",
        description: "Dedicated professionals behind success",
      },
      {
        href: "/about-us/#vision",
        label: "Vision",
        description: "Inspiring goals shaping our future",
      },
    ],
  },
  {
    href: "/services",
    label: "Services",
    submenu: true,
    type: "icon",
    items: [
      {
        href: "/data-asset-modernization",
        label: "Data Asset Modernization",
        icon: "Database",
      },
      {
        href: "/cloud-migration",
        label: "Cloud Migration",
        icon: "CloudUpload",
      },
      {
        href: "/application-modernization",
        label: "Application Modernization",
        icon: "Boxes",
      },
      {
        href: "/professional-services",
        label: "Professional Services",
        icon: "Users",
      },
    ],
  },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "glass border-white/10 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  {link.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-base font-medium text-muted-foreground hover:text-primary data-[state=open]:text-primary transition-colors focus:bg-transparent hover:bg-transparent">
                        <Link href={link.href ?? "#"}>{link.label}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="glass border-white/10 p-2 rounded-xl animate-in fade-in zoom-in-95 duration-200">
                        <ul
                          className={cn(
                            "grid gap-2",
                            link.type === "description"
                              ? "w-[400px] p-2 md:w-[500px] md:grid-cols-2"
                              : "w-[300px] p-2"
                          )}
                        >
                          {link.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground group"
                                >
                                  <div className="flex items-center gap-3">
                                    {link.type === "icon" && "icon" in item && (
                                      <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {item.icon === "Database" && <Database size={18} />}
                                        {item.icon === "CloudUpload" && <CloudUpload size={18} />}
                                        {item.icon === "Boxes" && <Boxes size={18} />}
                                        {item.icon === "Users" && <Users size={18} />}
                                      </div>
                                    )}
                                    <div>
                                      <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                                        {item.label}
                                      </div>
                                      {"description" in item && (
                                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1 group-hover:text-muted-foreground/80">
                                          {item.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent/50 data-[state=open]:bg-transparent/50">
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="glow" size="sm" className="hidden lg:flex" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[300px] glass border-white/10 p-4 mt-2 mr-2">
              <nav className="flex flex-col gap-4">
                {navigationLinks.map((link, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    {link.submenu ? (
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground px-2">{link.label}</div>
                        <div className="pl-4 border-l border-white/10 space-y-1">
                          {link.items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block py-2 px-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block py-2 px-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Button variant="glow" className="w-full mt-4" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
