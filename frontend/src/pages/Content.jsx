
// import React, { useState, useEffect, useRef } from "react";

// function GymContentExercises() {
//   const [activeTab, setActiveTab] = useState('programs');
//   const [selectedExercise, setSelectedExercise] = useState(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = container.querySelectorAll('.scroll-animate');
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const programs = [
//     {
//       id: 1,
//       title: "Strength Building",
//       duration: "12 weeks",
//       level: "Intermediate",
//       description: "Comprehensive strength training program designed to build muscle mass and increase overall power.",
//       benefits: ["Increased muscle mass", "Enhanced bone density", "Improved metabolism", "Better functional strength"],
//       sessions: "4 sessions/week"
//     },
//     {
//       id: 2,
//       title: "Fat Loss Transformation",
//       duration: "8 weeks",
//       level: "All Levels",
//       description: "High-intensity program combining cardio and strength training for maximum fat burning.",
//       benefits: ["Rapid fat loss", "Improved cardiovascular health", "Enhanced endurance", "Toned physique"],
//       sessions: "5 sessions/week"
//     },
//     {
//       id: 3,
//       title: "Athletic Performance",
//       duration: "16 weeks",
//       level: "Advanced",
//       description: "Sport-specific training designed to enhance athletic performance and competition readiness.",
//       benefits: ["Explosive power", "Agility improvement", "Injury prevention", "Peak performance"],
//       sessions: "6 sessions/week"
//     }
//   ];

//   const exercises = [
//     {
//       id: 1,
//       name: "Deadlift",
//       category: "Compound",
//       primaryMuscles: ["Hamstrings", "Glutes", "Lower Back"],
//       secondaryMuscles: ["Traps", "Lats", "Core"],
//       difficulty: "Advanced",
//       equipment: "Barbell",
//       instructions: [
//         "Stand with feet hip-width apart, bar over mid-foot",
//         "Bend at hips and knees, grip bar with hands outside legs",
//         "Keep chest up, shoulders back, core tight",
//         "Drive through heels, extend hips and knees simultaneously",
//         "Stand tall, squeeze glutes at top",
//         "Lower bar by pushing hips back first"
//       ],
//       tips: "Keep the bar close to your body throughout the movement. Focus on hip hinge movement pattern."
//     },
//     {
//       id: 2,
//       name: "Bench Press",
//       category: "Compound",
//       primaryMuscles: ["Chest", "Triceps", "Front Delts"],
//       secondaryMuscles: ["Core", "Lats"],
//       difficulty: "Intermediate",
//       equipment: "Barbell, Bench",
//       instructions: [
//         "Lie on bench with eyes under the bar",
//         "Grip bar slightly wider than shoulder-width",
//         "Plant feet firmly on ground, arch back slightly",
//         "Unrack bar and position over chest",
//         "Lower bar to chest with control",
//         "Press bar up explosively to starting position"
//       ],
//       tips: "Maintain tight shoulder blades throughout the movement. Control the eccentric portion."
//     },
//     {
//       id: 3,
//       name: "Pull-ups",
//       category: "Compound",
//       primaryMuscles: ["Lats", "Rhomboids", "Mid Traps"],
//       secondaryMuscles: ["Biceps", "Rear Delts", "Core"],
//       difficulty: "Intermediate",
//       equipment: "Pull-up Bar",
//       instructions: [
//         "Hang from bar with palms facing away",
//         "Hands slightly wider than shoulders",
//         "Engage core and pull shoulder blades down",
//         "Pull body up until chin clears bar",
//         "Lower with control to full arm extension",
//         "Maintain hollow body position throughout"
//       ],
//       tips: "Focus on initiating the movement with your lats. Avoid swinging or using momentum."
//     },
//     {
//       id: 4,
//       name: "Squats",
//       category: "Compound",
//       primaryMuscles: ["Quadriceps", "Glutes"],
//       secondaryMuscles: ["Hamstrings", "Calves", "Core"],
//       difficulty: "Beginner",
//       equipment: "Barbell, Squat Rack",
//       instructions: [
//         "Position bar on upper traps, feet shoulder-width apart",
//         "Keep chest up, core braced",
//         "Initiate movement by pushing hips back",
//         "Lower until thighs parallel to floor",
//         "Drive through heels to return to standing",
//         "Maintain neutral spine throughout"
//       ],
//       tips: "Keep knees tracking over toes. Focus on sitting back into the movement."
//     }
//   ];

//   const nutritionTips = [
//     {
//       title: "Pre-Workout Nutrition",
//       content: "Consume a balanced meal 2-3 hours before training, including complex carbs and lean protein.",
//       icon: "🍎"
//     },
//     {
//       title: "Post-Workout Recovery",
//       content: "Within 30 minutes, consume protein and carbs in a 3:1 ratio to optimize muscle recovery.",
//       icon: "🥤"
//     },
//     {
//       title: "Hydration",
//       content: "Drink 2-3 liters of water daily, increasing during intense training sessions.",
//       icon: "💧"
//     },
//     {
//       title: "Sleep & Recovery",
//       content: "Aim for 7-9 hours of quality sleep for optimal muscle recovery and growth.",
//       icon: "😴"
//     }
//   ];

//   const getDifficultyColor = (difficulty) => {
//     switch(difficulty.toLowerCase()) {
//       case 'beginner': return 'text-green-400';
//       case 'intermediate': return 'text-yellow-400';
//       case 'advanced': return 'text-red-400';
//       default: return 'text-gray-400';
//     }
//   };

//   const getLevelColor = (level) => {
//     switch(level.toLowerCase()) {
//       case 'all levels': return 'text-green-400';
//       case 'intermediate': return 'text-yellow-400';
//       case 'advanced': return 'text-red-400';
//       default: return 'text-gray-400';
//     }
//   };

//   return (
//     <div className="relative w-full min-h-screen bg-black text-white overflow-hidden" ref={containerRef}>
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full opacity-5">
//           <div className="geometric-grid"></div>
//         </div>
//         {Array.from({ length: 15 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle-professional"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-6 py-16">
        
//         {/* Header */}
//         <div className="text-center mb-16 scroll-animate">
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
//             <span className="text-sm uppercase tracking-widest text-gray-400 font-light">Training & Nutrition</span>
//             <div className="w-12 h-px bg-gradient-to-l from-transparent via-white to-transparent"></div>
//           </div>
          
//           <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
//             Complete Fitness Guide
//           </h1>
//           <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
//             Professional programs, exercises, and nutrition guidance for optimal results
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12 scroll-animate">
//           <div className="flex border border-gray-700 rounded">
//             {[
//               { key: 'programs', label: 'Training Programs' },
//               { key: 'exercises', label: 'Exercise Library' },
//               { key: 'nutrition', label: 'Nutrition Guide' }
//             ].map((tab) => (
//               <button
//                 key={tab.key}
//                 onClick={() => setActiveTab(tab.key)}
//                 className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
//                   activeTab === tab.key 
//                     ? 'bg-white text-black' 
//                     : 'text-gray-400 hover:text-white hover:bg-gray-900'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content Based on Active Tab */}
//         <div className="max-w-6xl mx-auto">
          
//           {/* Training Programs */}
//           {activeTab === 'programs' && (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate">
//               {programs.map((program) => (
//                 <div key={program.id} className="border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300 hover:bg-gray-900/20">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-xl font-light">{program.title}</h3>
//                     <span className={`text-sm ${getLevelColor(program.level)}`}>{program.level}</span>
//                   </div>
                  
//                   <div className="flex gap-4 text-sm text-gray-400 mb-4">
//                     <span>{program.duration}</span>
//                     <span>•</span>
//                     <span>{program.sessions}</span>
//                   </div>
                  
//                   <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>
                  
//                   <div className="mb-6">
//                     <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Key Benefits</h4>
//                     <ul className="space-y-2">
//                       {program.benefits.map((benefit, index) => (
//                         <li key={index} className="text-sm text-gray-300 flex items-center">
//                           <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <button className="w-full py-2 border border-gray-700 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
//                     Learn More
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Exercise Library */}
//           {activeTab === 'exercises' && (
//             <div className="space-y-8 scroll-animate">
//               <div className="grid md:grid-cols-2 gap-6">
//                 {exercises.map((exercise) => (
//                   <div 
//                     key={exercise.id} 
//                     className="border border-gray-800 p-6 cursor-pointer hover:border-gray-600 transition-all duration-300"
//                     onClick={() => setSelectedExercise(selectedExercise === exercise.id ? null : exercise.id)}
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="text-xl font-light">{exercise.name}</h3>
//                       <div className="text-right">
//                         <div className={`text-sm ${getDifficultyColor(exercise.difficulty)}`}>{exercise.difficulty}</div>
//                         <div className="text-xs text-gray-400">{exercise.category}</div>
//                       </div>
//                     </div>
                    
