"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Define dropdown content for each nav link
const dropdownContent: Record<string, {
  sections: Array<{
    title: string;
    items: Array<{ label: string; isLarge?: boolean }>;
  }>;
}> = {
  Store: {
    sections: [
      {
        title: "Shop",
        items: [
          { label: "Shop the Latest", isLarge: true },
          { label: "Mac", isLarge: true },
          { label: "iPad", isLarge: true },
          { label: "iPhone", isLarge: true },
          { label: "Apple Watch", isLarge: true },
          { label: "Apple Vision Pro", isLarge: true },
          { label: "Accessories", isLarge: true },
        ],
      },
      {
        title: "Quick Links",
        items: [
          { label: "Find a Store" },
          { label: "Order Status" },
          { label: "Apple Trade In" },
          { label: "Financing" },
          { label: "Personal Setup" },
          { label: "College Student Offer" },
        ],
      },
      {
        title: "Shop Special Stores",
        items: [
          { label: "Certified Refurbished" },
          { label: "Education" },
          { label: "Business" },
          { label: "Veterans and Military" },
          { label: "Government" },
        ],
      },
    ],
  },
  Mac: {
    sections: [
      {
        title: "Explore Mac",
        items: [
          { label: "Explore All Mac", isLarge: true },
          { label: "MacBook Air", isLarge: true },
          { label: "MacBook Pro", isLarge: true },
          { label: "iMac", isLarge: true },
          { label: "Mac mini", isLarge: true },
          { label: "Mac Studio", isLarge: true },
          { label: "Mac Pro", isLarge: true },
        ],
      },
      {
        title: "Shop Mac",
        items: [
          { label: "Shop Mac" },
          { label: "Mac Accessories" },
          { label: "Apple Trade In" },
          { label: "Financing" },
        ],
      },
      {
        title: "More from Mac",
        items: [
          { label: "Mac Support" },
          { label: "macOS Sequoia" },
          { label: "Apps by Apple" },
          { label: "iCloud+" },
          { label: "Mac for Business" },
        ],
      },
    ],
  },
  iPad: {
    sections: [
      {
        title: "Explore iPad",
        items: [
          { label: "Explore All iPad", isLarge: true },
          { label: "iPad Pro", isLarge: true },
          { label: "iPad Air", isLarge: true },
          { label: "iPad", isLarge: true },
          { label: "iPad mini", isLarge: true },
          { label: "Apple Pencil", isLarge: true },
          { label: "Keyboards", isLarge: true },
        ],
      },
      {
        title: "Shop iPad",
        items: [
          { label: "Shop iPad" },
          { label: "iPad Accessories" },
          { label: "Apple Trade In" },
          { label: "Financing" },
        ],
      },
      {
        title: "More from iPad",
        items: [
          { label: "iPad Support" },
          { label: "iPadOS 18" },
          { label: "Apps by Apple" },
          { label: "iCloud+" },
          { label: "Education" },
        ],
      },
    ],
  },
  iPhone: {
    sections: [
      {
        title: "Explore iPhone",
        items: [
          { label: "Explore All iPhone", isLarge: true },
          { label: "iPhone 16 Pro", isLarge: true },
          { label: "iPhone 16", isLarge: true },
          { label: "iPhone 15", isLarge: true },
          { label: "iPhone 14", isLarge: true },
          { label: "iPhone SE", isLarge: true },
        ],
      },
      {
        title: "Shop iPhone",
        items: [
          { label: "Shop iPhone" },
          { label: "iPhone Accessories" },
          { label: "Apple Trade In" },
          { label: "Carrier Deals at Apple" },
          { label: "Financing" },
        ],
      },
      {
        title: "More from iPhone",
        items: [
          { label: "iPhone Support" },
          { label: "iOS 18" },
          { label: "Apps by Apple" },
          { label: "iPhone Privacy" },
          { label: "iCloud+" },
        ],
      },
    ],
  },
  Watch: {
    sections: [
      {
        title: "Explore Watch",
        items: [
          { label: "Explore All Apple Watch", isLarge: true },
          { label: "Apple Watch Series 10", isLarge: true },
          { label: "Apple Watch Ultra 2", isLarge: true },
          { label: "Apple Watch SE", isLarge: true },
          { label: "Apple Watch Nike", isLarge: true },
          { label: "Apple Watch Hermès", isLarge: true },
        ],
      },
      {
        title: "Shop Watch",
        items: [
          { label: "Shop Apple Watch" },
          { label: "Apple Watch Bands" },
          { label: "Apple Watch Accessories" },
          { label: "Apple Trade In" },
          { label: "Financing" },
        ],
      },
      {
        title: "More from Watch",
        items: [
          { label: "Apple Watch Support" },
          { label: "watchOS 11" },
          { label: "Apps by Apple" },
          { label: "Apple Fitness+" },
        ],
      },
    ],
  },
  Vision: {
    sections: [
      {
        title: "Explore Vision",
        items: [
          { label: "Explore Apple Vision Pro", isLarge: true },
          { label: "Guided Tour", isLarge: true },
          { label: "Tech Specs", isLarge: true },
        ],
      },
      {
        title: "Shop Vision",
        items: [
          { label: "Shop Apple Vision Pro" },
          { label: "Apple Vision Pro Accessories" },
          { label: "Book a Demo" },
          { label: "Financing" },
        ],
      },
      {
        title: "More from Vision",
        items: [
          { label: "Apple Vision Pro Support" },
          { label: "visionOS 2" },
          { label: "Apps by Apple" },
        ],
      },
    ],
  },
  AirPods: {
    sections: [
      {
        title: "Explore AirPods",
        items: [
          { label: "Explore All AirPods", isLarge: true },
          { label: "AirPods 4", isLarge: true },
          { label: "AirPods Pro 2", isLarge: true },
          { label: "AirPods Max", isLarge: true },
        ],
      },
      {
        title: "Shop AirPods",
        items: [
          { label: "Shop AirPods" },
          { label: "AirPods Accessories" },
        ],
      },
      {
        title: "More from AirPods",
        items: [
          { label: "AirPods Support" },
          { label: "Headphones Support" },
          { label: "Apple Music" },
        ],
      },
    ],
  },
  "TV & Home": {
    sections: [
      {
        title: "Explore TV & Home",
        items: [
          { label: "Explore TV & Home", isLarge: true },
          { label: "Apple TV 4K", isLarge: true },
          { label: "HomePod", isLarge: true },
          { label: "HomePod mini", isLarge: true },
        ],
      },
      {
        title: "Shop TV & Home",
        items: [
          { label: "Shop Apple TV 4K" },
          { label: "Shop HomePod" },
          { label: "Shop HomePod mini" },
          { label: "TV & Home Accessories" },
        ],
      },
      {
        title: "More from TV & Home",
        items: [
          { label: "Apple TV Support" },
          { label: "HomePod Support" },
          { label: "Apple TV app" },
          { label: "Apple TV+" },
          { label: "Home app" },
        ],
      },
    ],
  },
  Entertainment: {
    sections: [
      {
        title: "Explore Entertainment",
        items: [
          { label: "Explore Entertainment", isLarge: true },
          { label: "Apple One", isLarge: true },
          { label: "Apple TV+", isLarge: true },
          { label: "Apple Music", isLarge: true },
          { label: "Apple Arcade", isLarge: true },
          { label: "Apple Fitness+", isLarge: true },
          { label: "Apple News+", isLarge: true },
          { label: "Apple Podcasts", isLarge: true },
          { label: "Apple Books", isLarge: true },
        ],
      },
      {
        title: "Support",
        items: [
          { label: "Apple TV+ Support" },
          { label: "Apple Music Support" },
        ],
      },
    ],
  },
  Accessories: {
    sections: [
      {
        title: "Shop Accessories",
        items: [
          { label: "Shop All Accessories", isLarge: true },
          { label: "Mac", isLarge: true },
          { label: "iPad", isLarge: true },
          { label: "iPhone", isLarge: true },
          { label: "Apple Watch", isLarge: true },
          { label: "AirPods", isLarge: true },
          { label: "TV & Home", isLarge: true },
        ],
      },
      {
        title: "Explore Accessories",
        items: [
          { label: "Made by Apple" },
          { label: "Beats by Dre" },
          { label: "AirTag" },
        ],
      },
    ],
  },
  Support: {
    sections: [
      {
        title: "Explore Support",
        items: [
          { label: "iPhone", isLarge: true },
          { label: "Mac", isLarge: true },
          { label: "iPad", isLarge: true },
          { label: "Apple Watch", isLarge: true },
          { label: "AirPods", isLarge: true },
          { label: "Music", isLarge: true },
          { label: "TV", isLarge: true },
        ],
      },
      {
        title: "Get Help",
        items: [
          { label: "Community" },
          { label: "Check Coverage" },
          { label: "Repair" },
          { label: "Contact Us" },
        ],
      },
      {
        title: "Helpful Topics",
        items: [
          { label: "Get AppleCare+" },
          { label: "Apple ID & Password" },
          { label: "Billing & Subscriptions" },
          { label: "Find My" },
          { label: "Accessibility" },
        ],
      },
    ],
  },
};

