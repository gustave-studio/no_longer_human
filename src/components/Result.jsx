import React from "react";
import { ResultPage } from "./ResultPage";

export const Result = (props) => {
  const [result1, result2, result3] = props.results;

  if (result2) {
    return <ResultPage />;
  } else {
    if (result1) {
      return <div>"人間失格"</div>;
    } else {
      return <div>"走れメロス"</div>;
    }
  }
};