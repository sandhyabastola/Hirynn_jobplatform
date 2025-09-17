import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black px-12"> 
      {/* Black background with 20px (px-5) gap left & right */}
      
      <div className="bg-white flex flex-col min-h-screen">
        <Header />
        <motion.main
          className="flex-2 w-full max-w-6xl mx-auto px-6 lg:px-8 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
