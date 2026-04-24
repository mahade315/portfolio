import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github, FileText, GraduationCap } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Textogram from "@/components/Textogram";
import { publicAssetUrl } from "@/lib/publicAssetUrl";

const Hero = () => {
  return (
    <section className="flex items-start justify-center relative overflow-hidden pt-20 pb-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      </div>

      {/* Moving buzzwords background */}
      <Textogram opacity={0.06} speedMs={35000} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start md:items-center">
            {/* Left: Photo + quick links */}
            <div className="flex flex-col items-center justify-center gap-6 md:col-span-1">
              <div className="relative w-56 h-56 md:w-72 md:h-72 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 blur-xl animate-pulse" />
                <img
                  src={publicAssetUrl("my_pp.jpeg")}
                  alt="Profile photo of Md Mahade Hasan"
                  className="relative w-full h-full rounded-full border-4 border-primary/20 shadow-2xl object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:ring-4 group-hover:ring-primary/40"
                />
              </div>

              {/* Quick connect links (icon-only with hover labels) */}
              <TooltipProvider delayDuration={150}>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://orcid.org/0009-0006-5154-7331"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="ORCID"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                      >
                        <img src={publicAssetUrl("ORCID_iD.svg.png")} alt="ORCID" className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">ORCID</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://scholar.google.com/citations?user=gBjV5LsAAAAJ&hl=en"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Google Scholar"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                      >
                        <img src={publicAssetUrl("Google_Scholar_logo.svg")} alt="Google Scholar" className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">Google Scholar</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://www.linkedin.com/in/mahadehasan/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                      >
                        <img src={publicAssetUrl("LinkedIn.svg")} alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">LinkedIn</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://github.com/mahade315"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                      >
                        <img src={publicAssetUrl("github-mark.svg")} alt="GitHub" className="w-5 h-5 dark:invert" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">GitHub</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>

            {/* Right: Text content */}
            <div className="flex flex-col items-stretch justify-start md:text-left text-center space-y-6 md:col-span-2 bg-white/35 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                <span className="gradient-text whitespace-nowrap">Md Mahade Hasan</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                <span className="gradient-text font-semibold">Generative AI / ML Researcher</span>
              </p>
              
              <p className="w-full self-stretch text-lg md:text-21xl text-muted-foreground leading-relaxed ">
              <br /> 
                I'm on a mission to develop smaller, faster, and more efficient AI systems. My research focuses on <span className="font-bold text-foreground">Fine-Tuning</span> open-source <span className="font-bold text-foreground">Small Language Models</span> to make cutting-edge AI affordable and accessible to everyone.
              </p>

              <div className="flex flex-wrap gap-6 md:justify-start justify-center pt-2 text-base text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+358 505700414</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>mahadehasan5217@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Tampere, Finland</span>
                </div>
                
              </div>

              <div className="pt-4 md:justify-start justify-center flex">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300"
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
