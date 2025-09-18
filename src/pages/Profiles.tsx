import { motion } from "framer-motion";
import { Github, Code, Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Profiles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const profiles = [
    {
      name: "GitHub",
      description: "Open source contributions and personal projects",
      icon: Github,
      stats: { label: "Repositories", value: "20+" },
      color: "from-gray-600 to-gray-800",
      url: "https://github.com/Selva-vignesh-7",
      username: "@Selva-vignesh-7"
    },
    {
      name: "LeetCode",
      description: "Algorithm and data structure problem solving",
      icon: Code,
      stats: { label: "Problems Solved", value: "100+" },
      color: "from-orange-500 to-red-500",
      url: "https://leetcode.com/u/selvavignesh03",
      username: "@selvavignesh03"
    },
    {
      name: "HackerRank",
      description: "Competitive programming and skill assessments",
      icon: Trophy,
      stats: { label: "Stars Earned", value: "4★" },
      color: "from-green-500 to-emerald-600",
      url: "https://www.hackerrank.com/profile/selvamarshall13",
      username: "@yourusername"
    },
    {
      name: "SkillRack",
      description: "Competitive programming contests and challenges",
      icon: Code,
      stats: { label: "Rating", value: "800+" },
      color: "from-amber-500 to-orange-600",
      url: "http://www.skillrack.com/profile/419928/e71f33cbf76b1bd61c849580f2edb3be74f3c14e",
      username: "SkillRack Profile"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text mb-6">
              Coding Profiles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my coding journey across different platforms, from competitive programming to open source contributions.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8" />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {profiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <motion.div
                  key={profile.name}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="glass-card rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-glow">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${profile.color} p-0.5`}>
                      <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                        <Icon size={28} className="text-foreground group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
                        {profile.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {profile.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="text-xs text-muted-foreground mb-1">
                        {profile.stats.label}
                      </div>
                      <div className="text-2xl font-bold gradient-text">
                        {profile.stats.value}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs text-muted-foreground">
                        {profile.username}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                        onClick={() => window.open(profile.url, '_blank')}
                      >
                        <span>View Profile</span>
                        <ExternalLink size={14} className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-space-grotesk font-bold mb-4">
                Let's Code Together
              </h2>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating on a project or discussing algorithms? 
                Feel free to connect with me on any of these platforms.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity" onClick={() => (window.location.href = "/contact")}>
                Get In Touch
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Profiles;