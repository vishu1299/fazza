"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full font-sans">
      {/* Main Header */}
      <div className="bg-[#272727] px-2 sm:px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - All Category Button / Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-2 sm:px-4 lg:px-6 py-2 rounded-md flex items-center space-x-1 sm:space-x-2 font-medium text-xs sm:text-sm transition-all duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <Menu className="w-3 h-3 sm:w-4 sm:h-4" />
            )}
            <span className="hidden sm:inline">All Category</span>
            <span className="sm:hidden">
              {isMobileMenuOpen ? "Close" : "Menu"}
            </span>
          </button>

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-8">
            <Link
              href="/"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/about")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              About
            </Link>
            <Link
              href="/shop"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/shop")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/blogs"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/blog")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className={`px-2 lg:px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-200 ${
                isActiveLink("/contact")
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right - Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Login and Register Buttons */}
            <div className="flex items-center space-x-2 ml-2">
              {/* Login Button */}
              <Link
                href="/login"
                className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Login
              </Link>

              {/* Register Button */}
              <Link
                href="/register"
                className="border border-white text-white hover:bg-white hover:text-[#272727] px-6 py-2 rounded-full font-medium text-sm transition-all duration-200"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#272727] border-t border-gray-600">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/about")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                About
              </Link>
              <Link
                href="/shop"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/shop")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                Shop
              </Link>
              <Link
                href="/blogs"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/blog")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActiveLink("/contact")
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
