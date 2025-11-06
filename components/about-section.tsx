"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="px-6 py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-slate-900">About Me</h2>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              I'm an aspiring PPC Specialist passionate about data-driven advertising and campaign optimization. As a
              fresh graduate majoring in Business Analytics, I've built strong skills in data interpretation, trend
              analysis, and performance tracking — all essential for managing paid ad campaigns effectively.
            </p>

            <p>
              Through my Amazon PPC training and hands-on practice with Helium 10, I've learned to conduct keyword
              research, create campaign simulations, and analyze metrics like ACOS, CTR, and conversion rates to
              optimize results.
            </p>

            <p>
              I'm analytical, eager to learn, and driven to help brands turn data into strategy — maximizing every
              click, impression, and ad spend.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
