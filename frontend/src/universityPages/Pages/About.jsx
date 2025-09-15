import React, { useState } from "react";

function AboutUs() {
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "15,000+", label: "Alumni Network" },
    { number: "500+", label: "Faculty Members" },
    { number: "12,000+", label: "Current Students" },
    { number: "50+", label: "Academic Programs" },
    { number: "100+", label: "Industry Partners" }
  ];

  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chancellor",
      qualification: "Ph.D. in Engineering, IIT Delhi",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "A visionary leader with 30+ years in academia and industry, driving innovation in education."
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Vice-Chancellor",
      qualification: "Ph.D. in Computer Science, Stanford University",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      bio: "Former tech executive turned educator, passionate about bridging academia and industry."
    },
    {
      name: "Dr. Amit Patel",
      position: "Dean of Engineering",
      qualification: "Ph.D. in Mechanical Engineering, MIT",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
      bio: "Research expert in sustainable technology with 200+ publications and 15 patents."
    },
    {
      name: "Prof. Meera Gupta",
      position: "Dean of Management",
      qualification: "MBA from Wharton, Ph.D. in Business Strategy",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      bio: "Strategic business consultant and thought leader in organizational development."
    }
  ];

  const milestones = [
    { year: "1999", event: "University established with first engineering program" },
    { year: "2005", event: "Achieved autonomous status and expanded to 5 departments" },
    { year: "2010", event: "Launched MBA program and international collaborations" },
    { year: "2015", event: "Received NAAC A+ accreditation and established research centers" },
    { year: "2018", event: "Crossed 10,000 students milestone and launched online programs" },
    { year: "2020", event: "Successfully transitioned to hybrid learning during pandemic" },
    { year: "2023", event: "Opened new campus and achieved 95% placement rate" },
    { year: "2024", event: "Launched AI and Data Science programs with industry partnerships" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Striving for the highest standards in education, research, and student development.",
      icon: "🏆"
    },
    {
      title: "Innovation",
      description: "Fostering creativity and entrepreneurial thinking to solve real-world challenges.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "Maintaining ethical standards and transparency in all our endeavors.",
      icon: "🤝"
    },
    {
      title: "Inclusivity",
      description: "Creating an environment where diversity is celebrated and everyone belongs.",
      icon: "🌍"
    },
    {
      title: "Sustainability",
      description: "Promoting environmental consciousness and sustainable practices.",
      icon: "🌱"
    },
    {
      title: "Community",
      description: "Building strong relationships and contributing to societal development.",
      icon: "👥"
    }
  ];

  const facilities = [
    {
      name: "Modern Laboratories",
      description: "State-of-the-art labs equipped with latest technology for hands-on learning",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"
    },
    {
      name: "Digital Library",
      description: "Extensive collection of books, journals, and digital resources",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Sports Complex",
      description: "Olympic-size swimming pool, gymnasium, and multiple sports courts",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
    },
    {
      name: "Innovation Hub",
      description: "Incubation center for startups and entrepreneurial ventures",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
    },
    {
      name: "Auditorium",
      description: "1000-seat capacity with advanced audio-visual equipment",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400"
    },
    {
      name: "Hostel Facilities",
      description: "Comfortable accommodation for 5000+ students with modern amenities",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400"
    }
  ];

  const accreditations = [
    "NAAC A+ Grade",
    "NBA Accredited Programs",
    "UGC Recognition",
    "AICTE Approved",
    "ISO 9001:2015 Certified",
    "NIRF Ranked Institution"
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-5">
      {/* Hero Section */}
      <div className="relative  text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#ff3300] "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Our University
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering minds, shaping futures, and creating leaders who will transform the world through innovation and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                Our Story
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#F6FF99] bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-300 bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-blue-300 bg-opacity-15 rounded-full animate-bounce delay-100"></div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="bg-green-700 text-white p-2 rounded-full shadow-lg group-hover:shadow-xl transition transform group-hover:scale-105">
                  <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-sm font-medium opacity-90">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 py-4">
            {[
              { id: 'overview', label: 'Our Story' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'values', label: 'Values' },
              { id: 'facilities', label: 'Facilities' },
              { id: 'milestones', label: 'Milestones' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeSection === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {activeSection === 'overview' && (
          <div className="space-y-16">
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <h3 className="text-3xl font-bold mb-6 text-blue-800">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To provide world-class education that nurtures critical thinking, innovation, and ethical leadership. 
                  We are committed to creating an inclusive learning environment where students develop the knowledge, 
                  skills, and values needed to excel in their chosen fields and contribute meaningfully to society.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <h3 className="text-3xl font-bold mb-6 text-purple-800">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be recognized globally as a premier institution that transforms lives through innovative education, 
                  groundbreaking research, and meaningful community engagement. We aspire to be the catalyst for 
                  positive change in our region and beyond.
                </p>
              </div>
            </div>

            {/* About Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Journey</h3>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Founded in 1999 with a vision to democratize quality higher education, our university has grown from a small 
                  engineering college to a comprehensive institution offering diverse programs across multiple disciplines. 
                  What started with 200 students and a handful of faculty members has evolved into a vibrant academic community 
                  of over 12,000 students and 500+ faculty members.
                </p>
                
                <p className="mb-6">
                  Our commitment to academic excellence, research innovation, and industry relevance has positioned us among 
                  the top institutions in the region. We pride ourselves on maintaining small class sizes, fostering 
                  mentor-student relationships, and providing personalized attention to each student's academic and 
                  professional development.
                </p>
                
                <p>
                  Today, we continue to evolve, embracing emerging technologies, sustainable practices, and global perspectives 
                  while staying true to our core values of integrity, innovation, and service to society. Our alumni network 
                  spans across continents, with graduates holding leadership positions in Fortune 500 companies, successful 
                  startups, research institutions, and public service organizations.
                </p>
              </div>
            </div>

            {/* Accreditations */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Accreditations & Recognitions</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {accreditations.map((accreditation, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <span className="font-semibold text-gray-700">{accreditation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'leadership' && (
          <div>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((leader, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                  <div className="p-8">
                    <div className="flex items-center gap-6 mb-4">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{leader.name}</h3>
                        <p className="text-blue-600 font-semibold mb-1">{leader.position}</p>
                        <p className="text-sm text-gray-600">{leader.qualification}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'values' && (
          <div>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                  <div className="text-4xl mb-4 text-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'facilities' && (
          <div>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">World-Class Facilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{facility.name}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'milestones' && (
          <div>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Journey Through Time</h2>
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1 hover:shadow-lg transition">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-[#ff3300] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Become part of a legacy that values excellence, innovation, and making a difference in the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition">
              Schedule Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition">
              Contact Admissions
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">info@university.edu</p>
              <p className="text-gray-600">admissions@university.edu</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">+91-1234567890</p>
              <p className="text-gray-600">Toll Free: 1800-123-456</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">University Road, Education City</p>
              <p className="text-gray-600">Haryana 121001, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;