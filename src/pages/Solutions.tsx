import { motion } from "framer-motion";
import { Bot, BarChart3, Users, ShoppingCart, Cpu, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "WhatsApp AI Assistants",
    desc: "Deploy intelligent WhatsApp-based assistants that handle customer orders, bookings, FAQs, and support conversations — 24/7, without human intervention.",
    features: ["Order processing", "Appointment booking", "Customer FAQ handling", "Multi-language support"],
  },
  {
    icon: BarChart3,
    title: "Custom Operations Dashboards",
    desc: "Real-time web dashboards tailored to your business. Monitor sales, staff activity, inventory, and key metrics from any device.",
    features: ["Real-time analytics", "Role-based access", "Custom KPI tracking", "Export & reporting"],
  },
  {
    icon: Users,
    title: "Attendance & Staff Management",
    desc: "Digital attendance tracking, shift management, and payroll-support tools that replace manual spreadsheets and paper-based systems.",
    features: ["Digital check-in/out", "Shift scheduling", "Payroll data export", "Leave management"],
  },
  {
    icon: ShoppingCart,
    title: "Retail Support Tools",
    desc: "Purpose-built tools for retail operations including price checking, product lookup, stock queries, and workflow automation.",
    features: ["Price checking", "Product search", "Stock management", "Barcode integration"],
  },
  {
    icon: Cpu,
    title: "AI Vision Systems",
    desc: "Computer-vision powered monitoring and analysis systems for security, quality control, and operational oversight.",
    features: ["Object detection", "Activity monitoring", "Alert systems", "Analytics dashboards"],
    badge: "In Development",
  },
  {
    icon: Wrench,
    title: "Custom Software Systems",
    desc: "Bespoke software solutions designed around your unique business processes. We build what off-the-shelf products can't offer.",
    features: ["API integrations", "Process automation", "Legacy system migration", "Custom workflows"],
  },
];

const Solutions = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Solutions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Purpose-built systems that solve real operational challenges for businesses across South Africa.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 relative"
              >
                {s.badge && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {s.badge}
                  </span>
                )}
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact">
              <Button size="lg" className="gap-2 px-8">
                Discuss Your Project <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
