import { Card } from "@/components/ui/card";
import { Briefcase, BookOpen, Brain, Newspaper } from "lucide-react";
import publicationsData from "@/lib/publications";
import { publicAssetUrl } from "@/lib/publicAssetUrl";

const About = () => {
  const latestPublication = [...publicationsData].sort((a, b) => Number(b.year) - Number(a.year))[0];

  const highlights = [
    // 1. Current Education
    {
      icon: "tau-logo",
      title: "Current Position",
      subtitle: "Doctor of Philosophy - PhD",
      date: "Aug 2024 - Present",
      color: "text-primary"
    },
    // 2. Research Lab
    {
      icon: "gpt-lab-logo",
      title: "Research Lab",
      subtitle: "GPT-Lab, Tampere University, Finland",
      description: "Generative AI & Agentic Systems",
      color: "text-primary"
    },
    // 3. Research Interest
    {
      icon: Brain,
      title: "Research Interest",
      subtitle: "Generative AI",
      subtitle2: "Software Engineering", 
      subtitle3: "Natural Language Processing",
      color: "text-accent"
    },
    // 4. Recent News (Dynamic from latest publication)
    {
      icon: Newspaper,
      title: "Recent News",
      subtitle: latestPublication?.title || "",
      description: latestPublication ? `${latestPublication.venue}${latestPublication.arxivId ? ` • arXiv:${latestPublication.arxivId}` : ""}` : "",
      color: "text-accent",
      badge: true
    }
  ];

  return (
    <section id="about" className="pt-12 pb-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 animate-fade-in mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="gradient-text">Mahade</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: My Journey */}
            <Card className="p-8 backdrop-blur-sm bg-card/80 border-primary/10 h-full">
              <h3 className="text-2xl font-bold gradient-text mb-6">My Journey</h3>

              <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
                <p>
                  I'm <span className="text-foreground font-semibold">Md Mahade Hasan</span> (Mahade), a Doctoral Researcher in Computing Sciences at 
                  Tampere University. I work on <span className="text-foreground font-semibold">Generative AI</span> with a focus on <span className="text-foreground font-semibold">agentic systems</span> and 
                  <span className="text-foreground font-semibold"> retrieval-augmented generation (RAG)</span>—designing practical AI that can reason over
                  knowledge, retrieve the right context, and take meaningful actions.
                </p>

                <p>
                  My path spans <span className="text-foreground font-semibold">teaching, research, and software development</span>. I've taught and mentored 
                  students, contributed to research projects, and built applications that turn ideas into real-world AI solutions.
                </p>

                <p>
                  Today, my goal is simple: <span className="text-foreground font-semibold">bridge research and practice</span>. I aim to create AI systems 
                  that are reliable, explainable, and genuinely useful in decision-making.
                </p>
              </div>

              
            </Card>

            {/* Right: Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-primary/10 ${item.color}`}>
                      {item.icon === "tau-logo" ? (
                        <img
                          src={publicAssetUrl("tau.svg")}
                          alt="Tampere University"
                          className="h-6 w-auto max-w-[140px] object-contain"
                        />
                      ) : item.icon === "gpt-lab-logo" ? (
                        <img
                          src={publicAssetUrl("gptlab-logo.svg")}
                          alt="GPT Lab"
                          className="h-6 w-6 object-contain"
                        />
                      ) : (
                        <item.icon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-bold text-foreground">{item.title}</h4>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20 animate-blink">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">{item.subtitle}</p>
                      {item.subtitle2 && (
                        <p className="text-sm text-muted-foreground font-medium">{item.subtitle2}</p>
                      )}
                      {item.subtitle3 && (
                        <p className="text-sm text-muted-foreground font-medium mb-1">{item.subtitle3}</p>
                      )}
                      {item.date && (
                        <p className="text-xs text-primary font-medium">{item.date}</p>
                      )}
                      {item.description && (
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
