import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Send, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { publicAssetUrl } from "@/lib/publicAssetUrl";

// Custom ORCID icon component
const OrcidIcon = ({ className }: { className?: string }) => (
  <img src={publicAssetUrl("ORCID_iD.svg.png")} alt="ORCID" className={className} />
);

// Custom Google Scholar icon component
const GoogleScholarIcon = ({ className }: { className?: string }) => (
  <img src={publicAssetUrl("Google_Scholar_logo.svg")} alt="Google Scholar" className={className} />
);

// Custom LinkedIn icon component
const LinkedInIcon = ({ className }: { className?: string }) => (
  <img src={publicAssetUrl("LinkedIn.svg")} alt="LinkedIn" className={className} />
);

// Custom GitHub icon component
const GitHubIcon = ({ className }: { className?: string }) => (
  <img src={publicAssetUrl("github-mark.svg")} alt="GitHub" className={`${className || ''} dark:invert`} />
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahadehasan5217@gmail.com",
      href: "mailto:mahadehasan5217@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+358 505700414",
      href: "tel:+358505700414"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tampere, Finland",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      description: "Professional network & updates",
      href: "https://www.linkedin.com/in/mahadehasan/"
    },
    {
      icon: GitHubIcon,
      label: "GitHub",
      description: "Open source projects & code",
      href: "https://github.com/mahade315"
    },
    {
      icon: GoogleScholarIcon,
      label: "Google Scholar",
      description: "Academic publications",
      href: "https://scholar.google.com/citations?user=gBjV5LsAAAAJ&hl=en"
    },
    {
      icon: OrcidIcon,
      label: "ORCiD",
      description: "Academic identifier",
      href: "https://orcid.org/0009-0006-5154-7331"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const messageText = formData.get("message");

    try {
      // Create a well-formatted email body
      const emailBody = `
Hello Mahade,

You have received a new message from your website contact form:

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${messageText}

---
This message was sent from your personal website contact form.
      `.trim();

      // Create mailto link with pre-filled content
      const mailtoLink = `mailto:mahadehasan5217@gmail.com?subject=${encodeURIComponent(`Contact Form: ${subject}`)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open the user's default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setMessage('Your default email client has opened with a pre-filled message. Please send the email to complete the process.');
      
      // Reset form after a short delay
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
      }, 2000);
      
    } catch (error) {
      console.error('Error opening email client:', error);
      setSubmitStatus('error');
      setMessage('Unable to open email client. Please contact me directly at mahadehasan5217@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, research opportunities, or just want to chat about AI? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left: Contact Info */}
            <div className="flex flex-col space-y-6">
              <Card className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 flex-1">
                <h3 className="text-xl font-bold gradient-text mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 flex-1">
                <h3 className="text-xl font-bold gradient-text mb-6">Follow My Work</h3>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{link.label}</p>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right: Message Form */}
            <Card className="p-6 backdrop-blur-sm bg-card/80 border-primary/10 flex flex-col">
              <h3 className="text-xl font-bold gradient-text mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, research idea, or collaboration opportunity..."
                    rows={12}
                    required
                    className="border-border focus:border-primary resize-none flex-1"
                  />
                </div>

                {/* Status Message */}
                {message && (
                  <div className={`flex items-center gap-2 p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="text-sm">{message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
