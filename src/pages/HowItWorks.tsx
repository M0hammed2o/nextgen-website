import { motion } from "framer-motion";
import { Search, Hammer, Rocket, RefreshCw, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    desc: "We start by understanding your business, operations, and pain points. No sales pitch — just a real conversation about what you need and whether we're the right fit.",
  },
  {
    icon: Hammer,
    step: "02",
    title: "Build",
    desc: "We design and develop your system from the ground up. You'll see progress throughout, with regular check-ins and the ability to give feedback as we build.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    desc: "We deploy your system into production, handle the setup, and make sure everything works in your real-world environment before handing over.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Improve",
    desc: "After launch, we continue to support, maintain, and improve your system. As your business grows, your tools evolve with it.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A straightforward process from first conversation to deployed system.</p>
          </motion.div>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="space-y-12 md:space-y-16">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`md:flex items-center gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <s.icon size={20} className="text-primary" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-primary tracking-widest">{s.step}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center mt-16">
            <Link to="/contact">
              <Button size="lg" className="gap-2 px-8">
                Get Started <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
