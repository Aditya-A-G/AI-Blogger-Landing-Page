"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 ">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-1 items-center">
          <p className="text-xs"><Link href="https://writer.adityacodes.tech/">Boost your productivity</Link></p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              {" "}
              <Image src={Logo} alt="Saas Logo" height={60} width={60} />
            </Link>

            <div
              className="md:hidden w-16 md:w-28 flex justify-center items-center "
              onClick={() => setIsNavOpen(true)}
            >
              <MenuIcon className="w-1/2 md:hidden cursor-pointer" />
            </div>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="https://writer.adityacodes.tech/">Dashboard</Link>
              <Link href="#product">Product</Link>
              <Link href="#pricing">Pricing</Link>

              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight">
                <Link href="https://writer.adityacodes.tech/">Get Started</Link>
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          isNavOpen === true
            ? "absolute w-full h-svh top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center md:hidden"
            : "hidden"
        )}
      >
        <div
          className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 hover:border-blue-400 my-8 uppercase">
            <Link href="https://writer.adityacodes.tech/" onClick={() => setIsNavOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li className="border-b border-gray-400 hover:border-blue-400 my-8 uppercase">
            <Link href="#product" onClick={() => setIsNavOpen(false)}>
              Product
            </Link>
          </li>
          <li className="border-b border-gray-400 hover:border-blue-400 my-8 uppercase">
            <Link href="#pricing" onClick={() => setIsNavOpen(false)}>
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
