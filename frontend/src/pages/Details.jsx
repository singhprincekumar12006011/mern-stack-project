import React, { useEffect, useRef } from "react";

function Details() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = container.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated geometric grid */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="geometric-grid"></div>
        </div>
        
        {/* Floating subtle orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-white/3 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-l from-white/2 to-transparent rounded-full blur-3xl animate-float-slow-delayed"></div>
        
        {/* Professional animated lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-line"></div>
        <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent animate-pulse-line-delayed"></div>
        
        {/* Subtle animated stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle-professional"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <span className="text-sm uppercase tracking-widest text-gray-400 font-light">About Us</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-white to-transparent"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              <span className="font-thin">GYM</span>
              <span className="mx-4 text-white/60">|</span>
              <span className="font-light">ZONE</span>
            </h1>
            
            <div className="w-16 h-px bg-white mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Where excellence meets dedication
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Text Content */}
            <div className="space-y-8 scroll-animate">
              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-white">
                  Professional Fitness Excellence
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  At Gym Zone, we deliver premium fitness solutions through cutting-edge 
                  equipment, expert guidance, and a commitment to your success. Our facility 
                  represents the pinnacle of modern fitness technology and professional training methodologies.
                </p>
              </div>
              
              <div>
                <p className="text-gray-400 leading-relaxed">
                  We combine scientific training principles with personalized attention to ensure 
                  optimal results. Our certified professionals are dedicated to helping you achieve 
                  your fitness objectives efficiently and safely.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 scroll-animate">
              <div className="text-center group">
                <div className="border border-gray-800 p-6 transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/20">
                  <div className="text-3xl font-light text-white mb-2">500+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">Active Members</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="border border-gray-800 p-6 transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/20">
                  <div className="text-3xl font-light text-white mb-2">15+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">Expert Trainers</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="border border-gray-800 p-6 transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/20">
                  <div className="text-3xl font-light text-white mb-2">50+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">Equipment Pieces</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="border border-gray-800 p-6 transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/20">
                  <div className="text-3xl font-light text-white mb-2">24/7</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">Access Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="scroll-animate">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-light mb-4">Our Services</h3>
              <div className="w-12 h-px bg-white mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 border border-gray-700 mx-auto flex items-center justify-center group-hover:border-gray-500 transition-colors duration-300">
                    <div className="w-6 h-6 bg-white"></div>
                  </div>
                </div>
                <h4 className="text-lg font-light mb-3">Personal Training</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  One-on-one sessions with certified professionals tailored to your specific goals and fitness level.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 border border-gray-700 mx-auto flex items-center justify-center group-hover:border-gray-500 transition-colors duration-300">
                    <div className="w-6 h-6 bg-white"></div>
                  </div>
                </div>
                <h4 className="text-lg font-light mb-3">Group Classes</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Dynamic group sessions including HIIT, yoga, spinning, and strength training programs.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 border border-gray-700 mx-auto flex items-center justify-center group-hover:border-gray-500 transition-colors duration-300">
                    <div className="w-6 h-6 bg-white"></div>
                  </div>
                </div>
                <h4 className="text-lg font-light mb-3">Nutrition Guidance</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Comprehensive nutritional counseling and meal planning to complement your fitness journey.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 scroll-animate">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 border border-white text-white font-light uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-white text-black font-light uppercase tracking-wider text-sm hover:bg-gray-200 transition-all duration-300">
                View Membership Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        .geometric-grid {
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          width: 100%;
          height: 100%;
          animation: grid-float 20s ease-in-out infinite;
        }

        @keyframes grid-float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-10px, -5px); }
          50% { transform: translate(5px, -10px); }
          75% { transform: translate(-5px, 5px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.03; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.05; }
        }

        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0px) scale(1.1); opacity: 0.02; }
          50% { transform: translateY(15px) scale(1); opacity: 0.04; }
        }

        @keyframes pulse-line {
          0%, 100% { opacity: 0.2; transform: scaleX(1); }
          50% { opacity: 0.4; transform: scaleX(1.2); }
        }

        @keyframes pulse-line-delayed {
          0%, 100% { opacity: 0.15; transform: scaleX(1.1); }
          50% { opacity: 0.35; transform: scaleX(1); }
        }

        @keyframes twinkle-professional {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slow-delayed {
          animation: float-slow-delayed 8s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-pulse-line {
          animation: pulse-line 4s ease-in-out infinite;
        }

        .animate-pulse-line-delayed {
          animation: pulse-line-delayed 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-twinkle-professional {
          animation: twinkle-professional 4s ease-in-out infinite;
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-animate:nth-child(1) { transition-delay: 0ms; }
        .scroll-animate:nth-child(2) { transition-delay: 200ms; }
        .scroll-animate:nth-child(3) { transition-delay: 400ms; }
        .scroll-animate:nth-child(4) { transition-delay: 600ms; }
      `}</style>
    </div>
  );
}

export default Details;