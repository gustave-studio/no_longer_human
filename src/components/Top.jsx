import React from "react";
import { Helmet } from "react-helmet";

import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StartButton } from "./StartButton";

export const Top = (props) => {
  const imgUrl =
    "https://ra-test-images.s3.ap-northeast-1.amazonaws.com/sample.png";

  console.log(props.setStarted);
  return (
    <>
      <Helmet>
        <style>{`
        body {
          background-position: center center;
          background-image: url(${imgUrl});
          background-attachment: fixed;
          background-size: cover;
          background-repeat: no-repeat;
        }
    `}</style>
      </Helmet>
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
                <p>
                  太宰治の「人間失格」に、どの位あなたの性格が一致しているかを診断します。
                  <br />
                  <br />
                  所用時間1分
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="startButton">
          <StartButton setStarted={props.setStarted} />
        </div>
      </div>
    </>
  );
};
