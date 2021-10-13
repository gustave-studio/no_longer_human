import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon
} from "react-share";

export const ResultPage = (props) => {
  const imgUrl =
    "https://ra-test-images.s3.ap-northeast-1.amazonaws.com/sample.png";

  return (
    <>
      <Helmet
        title='「人間失格度」診断'
        meta={[
          { name: 'description', content: '太宰治の「人間失格」に、あなたの性格がどれほどマッチしているかを診断します。'},
          { property: 'og:title', content: '「人間失格度」診断' },
          { property: 'og:type', content: 'blog' },
          { property: 'og:url', content:  'https://no-longer-human.herokuapp.com/'},
          { property: 'og:image', content: 'https://ra-test-images.s3.ap-northeast-1.amazonaws.com/sample2.png' },
          { property: 'og:description', content: '太宰治の「人間失格」に、あなたの性格がどれほどマッチしているかを診断します。' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@gustave_studio' },
      ]}>
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
        <h1>人間失格度 0%</h1>
        <h2>「御伽草子」級</h2>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              <p>説明文</p>
            </Typography>
          </CardContent>
          <FacebookShareButton
            url={[""]}
            quote={[""]}
          >
            <FacebookIcon size={50} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={[""]}
            title={[""]}
          >
            <TwitterIcon size={50} round />
          </TwitterShareButton>
          <LineShareButton url={[""]}>
            <LineIcon size={50} round />
          </LineShareButton>
        </Card>
      </div>
    </>
  );
};