//                     <div className="mb-4">
//                       <div className="text-sm text-gray-400 mb-2">Equipment: {exercise.equipment}</div>
//                       <div className="text-sm text-gray-300">
//                         Primary: {exercise.primaryMuscles.join(', ')}
//                       </div>
//                     </div>
                    
//                     {selectedExercise === exercise.id && (
//                       <div className="mt-6 pt-6 border-t border-gray-800 space-y-4">
//                         <div>
//                           <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Instructions</h4>
//                           <ol className="space-y-2">
//                             {exercise.instructions.map((step, index) => (
//                               <li key={index} className="text-sm text-gray-300 flex">
//                                 <span className="text-white mr-3 min-w-[20px]">{index + 1}.</span>
//                                 {step}
//                               </li>
//                             ))}
//                           </ol>
//                         </div>
                        
//                         <div>
//                           <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Pro Tips</h4>
//                           <p className="text-sm text-gray-300 italic">{exercise.tips}</p>
//                         </div>
                        
//                         <div>
//                           <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Secondary Muscles</h4>
//                           <p className="text-sm text-gray-300">{exercise.secondaryMuscles.join(', ')}</p>
//                         </div>
//                       </div>
//                     )}
                    
//                     <div className="mt-4 text-xs text-gray-500">
//                       Click to {selectedExercise === exercise.id ? 'collapse' : 'expand'} details
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Nutrition Guide */}
//           {activeTab === 'nutrition' && (
//             <div className="space-y-12 scroll-animate">
              
