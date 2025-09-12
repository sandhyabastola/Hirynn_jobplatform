// Footer.jsx
import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "react-feather"; // adjust if using different icon library

const Footer = () => {
  const otherLinks = ["C.V"];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
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
              <h1 className="font-semibold text-lg">Download our App</h1>
              <p>Get the Hirynn mobile app for learning on the go</p>
              <img
                src="/pngwing.com 3.png"
                alt="Google Play"
                className="h-10 w-[120px]"
              />
            </div>
          </div>

          {/* Other Links */}
          <div className="space-y-3">
            <h1 className="font-semibold text-lg">Other Links</h1>
            <div className="space-y-2">
              {otherLinks.map((link) => (
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

          {/* Contact */}
          <div className="space-y-3">
            <h1 className="font-semibold text-lg">Get in Touch</h1>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:support@hirynn.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  support@hirynn.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+9779808349417"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  9808349417
                </a>
              </div>
            </div>

            {/* Social Links */}
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
    </footer>
  );
};

export default Footer;
