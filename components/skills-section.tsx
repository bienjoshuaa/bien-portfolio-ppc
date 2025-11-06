"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function SkillsSection() {
  const ppcSkills = [
    "Amazon PPC Fundamentals",
    "Keyword Research (Helium 10)",
    "Bid Management & Budget Allocation",
    "Negative Keyword Implementation",
    "ACOS, CTR, CPC, and Conversion Rate Analysis",
    "Analytics & Reporting",
    "Campaign Data Visualization using Power BI",
    "Excel/Google Sheets for Performance Tracking",
    "Competitor & Market Trend Analysis",
  ]

  const technicalTools = [
    "Helium 10",
    "Microsoft Excel / Google Sheets",
    "Power BI",
    "Canva",
    "PostgreSQL",
    "Python",
    "AWS",
    "Git",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="px-6 py-16 md:py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-slate-900"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* PPC Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-6">PPC Skills</h3>
            {ppcSkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-700">{skill}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Tools */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Tools</h3>
            {technicalTools.map((tool, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-700">{tool}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
