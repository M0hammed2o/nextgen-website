import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot, BarChart3, Users, ShoppingCart, Camera, ArrowRight, Zap, Shield, TrendingUp, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const features = [
  { icon: Bot, title: "WhatsApp AI Assistants", desc: "Automate orders, bookings, and customer support through WhatsApp-first AI." },
  { icon: BarChart3, title: "Custom Dashboards", desc: "Real-time operational analytics and management dashboards built for your workflow." },
  { icon: Users, title: "Staff Management", desc: "Attendance tracking, payroll support, and workforce management systems." },
  { icon: ShoppingCart, title: "Retail Automation", desc: "Price checking, product lookup, and workflow automation for retail operations." },
  { icon: Camera, title: "AI Vision Systems", desc: "Computer-vision monitoring and intelligent camera systems for security and operations.", badge: "In Development" },
  { icon: Cpu, title: "Custom Integrations", desc: "Bespoke software connecting your existing tools into a unified, automated workflow." },
];

const projects = [
  { name: "Midlands Builders Supply", type: "Retail Support System", desc: "Custom-built retail support system for price checking, product lookup, and operational workflow automation." },
  { name: "Muscle Factory Gym", type: "Gym Management System", desc: "Complete gym management platform handling memberships, check-ins, and member communications." },
  { name: "MNJ Systems", type: "Attendance & Payroll Support", desc: "Staff attendance tracking and payroll-support tools streamlining workforce management." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container-narrow px-4 md:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium">
              <Zap size={12} />
              AI-Powered Business Automation
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
              Intelligent Systems for{" "}
              <span className="text-gradient-primary">Real Businesses</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We design and build custom automation, AI assistants, and operational software that solve real problems for businesses across South Africa.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/contact">
                <Button size="lg" className="gap-2 text-base px-8">
                  Book a Demo <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/our-work">
                <Button size="lg" variant="outline" className="text-base px-8 border-border hover:bg-secondary">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50">
        <div className="container-narrow px-4 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Systems Deployed" },
              { value: "100%", label: "Custom Built" },
              { value: "24/7", label: "System Uptime" },
              { value: "ZA", label: "Based in South Africa" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What We Build</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Practical, deployable systems that automate operations and drive efficiency.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 glow-border group relative"
              >
                {f.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {f.badge}
                  </span>
                )}
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-card/30 border-y border-border">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why NextGen Intelligence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We don't sell off-the-shelf software. We build systems tailored to how your business actually operates.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Hands-On Builders", desc: "We write the code, deploy the systems, and support them in production. No outsourcing, no templates." },
              { icon: Shield, title: "Reliable & Tested", desc: "Every system we build is tested in real-world conditions before deployment. We stand behind our work." },
              { icon: TrendingUp, title: "Built to Scale", desc: "Our systems grow with your business. From single-location setups to multi-branch operations." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center space-y-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Systems We've Built</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Real projects deployed for real businesses.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{p.type}</span>
                <h3 className="font-bold text-xl mt-2 mb-3">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/our-work">
              <Button variant="outline" className="gap-2 border-border hover:bg-secondary">
                View All Projects <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-card p-10 md:p-16 text-center glow-border"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Automate Your Operations?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss how custom-built systems can streamline your business.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2 px-8">
                  Book a Demo <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 border-border hover:bg-secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
