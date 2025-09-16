import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin } from "react-feather";

const Footer = () => {
  const otherLinks = ["C.V"];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="Hirynn Logo" className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Hirynn</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering teachers and learners with professional growth opportunities. Explore teaching jobs, connect with top institutions, and access resources anytime.
            </p>
            <div className="space-y-1">
              <h2 className="font-semibold text-white">Download our App</h2>
              <p className="text-gray-400 text-sm">Get the Hirynn mobile app for learning on the go</p>
              <img src="/google-play.png" alt="Google Play" className="h-10 w-[120px]" />
            </div>
          </div>

          {/* Other Links */}
          <div className="space-y-4">
            <h2 className="font-semibold text-white">Other Links</h2>
            <div className="flex flex-col gap-2">
              {otherLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="font-semibold text-white">Get in Touch</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:support@hirynn.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  support@hirynn.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+9779808349417"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  9808349417
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="font-semibold text-white">Follow Us</h2>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hirynn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
