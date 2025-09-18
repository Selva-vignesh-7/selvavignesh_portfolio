import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, MessageCircle } from "lucide-react";
import { openDialer, openEmail, DEFAULT_EMAIL } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Selva-vignesh-7", color: "hover:text-white" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/selvavignesh7", color: "hover:text-blue-400" },
  { name: "Twitter (X)", icon: Twitter, href: "https://x.com/beloved_Black_", color: "hover:text-blue-500" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/selvavignesh03/", color: "hover:text-blue-600" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919488718147", color: "hover:text-green-500" },
];

const Contact = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-space-grotesk font-bold mb-6 text-foreground">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Whether you need a full-stack developer, a creative collaborator, or just want to say hello, I'd love to hear from you.
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <button onClick={() => openEmail()} className="text-left text-muted-foreground hover:text-primary transition-colors underline decoration-transparent hover:decoration-inherit">
                      {DEFAULT_EMAIL}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <button onClick={() => openDialer()} className="text-left text-muted-foreground hover:text-secondary transition-colors underline decoration-transparent hover:decoration-inherit">
                      +91 94887 18147
                    </button>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com/?q=Trichy,Tamil+Nadu,India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors cursor-pointer"
                >
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Trichy, Tamilnadu</p>
                  </div>
                </div>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-space-grotesk font-semibold mb-4 text-foreground">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-muted/50 rounded-xl transition-all duration-300 ${social.color} hover:shadow-lg hover:bg-muted`}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Special CTA Card (form removed) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-space-grotesk font-bold mb-6 text-foreground">
                  Quick Actions
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white" onClick={() => openEmail()}>
                    <Mail className="mr-2 h-5 w-5" /> Compose Email
                  </Button>
                  <Button className="w-full" variant="secondary" onClick={() => openDialer()}>
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </Button>
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  Prefer another channel? Ping me on LinkedIn or Instagram from the icons on the left.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;