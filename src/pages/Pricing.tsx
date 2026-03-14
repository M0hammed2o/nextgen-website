import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Phone, Mail, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pricing</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every system we build is custom-designed for your business, so pricing depends on your unique requirements and scope.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-card border border-primary/30 rounded-2xl p-10 md:p-14 text-center glow-border">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles size={28} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Free Consultation</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                We offer a <span className="text-primary font-semibold">free consultation</span> to understand your business needs and recommend the right solution. No obligations, no hidden fees — just an honest conversation about how we can help.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 px-8">
                    Book a Free Consultation <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <p className="text-sm font-medium text-foreground">Get in touch directly</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                  <a href="tel:0837866021" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone size={14} />
                    083 786 6021
                  </a>
                  <a href="mailto:info@nextgenintelligence.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail size={14} />
                    info@nextgenintelligence.co.za
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto"
          >
            We'll provide a tailored quote after understanding your requirements. All prices in ZAR. Monthly hosting and maintenance fees may apply.
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
