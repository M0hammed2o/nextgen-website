import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Midlands Builders Supply",
    type: "Retail Support System",
    desc: "A comprehensive retail support system custom-built for a building supply business. The system includes product price checking, lookup tools, and operational workflow automation that replaced slow manual processes.",
    tech: ["Web Dashboard", "Product Database", "Search & Lookup", "Workflow Automation"],
    status: "Deployed",
  },
  {
    name: "Muscle Factory Gym",
    type: "Gym Management System",
    desc: "Full gym management platform handling member registrations, check-ins, membership tracking, and communication tools. Designed to streamline daily operations and reduce administrative overhead.",
    tech: ["Membership Management", "Check-in System", "Member Portal", "Reporting"],
    status: "Deployed",
  },
  {
    name: "MNJ Systems",
    type: "Attendance & Payroll Support",
    desc: "Digital attendance tracking and payroll-support tool replacing paper-based systems. Staff clock in/out digitally, with data exported to support payroll calculations.",
    tech: ["Digital Attendance", "Payroll Export", "Shift Tracking", "Admin Dashboard"],
    status: "Deployed",
  },
  {
    name: "AI Camera & Vision Systems",
    type: "AI-Powered Monitoring",
    desc: "Intelligent camera and computer-vision systems designed for security monitoring, activity detection, and operational analytics. Currently in active development and testing.",
    tech: ["Computer Vision", "Object Detection", "Alert System", "Analytics"],
    status: "In Development",
  },
];

const OurWork = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Work</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Real systems built and deployed for real businesses. Every project listed here is a system we designed, built, and support.</p>
          </motion.div>
          <div className="space-y-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{p.type}</span>
                    <h3 className="font-bold text-2xl mt-1">{p.name}</h3>
                  </div>
                  <span className={`inline-flex items-center text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    p.status === "Deployed"
                      ? "bg-accent/10 text-accent border-accent/20"
                      : "bg-primary/10 text-primary border-primary/20"
                  }`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact">
              <Button size="lg" className="gap-2 px-8">
                Start Your Project <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;
