import "./styles.css";
import React, { useState } from "react";
import { Top } from "./components/Top";
import { Question } from "./components/Question";
import { Result } from "./components/Result";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  const [num, setNum] = useState(0);

  const [resultOfQuestion1, setResultOfQuestion1] = useState(false);
  const [resultOfQuestion2, setResultOfQuestion2] = useState(false);
  const [resultOfQuestion3, setResultOfQuestion3] = useState(false);

  const results = [resultOfQuestion1, resultOfQuestion2, resultOfQuestion3];

  const setResults = [
    setResultOfQuestion1,
    setResultOfQuestion2,
    setResultOfQuestion3
  ];

  const text = ["長い小説を読める", "ユーモアがある小説に惹かれる", "テスト"];
  const [showMessage1, setShowMessage1] = useState(true);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);

  const question = () => {
    return (
      <>
        <CSSTransition
          in={showMessage1}
          timeout={300}
          classNames="question"
          unmountOnExit
          onExited={() => setShowMessage2(true)}
        >
          <Question
            num={num}
            setNum={setNum}
            text={text[0]}
            setResult={setResults[0]}
            setShowMessage={setShowMessage1}
          ></Question>
        </CSSTransition>

        <CSSTransition
          in={showMessage2}
          timeout={300}
          classNames="question"
          unmountOnExit
          onExited={() => setShowMessage3(true)}
        >
          <Question
            num={num}
            setNum={setNum}
            text={text[1]}
            setResult={setResults[1]}
            setShowMessage={setShowMessage2}
          ></Question>
        </CSSTransition>

        <CSSTransition
          in={showMessage3}
          timeout={300}
          classNames="question"
          unmountOnExit
        >
          <Question
            num={num}
            setNum={setNum}
            text={text[2]}
            setResult={setResults[2]}
            setShowMessage={setShowMessage3}
          ></Question>
        </CSSTransition>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Top />
      </Route>
      <Route path="/questions">
         <div className="App">
           <h1>「人間失格度」診断</h1>
           {question()}
         </div>
      </Route>
      <Route path="/result">
        <Result results={results} />
      </Route>
    </BrowserRouter>
  )


}

