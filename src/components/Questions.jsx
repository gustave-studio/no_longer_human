import React from 'react';

import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Question from './Question';
// import Diagnose2 from './Diagnose2';

const Questions = (props) => {
  const {
    showMessages, setShowMessages, num, setNum, questions, answers, setAnswers,
  } = props;
  // const [numberOfTrue, setNumberOfTrue] = useState(0);
  const trueOfAnswers = answers.filter((result) => result === true).length;
  // setNumberOfTrue(trueOfAnswers);

  console.log(trueOfAnswers);
  const history = useHistory();
  const diagnose = () => {
    switch (trueOfAnswers) {
      case 0:
        history.push('/result1');
        break;
      case 1:
        history.push('/result2');
        break;
      case 2:
        history.push('/result3');
        break;
      case 3:
        history.push('/result4');
        break;
      case 4:
        history.push('/result5');
        break;
      default:
        history.push('/result1');
        break;
    }
  };

  return (
    <>
      <CSSTransition
        in={showMessages[0]}
        timeout={300}
        classNames="question"
        unmountOnExit
        onExited={() => setShowMessages[1](true)}
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
        onExited={() => { diagnose(); }}
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
