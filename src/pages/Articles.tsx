import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Articles = () => {
  const linkedInPost = "https://www.linkedin.com/posts/selvavignesh7_vikatan-journalismintern-anandavikatan-activity-7354162907909185541--REb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwjRSkB3WlAREqrPHWjLYnuUmzDxV4UQuk"; // paste your LinkedIn post URL here
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

  const technicalArticles = [
    {
      title: "Is AI Really Stealing Our Jobs? The 2025 Reality You Can’t Ignore",
      excerpt: "is AI really taking our jobs? Or is it simply changing the way we work? The answer lies in looking at every piece of the puzzle from fashion to film, from boardrooms to Reddit threads, to see what is really happening.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      featured: false,
      tags: ["AI", "Jobs", "MAANG", "Tech", "Vogue"],
      image: "/AI.png",
      url: "https://imselvavignesh.blogspot.com/2025/09/is-ai-really-stealing-our-jobs-2025.html"
    },
    {
      title: "Beautiful yet unseen",
      excerpt: "The world is full of beauty, but we often overlook it. We are so caught up in our daily lives that we forget to appreciate inner beauty.",
      date: "2024-05-10",
      readTime: "5 min read",
      category: "Anthropology, Psychology, Sociology, Philosophy",
      featured: false,
      tags: ["Anthropology", "Psychology", "Sociology", "Philosophy"],
      image: "/beauty.png",
      url: "https://imselvavignesh.blogspot.com/2025/06/beautiful-yet-unseen.html"
    },
    {
      title: "Greatest walls made by humans",
      excerpt: "We create borders between nations, and when those borders aren’t enough, we fight wars over them. We try to dominate to prove the superiority of our region, our religion, our people, our history. with this article, I want to explore the greatest walls made by humans.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "History, Geography, Politics",
      featured: false,
      tags: ["History", "Geography", "Politics"],
      image: "/wall.png",
      url: "https://imselvavignesh.blogspot.com/2025/06/greatest-walls-made-by-humans.html"
    },
    {
      title: "Gaza 2023-2025: Genocide unfolding before our eyes",
      excerpt: "The Israel-Palestine conflict has spanned decades, but the events from 2023 to 2025 have turned a long-standing crisis into a catastrophic humanitarian disaster. What started as war has unfolded into what many now call a genocide one that has taken tens of thousands of innocent lives and exposed deep fractures in our global conscience.",
      date: "2023-05-20",
      readTime: "10 min read",
      category: "History, Geography, Politics",
      featured: false,
      tags: ["History", "Geography", "Politics"],
      image: "/gaza.png",
      url: "https://imselvavignesh.blogspot.com/2025/05/gaza-20232025-genocide-unfolding-before.html"
    },
    {
      title: "Let them Go",
      excerpt: "For in letting them go, we free ourselves from the chains of the past. We reclaim our power, our autonomy, and our ability to shape our own destinies. ",
      date: "2023-4-15",
      readTime: "6 min read",
      category: "psychology, humans",
      featured: false,
      tags: ["anthropology", "psychology"],
      image: "/let.png",
      url: "https://imselvavignesh.blogspot.com/2024/03/letem-go.html"
    }
  ];

  const journalismArticles = [
    {
      title: "கொலைவெறித் தாக்குதல்; ஆணவக் கொலை மிரட்டல்! பேசித் தீர்க்கச் சொன்ன `திருச்சி போலீஸ்' - என்ன நடந்தது?",
      excerpt: "சாகும் அளவுக்கு அடிவாங்கிவிட்டு, ஆணவக் கொலை மிரட்டல் வருகிறது எனக் காவல் நிலையம் சென்றால், சாதிய வெறியர்களைக் கைது செய்யாமல், என் மீது எஃப்.ஐ.ஆர் போட்டிருக்கிறது திருச்சி காவல்துறை - பாதிக்கப்பட்ட இளைஞர் தீனா!",
      date: "2025-08-10",
      readTime: "10 min read",
      category: "Journalism",
      featured: false,
      tags: ["Reporting", "Editing", "Student journalist", "caste discrimination", "social justice"],
      image: "/CAS.png",
      url: "https://www.vikatan.com/government-and-politics/governance/murderous-attack-and-honor-killing-threats-trichy-police-urge-talks"
    },
    {
      title: `Dhoni: "இந்திய அணிக்கு தோனி பயிற்சியாளராக வர மாட்டார்" - இந்திய முன்னாள் வீரர் கூறும் காரணம் என்ன?`,
      excerpt: "இந்திய அணியின் முன்னாள் வீரரும், ஸ்போர்ட்ஸ் ஊடக வர்ணனையாளருமான ஆகாஷ் சோப்ரா, தோனி அப்படிப் பயிற்சியாளராக வரமாட்டார் என்று தீர்க்கமாகக் கூறியிருக்கிறார்.",
      date: "2025-08-23",
      readTime: "8 min read",
      category: "Sports Journalism",
      featured: false,
      tags: ["Sports", "Narrative", "Vikatan", "M.S.Dhoni", "Retirement", "BCCI", "India"],
      image: "Dhoni.png",
      url: "https://sports.vikatan.com/cricket/aakash-chopra-says-dhoni-will-not-take-head-coach-charge-for-india"
    },
    {
      title: "கூட்டணி அழுத்ததால் நம்பி நிற்கும் மக்களுக்கு அநீதி இழைக்கிறார் திருமா! - NTK வெண்ணிலா தாயுமானவன்",
      excerpt: "தூய்மைப் பணியாளர்களை பணி நிரந்தரம் செய்யாமல் இருப்பதுதான் சமூகநீதி' என்றிருக்கிறார் வி.சி.க தலைவர் திருமாவளவன், இந்நிலையில் தூய்மை பணியை அரசுப் பணி ஆக்க வேண்டும் எனக் கோருகிறது நாம் தமிழர் கட்சி, அதன் சுற்றுசூழல் பாசறை மாநில ஒருங்கிணைப்பாளர் வெண்ணிலா தாயுமானவனிடம் பேசினோம்.",
      date: "2025-08-20",
      readTime: "12 min read",
      category: "Opinion",
      featured: false,
      tags: ["politics", "Tamilnadu", "NTK", "VCK", "Thirumavalavan"],
      image: "/NTK.png",
      url: "https://www.vikatan.com/government-and-politics/governance/thiruma-betrays-the-people-who-trusted-him-ntk-vennila-thayumanavan"
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
              Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I’m a passionate content writer and student journalist contributing to Vikatan. I publish
              technical articles, personal blogs, and journals.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mt-8" />
          </motion.div>

          {/* Writings (mixed: technical, blogs, journals) */}
          
          <div className="mb-10">
          <a 
                  href="https://imselvavignesh.blogspot.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors cursor-pointer"
                ><h2 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-6">Writings</h2></a>
            <motion.div 
              className="grid lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
            {technicalArticles.map((article, index) => (
              <motion.article
                key={article.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-2xl p-6 transition-all duration-500 hover:shadow-glow cursor-pointer group ${
                  article.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="mb-4 overflow-hidden rounded-xl bg-muted/30">
                  <img src={article.image} alt={article.title} className="h-40 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                {article.featured && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-yellow-500 uppercase tracking-wider">
                      Featured Article
                    </span>
                  </div>
                )}
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {article.category}
                  </span>
                  <h2 className={`font-space-grotesk font-bold text-foreground group-hover:text-primary transition-colors duration-300 ${
                    article.featured ? 'text-2xl mb-3' : 'text-xl mb-2'
                  }`}>
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-between group-hover:text-primary transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <BookOpen size={16} />
                      <span>Read Article</span>
                    </div>
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </Button>
                </a>
              </motion.article>
            ))}
            </motion.div>
          </div>
          

          {/* Vikatan (print journalism) */}
          <div className="mt-4">
          <a 
                  href="https://imselvavignesh.blogspot.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors cursor-pointer"
                ><h2 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-6">Vikatan</h2></a>

            {/* Spectacular collage header */}
            <motion.div 
              className="grid md:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group rounded-2xl overflow-hidden h-64 md:h-72 bg-muted/30">
                <img
                  src="/vikatanid.png"
                  alt="Vikatan Press ID"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/vikatan.svg"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Press ID</div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden h-64 md:h-72 bg-muted/30 md:col-span-2">
                <img
                  src="/vikatan.png"
                  alt="Selvavignesh G R"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/vikatan.svg"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Student Journalist • Vikatan Group</div>
              </div>
            </motion.div>

            {/* LinkedIn Story Card */}
            <motion.div
              className="glass-card rounded-2xl p-6 mb-8 flex items-center justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                  <img src="/vikatan1.png" alt="Selvavignesh" className="h-full w-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn Story</div>
                  <div className="font-semibold">My Vikatan journalism experience</div>
                </div>
              </div>
              <Button size="sm" variant="outline" onClick={() => linkedInPost && window.open(linkedInPost, '_blank', 'noopener,noreferrer')}>
                View on LinkedIn
              </Button>
            </motion.div>
            <motion.div 
              className="grid lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
            {journalismArticles.map((article, index) => (
              <motion.article
                key={article.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-2xl p-6 transition-all duration-500 hover:shadow-glow cursor-pointer group ${
                  article.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="mb-4 overflow-hidden rounded-xl bg-muted/30">
                  <img src={article.image} alt={article.title} className="h-40 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
                {article.featured && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-yellow-500 uppercase tracking-wider">
                      Featured Article
                    </span>
                  </div>
                )}
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {article.category}
                  </span>
                  <h2 className={`font-space-grotesk font-bold text-foreground group-hover:text-primary transition-colors duration-300 ${
                    article.featured ? 'text-2xl mb-3' : 'text-xl mb-2'
                  }`}>
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-between group-hover:text-primary transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <BookOpen size={16} />
                      <span>Read Article</span>
                    </div>
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </Button>
                </a>
              </motion.article>
            ))}
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a href="https://imselvavignesh.blogspot.com/" target="blank">
            <Button size="lg" variant="outline">
              View More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>

            <a href="https://www.vikatan.com/author/selvavignesh-g-r" target="blank">
            <Button size="lg" variant="outline">
              Visit my Author page
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;
