import React from "react";
import { SelectButton } from "./SelectButton";

import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Question = (props) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            質問{props.num + 1}
          </Typography>
          <Typography variant="body2">
            <div>{props.text}</div>
            <br />
            <SelectButton
              num={props.num}
              setNum={props.setNum}
              setResult={props.setResult}
              setShowMessage={props.setShowMessage}
            ></SelectButton>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};