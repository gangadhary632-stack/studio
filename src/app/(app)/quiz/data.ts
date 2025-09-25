export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface QuizCategory {
  slug: keyof typeof quizzes;
  title: string;
  description: string;
}

export const quizzes: Record<string, Question[]> = {
  "general-knowledge": [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare",
    },
  ],
  "math-whiz": [
    {
      id: 1,
      question: "What is 5 + 7 * 2?",
      options: ["24", "19", "17", "20"],
      answer: "19",
    },
    {
      id: 2,
      question: "What is the square root of 81?",
      options: ["7", "8", "9", "10"],
      answer: "9",
    },
    {
      id: 3,
      question: "If a triangle has angles 90, 45, what is the third angle?",
      options: ["90", "45", "60", "30"],
      answer: "45",
    },
  ],
  "science-buff": [
    {
      id: 1,
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      answer: "H2O",
    },
    {
      id: 2,
      question: "What force pulls objects toward the center of the Earth?",
      options: ["Magnetism", "Friction", "Gravity", "Tension"],
      answer: "Gravity",
    },
    {
      id: 3,
      question: "Which is the largest organ in the human body?",
      options: ["Heart", "Liver", "Brain", "Skin"],
      answer: "Skin",
    },
  ],
};
