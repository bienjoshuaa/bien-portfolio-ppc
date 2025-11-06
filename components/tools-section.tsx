"use client"

import { motion } from "framer-motion"

export default function ToolsSection() {
  const tools = [
    { name: "Helium 10", icon: "🔍", description: "Keyword Research & Analytics" },
    { name: "Microsoft Excel", icon: "📊", description: "Performance Tracking" },
    { name: "Power BI", icon: "📈", description: "Data Visualization" },
    { name: "Google Sheets", icon: "📑", description: "Campaign Management" },
    { name: "PostgreSQL", icon: "🗄️", description: "Database Management" },
    { name: "Python", icon: "🐍", description: "Data Analysis" },
    { name: "AWS", icon: "☁️", description: "Cloud Services" },
    { name: "Canva", icon: "🎨", description: "Design & Graphics" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
          Tools I've Worked With
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 border border-blue-100 text-center cursor-pointer hover:border-blue-400 transition-colors"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="font-bold text-slate-900 mb-1">{tool.name}</h3>
              <p className="text-xs text-slate-600">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
