import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Calculator = () => {
  const matrix = [
    ['AC', 'CE', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', 'Ans', '='],
  ];
  return (
    <React.Fragment>
      <Typography variant="h5" component="h5" noWrap>Calculator</Typography>
      {
        matrix.map((value, index) => {
          return (
            <div key={`Calculator matrix - ${value}`}>
              {
                matrix[index].map((str) => {
                  return (
                    <Button variant="raised" color="primary" key={`Calculator matrix - ${str}`}>
                      {str}
                    </Button>
                  );
                })
              }
            </div>
          );
        })
      }
    </React.Fragment>
  );
};

export default Calculator;