//               {/* Nutrition Tips Grid */}
//               <div className="grid md:grid-cols-2 gap-8">
//                 {nutritionTips.map((tip, index) => (
//                   <div key={index} className="border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300">
//                     <div className="flex items-center mb-4">
//                       <span className="text-2xl mr-4">{tip.icon}</span>
//                       <h3 className="text-lg font-light">{tip.title}</h3>
//                     </div>
//                     <p className="text-gray-300 leading-relaxed">{tip.content}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Sample Meal Plan */}
//               <div className="border border-gray-800 p-8">
//                 <h3 className="text-2xl font-light mb-6 text-center">Sample Daily Meal Plan</h3>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {[
//                     { meal: 'Breakfast', foods: ['Oatmeal with berries', 'Greek yogurt', 'Green tea'] },
//                     { meal: 'Lunch', foods: ['Grilled chicken', 'Quinoa salad', 'Mixed vegetables'] },
//                     { meal: 'Pre-Workout', foods: ['Banana', 'Almonds', 'Water'] },
//                     { meal: 'Post-Workout', foods: ['Protein shake', 'Sweet potato', 'Spinach'] }
//                   ].map((mealPlan, index) => (
//                     <div key={index} className="text-center">
//                       <h4 className="text-lg font-light mb-3 text-white">{mealPlan.meal}</h4>
//                       <ul className="space-y-2">
//                         {mealPlan.foods.map((food, foodIndex) => (
//                           <li key={foodIndex} className="text-sm text-gray-300">{food}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Macronutrient Guidelines */}
//               <div className="grid md:grid-cols-3 gap-6">
//                 {[
//                   { macro: 'Protein', amount: '1.6-2.2g per kg', color: 'text-red-400', description: 'Essential for muscle growth and repair' },
//                   { macro: 'Carbohydrates', amount: '3-7g per kg', color: 'text-yellow-400', description: 'Primary energy source for training' },
//                   { macro: 'Fats', amount: '0.8-1.2g per kg', color: 'text-blue-400', description: 'Important for hormone production' }
//                 ].map((macro, index) => (
//                   <div key={index} className="text-center border border-gray-800 p-6">
//                     <h4 className={`text-xl font-light mb-2 ${macro.color}`}>{macro.macro}</h4>
//                     <div className="text-lg mb-3">{macro.amount}</div>
//                     <p className="text-sm text-gray-400">{macro.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .geometric-grid {
//           background-image: 
//             linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
//           background-size: 60px 60px;
//           width: 100%;
//           height: 100%;
//           animation: grid-float 25s ease-in-out infinite;
//         }

//         @keyframes grid-float {
//           0%, 100% { transform: translate(0, 0); }
//           50% { transform: translate(-5px, -5px); }
//         }

//         @keyframes twinkle-professional {
//           0%, 100% { opacity: 0.1; transform: scale(1); }
//           50% { opacity: 0.3; transform: scale(1.2); }
//         }

//         .animate-twinkle-professional {
//           animation: twinkle-professional 4s ease-in-out infinite;
//         }

//         .scroll-animate {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .scroll-animate.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .scroll-animate:nth-child(1) { transition-delay: 0ms; }
//         .scroll-animate:nth-child(2) { transition-delay: 200ms; }
//         .scroll-animate:nth-child(3) { transition-delay: 400ms; }
//       `}</style>
//     </div>
//   );
// }

// export default GymContentExercises;