"use client"

import { useTheme } from "next-themes"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={`
      py-12 px-6
      bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300
    `}>
      <div className="container mx-auto">
        {/* Contact Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Let's discuss your project</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Let's connect! Reach out for projects, collaborations, questions, or just to say hello.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Address Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-gray-700 p-3 rounded-full">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Address:</p>
                <p className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Kigali RWANDA</p>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-gray-700 p-3 rounded-full">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email:</p>
                <a href="mailto:alainshema275@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  alainshema275@gmail.com
                </a>
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-600 flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-gray-700 p-3 rounded-full">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone/Whatsapp:</p>
                <a href="tel:+250780185432" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  +250 780 185 432
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              <span className="text-blue-600">Alain</span>
              <span>.</span>
            </h2>
          </div>
          <div className="text-gray-600 dark:text-gray-300">
            © {currentYear} Alain SHEMA 
          </div>
        </div>
      </div>
    </footer>
  )
}