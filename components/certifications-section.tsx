"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Download, X, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<{title: string; pdf: string} | null>(null)

  const certifications = [
    {
      title: "Amazon Sponsored Ads Advanced Certification",
      date: "November 1, 2025",
      id: "33dd55dc-9b63-45e2-887a-43b92bf221af",
      expires: "November 1, 2027",
      description: "Advanced expertise in sponsored ads campaign management and optimization",
      pdf: "/Advanced_AmazonAds_Cert.pdf"
    },
    {
      title: "Amazon Sponsored Ads Certification",
      date: "October 28, 2025",
      id: "1757371c-8465-42d2-8d33-6e1e53d085d9",
      expires: "October 28, 2027",
      description: "Core competency in sponsored ads fundamentals and campaign execution",
      pdf: "/AmazonSponsoredAds_Cert.pdf"
    },
    {
      title: "Amazon Ads Foundations Certification",
      date: "November 5, 2025",
      id: "ed3e9d3c-861c-464a-9de1-0935dcf07b8c",
      expires: "November 5, 2027",
      description: "Foundational knowledge of Amazon advertising ecosystem and best practices",
      pdf: "/AmazonAds_Cert.pdf"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="px-6 py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900">Certifications</h2>
          <p className="text-lg text-slate-600">Amazon Ads Academy certified professional</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, x: 5 }}
              onClick={() => setSelectedCert({ title: cert.title, pdf: cert.pdf })}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCert({ title: cert.title, pdf: cert.pdf })}
              tabIndex={0}
              aria-label={`View ${cert.title} certificate`}
              className="cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-slate-200 hover:border-blue-400 transition-all shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <CheckCircle2 className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{cert.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{cert.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                    <span>
                      <span className="font-semibold text-slate-700">Issued:</span> {cert.date}
                    </span>
                    <span>
                      <span className="font-semibold text-slate-700">Expires:</span> {cert.expires}
                    </span>
                    <span className="font-mono text-slate-600">ID: {cert.id.substring(0, 8)}...</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <span className="text-sm font-medium">View</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center bg-slate-50">
              <h3 className="text-lg font-semibold text-slate-800">{selectedCert.title}</h3>
              <div className="flex items-center gap-3">
                <a 
                  href={selectedCert.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={16} />
                  Download
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 hover:bg-slate-200 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe 
                src={`${selectedCert.pdf}#toolbar=0&navpanes=0`} 
                className="w-full h-full min-h-[70vh]"
                title={`${selectedCert.title} PDF`}
              />
            </div>
            <div className="p-4 border-t bg-slate-50 text-center">
              <p className="text-sm text-slate-600">
                You can verify this certificate through Amazon Ads Academy official channels.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
