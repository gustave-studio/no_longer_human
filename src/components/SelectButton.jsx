import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const SelectButton = (props) => {
  const {
    num, setNum, setAnswer, setShowMessage,
  } = props;

  const nextButton = () => {
    setNum(num + 1);
  };

  const setAnswerButton = () => {
    setAnswer(true);
  };

  const ButtonToNextQuestion = () => (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setAnswerButton();
          nextButton();
          setShowMessage(false);
        }}
      >
        はい
      </Button>
      <br />
      <Button
        variant="outlined"
        onClick={() => {
          nextButton();
          setShowMessage(false);
        }}
      >
        いいえ
      </Button>
    </>
  );

  // const ButtonToResult = () => (
  //   <>
  //     <Button
  //       variant="contained"
  //       onClick={() => {
  //         setAnswerButton();
  //         setShowMessage(false);
  //       }}
  //       component={Link}
  //       to="/result"
  //     >
  //       はい
  //     </Button>
  //     <br />
  //     <Button
  //       variant="outlined"
  //       onClick={() => {
  //         nextButton();
  //         setShowMessage(false);
  //       }}
  //       component={Link}
  //       to="/result"
  //     >
  //       いいえ
  //     </Button>
  //   </>
  // );

  return (
    <>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div>
            <Stack spacing={2} direction="row">
              <Grid item container direction="column" spacing={0}>
                { ButtonToNextQuestion() }
                {/* { (num === 3) ? ButtonToResult() : ButtonToNextQuestion() } */}
              </Grid>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </>
  );
};

SelectButton.propTypes = {
  num: PropTypes.number.isRequired,
  setNum: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired,
  setShowMessage: PropTypes.func.isRequired,
};

export default SelectButton;
