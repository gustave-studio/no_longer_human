import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';
import PropTypes from 'prop-types';
import Results from '../Results';

const redirect = () => {
  window.location.href = '/';
};

const ResultPage = (props) => {
  const { result, started } = props;
  const imgUrl = 'https://ra-test-images.s3.ap-northeast-1.amazonaws.com/sample.png';
  const texts = Results[result].containts.split('\n').map((item) => (
    <p key={item}>
      {item}
      <br />
    </p>
  ));

  if (!started) {
    redirect();
  }

  return (
    <>
      <Helmet>
        <style>
          {`
          body {
            background-position: center center;
            background-image: url(${imgUrl});
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
          }
      `}

        </style>
      </Helmet>
      <div className="container">
        <h1>{Results[result].title}</h1>
        <h2>{Results[result].class}</h2>
        <div className="explanation">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <div>{texts}</div>
              </Typography>
            </CardContent>
            <FacebookShareButton
              url={`http://localhost:3000/${result}`}
              quote={['']}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={`http://localhost:3000/${result}`}
              title={['']}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <LineShareButton url={`http://localhost:3000/${result}`}>
              <LineIcon size={50} round />
            </LineShareButton>
          </Card>
        </div>
      </div>
      <br />
    </>
  );
};

ResultPage.propTypes = {
  result: PropTypes.string.isRequired,
  started: PropTypes.bool.isRequired,
};

export default ResultPage;