export default function Home() {
  const navLinks = [
    "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState<string | null>(null);
  const [displayedNavLink, setDisplayedNavLink] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  
  const topOpenRef = useRef<SVGAnimateElement>(null);
  const topCloseRef = useRef<SVGAnimateElement>(null);
  const bottomOpenRef = useRef<SVGAnimateElement>(null);
  const bottomCloseRef = useRef<SVGAnimateElement>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentContent = displayedNavLink ? dropdownContent[displayedNavLink] : null;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  // NEW: Reset isAnimating after the animation duration (0.4s + delays)
  // This ensures that subsequent tab switches do NOT trigger the fadeInUp animation
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600); // 400ms animation + max delay (~150ms) + buffer
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Measure dropdown height whenever content changes
  useEffect(() => {
    if (dropdownContentRef.current && (isDropdownOpen || isFadingOut)) {
      const height = dropdownContentRef.current.scrollHeight;
      setDropdownHeight(height);
    }
  }, [displayedNavLink, isDropdownOpen, isFadingOut, currentContent]);

  useEffect(() => {
    if (isDropdownOpen && activeNavLink) {
      // If dropdown is already open and we're switching links
      if (displayedNavLink && displayedNavLink !== activeNavLink) {
        // Fade out current content
        setIsFadingOut(true);
        
        // After fade out, switch content and fade in
        if (fadeTimeoutRef.current) {
          clearTimeout(fadeTimeoutRef.current);
        }
        fadeTimeoutRef.current = setTimeout(() => {
          setDisplayedNavLink(activeNavLink);
          setIsFadingOut(false);
          // NOTE: We do NOT set isAnimating(true) here. 
          // The items will just appear (faded in via wrapper transition) without sliding up.
        }, 200); 
      } else {
        // First time opening - use staggered animation
        setDisplayedNavLink(activeNavLink);
      }
    }
  }, [isDropdownOpen, activeNavLink, displayedNavLink]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      topCloseRef.current?.beginElement();
      bottomCloseRef.current?.beginElement();
    } else {
      topOpenRef.current?.beginElement();
      bottomOpenRef.current?.beginElement();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkHover = (link: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Only trigger the "Load In" animation if the dropdown was NOT previously open
    if (!isDropdownOpen) {
      setIsAnimating(true);
    }

    setActiveNavLink(link);
    setIsDropdownOpen(true);
  };

  const handleNavLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!dropdownRef.current?.matches(':hover') && !navRef.current?.matches(':hover')) {
        setIsDropdownOpen(false);
        setActiveNavLink(null);
        setDisplayedNavLink(null);
        setIsAnimating(false);
        setIsFadingOut(false);
      }
    }, 100);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
    setActiveNavLink(null);
    setDisplayedNavLink(null);
    setIsAnimating(false);
    setIsFadingOut(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* The class is only applied when isAnimating is true */
        .animate-item {
          animation: fadeInUp 0.4s ease-out forwards;
          opacity: 0; /* Starts invisible */
        }
      `}</style>

      <nav 
        ref={navRef}
        className="sticky top-0 z-[9999] w-full bg-[#f5f5f7]/80 backdrop-blur-[20px]"
        onMouseLeave={handleNavLeave}
      >
        <div className="mx-auto max-w-[1024px] px-[22px]">
          <ul className="flex h-11 items-center justify-between -mx-2 list-none p-0 max-[833px]:h-[50px]">
            {/* -- LOGO -- */}
            <li className="block px-2">
              <Link href="/" className="flex items-center h-11 opacity-80 hover:opacity-100 transition-opacity max-[833px]:h-[50px]">
                <svg fill="#000000" width="14" height="44" viewBox="-27.96 0 333.79411 333.79411"
                  xmlns="http://www.w3.org/2000/svg">
                  <polygon points="143.389 218.825 143.249 264.291 277.717 131.804 143.249 0 143.249 43.692 231.593 131.804 143.389 218.825" />
                  <polygon points="143.249 55.717 143.249 96.368 176.508 130.878 143.249 165.388 143.249 206.039 216.615 131.804 143.249 55.717" />
                  <polygon points="247.066 302.985 277.879 333.794 277.879 146.314 247.066 177.09 247.066 302.985" />
                  <polygon points="205.632 218.694 205.632 267.567 236.434 299.374 236.434 187.656 205.632 218.694" />
                  <line x1="143.24862" y1="264.29101" x2="143.10819" y2="218.82528" />
                  <line x1="143.24862" y1="43.69189" x2="143.24862" />
                  <polygon points="46.286 131.804 134.631 43.692 134.631 0 0.163 131.804 134.631 264.291 134.49 218.825 46.286 131.804" />
                  <polygon points="61.265 131.804 134.631 206.039 134.631 165.388 101.371 130.878 134.631 96.368 134.631 55.717 61.265 131.804" />
                  <polygon points="30.813 177.09 0 146.314 0 333.794 30.813 302.985 30.813 177.09" />
                  <polygon points="41.445 187.656 41.445 299.374 72.247 267.567 72.247 218.694 41.445 187.656" />
                  <line x1="134.77115" y1="218.82528" x2="134.63073" y2="264.29101" />
                  <line x1="134.63073" x2="134.63073" y2="43.69189" />
                </svg>
              </Link>
            </li>

            {navLinks.map((link) => (
              <li 
                key={link} 
                className="hidden min-[834px]:block"
                onMouseEnter={() => handleNavLinkHover(link)}
              >
                <Link
                  href="#"
                  className="px-2 h-11 flex items-center text-[11px] leading-[21px] font-normal tracking-[0px] text-black no-underline [-webkit-font-smoothing:antialiased] [text-rendering:optimizeLegibility] hover:opacity-65 transition-opacity"
                  style={{
                    WebkitTextStrokeWidth: '0.01px',
                    WebkitTextStrokeColor: 'black'
                  }}
                >
                  {link}
                </Link>
              </li>
            ))}

            {/* SEARCH */}
            <li className="px-2 max-[833px]:ml-auto max-[833px]:px-3">
              <button className="flex items-center h-11 opacity-80 hover:opacity-100 max-[833px]:h-[50px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44" className="fill-black">
                  <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                </svg>
              </button>
            </li>

            {/* BAG */}
            <li className="px-2 max-[833px]:px-3">
              <button className="flex items-center h-11 opacity-80 hover:opacity-100 max-[833px]:h-[50px]">
                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="fill-black">
                  <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                </svg>
              </button>
            </li>

            {/* Hamburger Menu Opener */}
            <li className="hidden max-[833px]:block px-2 pl-3">
              <button
                className="flex items-center h-11 opacity-80 hover:opacity-100 max-[833px]:h-[50px]"
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

      {/* Dropdown Menu */}
      <div 
        ref={dropdownRef}
        className={`
          overflow-hidden bg-[#D9EBFF] 
          absolute left-0 right-0 text-start z-[9998]
          transition-all duration-[320ms] ease-[cubic-bezier(0.4,0,0.6,1)]
          ${isDropdownOpen ? 'opacity-100 visible' : 'invisible'}
        `}
        style={{
          height: isDropdownOpen ? `${dropdownHeight}px` : '0px',
        }}
        onMouseLeave={handleDropdownLeave}
      >
        <div 
          ref={dropdownContentRef}
          className={`
            pt-10 pb-[84px] mx-auto box-border w-full max-w-[1024px] z-[2] px-[22px] flex gap-[44px]
            transition-opacity duration-200
            ${isFadingOut ? 'opacity-0' : 'opacity-100'}
          `}
        >
          {currentContent && currentContent.sections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className="mb-[-4px] flex-1"
              style={{
                maxWidth: sectionIndex === 0 ? '25%' : '25%',
                paddingRight: sectionIndex === 0 ? '88px' : '44px',
              }}
            >
              <p 
                className={`text-[9px] font-normal tracking-[1.86px] leading-[1.2em] m-0 text-start text-[#a1a1a1] uppercase [-webkit-font-smoothing:antialiased] [text-rendering:optimizeLegibility] ${isAnimating ? 'animate-item' : ''}`}
                style={{
                  WebkitTextStrokeWidth: '0.2px',
                  WebkitTextStrokeColor: '#a1a1a1',
                  fontFamily: 'Inter Regular, Inter Regular Placeholder, sans-serif',
                  ...(isAnimating && { animationDelay: `${sectionIndex * 0.05}s` }),
                }}
              >
                {section.title}
              </p>
              <div className={`flex flex-col ${section.items[0]?.isLarge ? 'gap-[10px] pt-[7px]' : 'gap-0 pt-0'}`}>
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href="#"
                    className={`
                      ${item.isLarge ? 'text-[24px] font-medium tracking-[-0.01em] leading-[28px]' : 'text-[11px] font-medium leading-[21px]'}
                      m-0 text-start text-black no-underline
                      [-webkit-font-smoothing:antialiased] [text-rendering:optimizeLegibility]
                      hover:text-[#0066cc] transition-colors duration-200
                      ${itemIndex === 0 && !item.isLarge ? 'pt-[7px]' : ''}
                      ${isAnimating ? 'animate-item' : ''}
                    `}
                    style={{
                      WebkitTextStrokeWidth: '0.2px',
                      WebkitTextStrokeColor: 'black',
                      ...(isAnimating && { animationDelay: `${(sectionIndex * 0.05) + ((itemIndex + 1) * 0.03)}s` }),
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}