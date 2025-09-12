"use client";

import { useState } from "react";
import Layout from "../components/layout/Layout"; // adjust the path based on your folder structure
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  Search,
  MapPin,
  Clock,
  Heart,
  Filter,
  DollarSign,
  Building,
  ArrowRight,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";
import JobDetailPage from "./JobDetailPage";

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [sort, setSort] = useState("newest");

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
      description:
        "Join our innovative team building next-generation web applications...",
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
      description:
        "Create beautiful and intuitive user experiences for our clients...",
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
      description:
        "Lead product development and strategy for our growing platform...",
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
  ];

  // Render JobDetailPage if a job is selected
  if (selectedJob) {
    return (
      <JobDetailPage
        job={selectedJob}
        onBack={() => setSelectedJob(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
    

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Find Your Dream Job
              </h1>
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
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Job Type
                    </option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
                <Upload className="w-6 h-6 text-gray-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Upload your Resume</h3>
                  <p className="text-sm text-gray-500">
                    We’ll match you with the best jobs. Right Job, Right Away!
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 bg-transparent"
                >
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

            {/* Jobs List */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="p-4 border rounded-lg flex justify-between items-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <Button
                    className="flex items-center space-x-2"
                    onClick={() => setSelectedJob(job)}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default JobsPage;
