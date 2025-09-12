"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"; // adjust the path based on your folder structure
import {
  Star,
  Users,
  Briefcase,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"

const stats = [
  {

    number: "140+",
    label: "Schools Connected"

  },
  {
    number: "500+",
    label: "Teachers Empowered",

  },
  {

    number: "1000+",
    label: "Successful Matches",

  },
  {

    number: "95%",
    label: "Successful Rate",

  },
]

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
  

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Shaping Future Together!
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  "At Hirynn, we believe education is the foundation of progress. Our
                  platform is dedicated to connecting passionate teachers with the right
                  opportunities, helping schools and institutions find the talent they need
                  to inspire the next generation. By shaping futures together, we aim to
                  create meaningful connections that empower both educators and
                  learners to grow, achieve, and thrive"
                </p>
              </div>

            </div>
            <div className="relative">
              <img
                src="/professional-team-working-together-illustration.jpg"
                alt="Professional team collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <p className="text-gray-600 text-base max-w-md text-justify-center text-bold">
                At Hirynn, we are committed to empowering educators, supporting institutions, and
                strengthening education by building trusted connections. With fairness, transparency,
                and trust at our core, we strive to create meaningful opportunities where teachers feel valued
                and schools find the right talent with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
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
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Image on the left */}
            <div className="lg:w-1/2">
              <img
                src="/Computer login.png"
                alt="Professional team collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Text on the right */}
            <div className="lg:w-1/2 space-y-6 text-black-600">
              <h2 className="text-4xl font-bold text-red-600">Our Mission</h2>
              <p className="text-lg">
                At Hirynn, our mission is to empower educators and institutions by providing a trusted platform that connects passionate teachers with meaningful opportunities. We strive to enhance the educational landscape by fostering transparency, fairness, and trust in every interaction. Our goal is to support the growth and success of both teachers and schools, ultimately contributing to a brighter future for learners everywhere.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Our Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Our dedicated team is passionate about connecting educators with the right opportunities and supporting institutions in their search for top talent. Together, we are committed to making a positive impact on the educational landscape.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Alice Johnson", role: "CEO", img: "/team1.png" },
              { name: "Bob Smith", role: "CTO", img: "/team2.png" },
              { name: "Catherine Lee", role: "COO", img: "/team3.png" },
              { name: "David Brown", role: "CFO", img: "/team4.png" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.img} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
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
      {/* Join Community Section */
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground">Join The Hirynn Community</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                At Hirynn, we believe that every student deserves the right teacher and every teacher deserves the right opportunity.
                Together, we are shaping a future of education.
              </p>
              <Button
                size="lg"
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>}
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p className="text-lg text-muted-foreground">
              Stay Connected with Hirynn-Get The Latest Jobs And Career Tips Straight To Your Inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow max-w-md"
              />
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              > Subscribe </Button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default AboutPage
