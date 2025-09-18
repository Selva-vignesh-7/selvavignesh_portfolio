

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    title: "Cramly AI - web content summarizer",
    description: "Cramly is a Chrome extension that helps students study smarter, not harder. Powered by the Gemini 2.5 Pro AI model via Google Gemini API, Cramly generates quick, summarized content from websites, documents, presentations, and more perfect for last-minute cramming.",
    tech: ["JavaScript", "Chrome Extension", "Gemini API"],
    image: "/cramlyAI.png",
    github: "https://github.com/Selva-vignesh-7/cramly-ai",
    live: "https://github.com/Selva-vignesh-7/cramly-ai", // replace with actual store link if available
    featured: true
  },
  {
    title: "EmployeeOpsX - Employee Management System",
    description: "Full-stack web application for managing employee records, featuring create, read, update, and delete (CRUD) operations with a React frontend, Spring Boot backend, and MySQL database.",
    tech: ["HTML", "CSS", "JavaScript", "Spring boot", "REST API", "React", "MySQL"],
    image: "/employee.png",
    github: "https://github.com/Selva-vignesh-7/EmployeeOpsX",
    live: "https://github.com/Selva-vignesh-7/EmployeeOpsX",
    featured: true
  },
  {
    title: "EDA - Layoffs Data Analysis",
    description: "Cleaned the raw data and performed Exploratory Data Analysis (EDA) of layoffs data to identify patterns and trends in the industry.",
    tech: ["MySQL", "Excel"],
    image: "/EDA.png",
    github: "https://github.com/Selva-vignesh-7/EDA_on_layoffs",
    live: "https://github.com/Selva-vignesh-7/EDA_on_layoffs",
    featured: true
  },
  {
    title: "Restraunt recommendation system using LLD",
    description: "Restraunt recommendation system using LLD for Identifying the restraunt based on the user's location and preferences.",
    tech: ["HTML", "CSS", "Python", "MongoDB"],
    image: "/Restraunt.png",
    github: "https://github.com/Selva-vignesh-7/Restaurant-Recommendation-using-LLD",
    live: "https://github.com/Selva-vignesh-7/Restaurant-Recommendation-using-LLD",
    featured: false
  },
  {
    title: "Safe Crypto Stocks",
    description: "SafeCryptoStocks is a stock market platform offering advanced tools for portfolio management and market analysis. Key features include:- Real-time market data visualization for informed investment decisions Intuitive dashboard with live stock performance, portfolio insights, and news updates.",
    tech: ["Spring", "React", "REST API", "MySQL"],
    image: "/crypto.png",
    github: "https://github.com/Selva-vignesh-7/SafeCryptoStocks",
    live: "https://github.com/Selva-vignesh-7/SafeCryptoStocks",
    featured: true
  },
  {
    title: "Web application projects",
    description: "Web application projects like landing page, portfolio, and calculator",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/Web.png",
    github: "https://github.com/Selva-vignesh-7/CODSOFT",
    live: "https://github.com/Selva-vignesh-7/CODSOFT",
    featured: false
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for creating innovative digital solutions.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8" />
          </motion.div>

          {/* Featured Projects */}
          <motion.div 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-space-grotesk font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={projectVariants}
                  className="group relative"
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-primary/80 hover:bg-primary">
                            <Github size={16} className="mr-2" />
                            Code
                          </Button>
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-secondary/80 hover:bg-secondary">
                            <ExternalLink size={16} className="mr-2" />
                            Live
                          </Button>
                        </a>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-space-grotesk font-semibold mb-2 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-space-grotesk font-bold mb-8 text-center">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={`all-${project.title}`}
                  variants={projectVariants}
                  className="group"
                >
                  <div className="glass-card rounded-xl overflow-hidden hover:shadow-primary transition-all duration-300 hover:scale-105">
                    <div className="relative h-32 overflow-hidden">
                      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 text-foreground text-sm">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                              <Github size={12} />
                            </Button>
                          </a>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                              <ExternalLink size={12} />
                            </Button>
                          </a>
                        </div>
                        
                        <span className="text-xs text-primary font-medium">
                          {project.tech[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-space-grotesk font-bold mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-8">Let's create something amazing together.</p>
            <Button className="btn-hero" onClick={() => (window.location.href = "/contact")}>
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
