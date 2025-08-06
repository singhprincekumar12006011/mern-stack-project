import React from "react";

function Programs() {
  const programs = [
    {
      id: 1,
      title: "Strength Training",
      description: "Build muscle mass and increase overall strength with progressive overload techniques.",
      duration: "12 weeks",
      level: "Intermediate",
      sessions: "4-5 per week",
      features: ["Progressive Overload", "Compound Movements", "Muscle Hypertrophy", "Strength Gains"],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "HIIT Cardio",
      description: "High-intensity interval training for fat loss and cardiovascular improvement.",
      duration: "8 weeks",
      level: "All Levels",
      sessions: "3-4 per week",
      features: ["Fat Burning", "Metabolic Boost", "Time Efficient", "Heart Health"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Powerlifting",
      description: "Focus on the big three: squat, bench press, and deadlift for maximum strength.",
      duration: "16 weeks",
      level: "Advanced",
      sessions: "4 per week",
      features: ["Competition Prep", "Max Strength", "Technical Mastery", "PR Goals"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Functional Fitness",
      description: "Movement patterns and exercises that translate to real-world activities.",
      duration: "10 weeks",
      level: "Beginner",
      sessions: "3 per week",
      features: ["Movement Quality", "Injury Prevention", "Daily Activities", "Mobility Focus"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 5,
      title: "Bodybuilding",
      description: "Aesthetic-focused training with emphasis on muscle definition and symmetry.",
      duration: "20 weeks",
      level: "Intermediate",
      sessions: "5-6 per week",
      features: ["Muscle Definition", "Symmetry", "Cutting & Bulking", "Contest Prep"],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 6,
      title: "CrossFit Style",
      description: "Varied functional movements performed at high intensity for overall fitness.",
      duration: "12 weeks",
      level: "All Levels",
      sessions: "4-5 per week",
      features: ["Varied Workouts", "Community Feel", "All-Round Fitness", "Scalable"],
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=300&fit=crop&auto=format"
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case "Beginner": return "text-green-400 bg-green-900/20";
      case "Intermediate": return "text-yellow-400 bg-yellow-900/20";
      case "Advanced": return "text-red-400 bg-red-900/20";
      default: return "text-blue-400 bg-blue-900/20";
    }
  };

  return (
    <div className="text-white bg-black min-h-screen mt-[-72px] pt-[80px] pb-10">
      <div className="w-10/10 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      
      {/* Hero Section */}
      <div className="mt-10 text-center mx-auto max-w-4xl px-4">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Training Programs
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your fitness journey with our expertly designed programs. Whether you're a beginner or advanced athlete, 
            we have the perfect program to help you achieve your goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program) => (
            <div key={program.id} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              {/* Program Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Program Title */}
              <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
              
              {/* Level Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getLevelColor(program.level)}`}>
                {program.level}
              </div>
              
              {/* Program Description */}
              <p className="text-gray-300 mb-6 text-left">{program.description}</p>
              
              {/* Program Details */}
              <div className="space-y-2 mb-6 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="font-medium">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sessions:</span>
                  <span className="font-medium">{program.sessions}</span>
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-left">Program Highlights:</h4>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  {program.features.map((feature, index) => (
                    <div key={index} className="text-gray-300 text-left">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                Start Program
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gray-900 rounded-xl p-8 border border-gray-800 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&auto=format" 
                  alt="Goal oriented training"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Goal-Oriented</h3>
              <p className="text-gray-300 text-sm">Each program is designed with specific fitness goals in mind, ensuring maximum results.</p>
            </div>
            <div>
              <div className="mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=60&h=60&fit=crop&auto=format" 
                  alt="Progress tracking"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-300 text-sm">Monitor your progress with detailed tracking and regular assessments.</p>
            </div>
            <div>
              <div className="mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=60&h=60&fit=crop&auto=format" 
                  alt="Flexible scheduling"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-300 text-sm">Programs adapt to your schedule with flexible timing and workout options.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-6">Get personalized program recommendations and start achieving your fitness goals today.</p>
          <button className="bg-gradient-to-r from-white to-gray-300 text-black py-3 px-8 rounded-lg font-semibold hover:from-gray-200 hover:to-gray-400 transition-all duration-200">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programs;