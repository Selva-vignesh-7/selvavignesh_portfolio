import { motion } from "framer-motion";
import { ChevronDown, Download, Phone, Mail, Eye } from "lucide-react";
import { openDialer, openEmail } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/Particles";
import ThreeScene from "@/components/ThreeScene";
import PageTransition from "@/components/PageTransition";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <ParticleBackground />
        <ThreeScene />
        
        {/* Gradient Blur Overlays */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-float" />
        
        <div className="relative z-10 text-center space-y-8 px-4 max-w-6xl mx-auto">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-space-grotesk font-bold gradient-text leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              Hi, I'm Selvavignesh
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Java Full-stack Engineer, Technical content writer And Journalist.
            </motion.p>
            
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg hover:opacity-95"
              onClick={() => {
                openDialer();
              }}
            >
              <span className="flex items-center space-x-2">
                <Phone size={18} />
                <span>Call Me</span>
              </span>
            </Button>
            
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    // Replace with actual resume view link
                    window.open('/Selvavignesh_GR_Resume.pdf', '_blank');
                  }}
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </motion.div>

            <Button 
              size="lg"
              variant="secondary"
              className="backdrop-blur-sm border border-secondary/30 hover:bg-secondary/20"
              onClick={() => {
                openEmail();
              }}
            >
              <span className="flex items-center space-x-2">
                <Mail size={18} />
                <span>Email Me</span>
              </span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            {/* <button
              onClick={scrollToAbout}
              className="absolute items-center space-x-10 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={24} className="group-hover:text-primary transition-colors" />
              </motion.div>
            </button> */}
          </motion.div>
        </div>
      </div>

      {/* About Section (distinctive)
      <section id="about" className="relative min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl flex items-center justify-center md:text-6xl font-space-grotesk font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500">
                  What I’m Focused On
                </h2>
                <div className="w-2000 h-1 bg-gradient-primary rounded-full" />
              </div>

              <div className="justify-center space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>• Mastering full‑stack development: React for the front‑end, Spring Boot for robust APIs.</p>
                <p>• Writing meaningful stories and exploring the intersection of tech and journalism.</p>
                <p>• Love to learn new technologies and improve my craft.</p>
                <p>• Growing as a professional by contributing to real‑world projects.</p>
                <p>• Building impactful software solutions.</p>
              </div>

              <motion.div 
                className="grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="glass-card p-4 rounded-xl text-center">
                  <div className="text-2xl font-semibold">Student</div>
                  <div className="text-sm text-muted-foreground">Lifelong learner</div>
                </div>
                <div className="glass-card p-4 rounded-xl text-center">
                  <div className="text-2xl font-semibold">Java FSE</div>
                  <div className="text-sm text-muted-foreground">Spring Boot • React • APIs</div>
                </div>
                <div className="glass-card p-4 rounded-xl text-center">
                  <div className="text-2xl font-semibold">Journalist</div>
                  <div className="text-sm text-muted-foreground">Vikatan Group</div>
                </div>
              </motion.div>
            </motion.div>

            
          </div>
        </div>
      </section> */}
    </PageTransition>
  );
};

export default Hero;