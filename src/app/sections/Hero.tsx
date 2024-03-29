'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCombinedContext } from '@/lib/Context';

const Hero: React.FC = () => {
  const { setHeroVisibility } = useCombinedContext();
  const heroRef = useRef<HTMLDivElement | null>(null); // Specify the type for useRef for better type checking

  useEffect(() => {
    // Capture the current value of heroRef in a variable inside the effect
    const current = heroRef.current;

    if (current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setHeroVisibility(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(current);

      // Use the captured value in the cleanup function
      return () => observer.unobserve(current);
    }
  }, [setHeroVisibility]); // useEffect dependency array
  return (
    <section
      className="flex h-svh flex-col items-center justify-between background pt-8"
      id="hero"
    >
      <div className="flex flex-col items-center">
        <h1 className=" font-medium text-4xl sm:text-5xl font-title">
          Si hay para comprar!
        </h1>
        {/* underline */}
        <div className="relative w-full h-1 mt-4 ">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
        {/* contact */}
        <div className="flex items-center mt-1" ref={heroRef}>
          <Image
            src="/icons8-whatsapp.svg"
            alt="logo"
            width={50}
            height={50}
          ></Image>{' '}
          <a href="tel:3183903665" className="text-xl">
            318 390 3665
          </a>
        </div>
      </div>

      {/* image */}
      <div className="relative w-full md:w-3/4 h-[18rem] sm:h-[20rem] md:h-[30rem]">
        <Image
          src="/online-shopping-flatline.svg"
          fill
          alt="Image of shop"
          sizes="(max-width: 768px) 80vw, 33vw"
          className="absolute cover"
        ></Image>
      </div>
      {/* menu */}
      <div>
        <div className="grid grid-cols-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 md:grid-cols-4 lg:text-left">
          <Link
            href="/#cocina"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Cocina
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Todo lo que tiene que haber con cocina!
            </p>
          </Link>

          <Link
            href="/#hogar"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Hogar
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Todo lo que tiene que haber con decoracion de casa!
            </p>
          </Link>

          <Link
            href="/#belleza"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Belleza
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Todo lo que tiene que haber con belleza!
            </p>
          </Link>

          <Link
            href="/#technica"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Electronica
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Todo lo que tiene que haber con productos electronicos
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
