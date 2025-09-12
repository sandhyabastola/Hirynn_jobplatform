import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
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
  MessageSquare,   // ✅ fixed here (was MessagesSquare)
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
      icon: <User className="w-6 h-6 text-red-500" />,
      title: "Account",
      description:
        "You have to create an account here with the details and they must be true to get the jobs quickly and work effectively.",
    },
    {
      icon: <Search className="w-6 h-6 text-blue-500" />,
      title: "Search Job",
      description:
        "Search the job according to your interests and experiences and that matches the requirements for the job.",
    },
    {
      icon: <FileText className="w-6 h-6 text-yellow-500" />,
      title: "CV/Resume",
      description:
        "Now you have to fill the given job applications with your recent CV/Resume where you are interested and will help you grow.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Apply",
      description:
        "Apply to the job applications and make sure to check the location and time to not face problems later.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Welcome to
                  <span className="text-primary block">Hirynn...</span>
                </h1>
                <p className="text-lg text-muted-foreground text-pretty max-w-md">
                  Join thousands of professionals and institutions hiring and
                  networking today. Professionals and institutions hiring and
                  networking today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-base"
                >
                  Join for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base bg-transparent"
                >
                  Find Jobs
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>10K+ Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-4 w-4" />
                  <span>5K+ Jobs</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/professional-team-working-together-illustration.jpg"
                alt="Professional team working together"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-2">How it works?</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Follow <span className="text-blue-600">Easy</span> 4 Steps
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
    </div>
  );
};

export default LandingPage;
