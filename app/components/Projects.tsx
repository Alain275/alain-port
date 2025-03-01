"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart functionality, and payment processing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    demoUrl: "https://ecommerce-demo-project.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
    image: "/placeholder.svg?height=400&width=600",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    tech: ["Next.js", "Socket.io", "Express", "MongoDB", "Redux"],
    demoUrl: "https://task-manager-demo.vercel.app",
    githubUrl: "https://github.com/username/task-management",
    image: "/placeholder.svg?height=400&width=600",
    featured: false
  },
  {
    title: "Healthcare Portal",
    description: "A secure healthcare portal allowing patients to schedule appointments and access medical records.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Auth0"],
    demoUrl: "https://healthcare-portal-demo.netlify.app",
    githubUrl: "https://github.com/username/healthcare-portal",
    image: "/placeholder.svg?height=400&width=600",
    featured: true
  },
  {
    title: "Real Estate Listings",
    description: "A real estate platform with advanced search, filtering, and interactive map integration.",
    tech: ["React", "Express", "MongoDB", "Mapbox", "Cloudinary"],
    demoUrl: "https://realestate-finder-demo.vercel.app",
    githubUrl: "https://github.com/username/real-estate-listings",
    image: "/placeholder.svg?height=400&width=600",
    featured: false
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking engagement across multiple social media platforms.",
    tech: ["React", "D3.js", "Express", "MongoDB", "OAuth2"],
    demoUrl: "https://social-dashboard-demo.netlify.app",
    githubUrl: "https://github.com/username/social-dashboard",
    image: "/placeholder.svg?height=400&width=600",
    featured: false
  },
  {
    title: "Inventory Management System",
    description: "A comprehensive inventory management system with barcode scanning and reporting capabilities.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    demoUrl: "https://inventory-system-demo.vercel.app",
    githubUrl: "https://github.com/username/inventory-management",
    image: "/placeholder.svg?height=400&width=600",
    featured: true
  }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="project-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10L90 10L90 90L10 90Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#project-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <AnimatedSectionHeader title="Featured Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-blue-600 text-white px-3 py-1 rounded-bl-lg z-20 flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="https://github.com/username"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            View More Projects
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-64 h-64 -mb-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}