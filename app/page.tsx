"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const navLinks = [
    "Mac", "Colors", "Icons", "Fonts", 
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const topOpenRef = useRef<SVGAnimateElement>(null);
  const topCloseRef = useRef<SVGAnimateElement>(null);
  const bottomOpenRef = useRef<SVGAnimateElement>(null);
  const bottomCloseRef = useRef<SVGAnimateElement>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      // Play close animations
      topCloseRef.current?.beginElement();
      bottomCloseRef.current?.beginElement();
    } else {
      // Play open animations
      topOpenRef.current?.beginElement();
      bottomOpenRef.current?.beginElement();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">

      <nav className="sticky top-0 z-3 w-full bg-[#f5f5f7]/80 backdrop-blur-[20px]">

        <div className="mx-auto max-w-5xl px-5.5">

          <ul className="flex h-11 items-center justify-between -mx-2 list-none p-0 max-[833px]:h-12.5">

            {/* -- LOGO -- */}
            <li className="block px-2">
              <Link href="/" className="flex items-center h-11 opacity-80 hover:opacity-100 transition-opacity max-[833px]:h-12.5">
                <svg fill="#000000" width="14" height="44" viewBox="-27.96 0 333.79411 333.79411"
                  xmlns="http://www.w3.org/2000/svg">
                  <polygon
                    points="143.389 218.825 143.249 264.291 277.717 131.804 143.249 0 143.249 43.692 231.593 131.804 143.389 218.825" />
                  <polygon
                    points="143.249 55.717 143.249 96.368 176.508 130.878 143.249 165.388 143.249 206.039 216.615 131.804 143.249 55.717" />
                  <polygon
                    points="247.066 302.985 277.879 333.794 277.879 146.314 247.066 177.09 247.066 302.985" />
                  <polygon
                    points="205.632 218.694 205.632 267.567 236.434 299.374 236.434 187.656 205.632 218.694" />
                  <line x1="143.24862" y1="264.29101" x2="143.10819" y2="218.82528" />
                  <line x1="143.24862" y1="43.69189" x2="143.24862" />
                  <polygon
                    points="46.286 131.804 134.631 43.692 134.631 0 0.163 131.804 134.631 264.291 134.49 218.825 46.286 131.804" />
                  <polygon
                    points="61.265 131.804 134.631 206.039 134.631 165.388 101.371 130.878 134.631 96.368 134.631 55.717 61.265 131.804" />
                  <polygon points="30.813 177.09 0 146.314 0 333.794 30.813 302.985 30.813 177.09" />
                  <polygon
                    points="41.445 187.656 41.445 299.374 72.247 267.567 72.247 218.694 41.445 187.656" />
                  <line x1="134.77115" y1="218.82528" x2="134.63073" y2="264.29101" />
                  <line x1="134.63073" x2="134.63073" y2="43.69189" />
                </svg>
              </Link>
            </li>

            {navLinks.map((link) => (
              <li key={link} className="hidden min-[834px]:block">
                <Link
                  href="#"
                  className="
                    px-2 h-11 flex items-center
                    text-[11px] leading-5.25 font-normal tracking-[0px] text-black no-underline
                    [-webkit-font-smoothing:antialiased] [text-rendering:optimizeLegibility]
                    hover:opacity-65 transition-opacity
                  "
                >
                  {link}
                </Link>
              </li>
            ))}

            {/* SEARCH */}
            <li className="px-2 max-[833px]:ml-auto max-[833px]:px-3">
              <button className="flex items-center h-11 opacity-80 hover:opacity-100 max-[833px]:h-12.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44" className="fill-black">
                  <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                </svg>
              </button>
            </li>

            {/* BAG */}
            <li className="px-2 max-[833px]:px-3">
              <button className="flex items-center h-11 opacity-80 hover:opacity-100 max-[833px]:h-12.5">
                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-black">
                  <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                </svg>
              </button>
            </li>

            {/* Hamburger Menu Opener */}
            <li className="hidden max-[833px]:block px-2 pl-3">
              <button
                className="flex items-center h-11 opacity-80 hover:opacity-100 max-[833px]:h-12.5"
                onClick={handleMenuToggle}
                aria-label="Toggle menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <polyline 
                    id="globalnav-menutrigger-bread-bottom" 
                    fill="none" 
                    stroke="black" 
                    strokeWidth="1.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    points="2 12, 16 12"
                  >
                    <animate 
                      ref={bottomOpenRef}
                      id="bottom-open" 
                      attributeName="points" 
                      keyTimes="0;0.5;1" 
                      dur="0.24s" 
                      begin="indefinite" 
                      fill="freeze" 
                      calcMode="spline" 
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" 
                      values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                    />
                    <animate 
                      ref={bottomCloseRef}
                      id="bottom-close" 
                      attributeName="points" 
                      keyTimes="0;0.5;1" 
                      dur="0.24s" 
                      begin="indefinite" 
                      fill="freeze" 
                      calcMode="spline" 
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" 
                      values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                    />
                  </polyline>
                  <polyline 
                    id="globalnav-menutrigger-bread-top" 
                    fill="none" 
                    stroke="black" 
                    strokeWidth="1.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    points="2 5, 16 5"
                  >
                    <animate 
                      ref={topOpenRef}
                      id="top-open" 
                      attributeName="points" 
                      keyTimes="0;0.5;1" 
                      dur="0.24s" 
                      begin="indefinite" 
                      fill="freeze" 
                      calcMode="spline" 
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" 
                      values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                    />
                    <animate 
                      ref={topCloseRef}
                      id="top-close" 
                      attributeName="points" 
                      keyTimes="0;0.5;1" 
                      dur="0.24s" 
                      begin="indefinite" 
                      fill="freeze" 
                      calcMode="spline" 
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" 
                      values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                    />
                  </polyline>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}