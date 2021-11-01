import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StartButton = (props) => {
  const { setStarted } = props;
  return (
    <>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div>
            <Stack spacing={2} direction="row">
              <Grid item container direction="column" spacing={0}>
                <Button
                  style={{ backgroundColor: '#ff1493', fontSize: '20px' }}
                  variant="contained"
                  component={Link}
                  onClick={() => setStarted(true)}
                  to="/questions"
                >
                  診断開始
                </Button>
              </Grid>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </>
  );
};

export default StartButton;

StartButton.propTypes = {
  setStarted: PropTypes.func.isRequired,
};
