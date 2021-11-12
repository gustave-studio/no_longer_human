import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StartButton from './StartButton';

const Top = () => (
  <>
    <HelmetProvider>
      <Helmet>
        <style>
          {`
            body {
              background-position: top;
              background-image: url('https://no-longer-human.s3.ap-northeast-1.amazonaws.com/background.png');
              background-size: cover;
              background-size: 750px auto;
              background-repeat: no-repeat;
            }
        `}

        </style>
      </Helmet>
    </HelmetProvider>
    <div className="container">
      <h1>
        太宰治の名作と共に見る
        <br />
        人間失格度診断
      </h1>
      <p>第 1.0.0 版 「Tsuneko」</p>

      <div className="explanation">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="string"
              component="div"
              style={{ fontSize: '18px' }}
            >
              <div>
                「人間失格」の主人公である大庭葉蔵に、あなたの性格がどの位似ているかを表す人間失格度を判定します。
                <br />
                人間失格度に応じた太宰治のおすすめ小説も出て来るので、ぜひ遊んでみて下さい！
                <br />
                <br />
                全6問
                <br />
                所用時間1分
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="startButton">
        <StartButton />
      </div>
    </div>
  </>
);

export default Top;
