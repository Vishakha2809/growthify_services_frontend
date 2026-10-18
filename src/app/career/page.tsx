"use client";

import { useState, useEffect } from "react";
import { jobsAPI, type Job } from "@/services/api";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Heart,
  Trophy,
  Laptop,
  GraduationCap,
  Plane,
  Target,
  Zap,
  Award,
  Loader2,
  AlertCircle,
  X,
} from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    desc: "Competitive Salary and Performance Bonuses",
  },
  {
    icon: Laptop,
    desc: "100% Remote-First Policy & Flexible Hours",
  },
  {
    icon: Heart,
    desc: "Comprehensive Health, Dental, and Vision Coverage",
  },
  {
    icon: Plane,
    desc: "Generous Paid Time Off",
  },
  {
    icon: GraduationCap,
    desc: "Annual Professional Development Stipend",
  },
];

const companyValues = [
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Work with talented professionals in a supportive environment",
  },
  {
    icon: Zap,
    title: "Innovation First",
    desc: "Cutting-edge projects using the latest technologies",
  },
  {
    icon: Award,
    title: "Recognition",
    desc: "Your contributions are valued and celebrated",
  },
  {
    icon: Target,
    title: "Impact",
    desc: "Build products that make a real difference",
  },
];

// Helper function to convert text to array
const textToArray = (text?: string | null): string[] => {
  if (!text) return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
};

// Helper function to get skills array
const getSkillsArray = (skills?: string): string[] => {
  if (!skills) return [];
  return skills
    .split(",")
    .map((skill) => skill.trim())
    .filter((skill) => skill.length > 0);
};

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await jobsAPI.getAll();
        console.log("Fetched jobs:", data);
        setJobs(data.results);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job listings. Please try again later.");
        setJobs([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Get unique departments from jobs - with safety check
  const departments =
    Array.isArray(jobs) && jobs.length > 0
      ? ["All", ...new Set(jobs.map((job) => job.department))]
      : ["All"];

  const filteredJobs =
    selectedDepartment === "All"
      ? jobs
      : jobs.filter((job) => job.department === selectedDepartment);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedJob(null);
    };
    if (selectedJob) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedJob]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F3E8FF] via-white to-[#EDE9FE] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6D28D9]/10 text-[#6D28D9] rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              We're Hiring!
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Your Career{" "}
              <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join a team of passionate innovators who are shaping the future of
              technology. We're building products that impact millions of users
              worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#culture"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold border-2 border-[#6D28D9] hover:border-[#8B5CF6] hover:shadow-md transition-all"
              >
                Learn About Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section id="culture" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
                Growthify
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to creating an environment where talented people
              can thrive and do their best work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {companyValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#6D28D9] transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9]/10 to-[#8B5CF6]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#6D28D9]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perks &{" "}
              <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our people. Our comprehensive benefits package is
              designed to support your health, wealth, and continuous
              development.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#6D28D9] transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Open{" "}
              <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Find your perfect role and start your journey with us today.
            </p>

            {/* Department Filter */}
            {!isLoading && !error && departments.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedDepartment === dept
                        ? "bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-[#6D28D9]"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-[#6D28D9] mb-3" />
              <span className="text-gray-600">Loading positions...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="max-w-2xl mx-auto p-6 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-700 font-medium mb-1">
                  Error loading jobs
                </p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Jobs List */}
          {!isLoading && !error && (
            <div className="max-w-5xl mx-auto space-y-4">
              {filteredJobs.map((job) => {
                const skillsArray = getSkillsArray(job.required_skills);

                return (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:border-[#6D28D9]"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">
                            {job.title}
                          </h3>
                          {job.is_featured && (
                            <span className="px-3 py-1 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4 text-[#6D28D9]" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-[#6D28D9]" />
                            {job.location_details || job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#6D28D9]" />
                            {job.job_type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-[#6D28D9]" />
                            {job.experience_required}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {job.description}
                        </p>
                        {skillsArray.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {skillsArray.slice(0, 5).map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                            {skillsArray.length > 5 && (
                              <span className="px-2 py-1 text-gray-500 text-xs">
                                +{skillsArray.length - 5} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap">
                        View Details →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!isLoading && !error && filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No positions available
                {selectedDepartment !== "All"
                  ? ` in ${selectedDepartment}`
                  : ""}{" "}
                at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Don't See a Perfect Match?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              We're always looking for talented individuals. Send us your resume
              and we'll reach out when we have a suitable opening that matches
              your skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hr@growthifyservices.in?subject=General Application"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#6D28D9] rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="mailto:hr@growthifyservices.in?subject=Join Talent Network"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-[#6D28D9] transition-all"
              >
                Join Our Talent Network
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {selectedJob.title}
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {selectedJob.department}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    📍 {selectedJob.location_details || selectedJob.location}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    💼 {selectedJob.job_type}
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    🎓 {selectedJob.experience_required}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About the Role
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              {/* Required Skills */}
              {getSkillsArray(selectedJob.required_skills).length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Required Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {getSkillsArray(selectedJob.required_skills).map(
                      (skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              {selectedJob.responsibilities && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Responsibilities
                  </h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedJob.responsibilities}
                  </div>
                </div>
              )}

              {/* Qualifications */}
              {selectedJob.qualifications && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Requirements
                  </h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedJob.qualifications}
                  </div>
                </div>
              )}

              {/* Preferred Skills */}
              {getSkillsArray(selectedJob.preferred_skills).length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Nice to Have
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {getSkillsArray(selectedJob.preferred_skills).map(
                      (skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Salary & Benefits */}
              {(selectedJob.salary_range || selectedJob.benefits) && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Compensation & Benefits
                  </h3>
                  {selectedJob.salary_range && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Salary:</span>{" "}
                      {selectedJob.salary_range}
                    </p>
                  )}
                  {selectedJob.benefits && (
                    <p className="text-gray-700">
                      <span className="font-medium">Benefits:</span>{" "}
                      {selectedJob.benefits}
                    </p>
                  )}
                </div>
              )}

              {/* Application Deadline */}
              {selectedJob.application_deadline && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">Application Deadline:</span>{" "}
                    {new Date(
                      selectedJob.application_deadline,
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              )}

              {/* Apply Section */}
              <div className="border-t pt-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Apply Now</h3>
                <p className="text-gray-600 mb-6">
                  Interested in this role? Send us your application directly via
                  email. Please attach your resume and portfolio (if
                  applicable).
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1" +
                    "&to=hr@growthifyservices.in" +
                    "&su=" +
                    encodeURIComponent(
                      `Application for ${selectedJob.title} - ${selectedJob.id}`,
                    ) +
                    "&body=" +
                    encodeURIComponent(
                      `Hi Hiring Team,

I am interested in the ${selectedJob.title} position at Growthify.

Please find my resume attached.

Key Skills:
- 
- 

Portfolio / LinkedIn:

Thank you,
[Your Name]`,
                    )
                  }
                  className="block w-full text-center py-4 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white rounded-xl font-bold hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  Send Application via Gmail
                </a>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Or email us at{" "}
                  <span className="text-purple-600 font-medium">
                    hr@growthifyservices.in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
