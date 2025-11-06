"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

export default function DifferenceSection() {
  const points = [
    "I see PPC as both data and decision-making — understanding the story behind the numbers.",
    "With my background in Business Analytics, I focus on using insights to improve performance, not just monitor it.",
    "I'm a fast learner who adapts quickly to new tools, techniques, and platforms.",
    "I'm detail-oriented, analytical, and genuinely passionate about helping brands grow through performance-driven advertising.",
  ]

  return (
    <section className="px-6 py-16 md:py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Lightbulb className="text-blue-600 mx-auto mb-4" size={32} />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Makes Me Different</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          {points.map((point, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto"
            >
              {point}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          id="contact"
          className="mt-16 pt-16 border-t border-slate-200 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h3>
          <div className="space-y-3">
            <p className="text-lg text-slate-700">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:mbienjoshua@gmail.com" className="text-blue-600 hover:underline">
                mbienjoshua@gmail.com
              </a>
            </p>
            <p className="text-lg text-slate-700">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+639662874088" className="text-blue-600 hover:underline">
                +63 966 287 4088
              </a>
            </p>
            <p className="text-lg text-slate-700">
              <span className="font-semibold">Location:</span> San Pascual, Batangas, Philippines
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
