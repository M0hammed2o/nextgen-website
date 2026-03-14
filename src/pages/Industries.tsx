import { motion } from "framer-motion";
import { ShoppingCart, Dumbbell, UtensilsCrossed, Building2, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail",
    desc: "From price checking and product lookup to full inventory management — we build tools that speed up retail operations and reduce manual errors.",
    useCases: ["Product lookup systems", "Price checking tools", "Inventory tracking", "Staff workflow automation"],
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    desc: "Member management, check-in systems, and communication tools built specifically for gyms and fitness businesses.",
    useCases: ["Membership management", "Automated check-ins", "Class scheduling", "Member communication"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafés",
    desc: "WhatsApp ordering, menu management, and kitchen display systems that streamline food service operations.",
    useCases: ["WhatsApp ordering", "Menu management", "Order tracking", "Customer engagement"],
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "Custom operational tools for any SME looking to automate repetitive tasks, improve data visibility, and reduce costs.",
    useCases: ["Custom dashboards", "Process automation", "Staff management", "Reporting tools"],
  },
];

const Industries = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Industries We Serve</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">We build systems for businesses that need practical, reliable automation — not enterprise bloatware.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <ind.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{ind.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{ind.desc}</p>
                <ul className="space-y-2">
                  {ind.useCases.map((u) => (
                    <li key={u} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact">
              <Button size="lg" className="gap-2 px-8">
                Discuss Your Industry <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
