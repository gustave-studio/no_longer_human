import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import SelectButton from './SelectButton';

const Question = (props) => {
  const {
    questionNumber, text, num, setNum, setAnswer, setShowMessage,
  } = props;

  // const history = useHistory();

  // history.push('/result1');

  return (
    <>
      <div className="question">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="span">
              質問
              {questionNumber}
            </Typography>
            <Typography variant="body2" component="span">
              <div>{text}</div>
              <br />
              <SelectButton
                num={num}
                setNum={setNum}
                setAnswer={setAnswer}
                setShowMessage={setShowMessage}
              />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

Question.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  setNum: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired,
  setShowMessage: PropTypes.func.isRequired,
};

export default Question;
