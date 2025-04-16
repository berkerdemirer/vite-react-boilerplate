import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router';
import LocaleSwitcher from '@/components/locale-switch';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { to: '/signin', label: 'Sign in' },
  { to: '/signup', label: 'Sign up' },
];

function DesktopNav() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="text-xl font-semibold">logo</div>
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.to}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link to={link.to}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <LocaleSwitcher />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="flex w-full items-center justify-between">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <VisuallyHidden asChild>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <VisuallyHidden asChild>
            <SheetDescription>
              Main navigation menu for mobile devices
            </SheetDescription>
          </VisuallyHidden>
          <div className="flex h-16 items-center pl-6">
            <div className="text-xl font-semibold">logo</div>
          </div>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="border-border/40 hover:bg-accent/40 border-b px-6 py-4 text-2xl font-normal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-4">
              <LocaleSwitcher />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function Nav() {
  return (
    <header className="border-border/40 flex h-16 items-center border-b px-4">
      <div className="hidden md:flex md:w-full">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
