const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .9)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is full form for IAS?',
    answers: [
      { text: 'Indian Administartion Services', correct: true },
      { text: 'Indian Air Services', correct: false },
      { text: 'Indian Astro Space', correct: false },
      { text: 'Indian Allied Science', correct: false }
    ]
  },
  {
    question: 'Who is the owner of AWS?',
    answers: [
      { text: 'Jeff Bezos', correct: true },
      { text: 'N Niranjan', correct: false },
      { text: 'Satya Nadella', correct: false },
      { text: 'Sundar Pichaai', correct: false }
    ]
  },
  {
    question: 'Which Indian Award has been nowdays renamed?',
    answers: [
      { text: 'Rajeev Gandhi Khel Ratna Award', correct: true },
      { text: 'Arjun Award', correct: false },
      { text: 'Both of them', correct: false },
      { text: 'None of the Above', correct: false }
    ]
  },
  {
    question: 'What State Government in India has Recently passed a bill Regarding Population Act??',
    answers: [
      { text: 'Delhi', correct: false },
      { text: 'Uttar Pradesh', correct: true },
      { text: 'Maharashtra', correct: false },
      { text: 'Rajasthan', correct: false }
    ]
  },
  {
    question: 'Alexander Ellis has been appointed as the new _ _ _High Commisioner to India',
    answers: [
      { text: 'US', correct: false },
      { text: 'British', correct: true },
      { text: 'Lesbona', correct: false },
      { text: 'Italy', correct: false }
    ]
  },
  {
    question: 'Which State Government in India decided to start World\'s Largest Floating Solar Project??',
    answers: [
      { text: 'Delhi', correct: false },
      { text: 'Madhya Pradesh', correct: true },
      { text: 'Maharashtra', correct: false },
      { text: 'Rajasthan', correct: false }
    ]
  },
  {
    question: 'Which Country Recently amends National Anthem to honour indegious people?',
    answers: [
      { text: 'Russia', correct: false },
      { text: 'Australia', correct: true },
      { text: 'US', correct: false },
      { text: 'Israiel', correct: false }
    ]
  },
  {
    question: 'Justice Hima Kohli ahs become the first woman Justice of _ _ _ of High Court?',
    answers: [
      { text: 'Delhi', correct: false },
      { text: 'Telanagna', correct: true },
      { text: 'Maharashtra', correct: false },
      { text: 'Rajasthan', correct: false }
    ]
  },
  {
    question: 'India\'s first Natiional Sports University has been launched in which state??',
    answers: [
      { text: 'Delhi', correct: false },
      { text: 'Uttar Pradesh', correct: false },
      { text: 'Manipur', correct: true },
      { text: 'Rajasthan', correct: false }
    ]
  },
  {
    question: 'India\'s first air taxi has been launched in ',
    answers: [
      { text: 'Delhi', correct: false },
      { text: 'Chandigarh', correct: true },
      { text: 'Maharashtra', correct: false },
      { text: 'Rajasthan', correct: false }
    ]
  },
  {
    question: 'World\'s Wetlands Day is observed on ',
    answers: [
      { text: '1st February', correct: false },
      { text: '2and February', correct: true },
      { text: '29th February', correct: false },
      { text: '30th july', correct: false }
    ]
  },
  {
    question: 'Who won the ICC\'s inaugural Player of the month Award',
    answers: [
      { text: 'Trent Boult', correct: false },
      { text: 'Rishabh Pant', correct: true },
      { text: 'Ben Stokes', correct: false },
      { text: 'Lungi Angidi', correct: false }
    ]
  },
  {
    question: 'India\'s First geothermal power project will be established in . ',
    answers: [
      { text: 'Ladakh', correct: true },
      { text: 'Kashmir', correct: false },
      { text: 'Kanpur', correct: false },
      { text: 'Punducherry', correct: false }
    ]
  },
  {
    question: 'Ngozi Okonjo-lwella has became the first female chief of .. ',
    answers: [
      { text: 'UN', correct: false },
      { text: 'WTO', correct: true },
      { text: 'UNSC', correct: false },
      { text: 'NATO', correct: false }
    ]
  }
]
 
