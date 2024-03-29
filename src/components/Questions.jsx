import React, { useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Question from './Question';

const Questions = (props) => {
  const {
    showMessages, setShowMessages, num, setNum, questions, answers, setAnswers,
  } = props;
  const trueOfAnswers = answers.filter((result) => result === true).length;

  const history = useHistory();
  const diagnose = () => {
    switch (true) {
      case trueOfAnswers === 6:
        history.push('/result5');
        break;
      case trueOfAnswers >= 4:
        history.push('/result4');
        break;
      case trueOfAnswers === 3:
        history.push('/result3');
        break;
      case trueOfAnswers >= 2:
        history.push('/result2');
        break;
      case trueOfAnswers === 0:
        history.push('/result1');
        break;
      default:
        history.push('/result2');
        break;
    }
  };
  const nodeRef = useRef(null);

  return (
    <>
      <CSSTransition
        in={showMessages[0]}
        timeout={300}
        classNames="question"
        unmountOnExit
        onExited={() => setShowMessages[1](true)}
        nodeRef={nodeRef}
      >
        <Question
          questionNumber={1}
          num={num}
          setNum={setNum}
          text={questions[0]}
          setAnswer={setAnswers[0]}
          setShowMessage={setShowMessages[0]}
        />
      </CSSTransition>

      <CSSTransition
        in={showMessages[1]}
        timeout={300}
        classNames="question"
        unmountOnExit
        onExited={() => setShowMessages[2](true)}
        nodeRef={nodeRef}
      >
        <Question
          questionNumber={2}
          num={num}
          setNum={setNum}
          text={questions[1]}
          setAnswer={setAnswers[1]}
          setShowMessage={setShowMessages[1]}
        />
      </CSSTransition>

      <CSSTransition
        in={showMessages[2]}
        timeout={300}
        classNames="question"
        unmountOnExit
        onExited={() => setShowMessages[3](true)}
        nodeRef={nodeRef}
      >
        <Question
          questionNumber={3}
          num={num}
          setNum={setNum}
          text={questions[2]}
          setAnswer={setAnswers[2]}
          setShowMessage={setShowMessages[2]}
        />
      </CSSTransition>

      <CSSTransition
        in={showMessages[3]}
        timeout={300}
        classNames="question"
        unmountOnExit
        onExited={() => setShowMessages[4](true)}
        nodeRef={nodeRef}
      >
        <Question
          questionNumber={4}
          num={num}
          setNum={setNum}
          text={questions[3]}
          setAnswer={setAnswers[3]}
          setShowMessage={setShowMessages[3]}
        />
      </CSSTransition>

      <CSSTransition
        in={showMessages[4]}
        timeout={300}
        classNames="question"
        unmountOnExit
        onExited={() => setShowMessages[5](true)}
        nodeRef={nodeRef}
      >
        <Question
          questionNumber={5}
          num={num}
          setNum={setNum}
          text={questions[4]}
          setAnswer={setAnswers[4]}
          setShowMessage={setShowMessages[4]}
        />
      </CSSTransition>

      <CSSTransition
        in={showMessages[5]}
        timeout={300}
        classNames="question"
        unmountOnExit
        onExited={() => { diagnose(); }}
        nodeRef={nodeRef}
      >
        <Question
          questionNumber={6}
          num={num}
          setNum={setNum}
          text={questions[5]}
          setAnswer={setAnswers[5]}
          setShowMessage={setShowMessages[5]}
        />
      </CSSTransition>
    </>
  );
};

Questions.propTypes = {
  showMessages: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setShowMessages: PropTypes.arrayOf(PropTypes.func).isRequired,
  num: PropTypes.number.isRequired,
  setNum: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setAnswers: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default Questions;
