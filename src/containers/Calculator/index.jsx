import React from 'react';
import Button from '@material-ui/core/Button';

const Calculator = () => {
  return (
    <div>
      Calculator
      <div>
        <Button variant="raised" color="primary">
          AC
        </Button>
        <Button variant="raised" color="primary">
          CE
        </Button>
        <Button variant="raised" color="primary">
          %
        </Button>
        <Button variant="raised" color="primary">
          /
        </Button>
      </div>
      <div>
        <Button variant="raised" color="primary">
          7
        </Button>
        <Button variant="raised" color="primary">
          8
        </Button>
        <Button variant="raised" color="primary">
          9
        </Button>
        <Button variant="raised" color="primary">
          *
        </Button>
      </div>
      <div>
        <Button variant="raised" color="primary">
          4
        </Button>
        <Button variant="raised" color="primary">
          5
        </Button>
        <Button variant="raised" color="primary">
          6
        </Button>
        <Button variant="raised" color="primary">
          -
        </Button>
      </div>
      <div>
        <Button variant="raised" color="primary">
          1
        </Button>
        <Button variant="raised" color="primary">
          2
        </Button>
        <Button variant="raised" color="primary">
          3
        </Button>
        <Button variant="raised" color="primary">
          +
        </Button>
      </div>
      <div>
        <Button variant="raised" color="primary">
          4
        </Button>
        <Button variant="raised" color="primary">
          5
        </Button>
        <Button variant="raised" color="primary">
          6
        </Button>
        <Button variant="raised" color="primary">
          -
        </Button>
      </div>
      <div>
        <Button variant="raised" color="primary">
          0
        </Button>
        <Button variant="raised" color="primary">
          .
        </Button>
        <Button variant="raised" color="primary">
          Ans
        </Button>
        <Button variant="raised" color="primary">
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
