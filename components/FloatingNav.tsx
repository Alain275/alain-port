import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Get the label of the current active section
  const activeLabel = sections.find(section => section.id === activeSection)?.label || ""

  return (
    <>
      {/* Dots navigation */}
      <motion.div
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col gap-3">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              className="relative flex items-center"
              aria-label={`Scroll to ${label}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? "bg-blue-600 dark:bg-blue-400 scale-125"
                    : "bg-gray-400 dark:bg-gray-600 hover:scale-110"
                }`}
              />
            </button>
          ))}
        </div>
      </motion.div>

      {/* Current section indicator - separate from the dots */}
      <motion.div 
        className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 bg-blue-600 text-white px-3 py-2 rounded-md"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="text-sm font-medium">
          {activeLabel}
        </div>
      </motion.div>
    </>
  )
}