"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function ProjectsSection() {


  const acosOptimizationData = [
    { month: "Week 1", acos: 42, roas: 2.3, spend: 3850, sales: 8855, impressions: 42500, clicks: 1450 },
    { month: "Week 2", acos: 38, roas: 2.6, spend: 4210, sales: 10946, impressions: 45200, clicks: 1560 },
    { month: "Week 3", acos: 35, roas: 2.8, spend: 4390, sales: 12292, impressions: 48700, clicks: 1680 },
    { month: "Week 4", acos: 28, roas: 3.4, spend: 4120, sales: 14008, impressions: 51200, clicks: 1750 },
  ]

  const bidStrategyData = [
    { campaign: "High Performers", before: 45, after: 28, improvement: 38, ctr: 4.8, cpc: 2.1 },
    { campaign: "Mid Performers", before: 38, after: 32, improvement: 16, ctr: 3.2, cpc: 1.5 },
    { campaign: "Low Performers", before: 62, after: 48, improvement: 23, ctr: 1.8, cpc: 0.9 },
  ]

  const negativeKeywordImpactData = [
    { week: "Week 1", wastedSpend: 1250, optimizedSpend: 3850, saved: 1250, ctr: 2.1 },
    { week: "Week 2", wastedSpend: 980, optimizedSpend: 4210, saved: 980, ctr: 2.8 },
    { week: "Week 3", wastedSpend: 760, optimizedSpend: 4390, saved: 760, ctr: 3.2 },
    { week: "Week 4", wastedSpend: 420, optimizedSpend: 4120, saved: 420, ctr: 3.8 },
  ]

  const projects = [
    {
      title: "ACOS Optimization Analysis",
      product: "Performance Improvement Over 4 Weeks",
      description:
        "Analyzed campaign optimization strategies by evaluating bid adjustments, keyword performance, and conversion metrics. Simulated achieving 33% ACOS reduction and 48% ROAS improvement through data-driven decision making.",
      chart: (
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={acosOptimizationData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="colorAcos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorRoas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "12px",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="acos"
              stroke="#ef4444"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorAcos)"
              name="ACOS (%)"
              dot={{ r: 4, fill: '#ef4444' }}
            />
            <Area
              type="monotone"
              dataKey="roas"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRoas)"
              name="ROAS (x)"
              dot={{ r: 4, fill: '#10b981' }}
            />
            <Area
              type="monotone"
              dataKey="spend"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSpend)"
              name="Spend ($)"
              yAxisId="right"
              dot={{ r: 4, fill: '#3b82f6' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "Bid Strategy Optimization",
      product: "Tiered Campaign Performance Analysis",
      description:
        "Evaluated tiered bid adjustment strategies based on performance metrics. Analyzed potential improvements by increasing bids 20-25% for high performers and reducing 10-15% for underperforming campaigns.",
      chart: (
        <div className="w-full" style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={bidStrategyData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              barGap={0}
              barCategoryGap="25%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="campaign" 
                tick={{ fontSize: 12 }} 
                angle={-10}
                textAnchor="end"
                height={60}
              />
              <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} label={{ value: "ACOS (%)", angle: -90, position: 'insideLeft' }} />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                tick={{ fontSize: 12 }} 
                domain={[0, 5]}
                label={{ value: "CTR (%)", angle: 90, position: 'insideRight' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
                formatter={(value, name) => {
                  if (name === 'CTR (%)' || name === 'Improvement (%)') return [value, name];
                  if (name === 'CPC ($)') return [`$${value.toFixed(2)}`, name];
                  return [value, name];
                }}
              />
              <Legend />
              <Bar 
                yAxisId="left"
                dataKey="before" 
                fill="#f59e0b" 
                name="Before ACOS (%)" 
                radius={[4, 4, 0, 0]}
                maxBarSize={30}
              />
              <Bar 
                yAxisId="left"
                dataKey="after" 
                fill="#10b981" 
                name="After ACOS (%)" 
                radius={[4, 4, 0, 0]}
                maxBarSize={30}
              />
              <Bar 
                yAxisId="right"
                dataKey="ctr" 
                fill="#8b5cf6" 
                name="CTR (%)" 
                radius={[4, 4, 0, 0]}
                maxBarSize={30}
              />
              <Bar 
                yAxisId="left"
                dataKey="cpc" 
                fill="#3b82f6" 
                name="CPC ($)" 
                radius={[4, 4, 0, 0]}
                maxBarSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      title: "Negative Keyword Impact Analysis",
      product: "4-Week Spend Efficiency Study",
      description:
        "Analyzed the impact of strategic negative keyword implementation on ad spend efficiency. Demonstrated how progressive negative keyword optimization could reduce wasted spend by 60% while maintaining sales volume.",
      chart: (
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={negativeKeywordImpactData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="colorWasted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="week" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} label={{ value: "Spend ($)", angle: -90, position: "insideLeft" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "12px",
              }}
              formatter={(value: number) => `$${value.toFixed(0)}`}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="wastedSpend"
              stroke="#ef4444"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorWasted)"
              name="Wasted Spend ($)"
              dot={{ r: 4, fill: '#ef4444' }}
            />
            <Area
              type="monotone"
              dataKey="optimizedSpend"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorOptimized)"
              name="Optimized Spend ($)"
              dot={{ r: 4, fill: '#10b981' }}
            />
            <Area
              type="monotone"
              dataKey="saved"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSaved)"
              name="Weekly Savings ($)"
              dot={{ r: 4, fill: '#3b82f6' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ),
    },
  ]

  return (
    <section className="px-6 py-20 md:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900">Practice Projects</h2>
          <p className="text-lg text-slate-600">
            Real-world campaign simulations showcasing data-driven optimization strategies
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-4">{project.product}</p>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">{project.chart}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
