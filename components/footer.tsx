"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-white py-8 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400">© {currentYear} Bien Joshua Macuha. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/bien-joshua-macuha-331150353/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mbienjoshua@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
