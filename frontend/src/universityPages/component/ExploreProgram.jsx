import React, { useState, useEffect } from "react";
import { GraduationCap, BookOpen, Users, Award, Star, ChevronRight, X, Mail, Phone, MapPin, User, FileText, Sparkles } from "lucide-react";

function ExploreProgram() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    program: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const postGraduationPrograms = [
    {
      name: "MBA (Master of Business Administration)",
      description: "Focus on business management, leadership, and entrepreneurship skills.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      duration: "2 Years",
      rating: 4.8,
      students: "500+",
      features: ["Leadership Training", "Industry Projects", "Global Exposure"]
    },
    {
      name: "MCA (Master of Computer Applications)",
      description: "Advanced computer science and application development.",
      img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=500&q=80",
      duration: "3 Years",
      rating: 4.7,
      students: "300+",
      features: ["Coding Bootcamps", "AI/ML Focus", "Industry Mentorship"]
    },
    {
      name: "M.Sc (Computer Science)",
      description: "In-depth study of algorithms, data structures, and AI.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
      duration: "2 Years",
      rating: 4.6,
      students: "200+",
      features: ["Research Projects", "Lab Access", "Publications"]
    },
    {
      name: "M.A (English Literature)",
      description: "Explore literature, poetry, and critical analysis.",
      img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=80",
      duration: "2 Years",
      rating: 4.5,
      students: "150+",
      features: ["Creative Writing", "Literary Criticism", "Publishing Opportunities"]
    },
    {
      name: "M.Com (Commerce)",
      description: "Advanced study in accounting, finance, and business laws.",
      img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=500&q=80",
      duration: "2 Years",
      rating: 4.4,
      students: "400+",
      features: ["Financial Analysis", "Tax Planning", "Corporate Law"]
    },
  ];

  const graduationPrograms = [
    {
      name: "BBA (Bachelor of Business Administration)",
      description: "Foundation in business management and leadership.",
      img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=500&q=80",
      duration: "3 Years",
      rating: 4.6,
      students: "800+",
      features: ["Case Studies", "Internships", "Entrepreneurship"]
    },
    {
      name: "B-Tech (Bachelor of Technology)",
      description: "Fundamental study of computer science and engineering.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
      duration: "4 Years",
      rating: 4.8,
      students: "1000+",
      features: ["Hands-on Labs", "Industry Projects", "Placement Support"]
    },
    {
      name: "BCA (Bachelor of Computer Applications)",
      description: "Learn software development and programming basics.",
      img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=500&q=80",
      duration: "3 Years",
      rating: 4.5,
      students: "600+",
      features: ["Coding Practice", "Web Development", "Mobile Apps"]
    },
    {
      name: "B.Sc (Computer Science)",
      description: "Introduction to programming, algorithms, and data science.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
      duration: "3 Years",
      rating: 4.4,
      students: "400+",
      features: ["Data Science", "Machine Learning", "Research Methods"]
    },
    {
      name: "B.A (English Literature)",
      description: "Study language, literature, and creative writing.",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
      duration: "3 Years",
      rating: 4.3,
      students: "250+",
      features: ["Writing Workshops", "Literary Events", "Publishing"]
    },
    {
      name: "B.Com (Commerce)",
      description: "Learn commerce, accounting, and finance fundamentals.",
      img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=500&q=80",
      duration: "3 Years",
      rating: 4.2,
      students: "700+",
      features: ["Practical Training", "Industry Exposure", "Certification"]
    },
  ];

  const handleApplyNow = (program) => {
    setSelectedProgram(program);
    setFormData(prev => ({
      ...prev,
      program: program.name
    }));
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProgram(null);
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      address: "", 
      qualification: "", 
      program: "" 
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.qualification) {
      alert('Please fill in all required fields');
      return;
    }
    
    console.log('Application submitted:', formData);
    alert(`Application submitted successfully for ${formData.program}!`);
    closeModal();
  };

  const ProgramCard = ({ program, index, delay }) => (
    <div 
      className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Floating elements */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          {program.rating}
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-t-2xl">
          <img
            src={program.img}
            alt={`${program.name} program`}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-gray-500 font-medium">{program.duration}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {program.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {program.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {program.features.map((feature, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full border border-blue-100"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600">{program.students} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-600">Accredited</span>
            </div>
          </div>

          <button 
            onClick={() => handleApplyNow(program)}
            className="w-full bg-[#ff3300] text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 font-semibold group"
          >
            <span>Apply Now</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#ff3300] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300" />
              </div>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-white  ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Explore Programs
            </h1>
            <p className={`text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed ${
              isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '200ms' }}>
              Discover world-class educational programs designed to shape your future. 
              From undergraduate to postgraduate degrees, find your perfect academic journey.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Post Graduation Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                Post Graduation Programs
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced programs for specialized knowledge and career advancement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postGraduationPrograms.map((program, index) => (
              <ProgramCard 
                key={index} 
                program={program} 
                index={index} 
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Graduation Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Graduation Programs
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive undergraduate programs to build strong foundations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graduationPrograms.map((program, index) => (
              <ProgramCard 
                key={index} 
                program={program} 
                index={index} 
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform animate-scale-in">
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-2xl">
              <div className="absolute inset-0 bg-black/10 rounded-t-2xl"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Apply for {selectedProgram?.name}
                    </h3>
                    <p className="text-orange-100 text-sm">
                      Join thousands of successful graduates
                    </p>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 text-gray-500" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none transition-all duration-300"
                    placeholder="Enter your full address"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    placeholder="Enter your highest qualification"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <BookOpen className="w-4 h-4 text-gray-500" />
                    Program
                  </label>
                  <input
                    type="text"
                    name="program"
                    value={formData.program}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 bg-gray-50 text-gray-600 cursor-not-allowed"
                    readOnly
                  />
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
                >
                  Submit Application
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-300 transition-all duration-300 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ExploreProgram;