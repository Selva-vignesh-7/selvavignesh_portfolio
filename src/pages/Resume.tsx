import { motion } from "framer-motion";
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-14 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text mb-6">
              Resume
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Download my complete resume or view my professional experience and qualifications below.
            </p>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mt-6 md:mt-8" />
          </motion.div>

          <motion.div 
            className="glass-card rounded-2xl p-6 md:p-8 mb-10 md:mb-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4 md:mr-6">
                <FileText size={32} className="text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-space-grotesk font-bold mb-1 md:mb-2">
                  Professional Resume
                </h2>
                <p className="text-muted-foreground">
                  Complete overview of my experience, skills, and achievements
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Selvavignesh_GR_Resume.pdf';
                    link.download = 'Selvavignesh_GR_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
              </motion.div>
              
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
                  View Online
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            

            <motion.div variants={itemVariants} className="h-full">
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-space-grotesk font-bold">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="relative border-l-2 border-primary/30 pl-4">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">Bachelor of Technology - Information Technology</h4>
                    <p className="text-primary text-sm font-medium">K. Ramakrishnan college of engineering</p>
                    <p className="text-xs text-muted-foreground">2022 - 2026</p>
                  </div>
                  
                  <div className="relative border-l-2 border-primary/30 pl-4">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">HSC +2</h4>
                    <p className="text-primary text-sm font-medium">Bishop Heber Higher Secondary School</p>
                    <p className="text-xs text-muted-foreground">2020-2021</p>
                  </div>

                  <div className="relative border-l-2 border-primary/30 pl-4">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">SSLC</h4>
                    <p className="text-primary text-sm font-medium">Bishop Heber Higher Secondary School</p>
                    <p className="text-xs text-muted-foreground">2019-2020</p>
                  </div>
                </div>
              </div>

            </motion.div>




            <motion.div variants={itemVariants} className="h-full">
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center mb-6">
                  <Briefcase className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-space-grotesk font-bold">
                    Experience
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      role: "Junior Analyst",
                      company: "KPMG UK - Forage",
                      period: "2024 APR - 2024 MAY",
                      description: "Analysed Layoff trends all around the world, Found patterns and Statistics about layoffs among various industries. "
                    },
                    {
                      role : "Student Journalist",
                      company : "Vikatan Magazine",
                      period : "2025 AUG - 2026 AUG",
                      description : "Wrote articles, Made news videos and being a voice for the voiceless - delivering true, fact-checked information that inspires positive change in society"
                    }
                  
                  ].map((job, index) => (
                    <div key={index} className="relative border-l-2 border-primary/30 pl-4">
                      <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                      <h4 className="font-semibold text-foreground leading-tight">{job.role}</h4>
                      <p className="text-primary text-sm font-medium">{job.company}</p>
                      <p className="text-xs text-muted-foreground mb-2">{job.period}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>



            <motion.div variants={itemVariants} className="h-full">
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center mb-6">
                  <Award className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-space-grotesk font-bold">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="relative border-l-2 border-primary/30 pl-4">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">Microsoft Azure Fundamentals</h4>
                    <p className="text-primary text-sm font-medium">Microsoft</p>
                  </div>

                  <div className="relative border-l-2 border-primary/30 pl-4">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">Java Programming Fundamentals</h4>
                    <p className="text-primary text-sm font-medium">Skillrack</p>
                  </div>

                  <div className="relative border-l-2 border-primary/30 pl-4">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">SQL Basics</h4>
                    <p className="text-primary text-sm font-medium">HackerRank</p>
                  </div>

                  <div className="relative border-l-2 border-primary/30 pl-4">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">Spring Framework</h4>
                    <p className="text-primary text-sm font-medium">LinkedIn Learning</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;