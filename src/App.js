import './styles.css';
import React, { useState, useMemo } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Top from './components/Top';

import Questions from './components/Questions';
import ResultPage from './components/ResultPage';

export default function App() {
  const [num, setNum] = useState(0);

  const [answerOfQuestion1, setAnswerOfQuestion1] = useState(false);
  const [answerOfQuestion2, setAnswerOfQuestion2] = useState(false);
  const [answerOfQuestion3, setAnswerOfQuestion3] = useState(false);
  const [answerOfQuestion4, setAnswerOfQuestion4] = useState(false);
  const [answerOfQuestion5, setAnswerOfQuestion5] = useState(false);
  const [answerOfQuestion6, setAnswerOfQuestion6] = useState(false);

  const answers = useMemo(() => [
    answerOfQuestion1,
    answerOfQuestion2,
    answerOfQuestion3,
    answerOfQuestion4,
    answerOfQuestion5,
    answerOfQuestion6,
  ], [
    answerOfQuestion1,
    answerOfQuestion2,
    answerOfQuestion3,
    answerOfQuestion4,
    answerOfQuestion5,
    answerOfQuestion6,
  ]);

  const setAnswers = [
    setAnswerOfQuestion1,
    setAnswerOfQuestion2,
    setAnswerOfQuestion3,
    setAnswerOfQuestion4,
    setAnswerOfQuestion5,
    setAnswerOfQuestion6,
  ];

  const questions = [
    '自分は繊細な性格で、人や社会に不信感がある。',
    '自分の性格とは違うキャラを人前で演じてしまうことがある。',
    'お酒が大好き。絶対にやめられない。',
    '人と比べて恋愛経験が多い方だ。',
    '自分に自信が持てず、つい自己否定してしまう。',
    '周りが見えなくなって、1つのことに没頭してしまうことがよくある。',
  ];

  const [showMessage1, setShowMessage1] = useState(true);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showMessage4, setShowMessage4] = useState(false);
  const [showMessage5, setShowMessage5] = useState(false);
  const [showMessage6, setShowMessage6] = useState(false);

  const showMessages = [
    showMessage1,
    showMessage2,
    showMessage3,
    showMessage4,
    showMessage5,
    showMessage6,
  ];

  const setShowMessages = [
    setShowMessage1,
    setShowMessage2,
    setShowMessage3,
    setShowMessage4,
    setShowMessage5,
    setShowMessage6,
  ];

  const resetState = () => {
    setNum(0);
    setAnswerOfQuestion1(false);
    setAnswerOfQuestion2(false);
    setAnswerOfQuestion3(false);
    setAnswerOfQuestion4(false);
    setAnswerOfQuestion5(false);
    setAnswerOfQuestion6(false);
    setShowMessage1(true);
    setShowMessage2(false);
    setShowMessage3(false);
    setShowMessage4(false);
    setShowMessage5(false);
    setShowMessage6(false);
  };

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Top />
      </Route>
      <Route path="/questions">
        <div className="App">
          <h1>
            太宰治の名作と共に見る
            <br />
            人間失格度診断
          </h1>

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
        <ResultPage result="result1" resetState={resetState} />
      </Route>
      <Route path="/result2">
        <ResultPage result="result2" resetState={resetState} />
      </Route>
      <Route path="/result3">
        <ResultPage result="result3" resetState={resetState} />
      </Route>
      <Route path="/result4">
        <ResultPage result="result4" resetState={resetState} />
      </Route>
      <Route path="/result5">
        <ResultPage result="result5" resetState={resetState} />
      </Route>
    </BrowserRouter>
  );
}
