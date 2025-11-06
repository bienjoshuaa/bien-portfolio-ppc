"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="pt-24 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-3 text-slate-900 tracking-tight"
        >
          Bien Joshua Macuha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-primary font-semibold mb-2"
        >
          Amazon PPC Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="text-base text-slate-600 mb-8"
        >
          BS Information Technology – Business Analytics Major | Data-Driven Advertising Professional
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center gap-6 text-sm"
        >
          <a
            href="mailto:mbienjoshua@gmail.com"
            className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors font-medium"
          >
            <Mail size={18} />
            mbienjoshua@gmail.com
          </a>
          <a
            href="tel:+639662874088"
            className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors font-medium"
          >
            <Phone size={18} />
            +63 966 287 4088
          </a>
        </motion.div>
      </div>
    </motion.header>
  )
}
