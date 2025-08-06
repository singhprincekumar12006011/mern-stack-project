import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    program: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      program: ''
    });
  };

  const contactInfo = [
    {
      title: "Phone",
      value: "+91 555 123 4567",
      icon: "📞",
      link: "tel:+15551234567"
    },
    {
      title: "Email",
      value: "info@fitnessgym.com",
      icon: "✉️",
      link: "mailto:info@fitnessgym.com"
    },
    {
      title: "Address",
      value: "123 Fitness Street, Gym City, GC 12345",
      icon: "📍",
      link: "https://maps.google.com"
    },
    {
      title: "Hours",
      value: "Mon-Fri: 5AM-11PM\nSat-Sun: 6AM-10PM",
      icon: "🕐",
      link: null
    }
  ];

  const programs = [
    "Strength Training",
    "HIIT Cardio", 
    "Powerlifting",
    "Functional Fitness",
    "Bodybuilding",
    "CrossFit Style",
    "Personal Training",
    "Group Classes"
  ];

  return (
    <div className="mt-[-100px] pt-[110px] text-white bg-gradient-to-b from-black via-black to-gray-900 min-h-screen">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your fitness journey? We're here to help you achieve your goals with personalized training programs and expert guidance.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm whitespace-pre-line"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-sm whitespace-pre-line">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout for FAQ and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* FAQ Section */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-white/30 pl-6">
                <h3 className="font-semibold text-lg mb-3 text-white">Do you offer free consultations?</h3>
                <p className="text-gray-300">Yes! We provide complimentary fitness assessments and consultation sessions for all new members to help design your perfect workout plan.</p>
              </div>
              <div className="border-l-4 border-white/30 pl-6">
                <h3 className="font-semibold text-lg mb-3 text-white">What should I bring to my first visit?</h3>
                <p className="text-gray-300">Just bring comfortable workout clothes, athletic shoes, a water bottle, and your enthusiasm to start your fitness journey!</p>
              </div>
              <div className="border-l-4 border-white/30 pl-6">
                <h3 className="font-semibold text-lg mb-3 text-white">Do you have flexible membership options?</h3>
                <p className="text-gray-300">Absolutely! We offer various membership plans including monthly, quarterly, and annual options to fit your lifestyle and budget.</p>
              </div>
            </div>
          </div>

          {/* Social Media & Additional Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 text-center">Follow Our Journey</h2>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-xl border border-gray-600 hover:border-white transition-all duration-300 hover:scale-110 group">
                  <div className="w-8 h-8 text-center text-2xl group-hover:scale-110 transition-transform">📷</div>
                </a>
                <a href="#" className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-xl border border-gray-600 hover:border-white transition-all duration-300 hover:scale-110 group">
                  <div className="w-8 h-8 text-center text-2xl group-hover:scale-110 transition-transform">📘</div>
                </a>
                <a href="#" className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-xl border border-gray-600 hover:border-white transition-all duration-300 hover:scale-110 group">
                  <div className="w-8 h-8 text-center text-2xl group-hover:scale-110 transition-transform">🐦</div>
                </a>
              </div>
              <p className="text-gray-300 text-center text-sm">Stay updated with our latest workouts, success stories, and fitness tips!</p>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Certified personal trainers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  State-of-the-art equipment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Flexible scheduling options
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Supportive community atmosphere
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-20 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Facility</h2>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-700">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop&auto=format" 
              alt="Modern Gym Facility"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-300 mb-6 text-lg">Located in the heart of the fitness district with easy parking and public transport access</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-white to-gray-200 text-black py-4 px-8 rounded-lg font-semibold hover:from-gray-200 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have questions about our programs or want to schedule a consultation? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-600 rounded-xl focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-600 rounded-xl focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone and Program Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-600 rounded-xl focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="+91 555 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Interested Program</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-600 rounded-xl focus:border-white focus:outline-none transition-all duration-300 text-white"
                  >
                    <option value="" className="bg-gray-900">Select a Program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program} className="bg-gray-900">{program}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-600 rounded-xl focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="How can we help you today?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-gradient-to-br from-black/80 to-gray-900/80 border border-gray-600 rounded-xl focus:border-white focus:outline-none transition-all duration-300 resize-vertical text-white placeholder-gray-400"
                  placeholder="Tell us about your fitness goals, experience level, and any specific questions you have..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-white to-gray-200 text-black py-5 px-12 rounded-xl font-bold text-lg hover:from-gray-200 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Send Message
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;