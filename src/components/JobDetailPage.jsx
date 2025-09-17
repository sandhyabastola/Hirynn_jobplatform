"use client"

import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"

const JobDescription = () => {
  const { id } = useParams()
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    experience: "",
    resume: null,
  })

  // Mock job data - in real app, this would come from API
  const job = {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Nepal",
    location: "Kathmandu, Nepal",
    salary: "NPR 80,000 - 120,000",
    type: "Full-time",
    postedDate: "2 days ago",
    deadline: "March 15, 2024",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    description: `We are looking for a Senior Software Engineer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.`,
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in React and TypeScript",
      "Experience with Node.js and Express",
      "Knowledge of database systems (MongoDB, PostgreSQL)",
      "Experience with version control (Git)",
      "Strong problem-solving skills",
      "Excellent communication skills",
      "Bachelor's degree in Computer Science or related field",
    ],
    responsibilities: [
      "Develop and maintain web applications using React and TypeScript",
      "Build RESTful APIs using Node.js and Express",
      "Collaborate with cross-functional teams to define and implement features",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and provide constructive feedback",
      "Troubleshoot and debug applications",
      "Stay up-to-date with emerging technologies and best practices",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance coverage",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Annual leave and sick leave",
      "Team building activities",
    ],
  }

  const relatedJobs = [
    { id: 2, title: "Frontend Developer", company: "WebTech Solutions", location: "Kathmandu" },
    { id: 3, title: "Full Stack Developer", company: "Digital Agency", location: "Pokhara" },
    { id: 4, title: "Backend Developer", company: "StartupHub", location: "Lalitpur" },
    { id: 5, title: "React Developer", company: "CodeCraft", location: "Kathmandu" },
    { id: 6, title: "Software Engineer", company: "TechVision", location: "Bhaktapur" },
    { id: 7, title: "JavaScript Developer", company: "InnovateNow", location: "Kathmandu" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setApplicationData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    setApplicationData((prev) => ({
      ...prev,
      resume: file,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Application submitted:", applicationData)
    alert("Application submitted successfully!")
  }

  return (
    <div className="job-description-page">
      {/* Breadcrumb */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "1rem 0" }}>
        <div className="container">
          <nav style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
            <Link to="/" style={{ color: "#4A90E2", textDecoration: "none" }}>
              Home
            </Link>
            {" > "}
            <Link to="/jobs" style={{ color: "#4A90E2", textDecoration: "none" }}>
              Jobs
            </Link>
            {" > "}
            <span>{job.title}</span>
          </nav>
        </div>
      </section>

      <section style={{ padding: "2rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem" }}>
            {/* Main Content */}
            <div>
              {/* Job Header */}
              <div className="card" style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#2c3e50" }}>{job.title}</h1>
                    <div style={{ fontSize: "1.2rem", color: "#4A90E2", fontWeight: "500", marginBottom: "1rem" }}>
                      {job.company}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", color: "#7f8c8d", fontSize: "0.9rem" }}>
                    <div>Posted: {job.postedDate}</div>
                    <div>Deadline: {job.deadline}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "2rem", marginBottom: "1.5rem", color: "#7f8c8d" }}>
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                  <span>⏰ {job.type}</span>
                </div>

                <div className="job-tags" style={{ marginBottom: "1.5rem" }}>
                  {job.tags.map((tag, index) => (
                    <span key={index} className="job-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-outline">Save Job</button>
                  <button className="btn btn-secondary">Share</button>
                </div>
              </div>

              {/* Job Description */}
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h2 style={{ marginBottom: "1rem", color: "#2c3e50" }}>Job Description</h2>
                <p style={{ color: "#7f8c8d", lineHeight: "1.8", marginBottom: "2rem" }}>{job.description}</p>

                <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>Key Responsibilities</h3>
                <ul style={{ color: "#7f8c8d", lineHeight: "1.8", marginBottom: "2rem", paddingLeft: "1.5rem" }}>
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                      {responsibility}
                    </li>
                  ))}
                </ul>

                <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>Requirements</h3>
                <ul style={{ color: "#7f8c8d", lineHeight: "1.8", marginBottom: "2rem", paddingLeft: "1.5rem" }}>
                  {job.requirements.map((requirement, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                      {requirement}
                    </li>
                  ))}
                </ul>

                <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>Benefits</h3>
                <ul style={{ color: "#7f8c8d", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
                  {job.benefits.map((benefit, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Form */}
              <div className="card">
                <h2 style={{ marginBottom: "1.5rem", color: "#2c3e50" }}>Apply for this Position</h2>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-input"
                        value={applicationData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        value={applicationData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Years of Experience *</label>
                      <select
                        name="experience"
                        className="form-select"
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="2-3">2-3 years</option>
                        <option value="4-5">4-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Resume/CV *</label>
                    <input
                      type="file"
                      name="resume"
                      className="form-input"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                    <small style={{ color: "#7f8c8d", fontSize: "0.9rem" }}>
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </small>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      className="form-textarea"
                      placeholder="Tell us why you're the perfect fit for this role..."
                      value={applicationData.coverLetter}
                      onChange={handleInputChange}
                      rows={6}
                    />
                  </div>

                  <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                    <button type="submit" className="btn btn-primary">
                      Submit Application
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Save as Draft
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Company Info */}
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>About {job.company}</h3>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#e9ecef",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                  }}
                ></div>
                <p style={{ color: "#7f8c8d", lineHeight: "1.6", marginBottom: "1rem" }}>
                  TechCorp Nepal is a leading technology company specializing in innovative software solutions. We're
                  committed to creating cutting-edge products that make a difference.
                </p>
                <div style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
                  <div style={{ marginBottom: "0.5rem" }}>🏢 Technology</div>
                  <div style={{ marginBottom: "0.5rem" }}>👥 50-200 employees</div>
                  <div style={{ marginBottom: "0.5rem" }}>📍 Kathmandu, Nepal</div>
                  <div>🌐 www.techcorp.com.np</div>
                </div>
              </div>

              {/* Job Summary */}
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>Job Summary</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#7f8c8d" }}>Job Type:</span>
                    <span style={{ fontWeight: "500" }}>{job.type}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#7f8c8d" }}>Salary:</span>
                    <span style={{ fontWeight: "500" }}>{job.salary}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#7f8c8d" }}>Location:</span>
                    <span style={{ fontWeight: "500" }}>{job.location}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#7f8c8d" }}>Posted:</span>
                    <span style={{ fontWeight: "500" }}>{job.postedDate}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#7f8c8d" }}>Deadline:</span>
                    <span style={{ fontWeight: "500" }}>{job.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Related Jobs */}
              <div className="card">
                <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>Related Jobs</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {relatedJobs.map((relatedJob) => (
                    <Link
                      key={relatedJob.id}
                      to={`/jobs/${relatedJob.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        style={{
                          padding: "1rem",
                          border: "1px solid #e9ecef",
                          borderRadius: "8px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div style={{ fontWeight: "500", color: "#2c3e50", marginBottom: "0.25rem" }}>
                          {relatedJob.title}
                        </div>
                        <div style={{ color: "#4A90E2", fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                          {relatedJob.company}
                        </div>
                        <div style={{ color: "#7f8c8d", fontSize: "0.9rem" }}>📍 {relatedJob.location}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobDescription
