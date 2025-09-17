import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <div className="flex items-center space-x-2">
  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
    <img src="/logo.png" alt="Hirynn Logo" className="h-5 w-5" />
  </div>
  <span className="text-1xl font-bold text-foreground">Hirynn</span>
</div>


          {/* Navigation */}
<nav className="hidden md:flex items-center space-x-8">
  <Link 
    to="/" 
    className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group"
  >
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link 
    to="/jobs" 
    className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
  >
    Jobs
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link 
    to="/institutions" 
    className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
  >
    Institutions
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link 
    to="/about" 
    className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
  >
    About Us
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link 
    to="/contact" 
    className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
  >
    Contact Us
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
</nav>

          {/* Auth buttons / User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <img
                    src={user.avatar || "/users.png"}
                    alt="User"
                    className="h-8 w-8 rounded-full"
                  />
                  <span>{user.name || "Me"}</span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
