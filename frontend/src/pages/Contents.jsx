import React from "react";
import { useState } from "react";

function Contents() {
  const [state, setState] = useState("program");
  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <span className="text-sm uppercase tracking-widest text-gray-400 font-light">
            Training & Nutrition
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-white to-transparent"></div>
        </div>
        <h1 className="text-4xl md:text-5xl text-white font-light mb-6 tracking-tight">
          Complete Fitness Guide
        </h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto text-center ">
          Professional programs, exercises, and nutrition guidance for optimal
          results
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 text-white uppercase text-sm font-light ">
        <span className="flex flex-col md:flex-row  border border-gray-700">
          <div
            onClick={() => setState("program")}
            className={`py-3 px-6 text-sm ${
              state === "program"
                ? "bg-white text-black"
                : "bg-black text-gray-400 hover:text-white hover:bg-gray-900"
            }`}
          >
            Traning Program
          </div>
          <div
            onClick={() => setState("library")}
            className={`py-3 px-6 text-sm ${
              state === "library"
                ? "bg-white text-black"
                : "bg-black text-gray-400 hover:text-white hover:bg-gray-900"
            }`}
          >
            Execise Library
          </div>
          <div
            onClick={() => setState("guide")}
            className={`py-3 px-6 text-sm ${
              state === "guide"
                ? "bg-white text-black"
                : "bg-black text-gray-400 hover:text-white hover:bg-gray-900"
            }`}
          >
            Nutrition Guide
          </div>
        </span>
      </div>
      <div className="text-gray-400 2xl:mx-24 xl:mx-24 lg:mx-0 ">
        {state === "program" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-10">
            {/* Card 1 */}
            <div className="border border-gray-700 rounded p-6 w-full">
              <div className="flex justify-between mb-4 items-center">
                <span className="text-xl text-gray-300">Strength Building</span>
                <span className="text-yellow-400 text-sm">Intermediate</span>
              </div>
              <div className="flex text-sm gap-4">
                <span>12 weeks</span>
                <span>4 sessions/week</span>
              </div>
              <p className="text-gray-300 mt-4">
                A comprehensive program designed to build strength and muscle
                mass through progressive overload and compound exercises.
              </p>
              <h3 className="text-lg text-gray-400 mt-4">Key Benefits</h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 text-sm gap-3 flex flex-col">
                <li>Increased muscle strength</li>
                <li>Improved body composition</li>
                <li>Enhanced athletic performance</li>
                <li>Boosted metabolism</li>
              </ul>
              <button className="border border-gray-700 w-full py-2 mt-8 text-sm text-white hover:bg-white hover:text-black transition duration-300">
                <span className="uppercase">Learn More</span>
              </button>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-700 rounded p-6 w-full">
              <div className="flex justify-between mb-4 items-center">
                <span className="text-xl text-gray-300">
                  Fat Loss Transformation
                </span>
                <span className="text-green-400 text-sm">All Levels</span>
              </div>
              <div className="flex text-sm gap-4">
                <span>8 weeks</span>
                <span>5 sessions/week</span>
              </div>
              <p className="text-gray-300 mt-4">
                High-intensity fitness program combining cardio and strength
                training for maximum fat burning, enhanced stamina, and
                endurance improvement.
              </p>
              <h3 className="text-lg text-gray-400 mt-4">Key Benefits</h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 text-sm gap-3 flex flex-col">
                <li>Increased muscle strength</li>
                <li>Improved body composition</li>
                <li>Enhanced athletic performance</li>
                <li>Boosted metabolism</li>
              </ul>
              <button className="border border-gray-700 w-full py-2 mt-8 text-sm text-white hover:bg-white hover:text-black transition duration-300">
                <span className="uppercase">Learn More</span>
              </button>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-700 rounded p-6 w-full">
              <div className="flex justify-between mb-4 items-center">
                <span className="text-xl text-gray-300">
                  Muscle Growth Mastery
                </span>
                <span className="text-red-400 text-sm">Advanced</span>
              </div>
              <div className="flex text-sm gap-4">
                <span>16 weeks</span>
                <span>6 sessions/week</span>
              </div>
              <p className="text-gray-300 mt-4">
                A focused plan for hypertrophy using targeted volume training,
                split routines, and muscle recovery strategies.
              </p>
              <h3 className="text-lg text-gray-400 mt-4">Key Benefits</h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 text-sm gap-3 flex flex-col">
                <li>Muscle growth optimization</li>
                <li>Strategic rest & recovery</li>
                <li>Progressive overload routines</li>
                <li>Improved definition</li>
              </ul>
              <button className="border border-gray-700 w-full py-2 mt-8 text-sm text-white hover:bg-white hover:text-black transition duration-300">
                <span className="uppercase">Learn More</span>
              </button>
            </div>
          </div>
        ) : state === "library" ? (
          <div className="py-12 px-4 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Exercise Library
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Browse a collection of effective exercises targeting various
              muscle groups, designed for all fitness levels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Exercise Card 1 */}
              <div className="border border-gray-700 rounded p-6 text-left bg-black hover:bg-gray-900 transition duration-300">
                <h2 className="text-xl font-semibold mb-1">Push-Up</h2>
                <p className="text-sm text-yellow-400 mb-2">
                  Muscle Group: Chest, Triceps
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  Difficulty: Beginner
                </p>
                <p className="text-sm text-gray-400">
                  A bodyweight exercise that targets the chest, triceps, and
                  shoulders. Great for building upper body strength without
                  equipment.
                </p>
              </div>

              {/* Exercise Card 2 */}
              <div className="border border-gray-700 rounded p-6 text-left bg-black hover:bg-gray-900 transition duration-300">
                <h2 className="text-xl font-semibold mb-1">Squat</h2>
                <p className="text-sm text-yellow-400 mb-2">
                  Muscle Group: Legs, Glutes
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  Difficulty: Beginner
                </p>
                <p className="text-sm text-gray-400">
                  A fundamental lower-body movement that improves strength in
                  the thighs, hips, and buttocks.
                </p>
              </div>

              {/* Exercise Card 3 */}
              <div className="border border-gray-700 rounded p-6 text-left bg-black hover:bg-gray-900 transition duration-300">
                <h2 className="text-xl font-semibold mb-1">Deadlift</h2>
                <p className="text-sm text-yellow-400 mb-2">
                  Muscle Group: Back, Hamstrings
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  Difficulty: Intermediate
                </p>
                <p className="text-sm text-gray-400">
                  A compound movement using a barbell to build strength in the
                  posterior chain — back, glutes, and legs.
                </p>
              </div>

              {/* Add more exercises as needed */}
            </div>
          </div>
        ) : state === "guide" ? (
          <div className="py-16 px-4 text-white text-center bg-black">
            {/* Section Header */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Nutrition Guide
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              Discover how proper nutrition can transform your fitness journey.
              From building muscle to losing fat, learn science-backed
              strategies to fuel your body and optimize results.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 */}
              <div className="border border-gray-700 rounded-lg p-6 text-left bg-gradient-to-b from-gray-900 to-black hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold mb-2 text-yellow-400">
                  1. Macronutrients
                </h2>
                <p className="text-sm text-gray-300">
                  Understand the importance of proteins, carbohydrates, and
                  fats. Learn how to balance your macronutrient intake for
                  energy, recovery, and overall health.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-700 rounded-lg p-6 text-left bg-gradient-to-b from-gray-900 to-black hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold mb-2 text-green-400">
                  2. Smart Meal Planning
                </h2>
                <p className="text-sm text-gray-300">
                  Plan your meals effectively to support your fitness goals.
                  Learn how portion control and timing impact performance and
                  fat loss.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-700 rounded-lg p-6 text-left bg-gradient-to-b from-gray-900 to-black hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  3. Hydration & Recovery
                </h2>
                <p className="text-sm text-gray-300">
                  Water is essential for digestion, muscle function, and
                  recovery. Discover hydration strategies and the importance of
                  quality sleep for healing and performance.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border border-gray-700 rounded-lg p-6 text-left bg-gradient-to-b from-gray-900 to-black hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold mb-2 text-purple-400">
                  4. Supplements 101
                </h2>
                <p className="text-sm text-gray-300">
                  Learn which supplements (like whey, creatine, BCAAs, vitamins)
                  are effective, safe, and worth including in your routine — and
                  which to avoid.
                </p>
              </div>

              {/* Card 5 */}
              <div className="border border-gray-700 rounded-lg p-6 text-left bg-gradient-to-b from-gray-900 to-black hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold mb-2 text-pink-400">
                  5. Pre & Post Workout Nutrition
                </h2>
                <p className="text-sm text-gray-300">
                  Fuel your workouts with the right meals. Learn what to eat
                  before and after training to maximize energy, strength, and
                  muscle repair.
                </p>
              </div>

              {/* Card 6 */}
              <div className="border border-gray-700 rounded-lg p-6 text-left bg-gradient-to-b from-gray-900 to-black hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold mb-2 text-red-400">
                  6. Nutrition for Goals
                </h2>
                <p className="text-sm text-gray-300">
                  Whether your goal is fat loss, muscle gain, or endurance —
                  your nutrition must align. Get tailored guidance for your
                  specific objectives.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Contents;
