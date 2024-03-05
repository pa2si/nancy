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
              <Link href="#cocina" className="flex w-full">
                <Button className="bg-cyan-400 mt-2 grow">Cocina</Button>
              </Link>
            </SheetClose>
          </SheetFooter>
          <SheetFooter>
            <SheetClose asChild>
              <Link href="#hogar" className="flex w-full">
                <Button className="bg-cyan-400 mt-2 grow">Hogar</Button>
              </Link>
            </SheetClose>
          </SheetFooter>
          <SheetFooter>
            <SheetClose asChild>
              <Link href="#belleza" className="flex w-full">
                <Button className="bg-cyan-400 mt-2 grow">Belleza</Button>
              </Link>
            </SheetClose>
          </SheetFooter>

          <SheetFooter>
            <SheetClose asChild>
              <Link href="#technologia" className="flex w-full">
                <Button className="bg-cyan-400 mt-2 grow">Technologia</Button>
              </Link>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  ) : null;
};

export default MenuMobile;
