import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Clock, Target, Flame } from 'lucide-react';

function Workout() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completedExercises, setCompletedExercises] = useState(new Set());

  // Timer functionality
  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const workoutCategories = [
    { id: 'all', name: 'All Workouts', icon: '💪' },
    { id: 'strength', name: 'Strength', icon: '🏋️' },
    { id: 'cardio', name: 'Cardio', icon: '🏃' },
    { id: 'flexibility', name: 'Flexibility', icon: '🧘' },
    { id: 'core', name: 'Core', icon: '🎯' }
  ];

  const exercises = [
    // Strength Exercises
    {
      id: 1,
      name: 'Push-ups',
      category: 'strength',
      duration: '3 sets × 12 reps',
      calories: 50,
      difficulty: 'Beginner',
      description: 'Classic upper body exercise targeting chest, shoulders, and triceps.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Start in plank position with hands slightly wider than shoulders',
        'Lower body until chest nearly touches the floor',
        'Push back up to starting position',
        'Keep core engaged throughout the movement'
      ]
    },
    {
      id: 2,
      name: 'Squats',
      category: 'strength',
      duration: '3 sets × 15 reps',
      calories: 70,
      difficulty: 'Beginner',
      description: 'Fundamental lower body exercise for legs and glutes.',
      image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Stand with feet shoulder-width apart',
        'Lower hips back and down as if sitting in a chair',
        'Keep chest up and weight on heels',
        'Return to starting position by driving through heels'
      ]
    },
    {
      id: 3,
      name: 'Deadlifts',
      category: 'strength',
      duration: '3 sets × 10 reps',
      calories: 90,
      difficulty: 'Intermediate',
      description: 'Compound exercise targeting posterior chain muscles.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Stand with feet hip-width apart, barbell over mid-foot',
        'Hinge at hips, keeping chest up and back straight',
        'Grip the bar and drive through heels to stand',
        'Reverse the movement to return to starting position'
      ]
    },
    // Cardio Exercises
    {
      id: 4,
      name: 'Jumping Jacks',
      category: 'cardio',
      duration: '3 sets × 30 seconds',
      calories: 40,
      difficulty: 'Beginner',
      description: 'High-energy cardio exercise for full-body activation.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Stand with feet together, arms at sides',
        'Jump while spreading legs shoulder-width apart',
        'Simultaneously raise arms overhead',
        'Jump back to starting position'
      ]
    },
    {
      id: 5,
      name: 'Burpees',
      category: 'cardio',
      duration: '3 sets × 8 reps',
      calories: 100,
      difficulty: 'Advanced',
      description: 'Full-body exercise combining strength and cardio.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Start standing, then squat down and place hands on floor',
        'Jump feet back to plank position',
        'Perform a push-up (optional)',
        'Jump feet back to squat, then jump up with arms overhead'
      ]
    },
    {
      id: 6,
      name: 'Mountain Climbers',
      category: 'cardio',
      duration: '3 sets × 20 reps',
      calories: 60,
      difficulty: 'Intermediate',
      description: 'Dynamic cardio exercise targeting core and legs.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Start in plank position',
        'Bring right knee toward chest',
        'Quickly switch legs, bringing left knee toward chest',
        'Continue alternating legs at a rapid pace'
      ]
    },
    // Core Exercises
    {
      id: 7,
      name: 'Plank',
      category: 'core',
      duration: '3 sets × 45 seconds',
      calories: 30,
      difficulty: 'Beginner',
      description: 'Isometric core exercise for stability and strength.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Start in push-up position',
        'Lower to forearms, keeping body straight',
        'Engage core and hold position',
        'Keep head neutral and breathe steadily'
      ]
    },
    {
      id: 8,
      name: 'Russian Twists',
      category: 'core',
      duration: '3 sets × 20 reps',
      calories: 45,
      difficulty: 'Intermediate',
      description: 'Rotational core exercise targeting obliques.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Sit with knees bent, leaning back slightly',
        'Lift feet off ground for advanced version',
        'Rotate torso left and right',
        'Touch ground beside hips with each twist'
      ]
    },
    // Flexibility Exercises
    {
      id: 9,
      name: 'Yoga Flow',
      category: 'flexibility',
      duration: '15 minutes',
      calories: 80,
      difficulty: 'Beginner',
      description: 'Gentle yoga sequence for flexibility and relaxation.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Start in child\'s pose for 30 seconds',
        'Move through cat-cow stretches',
        'Flow into downward facing dog',
        'Hold each pose for 30-60 seconds'
      ]
    },
    {
      id: 10,
      name: 'Stretching Routine',
      category: 'flexibility',
      duration: '10 minutes',
      calories: 25,
      difficulty: 'Beginner',
      description: 'Full-body stretching routine for recovery.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center',
      instructions: [
        'Neck and shoulder rolls',
        'Arm circles and tricep stretches',
        'Hip circles and leg swings',
        'Hold each stretch for 15-30 seconds'
      ]
    }
  ];

  const filteredExercises = activeTab === 'all' 
    ? exercises 
    : exercises.filter(exercise => exercise.category === activeTab);

  const toggleExerciseComplete = (exerciseId) => {
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(exerciseId)) {
      newCompleted.delete(exerciseId);
    } else {
      newCompleted.add(exerciseId);
    }
    setCompletedExercises(newCompleted);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedWorkout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedWorkout(null)}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-purple-600 font-medium"
          >
            ← Back to Workouts
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedWorkout.image}
                alt={selectedWorkout.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl font-bold mb-2">{selectedWorkout.name}</h1>
                <div className="flex items-center gap-4 text-lg">
                  <span className="flex items-center gap-1">
                    <Clock className="w-5 h-5" />
                    {selectedWorkout.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-5 h-5" />
                    {selectedWorkout.calories} cal
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedWorkout.difficulty)}`}>
                  {selectedWorkout.difficulty}
                </span>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-gray-800">
                    {formatTime(timer)}
                  </div>
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className={`p-3 rounded-full ${isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
                  >
                    {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={() => {
                      setTimer(0);
                      setIsRunning(false);
                    }}
                    className="p-3 rounded-full bg-gray-500 hover:bg-gray-600 text-white transition-colors"
                  >
                    <RotateCcw className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-8">{selectedWorkout.description}</p>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h3>
                <ol className="space-y-3">
                  {selectedWorkout.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 pt-6 border-t">
                <button
                  onClick={() => toggleExerciseComplete(selectedWorkout.id)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                    completedExercises.has(selectedWorkout.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  {completedExercises.has(selectedWorkout.id) ? '✓ Completed!' : 'Mark as Complete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Your Workout Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your fitness journey with our comprehensive workout routines designed for all levels
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-full">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Completed Today</p>
                <p className="text-2xl font-bold text-gray-800">{completedExercises.size}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-full">
                <Flame className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Calories Burned</p>
                <p className="text-2xl font-bold text-gray-800">
                  {Array.from(completedExercises).reduce((total, id) => {
                    const exercise = exercises.find(e => e.id === id);
                    return total + (exercise ? exercise.calories : 0);
                  }, 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-full">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Time</p>
                <p className="text-2xl font-bold text-gray-800">{formatTime(timer)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {workoutCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === category.id
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 shadow-md'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedWorkout(exercise)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {completedExercises.has(exercise.id) && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                    ✓
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{exercise.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{exercise.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {exercise.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    {exercise.calories} cal
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No exercises found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Workout;