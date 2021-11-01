import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StartButton from './StartButton';

const Top = () => {
  const imgUrl = 'https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result1.png';

  return (
    <>
      <HelmetProvider>
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
      </HelmetProvider>
      <div className="container">
        <h1>
          「人間失格度」
          <br />
          診断
        </h1>

        <div className="explanation">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                <div>
                  太宰治の「人間失格」に、どの位あなたの性格が一致しているかを診断します。
                  <br />
                  <br />
                  全4問
                  <br />
                  所用時間30秒
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="startButton">
          <StartButton setStarted />
        </div>
      </div>
    </>
  );
};

export default Top;
