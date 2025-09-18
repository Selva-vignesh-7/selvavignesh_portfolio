import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, Palette, Brain, Zap } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "Javascript", level: 85 },
      { name: "React.js", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Bootstrap", level: 80 },
      { name: "API Integration", level: 75 }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Java ( Core Java, OOP, Multi threading, Exception handling )", level: 85 },
      { name: "Spring boot ( REST API, Microservices )", level: 75 },
      { name: "Spring MVC", level: 75 },
      { name: "Spring Data JPA", level: 75 },
      { name: "Spring Security", level: 60 },
      { name: "Authentication & Authorization", level: 55 }
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "Relational Databases: MySQL, PostgreSQL, Oracle", level: 80 },
      { name: "NoSQL: MongoDB", level: 70 },
      { name: "ORM: JPA, Hibernate", level: 75 }
    ]
  },
  {
    title: "Additional tools",
    icon: Smartphone,
    skills: [
      { name: "Build tools ( Maven, Gradle )", level: 88 },
      { name: "Version Control ( Git & GitHub )", level: 90 },
      { name: "Deployment ( Docker )", level: 60 },
      { name: "Postman", level: 60 },
      { name: "Testing ( Junit, Mockito )", level: 65 }
    ]
  }
];

const additionalSkills = [
  { name: "Data Analytics", icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "Non-Fiction Writing", icon: Zap, color: "from-yellow-500 to-orange-500" },
  { name: "Technical content writing", icon: Code, color: "from-green-500 to-blue-500" },
  { name: "Journalism", icon: Server, color: "from-blue-500 to-indigo-500" },
];

const Skills = () => {
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
        <div className="container mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text mb-6">
              My Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8" />
          </motion.div>

          {/* Main Skills Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-500"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-space-grotesk font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-primary font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">
              Additional Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-card rounded-xl p-6 text-center group cursor-pointer"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} p-0.5`}>
                      <div className="w-full h-full bg-background rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <Icon size={24} className="text-foreground group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-space-grotesk font-bold mb-12">
              Experience Stats
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "Fresher", label: "With Hands-on Experience", suffix: "" },
                { number: "5", label: "Projects Completed", suffix: "+" },
                { number: "6", label: "Technologies Explored", suffix: "+" },
                
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;