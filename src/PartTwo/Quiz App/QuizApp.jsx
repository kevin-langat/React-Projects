import { useEffect, useState } from 'react';
const questions = [
  {
    question: 'Which of the following is not a JavaScript data type?',
    options: ['String', 'Boolean', 'Float', 'Object'],
    correctAns: 'Float',
  },
  {
    question:
      'What is the correct way to declare a constant variable in JavaScript?',
    options: [
      'var constantName = value;',
      'let constantName = value;',
      'const constantName = value;',
      'constant constantName = value;',
    ],
    correctAns: 'const constantName = value;',
  },
  {
    question: 'Which function is used to output a message to the web console?',
    options: ['alert()', 'console.log()', 'print()', 'display()'],
    correctAns: 'console.log()',
  },
  {
    question: "What does the '===' operator do?",
    options: [
      'Compares two values for equality of value only',
      'Compares two values for equality of value and type',
      'Assigns a value to a variable',
      'Checks if a value is greater than or equal to another',
    ],
    correctAns: 'Compares two values for equality of value and type',
  },
  {
    question: "How do you start a 'for' loop?",
    options: [
      'for (i <= 5; i++)',
      'for (i = 0; i <= 5)',
      'for (i = 0; i <= 5; i++)',
      'for i = 1 to 5',
    ],
    correctAns: 'for (i = 0; i <= 5; i++)',
  },
  {
    question:
      'Which method would you use to add an element to the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAns: 'push()',
  },
  {
    question: "What is the result of '10' + 5 in JavaScript?",
    options: ['15', "'15'", "'105'", 'Error'],
    correctAns: "'105'",
  },
  {
    question: 'Which keyword is used to define a function?',
    options: ['method', 'function', 'define', 'func'],
    correctAns: 'function',
  },
  {
    question:
      "How do you write an IF statement for checking if 'i' is NOT equal to 5?",
    options: ['if (i <> 5)', 'if (i != 5)', 'if i =! 5', 'if (i not= 5)'],
    correctAns: 'if (i != 5)',
  },
  {
    question: 'Which symbol is used for comments in JavaScript?',
    options: ['//', '/* */', '#', 'Both // and /* */'],
    correctAns: 'Both // and /* */',
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(''),
  );
  const [showResult, setShowResult] = useState(false);

  function handlePrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function handleNext() {
    if (
      selectedOptions[currentQuestion] === questions[currentQuestion].correctAns
    ) {
      setScore(score + 1);
    }
    if (selectedOptions[currentQuestion] === '') {
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }
  console.log(score);
  function handleSetScore(option) {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = option;
    setSelectedOptions(updatedSelectedOptions);
  }

  function handleRestart() {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedOptions(new Array(questions.length).fill(''));
    setShowResult(false);
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-2xl'>Quiz App</h1>
      <div className='bg-gray-950 text-gray-200 py-8 rounded-[0.5em] flex flex-col items-center px-14'>
        {!showResult ? (
          <div className='flex flex-col items-center gap-2'>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
            <div className='grid grid-cols-2 gap-2'>
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSetScore(option)}
                  className={` ${selectedOptions[currentQuestion] === option ? 'outline-2 outline-green-400' : ''} bg-blue-600 text-sm px-3 py-0.5 rounded-full`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className=' flex mt-8 flex-row items-center gap-16'>
              <button
                className='px-3 py-1 bg-orange-500 rounded-[0.3em]'
                onClick={handlePrev}
                disabled={currentQuestion === 0}
              >
                Prev
              </button>
              <button
                className='px-3 py-1 bg-orange-500 rounded-[0.3em]'
                onClick={handleNext}
              >
                {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
              </button>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-3 items-center'>
            <div className='flex *:nth-1:text-blue-500 *:nth-1:text-xl *:nth-2:text-green-500 *:nth-2:text-2xl font-bold flex-col gap-1 items-center'>
              <h2 className=''>Your score is:</h2>
              <p>{score}</p>
            </div>

            <button
              className='px-3 py-1 bg-orange-500 rounded-[0.3em]'
              onClick={handleRestart}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default QuizApp;
