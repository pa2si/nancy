'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useScrollContext } from '@/lib/ScrollContext';

const MenuMobile: React.FC = () => {
  const { isHeroVisible } = useScrollContext();
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const heroRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    // Copy heroRef.current to a variable inside the effect
    const currentHeroRef = heroRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMenu(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    // Use the copied variable in the cleanup function
    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []); // Removed heroRef from dependency array

  if (isHeroVisible) return null;
  // Conditional rendering based on the showMenu state
  return showMenu ? (
    <div className="absolute flex justify-center positionBottom hideDekstop">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="bg-cyan-400 hover:bg-cyan-3  00">
            Categorias
          </Button>
        </SheetTrigger>
        <SheetContent className="background">
          <SheetHeader>
            <SheetTitle>Categorias</SheetTitle>
            <SheetDescription>Elije una categoria.</SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <SheetClose asChild>
              <Button className="bg-cyan-400 mt-2">
                <Link href="#cocina">Cocina</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="bg-cyan-400 mt-2">
                <Link href="#hogar">Hogar</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="bg-cyan-400 mt-2">
                <Link href="#belleza">Belleza</Link>
              </Button>
            </SheetClose>
          </SheetFooter>

          <SheetFooter>
            <SheetClose asChild>
              <Button className="bg-cyan-400 mt-2">
                <Link href="#technica">Technica</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ) : null;
};

export default MenuMobile;
