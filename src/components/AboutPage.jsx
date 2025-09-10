import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import { Star, Users, Briefcase, Award, Target, CheckCircle, ArrowRight, Mail } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold text-foreground">Hirynn</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a
                href="/jobs"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Jobs
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Leading Future
                  <span className="text-primary block">Spotlight</span>
                </h1>
                <p className="text-lg text-muted-foreground text-pretty max-w-md">
                  We're revolutionizing the way professionals connect with opportunities, creating meaningful career
                  paths for the future workforce.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base bg-transparent">
                  Our Mission
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/professional-team-working-together-illustration.jpg"
                alt="Professional team collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "100+",
                label: "Partner Companies",
                description: "Leading organizations trust us",
                icon: <Briefcase className="h-8 w-8" />,
              },
              {
                number: "500+",
                label: "Success Stories",
                description: "Professionals placed successfully",
                icon: <Users className="h-8 w-8" />,
              },
              {
                number: "1000+",
                label: "Active Jobs",
                description: "Opportunities available daily",
                icon: <Target className="h-8 w-8" />,
              },
              {
                number: "99%",
                label: "Satisfaction Rate",
                description: "Client satisfaction guaranteed",
                icon: <Award className="h-8 w-8" />,
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <CardTitle className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                To bridge the gap between talented professionals and innovative companies, creating opportunities that
                drive both individual success and organizational growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Innovation",
                  description:
                    "We leverage cutting-edge technology to match the right talent with the right opportunities",
                  icon: <Target className="h-8 w-8" />,
                },
                {
                  title: "Excellence",
                  description:
                    "We maintain the highest standards in everything we do, ensuring quality outcomes for all",
                  icon: <Award className="h-8 w-8" />,
                },
                {
                  title: "Growth",
                  description:
                    "We're committed to the continuous growth and development of both candidates and clients",
                  icon: <CheckCircle className="h-8 w-8" />,
                },
              ].map((value, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Team Members</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Meet the dedicated professionals who make our mission possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "/professional-woman-headshot.png",
                bio: "10+ years in talent acquisition",
              },
              {
                name: "Michael Chen",
                role: "Head of Technology",
                image: "/professional-man-headshot.png",
                bio: "Former Silicon Valley engineer",
              },
              {
                name: "Emily Rodriguez",
                role: "VP of Operations",
                image: "/professional-woman-headshot.png",
                bio: "Expert in scaling operations",
              },
              {
                name: "David Kim",
                role: "Lead Recruiter",
                image: "/professional-man-headshot.png",
                bio: "Specialist in tech recruitment",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Users Say */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Hear from professionals who have transformed their careers with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Software Engineer",
                company: "TechCorp",
                image: "/professional-man-headshot.png",
                rating: 5,
                testimonial:
                  "The team at Hirynn understood exactly what I was looking for and connected me with the perfect opportunity.",
              },
              {
                name: "Maria Garcia",
                role: "Marketing Director",
                company: "GrowthCo",
                image: "/professional-woman-headshot.png",
                rating: 5,
                testimonial:
                  "Professional, efficient, and results-driven. They helped me advance my career beyond my expectations.",
              },
              {
                name: "James Wilson",
                role: "Product Manager",
                company: "InnovateLab",
                image: "/professional-man-headshot.png",
                rating: 5,
                testimonial:
                  "Outstanding service and support throughout the entire process. Highly recommend to any professional.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-4">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Join Our Community</h2>
            <p className="text-lg text-blue-100 text-pretty">
              Be part of a growing network of professionals who are shaping the future of work
            </p>
            <Button size="lg" variant="secondary" className="text-base">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Stay updated with the latest job opportunities, career tips, and industry insights
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="sm:w-auto">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold">Hirynn</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner in finding the perfect career opportunity. Join thousands of professionals who have
                found success with us.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <div className="space-y-2">
                {["Home", "About Us", "Jobs", "Contact"].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">For Job Seekers</h3>
              <div className="space-y-2">
                {["Browse Jobs", "Career Advice", "Resume Builder", "Salary Guide"].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">For Employers</h3>
              <div className="space-y-2">
                {["Post a Job", "Find Candidates", "Pricing", "Resources"].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2024 Hirynn. All rights reserved.</p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutPage
