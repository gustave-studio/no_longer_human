import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Diagnose = (props) => {
  console.log('Diagnose');
  const { answers } = props;
  const history = useHistory();
  const [numberOfTrue, setNumberOfTrue] = useState(0);
  const trueOfAnswers = answers.filter((result) => result === true).length;
  setNumberOfTrue(trueOfAnswers);
  console.log(numberOfTrue);

  switch (numberOfTrue) {
    case 0:
      return (<>{history.push('/result1')}</>);
    case 1:
      return (<>{history.push('/result2')}</>);
    case 2:
      return (<>{history.push('/result3')}</>);
    case 3:
      return (<>{history.push('/result4')}</>);
    case 4:
      return (<>{history.push('/result5')}</>);
    default:
      return (<>{history.push('/result1')}</>);
  }
};

Diagnose.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default Diagnose;
