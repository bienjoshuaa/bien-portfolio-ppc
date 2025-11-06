"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center w-full"
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[32rem] rounded-2xl overflow-hidden shadow-xl border-4 border-blue-100">
              <Image 
                src="/profile-photo.jpg" 
                alt="Bien Joshua Macuha" 
                fill 
                className="object-cover" 
                priority 
                sizes="(max-width: 768px) 18rem, 20rem"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">Bien Joshua Macuha</h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Amazon PPC Specialist & Business Analytics Graduate
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Leveraging data-driven insights to reduce ACOS, improve ROAS, and scale profitable campaigns. Let's turn
              your advertising budget into measurable results.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Explore My Background
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.a
                href="/Bien_Joshua_CV.pdf"
                download="Bien_Joshua_Macuha_CV.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white text-slate-800 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-sm hover:shadow-md"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
