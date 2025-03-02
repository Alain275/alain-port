"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  
  useEffect(() => setMounted(true), [])
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }
    
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }
    
    window.addEventListener("scroll", handleScroll)
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    })
    
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [lastScrollY])
  
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }
  
  const navigationItems = [
    ["home", "Home"],
    ["about", "About"],
    ["experience", "Experience"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["services", "Services"],
    ["education", "Education"],
    ["contact", "Contact"],
  ]
  
  if (!mounted) return null
  
  return (
    <header
      className={`
        fixed w-full z-50 transition-all duration-300
        ${isVisible ? "top-0" : "-top-20"}
        ${theme === "dark" ? "bg-gray-900/95" : "bg-white/95"}
        backdrop-blur-sm shadow-md
      `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl">
            <span className="text-blue-600 dark:text-blue-400">Port</span>
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>folio</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navigationItems.map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`
                      transition-colors duration-300
                      ${
                        activeSection === id
                          ? "text-blue-600 dark:text-blue-400"
                          : theme === "dark"
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-800 hover:text-blue-600"
                      }
                    `}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={theme === "dark" ? "text-white" : "text-gray-900"} />
            ) : (
              <Menu className={theme === "dark" ? "text-white" : "text-gray-900"} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <ul className="flex flex-col space-y-4">
              {navigationItems.map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`
                      block w-full text-left py-2 transition-colors duration-300
                      ${
                        activeSection === id
                          ? "text-blue-600 dark:text-blue-400"
                          : theme === "dark"
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-800 hover:text-blue-600"
                      }
                    `}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}