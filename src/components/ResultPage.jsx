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
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4101006067&linkId=5a0dc653dc9ac7961c4bffa2e4408e2b&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result2':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4101006075&linkId=1ba564822a40f9269233aebc00f29fca&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result3':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4041099153&linkId=11a553ab9d354496396890f0be5c4a45&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );

      case 'result4':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4101006032&linkId=f77b9d132dafbc06dbd20161a13a0c12&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result5':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B00FA4GG5E&linkId=16ddc97185f1683560f2e111a6901998&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      default:
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4087520013&linkId=cbbd941b3083b520cfc462c72533e149&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
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
