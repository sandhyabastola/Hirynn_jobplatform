import React from "react";

const jobs = [
  {
    id: 1,
    title: "Mathematics Teacher",
    company: "Tulips School",
    location: "Biratnagar, Nepal",
    type: "Full Time",
    level: "Primary",
    experience: "2-4 years",
  },
  {
    id: 2,
    title: "Mathematics Teacher",
    company: "Tulips School",
    location: "Biratnagar, Nepal",
    type: "Full Time",
    level: "Primary",
    experience: "2-4 years",
  },
  {
    id: 3,
    title: "Mathematics Teacher",
    company: "Tulips School",
    location: "Biratnagar, Nepal",
    type: "Full Time",
    level: "Primary",
    experience: "2-4 years",
  },
  {
    id: 4,
    title: "Mathematics Teacher",
    company: "Tulips School",
    location: "Biratnagar, Nepal",
    type: "Full Time",
    level: "Primary",
    experience: "2-4 years",
  },
  {
    id: 5,
    title: "Mathematics Teacher",
    company: "Tulips School",
    location: "Biratnagar, Nepal",
    type: "Full Time",
    level: "Primary",
    experience: "2-4 years",
  },
  {
    id: 6,
    title: "Mathematics Teacher",
    company: "Tulips School",
    location: "Biratnagar, Nepal",
    type: "Full Time",
    level: "Primary",
    experience: "2-4 years",
  },
];

export default function JobsPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          placeholder="Search job titles, keywords or company"
          className="flex-1 p-3 border rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Location"
          className="flex-1 p-3 border rounded-lg focus:outline-none"
        />
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          Search
        </button>
      </div>

      {/* Upload Resume */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div>
          <p className="font-medium">📎 Upload your Resume</p>
          <p className="text-sm text-gray-500">
            We’ll match you with the best jobs. Right Job, Right Away!
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="p-2 border rounded-lg">
          <option>Jobs</option>
        </select>
        <select className="p-2 border rounded-lg">
          <option>Sort</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center mb-3">
              <img
                src="Class 10.png"
                alt="Logo"
                className="w-10 h-10 mr-3"
              />
              <h2 className="font-bold text-lg">{job.title}</h2>
            </div>
            <p className="text-gray-600">{job.company} • {job.location}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-800 text-white text-sm px-3 py-1 rounded-md">
                {job.type}
              </span>
              <span className="bg-blue-800 text-white text-sm px-3 py-1 rounded-md">
                {job.level}
              </span>
              <span className="bg-blue-800 text-white text-sm px-3 py-1 rounded-md">
                {job.experience}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Job Alert */}
      <div className="mt-10 text-center">
        <p className="mb-2">Didn’t find the right job?</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
          Create a Job Alert
        </button>
      </div>
    </div>
  );
}
