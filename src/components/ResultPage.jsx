import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Results from '../Results';

const ResultPage = (props) => {
  const { result } = props;
  const texts = Results[result].containts.split('\n').map((item) => (
    <div key={item}>
      {item}
    </div>
  ));

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <style>
            {`
          body {
            background-position: center center;
            background-image: url('https://no-longer-human.s3.ap-northeast-1.amazonaws.com/background.png');
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
          }
      `}

          </style>
        </Helmet>
      </HelmetProvider>
      <div className="container">
        <h1>{Results[result].title}</h1>
        <h2>{Results[result].class}</h2>
        <div className="explanation">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {texts}
              </Typography>
            </CardContent>
            <FacebookShareButton
              url={`https://no-longer-human.gustave-studio.com/${result}`}
              quote={['']}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://no-longer-human.gustave-studio.com/${result}`}
              title={['']}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <LineShareButton url={`https://no-longer-human.gustave-studio.com/${result}`}>
              <LineIcon size={50} round />
            </LineShareButton>
          </Card>
        </div>
      </div>
      <br />
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
                  to="/"
                >
                  診断トップへ
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

ResultPage.propTypes = {
  result: PropTypes.string.isRequired,
};

export default ResultPage;
