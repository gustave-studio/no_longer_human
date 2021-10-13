import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export const SelectButton = (props) => {
  const { num, setNum, setResult, setShowMessage } = props;

  const nextButton = () => {
    setNum(num + 1);
  };

  const setResultButton = () => {
    setResult(true);
  };

  const ButtonToNextQuestion = () => {
    return (
      <>
        <Button
          variant="contained"
          onClick={() => {
            setResultButton();
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
    )
  }

  const ButtonToResult = () => {
    return (
      <>
        <Button
          variant="contained"
          onClick={() => {
            setResultButton();
            setShowMessage(false);
          }}
          component={Link}
          to="/result"
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
          component={Link}
          to="/result"
        >
          いいえ
        </Button>
      </>
    )
  }
 
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Stack spacing={2} direction="row">
              <Grid item container direction="column" spacing={0}>
                { (num == 2) ? ButtonToResult() : ButtonToNextQuestion() }
              </Grid>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </>
  );
}
