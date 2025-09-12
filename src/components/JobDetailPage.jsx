"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import Layout from "../components/layout/Layout"; // adjust the path based on your folder structure
import { Separator } from "./ui/separator"
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Building,
  Users,
  Calendar,
  Heart,
  Share2,
  Briefcase,
  CheckCircle,
  Star,
} from "lucide-react"

const JobDetailPage = ({ job: propJob, onBack }) => {
  // Use the passed-in job prop if available; otherwise, fallback to default
  const job = propJob || {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "2 days ago",
    applicants: "47 applicants",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS", "Docker"],
    description: `We are looking for a Senior Frontend Developer to join our innovative team building next-generation web applications. You'll work with cutting-edge technologies and collaborate with talented designers and backend engineers to create exceptional user experiences.

As a Senior Frontend Developer, you'll be responsible for architecting and implementing complex user interfaces, mentoring junior developers, and contributing to our technical roadmap. We value clean code, performance optimization, and accessibility.`,
    responsibilities: [
      "Develop and maintain high-quality React applications",
      "Collaborate with UX/UI designers to implement pixel-perfect designs",
      "Write clean, maintainable, and well-tested code",
      "Mentor junior developers and conduct code reviews",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with the latest frontend technologies and best practices",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Experience with state management libraries (Redux, Zustand)",
      "Proficiency in CSS-in-JS solutions and responsive design",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Knowledge of build tools and CI/CD pipelines",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and teamwork abilities",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements and remote options",
      "Professional development budget ($3,000/year)",
      "Unlimited PTO and sabbatical opportunities",
      "State-of-the-art equipment and workspace",
      "Team building events and company retreats",
    ],
    companyInfo: {
      name: "TechCorp Inc.",
      size: "500-1000 employees",
      industry: "Technology",
      founded: "2015",
      description:
        "TechCorp is a leading technology company focused on building innovative solutions that transform how businesses operate. We're passionate about creating products that make a real difference in people's lives.",
    },
  }

  const [isBookmarked, setIsBookmarked] = useState(false)

  const relatedJobs = [
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      salary: "$90k - $120k",
      type: "Full-time",
    },
    {
      id: 3,
      title: "React Developer",
      company: "WebTech Solutions",
      location: "Remote",
      salary: "$100k - $130k",
      type: "Remote",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "InnovateLab",
      location: "New York, NY",
      salary: "$110k - $140k",
      type: "Full-time",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Back Button */}
            <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Button>

            {/* Job Header */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{job.title}</h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span className="font-medium text-foreground">{job.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-xl font-semibold text-primary">{job.salary}</span>
                  </div>
                  <Badge variant="secondary">{job.type}</Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{job.applicants}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <Button size="lg" className="flex-1 sm:flex-none">
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={isBookmarked ? "text-primary border-primary" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                  {isBookmarked ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="whitespace-pre-line text-muted-foreground">{job.description}</div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Apply for this position</CardTitle>
                <CardDescription>Join {job.company} and advance your career</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Save for Later
                </Button>
                <Separator />
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Posted {job.posted}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{job.applicants}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>About {job.companyInfo.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{job.companyInfo.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium">{job.companyInfo.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company size:</span>
                    <span className="font-medium">{job.companyInfo.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded:</span>
                    <span className="font-medium">{job.companyInfo.founded}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            {/* Related Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedJobs.map((relatedJob) => (
                  <div key={relatedJob.id} className="space-y-2 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                    <h4 className="font-medium text-sm">{relatedJob.title}</h4>
                    <p className="text-xs text-muted-foreground">{relatedJob.company}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{relatedJob.location}</span>
                      <Badge variant="outline" className="text-xs">
                        {relatedJob.type}
                      </Badge>
                    </div>
                    <p className="text-xs font-medium text-primary">{relatedJob.salary}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  View All Similar Jobs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-background">
      {onBack && (
        <Button variant="ghost" onClick={onBack}>
          ← Back to Jobs
        </Button>
      )}
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p>{job.description}</p>
      {/* Rest of your JobDetailPage content */}
    </div>
     
    </div>
  )
}

export default JobDetailPage
