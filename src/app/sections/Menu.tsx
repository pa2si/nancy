'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

const Menu = () => {
  return (
    <div className="absolute flex justify-center top-5 left-16 ">
      <NavigationMenu className="fixed">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default Menu;
