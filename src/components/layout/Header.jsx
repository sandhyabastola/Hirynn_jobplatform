import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="Hirynn Logo" className="h-5 w-5" />
              </div>
              <span className="text-4xl font-bold text-foreground">Hirynn</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/jobs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Jobs</Link>
            <Link to="/institutions" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Institutions</Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
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
