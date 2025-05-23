import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Trophy, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const SafetyQuiz: React.FC = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: "What should you do first if you smell gas?",
      options: [
        "Open all windows",
        "Turn off the gas supply",
        "Call emergency services",
        "Light a match to check for leaks"
      ],
      correctAnswer: 1,
      explanation: "Always turn off the gas supply first to prevent further leakage before taking any other actions."
    },
    {
      id: 2,
      question: "How often should LPG hoses be replaced?",
      options: [
        "Every 5 years",
        "Every 2 years",
        "Only when damaged",
        "Every 10 years"
      ],
      correctAnswer: 1,
      explanation: "LPG hoses should be replaced every 2 years or immediately if damage is noticed."
    },
    {
      id: 3,
      question: "Which method should be used to check for gas leaks?",
      options: [
        "Using a flame",
        "Soap solution",
        "Smelling the pipe",
        "Visual inspection only"
      ],
      correctAnswer: 1,
      explanation: "Use soapy water to check for leaks - bubbles will form if there's a leak. Never use a flame!"
    },
    {
      id: 4,
      question: "Where should LPG cylinders be stored?",
      options: [
        "In direct sunlight",
        "In the basement",
        "In a well-ventilated area",
        "Near electrical equipment"
      ],
      correctAnswer: 2,
      explanation: "LPG cylinders should be stored in well-ventilated areas away from heat sources and electrical equipment."
    },
    {
      id: 5,
      question: "What type of fire extinguisher is suitable for gas fires?",
      options: [
        "Water-based",
        "Foam-based",
        "Dry powder",
        "Any type"
      ],
      correctAnswer: 2,
      explanation: "Dry powder fire extinguishers are suitable for gas fires. Never use water on a gas fire!"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Trophy className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Safety Quiz</h2>
        </div>
        <p className="text-gray-600">
          Test your knowledge of LPG safety procedures and best practices.
        </p>
      </div>

      {!quizCompleted ? (
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>Score: {score}/{questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-lg transition ${
                    selectedAnswer === null
                      ? 'hover:bg-gray-50 border border-gray-200'
                      : selectedAnswer === index
                      ? index === questions[currentQuestion].correctAnswer
                        ? 'bg-green-50 border-2 border-green-500'
                        : 'bg-red-50 border-2 border-red-500'
                      : index === questions[currentQuestion].correctAnswer
                      ? 'bg-green-50 border-2 border-green-500'
                      : 'border border-gray-200'
                  }`}
                >
                  <div className="flex items-center">
                    {selectedAnswer !== null && (
                      index === questions[currentQuestion].correctAnswer ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      ) : null
                    )}
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
                <h4 className="font-semibold text-blue-800">Explanation</h4>
              </div>
              <p className="text-blue-600">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}

          {/* Next Question Button */}
          {selectedAnswer !== null && (
            <button
              onClick={handleNextQuestion}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Quiz Completed!
          </h3>
          <p className="text-gray-600 mb-4">
            You scored {score} out of {questions.length}
          </p>
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-yellow-500 h-4 rounded-full transition-all"
                style={{ width: `${(score / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={restartQuiz}
            className="flex items-center justify-center space-x-2 mx-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Try Again</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SafetyQuiz;