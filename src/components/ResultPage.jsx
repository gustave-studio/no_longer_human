import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
import { useHistory } from 'react-router-dom';
import Results from '../Results';

const ResultPage = (props) => {
  const { result, resetState } = props;
  const texts = Results[result].containts.split('\n').map((item) => (
    <div key={item}>
      {item}
    </div>
  ));

  const advertisement = () => {
    switch (result) {
      case 'result1':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4101006067">
              <p>走れメロスをAmazonで見る</p>
            </a>
          </div>
        );
      case 'result2':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4101006075">
              <p>お伽草子をAmazonで見る</p>
            </a>
          </div>
        );
      case 'result3':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4041099153">
              <p>女生徒をAmazonで見る</p>
            </a>
          </div>
        );
      case 'result4':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4101006032">
              <p>ヴィヨンの妻をAmazonで見る</p>
            </a>
          </div>
        );
      case 'result5':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4087520013">
              <p>人間失格をAmazonで見る</p>
            </a>
          </div>
        );
      default:
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4087520013">
              <p>人間失格をAmazonで見る</p>
            </a>
          </div>
        );
    }
  };

  const history = useHistory();

  return (
    <>
      <div className="container">
        <h1>{Results[result].title}</h1>
        <h2>{Results[result].class}</h2>
        <div className="explanation">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="string"
                component="div"
                style={{ fontSize: '18px' }}
              >
                {texts}
              </Typography>
            </CardContent>
            { advertisement() }
            <TwitterShareButton
              url={`https://no-longer-human.gustave-studio.com/${result}`}
              title={['']}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://no-longer-human.gustave-studio.com/${result}`}
              quote={['']}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
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
                  onClick={() => {
                    resetState();
                    history.push('/');
                  }}
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
  resetState: PropTypes.func.isRequired,
};

export default ResultPage;
