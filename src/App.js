import './styles.css';
import React, { useState, useMemo } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Top from './components/Top';

import Questions from './components/Questions';
import ResultPage from './components/ResultPage';
// import Diagnose from './components/Diagnose';

export default function App() {
  const [num, setNum] = useState(0);

  const [answerOfQuestion1, setAnswerOfQuestion1] = useState(false);
  const [answerOfQuestion2, setAnswerOfQuestion2] = useState(false);
  const [answerOfQuestion3, setAnswerOfQuestion3] = useState(false);
  const [answerOfQuestion4, setAnswerOfQuestion4] = useState(false);

  const answers = useMemo(() => [
    answerOfQuestion1,
    answerOfQuestion2,
    answerOfQuestion3,
    answerOfQuestion4,
  ], [answerOfQuestion1, answerOfQuestion2, answerOfQuestion3, answerOfQuestion4]);

  const setAnswers = [
    setAnswerOfQuestion1,
    setAnswerOfQuestion2,
    setAnswerOfQuestion3,
    setAnswerOfQuestion4,
  ];

  const questions = ['自分は繊細な性格で、人や社会に不信感がある', 'お酒が好きで人と飲むのが好きだ。', '人と比べて恋愛経験が多い方だ。', '自分の性格とは違うキャラを人前で演じてしまうことがある。'];
  const [showMessage1, setShowMessage1] = useState(true);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showMessage4, setShowMessage4] = useState(false);

  const showMessages = [
    showMessage1,
    showMessage2,
    showMessage3,
    showMessage4,
  ];

  const setShowMessages = [
    setShowMessage1,
    setShowMessage2,
    setShowMessage3,
    setShowMessage4,
  ];

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Top />
      </Route>
      <Route path="/questions">
        <div className="App">
          <h1>「人間失格度」診断</h1>
          <Questions
            showMessages={showMessages}
            setShowMessages={setShowMessages}
            num={num}
            setNum={setNum}
            questions={questions}
            answers={answers}
            setAnswers={setAnswers}
          />
        </div>
      </Route>
      <Route path="/result1">
        <ResultPage result="result1" />
      </Route>
      <Route path="/result2">
        <ResultPage result="result2" />
      </Route>
      <Route path="/result3">
        <ResultPage result="result3" />
      </Route>
      <Route path="/result4">
        <ResultPage result="result4" />
      </Route>
      <Route path="/result5">
        <ResultPage result="result5" />
      </Route>
    </BrowserRouter>
  );
}
