"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Building2, MapPin, ExternalLink } from "lucide-react";

const institutions = [
  {
    id: 1,
    name: "Kathmandu University",
    location: "Dhulikhel, Kavre",
    description:
      "One of Nepal’s leading universities with a focus on science, engineering, and management.",
    website: "https://ku.edu.np",
  },
  {
    id: 2,
    name: "Tribhuvan University",
    location: "Kirtipur, Kathmandu",
    description:
      "The oldest and largest university in Nepal, offering a wide range of academic programs.",
    website: "https://tu.edu.np",
  },
  {
    id: 3,
    name: "Purbanchal University",
    location: "Biratnagar, Morang",
    description:
      "Focused on academic excellence and research in the eastern region of Nepal.",
    website: "https://pu.edu.np",
  },
];

const Institutions = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Institutions</h1>
          <p className="text-muted-foreground text-lg">
            Explore top educational institutions in Nepal
          </p>
        </div>

        {/* Institutions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutions.map((inst) => (
            <Card
              key={inst.id}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span>{inst.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{inst.description}</p>
                <p className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-blue-500" /> {inst.location}
                </p>
                <a href={inst.website} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center space-x-2">
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institutions;
