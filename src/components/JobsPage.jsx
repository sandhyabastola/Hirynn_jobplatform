"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Search, MapPin, Clock, Heart, Filter, DollarSign, Building, ArrowRight, ChevronDown } from "lucide-react"

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      type: "Full-time",
      posted: "2 days ago",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      description: "Join our innovative team building next-generation web applications...",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "New York, NY",
      salary: "$90k - $120k",
      type: "Full-time",
      posted: "1 day ago",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Create beautiful and intuitive user experiences for our clients...",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Austin, TX",
      salary: "$110k - $140k",
      type: "Full-time",
      posted: "3 days ago",
      skills: ["Strategy", "Analytics", "Leadership", "Agile"],
      description: "Lead product development and strategy for our growing platform...",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataTech Solutions",
      location: "Seattle, WA",
      salary: "$130k - $160k",
      type: "Full-time",
      posted: "1 day ago",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      description: "Analyze complex datasets and build predictive models...",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudFirst",
      location: "Remote",
      salary: "$115k - $145k",
      type: "Remote",
      posted: "4 days ago",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Build and maintain scalable cloud infrastructure...",
    },
    {
      id: 6,
      title: "Marketing Manager",
      company: "GrowthCo",
      location: "Los Angeles, CA",
      salary: "$85k - $110k",
      type: "Full-time",
      posted: "2 days ago",
      skills: ["Digital Marketing", "SEO", "Analytics", "Content Strategy"],
      description: "Drive marketing initiatives and brand growth strategies...",
    },
    {
      id: 7,
      title: "Backend Developer",
      company: "ServerTech",
      location: "Chicago, IL",
      salary: "$100k - $130k",
      type: "Full-time",
      posted: "5 days ago",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
      description: "Develop robust backend systems and APIs...",
    },
    {
      id: 8,
      title: "Mobile Developer",
      company: "AppInnovate",
      location: "Miami, FL",
      salary: "$95k - $125k",
      type: "Full-time",
      posted: "3 days ago",
      skills: ["React Native", "iOS", "Android", "Firebase"],
      description: "Create amazing mobile experiences for millions of users...",
    },
    {
      id: 9,
      title: "Sales Director",
      company: "SalesForce Pro",
      location: "Boston, MA",
      salary: "$140k - $180k",
      type: "Full-time",
      posted: "1 week ago",
      skills: ["Sales Strategy", "Team Leadership", "CRM", "B2B Sales"],
      description: "Lead our sales team and drive revenue growth...",
    },
  ]

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
              <a
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a href="/jobs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
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

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Find Your Dream Job</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Discover thousands of opportunities from top companies worldwide
              </p>
            </div>

            {/* Search Form */}
            <Card className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Job title, keywords, or company"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Select value={jobType} onValueChange={setJobType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Job Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  <span>More Filters</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button className="flex items-center space-x-2">
                  <Search className="h-4 w-4" />
                  <span>Search Jobs</span>
                </Button>
              </div>
            </Card>

            {/* Results Summary */}
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{jobs.length}</span> jobs
              </p>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-foreground flex items-center space-x-2">
                          <Building className="h-4 w-4" />
                          <span>{job.company}</span>
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary">{job.salary}</span>
                      </div>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="bg-transparent">
                Load More Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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

export default JobsPage
