import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StartButton from './StartButton';

const Top = () => (
  <>
    <div className="container">
      <h1>
        太宰治の名作と共に見る
        <br />
        人間失格度診断
      </h1>
      <p>第 1.0.0 版 「ツネ子」</p>

      <div className="explanation">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="string"
              component="div"
              style={{ fontSize: '18px' }}
            >
              <div>
                あなたの性格が「人間失格」の主人公である大庭葉蔵にどの位似ているかを表す人間失格度を判定します。
                <br />
                <br />
                人間失格度の数値が高いほど、太宰治に共感出来るかも！？
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
