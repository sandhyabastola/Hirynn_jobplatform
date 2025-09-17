import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, UserRound } from "lucide-react";
import { User, FileText } from "lucide-react";

import { Mail, Phone } from "lucide-react";
import Layout from "../components/layout/Layout"; 
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Star,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  FileText as Document,
  LineChart,
  MessageSquare,   
  ArrowRight,
  Search,
  Briefcase,
  Heart,
  Download,
  Play,
  Check,
  BarChart3,
} from "lucide-react";

const LandingPage = () => {
 
  const steps = [
    {
      id: 1,
      title: "Account",
      icon: User,
      description:
        "You have to create an account here with the details and they must be true to get the jobs quickly and works effectively.",
      iconColor: "text-red-500",
    },
    {
      id: 2,
      title: "Search Job",
      icon: Search,
      description:
        "Search the job according to your interests and experiences and that matches the requirements for the job.",
      iconColor: "text-blue-500",
    },
    {
      id: 3,
      title: "CV/Resume",
      icon: FileText,
      description:
        "Now you have to fill the given job applications with your recent CV/Resume where you are interested and will help you grow.",
      iconColor: "text-orange-500",
    },
    {
      id: 4,
      title: "Apply",
      icon: CheckCircle,
      description:
        "Apply to the job applications and make sure to check the location and time to not face problems later.",
      iconColor: "text-green-500",
    },
  ]
const jobs = Array(6).fill({
    title: "Mathematics Teacher",
    company: "Tulips School",
    location: "Biratnagr, Nepal",
    tags: ["Full Time", "Primary", "2-4 years"],
  })
  return (
    <div className="min-h-screen bg-background">
  {/* Hero Section */}
<section className="pt-10 lg:pt-16 pb-20 lg:pb-28 bg-gradient-to-b from-blue-50/60 to-white">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Welcome to <span className="text-primary">Hirynn...</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Join thousands of professionals and institutions hiring and networking today. 
            Find the right opportunities and connect with the future.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-3 rounded-xl shadow-lg"
          >
            Join for Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl"
          >
            Find Jobs
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-10 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="font-medium">10K+ Users</span>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5 text-blue-600" />
            <span className="font-medium">5K+ Jobs</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center lg:justify-end">
        <img
          src="/professional-team-working-together-illustration.jpg"
          alt="Professional team working together"
          className="max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>



      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How it works?</h2>
          <h3 className="text-4xl font-bold text-gray-900">
            Follow <span className="text-blue-600">Easy</span> 4 Steps
          </h3>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                    <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Decorative Arrow - Only show between steps, not after the last one */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-yellow-400">
                    <path
                      d="M8 16C8 16 12 12 16 16C20 20 24 16 24 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            We always help to help you with!
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left side - Features */}
            <div className="space-y-6">
              <Card className="p-4 flex items-start gap-3 shadow-md">
                <BarChart3 className="w-8 h-8 text-primary" />
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Enhance your career
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Hirynn helps you discover the right opportunities, connect with
                    trusted institutions, and grow as a professional.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 flex items-start gap-3 shadow-md">
                <MessageSquare className="w-8 h-8 text-blue-500" />
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Communication
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enhance your career with personalized job matches and professional
                    growth tools. Hirynn connects educators with the right opportunities
                    to achieve success.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 flex items-start gap-3 shadow-md">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg text-gray-800">Smart Jobs</h3>
                  <p className="text-gray-600 text-sm">
                    Hirynn helps you discover opportunities tailored to your skills and
                    aspirations, making your job search faster, easier, and more effective
                    for long-term career growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src="help_illustration.png"
                alt="Help illustration"
                className="w-[454px] h-[390px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

  

      {/* Unlock Your Teaching Potential */}
      <section className="py-20 bg-primary text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="flex justify-center">
              <img
                src="/Computer login.png"
                alt="Computer Learning"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>

            {/* Right: Text */}
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold">
                500+ Nepal's Best Teaching Institutes Posted Their Jobs!
              </h2>
              <p className="text-lg text-black-100">
                Explore opportunities posted by 500+ of Nepal's finest teaching
                institutions and advance your career.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-blue-600 hover:bg-blue-700 text-white text-base"
              >
                Search Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Recommended Section */}
<section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Recommended Jobs</h2>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center mb-3">
              <img
                src="Class 10.png"
                alt="Logo"
                className="w-10 h-10 mr-3"
              />
              <h2 className="font-bold text-lg">{job.title}</h2>
            </div>
            <p className="text-gray-600">{job.company} • {job.location}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-800 text-white text-sm px-3 py-1 rounded-md">
                {job.type}
              </span>
              <span className="bg-blue-800 text-white text-sm px-3 py-1 rounded-md">
                {job.level}
              </span>
              <span className="bg-blue-800 text-white text-sm px-3 py-1 rounded-md">
                {job.experience}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* What our users say */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground font-color-blue">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Hear from our satisfied users about their experiences with Hirynn.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative h-80">
            {[
              {
                name: "John Doe",
                feedback: "Hirynn has transformed the way I find teaching opportunities!",
                img: "/team3.png",
              },
              {
                name: "Jane Smith",
                feedback: "The platform is user-friendly and effective.",
                img: "/team2.png",
              },
              {
                name: "Emily Johnson",
                feedback: "I love the resources available for professional development.",
                img: "/users.png",
              },
            ].map((user, index) => (
              <div
                key={index}
                className={`text-center transition-opacity duration-1000 absolute top-0 left-0 w-full ${index === 0 ? "opacity-100" : "opacity-0"
                  }`}
              >
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={user.img} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground">{user.name}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">{user.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Unlocking Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image Left */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Black.png" // replace with your uploaded image path
            alt="Hirynn App Showcase"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Text Right */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Your Teaching Potential
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hirynn App is designed for teachers and educational institutions in
            Nepal to connect with the best opportunities. Discover teaching
            jobs, apply easily, and access career resources to grow
            professionally. Take the next step in your career today!
          </p>

          <h3 className="text-xl font-semibold mb-2">We Also Have an App</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Use Hirynn on your Android device to explore job postings, apply to
            your favorite schools, and stay updated with career resources
            anytime, anywhere. All your teaching opportunities, in one place.
          </p>

          {/* Google Play Button */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/google-play.png" // replace with play store badge
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default LandingPage;
