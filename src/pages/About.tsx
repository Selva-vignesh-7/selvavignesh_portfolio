import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { User, Heart, Coffee, MapPin, Calendar } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import PageTransition from "@/components/PageTransition";

const About = () => {
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
        <div className="container mx-auto max-w-4xl">
          {/* Header moved to top */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the person behind the code. My journey, passions, and what drives me to create amazing digital experiences.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8" />
          </motion.div>

          {/* Carousel autoplay state */}
          {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
          {(() => {
            // co-locate state near usage for clarity in this file
            const [api, setApi] = useState<CarouselApi | null>(null);
            const [isPaused, setIsPaused] = useState(false);

            useEffect(() => {
              if (!api) return;
              const id = setInterval(() => {
                if (!isPaused) api.scrollNext();
              }, 4000);
              return () => clearInterval(id);
            }, [api, isPaused]);

            // Render block with scoped state
            return (
              <motion.div
                className="mb-20 -mx-4 md:-mx-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="relative w-full px-4 md:px-6">
                  <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
                    <CarouselContent>
                      {[
                        {
                          src: "/selva.jpg",
                          title: "B.Tech - IT • Java FSE",
                          subtitle: "Building scalable applications with modern technologies",
                        },
                        {
                          src: "/vikatan.jpg",
                          title: "Writer - Journalist at Vikatan Magazine",
                          subtitle: "Forging stories to be a voice for the voiceless",
                        },
                        {
                          src: "/1.jpg",
                          title: "Volleyball Player",
                          subtitle: "Hardwork • Discipline • Resilience",
                        },
                        {
                          src: "/2.jpg",
                          title: "Setter",
                          subtitle: "Communication • Strategy • Leadership",
                        },
                        {
                          src: "/3.jpg",
                          title: "Team Player",
                          subtitle: "Focus • Consistency • Sportsmanship",
                        },
                        {
                          src: "/4.jpg",
                          title: "Athlete",
                          subtitle: "Endurance • Determination • Mindset",
                        },
                        {
                          src: "/5.jpg",
                          title: "On and Off Court",
                          subtitle: "Practice • Progress • Perform",
                        },
                      ].map((item, idx) => (
                        <CarouselItem key={`${item.src}-${idx}`}>
                          <div className="relative h-[500px] md:h-[640px] rounded-2xl overflow-hidden bg-black">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                              <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white drop-shadow-md mb-2">
                                {item.title}
                              </h3>
                              <p className="text-white/90 md:text-lg leading-relaxed">
                                {item.subtitle}
                              </p>
                              <div className="mt-4 h-1 w-24 md:w-32 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500" />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 md:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-white/20" />
                    <CarouselNext className="right-4 md:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-white/20" />
                  </Carousel>
                </div>
              </motion.div>
            );
          })()}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the person behind the code. My journey, passions, and what drives me to create amazing digital experiences.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8" /> */}
          </motion.div>

          {/* Journey Carousel */}
          <motion.div
            className="mb-20 -mx-4 md:-mx-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[
                    {
                      src: "/selva.jpg",
                      title: "B.Tech - IT • Java FSE",
                      subtitle: "Building scalable apps with modern technologies",
                    },
                    {
                      src: "/vikatan.jpg",
                      title: "Writer & Journalist at Vikatan",
                      subtitle: "Forging stories to be a voice for the voiceless",
                    },
                    {
                      src: "/1.jpg",
                      title: "Volleyball Player",
                      subtitle: "Teamwork • Discipline • Resilience",
                    },
                    {
                      src: "/2.jpg",
                      title: "Setter",
                      subtitle: "Communication • Strategy • Leadership",
                    },
                    {
                      src: "/3.jpg",
                      title: "Team Player",
                      subtitle: "Focus • Consistency • Sportsmanship",
                    },
                    {
                      src: "/4.jpg",
                      title: "Athlete",
                      subtitle: "Endurance • Determination • Mental Toughness",
                    },
                    {
                      src: "/5.jpg",
                      title: "Athlete",
                      subtitle: "Agility • Perseverance • Self-Discipline",
                    },
                  ].map((item, idx) => (
                    <CarouselItem key={`${item.src}-${idx}`}>
                      <div className="relative h-[500px] md:h-[640px] rounded-2xl overflow-hidden bg-black">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                          <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white drop-shadow-md mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 md:text-lg leading-relaxed">
                            {item.subtitle}
                          </p>
                          <div className="mt-4 h-1 w-24 md:w-32 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500" />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-6 md:-left-12 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/40 border border-white/10 hover:bg-background/90" />
                <CarouselNext className="-right-6 md:-right-12 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/40 border border-white/10 hover:bg-background/90" />
              </Carousel>
            </div> */}
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-primary p-1">
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                    <img src="/selva1.jpg" alt="Selvavignesh" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Heart size={20} className="text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-space-grotesk font-bold">
                Hello! I'm a passionate developer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
              A B.Tech IT student and aspiring Java Full-Stack Engineer, passionate about building scalable, impactful software solutions. Skilled in Spring Boot, React, MySQL, and modern web technologies, with a strong focus on writing clean, maintainable code and continuously improving to meet industry standards.</p>

              <p className="text-muted-foreground leading-relaxed">As a student journalist at Vikatan, dedicated to being a voice for the voiceless and delivering true, fact-checked information that inspires positive change in society.</p>

              <p className="text-muted-foreground leading-relaxed">A national-level volleyball player, bringing discipline, teamwork, leadership, and resilience into every project and collaboration.</p>
              
              
              <div className="flex items-center pt-4 grid md:grid-cols-1 gap-8" >
                <a 
                  href="https://maps.google.com/?q=Trichy,Tamil+Nadu,India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  <MapPin size={16} className="text-primary" />
                  <span className="text-muted-foreground hover:text-primary transition-colors">Based in Trichy, Tamil Nadu, India</span>
                </a>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-muted-foreground">Currently pursuing B.Tech - Information Technology</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Coffee size={16} className="text-primary" />
                  <span className="text-muted-foreground">Passionate about technology and journalism</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Problem Solver",
                description: "I love breaking down complex problems into simple, elegant solutions.",
                icon: "🧩"
              },
              {
                title: "Team Player",
                description: "Collaboration and knowledge sharing are at the heart of everything I do.",
                icon: "🤝"
              },
              {
                title: "Lifelong Learner",
                description: "The tech world evolves fast, and I'm always excited to learn something new.",
                icon: "📚"
              }
            ].map((trait, index) => (
              <motion.div
                key={trait.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 text-center group hover:shadow-glow transition-all duration-500"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {trait.icon}
                </div>
                <h3 className="text-xl font-space-grotesk font-semibold mb-3">
                  {trait.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trait.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;