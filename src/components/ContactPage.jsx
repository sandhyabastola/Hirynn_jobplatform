"use client"

import { useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import Layout from "../components/layout/Layout"; // adjust the path based on your folder structure
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Users,
  Briefcase,
  HelpCircle,
  CheckCircle,
  Download,
} from "lucide-react"
import { Facebook, Twitter, Linkedin, Globe, Video, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance" style={{ color: "#0070EF" }}>
  Feel Free to Get in Touch!
</h1>

          </div>
        </div>
      </section>

      <div className="lg:flex container mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
        {/* Left Form Section */}
        <div className="lg:w-2/3 p-8 bg-white rounded-md shadow">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Send us a message!</h2>
          <p className="text-gray-500 mb-6">
            Do you have a question? A complaint? Or need any help to choose the right job? Feel free to contact us.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <Label>First Name</Label>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <Label>Last Name</Label>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <Label>Contact Details</Label>
              <Input
                type="text"
                placeholder="Enter your contact number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <Label>Send us a message</Label>
              <Textarea
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="h-32 resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="lg:w-1/3 bg-gray-50 p-8 flex flex-col justify-between rounded-md shadow">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">
              Hi! We are always here to <span className="font-bold">help you.</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-md shadow">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm font-semibold">Hotline:</p>
                  <p className="text-gray-600">+977 56 498 3456</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-md shadow">
                <Download className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm font-semibold">SMS/Whatsapp:</p>
                  <p className="text-gray-600">+977 56 498 3456</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-md shadow">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-sm font-semibold">Email:</p>
                  <p className="text-gray-600">support@hirynn.com</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Connect with us!</p>
              <div className="flex space-x-4">
                <a href="#"><Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800"/></a>
                <a href="#"><Globe className="w-6 h-6 text-pink-500 hover:text-pink-700"/></a>
                <a href="#"><Video className="w-6 h-6 text-red-600 hover:text-red-800"/></a>
                <a href="#"><MessageCircle className="w-6 h-6 text-indigo-600 hover:text-indigo-800"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
