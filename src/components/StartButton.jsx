import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";

export const StartButton = (props) => {
  console.log(props);
  return (
    <>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div>
            <Stack spacing={2} direction="row">
              <Grid item container direction="column" spacing={0}>
                <Button
                  style={{ backgroundColor: "#ff1493", fontSize: "20px" }}
                  variant="contained"
                  onClick={() => {
                    props.setStarted(true);
                  }}
                >
                  診断開始
                </Button>
              </Grid>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};
