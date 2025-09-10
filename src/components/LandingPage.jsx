import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Mail, Phone } from "lucide-react";
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
  MessageCircle,
  ArrowRight,
  Search,
  Briefcase,
  Heart,
  Download,
  Play,
  Check,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="Hirynn Logo" className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold text-foreground">Hirynn</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/jobs"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Jobs
              </Link>
              <Link
                to="/institutions"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Institutions
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Auth buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-base"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Register
                </Button>
              </Link>
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
                <Button variant="outline" size="lg" className="text-base bg-transparent">
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

      {/* Footer */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="Hirynn Logo" className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold">Hirynn</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering teachers and learners with professional growth
                opportunities. Explore teaching jobs, connect with top
                institutions, and access resources to enhance your career
                anytime, anywhere.
              </p>
              <div className="text-gray-400 text-sm">
                 <h1 className="font-semibold text-lg"> Download our App</h1>
                <p>Get the Hirynn mobile app for learning on the go</p>
                <img src="/pngwing.com 3.png" alt="Google Play" className="h-10 w-120" />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="font-semibold text-lg">Other Links</h1>
              <div className="space-y-2">
                {["C.V"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="font-semibold text-lg">Get in Touch</h1>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:support@hirynn.com" className="text-gray-400 hover:text-white transition-colors">
                    support@hirynn.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+9779808349417" className="text-gray-400 hover:text-white transition-colors">
                    9808349417
                  </a>
                </div>
              </div>
            
              <h1 className="font-semibold text-lg">Follow Us</h1>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a
                  href="https://www.facebook.com/"
                  className="text-white hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-white hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="text-white hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
