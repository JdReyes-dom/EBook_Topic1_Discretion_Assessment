/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 1: Discretion
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who is the main character in the story?',
    choices: { a: 'Cloudy', b: 'Leo', c: 'Leo\'s mother', d: 'The group leader' },
    correct: 'b'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What value is being emphasized in the story?',
    choices: { a: 'Honesty', b: 'Discretion', c: 'Generosity', d: 'Patience' },
    correct: 'b'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'You see a viral video challenge online that looks fun but requires you to do something unsafe. Applying the lesson from the story, what is the best action?',
    choices: {
      a: 'Try it quickly before anyone notices.',
      b: 'Ask your friends to do it first.',
      c: 'Think carefully about the risks and choose not to participate.',
      d: 'Share it with others so they can decide for themselves.'
    },
    correct: 'c'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'Your classmates are pressuring you to join a prank that could get someone hurt. Based on Leo\'s example, what should you do?',
    choices: {
      a: 'Join them because everyone is doing it.',
      b: 'Laugh along but not participate.',
      c: 'Stop, think about the consequences, and politely say no.',
      d: 'Ignore them and pretend nothing happened.'
    },
    correct: 'c'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What did Leo\'s mother always tell him that helped him make his decision?',
    choices: {
      a: '"Always follow your friends."',
      b: '"Just because everyone is doing it doesn\'t mean it is the right thing to do."',
      c: '"Never talk to strangers."',
      d: '"You must always be the bravest."'
    },
    correct: 'b'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why did Leo feel nervous when he approached the cool group?',
    choices: {
      a: 'He was afraid of birds.',
      b: 'He wanted to belong but sensed something might go wrong.',
      c: 'He forgot his phone at home.',
      d: 'He did not like the group members.'
    },
    correct: 'b'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'How did Leo feel after he said no and walked away from the group?',
    choices: {
      a: 'Sad and lonely',
      b: 'Angry at his friends',
      c: 'Proud and relieved, like a weight was lifted',
      d: 'Scared and regretful'
    },
    correct: 'c'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Based on the story, why is saying "no" considered an act of true strength rather than weakness?',
    choices: {
      a: 'Because it makes others respect you more.',
      b: 'Because it shows you can think for yourself and prioritize your safety.',
      c: 'Because it means you are better than everyone else.',
      d: 'Because it avoids all conflicts.'
    },
    correct: 'b'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why did Leo\'s decision to walk away require more courage than saying yes to the challenge?',
    choices: {
      a: 'Walking away is always easier than staying.',
      b: 'He had to resist peer pressure and risk being rejected by the group.',
      c: 'He knew the group would chase after him.',
      d: 'Saying yes would have taken more effort.'
    },
    correct: 'b'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why did Leo take a second look at the challenge before making his decision?',
    choices: {
      a: 'He wanted to memorize the steps so he could try it later.',
      b: 'He wanted to see if his friends were watching him.',
      c: 'He used the moment to evaluate whether the challenge was truly safe or harmful.',
      d: 'He was looking for a comment section to read other people\'s opinions.'
    },
    correct: 'c'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;