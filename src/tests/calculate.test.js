import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should handle AC button correctly', () => {
    const buttonName = 'AC';
    const obj = {
      total: '5',
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle digit buttons correctly', () => {
    const buttonName = '5';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: null,
      next: '5',
    });
  });

  it('should handle operator buttons correctly', () => {
    const buttonName = '+';
    const obj = {
      total: '5',
      next: '3',
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: '3',
      next: null,
      operation: '+',
    });
  });

  it('should handle "=" button correctly', () => {
    const buttonName = '=';
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  it('should handle "=" button correctly', () => {
    const buttonName = '=';
    const obj = {
      total: '3',
      next: '3',
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: '6',
      next: null,
      operation: null,
    });
  });

  it('should handle decimal button correctly', () => {
    const buttonName = '.';
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: '5',
      next: '3.',
      operation: '+',
    });
  });
});

test('Evaluate operations', () => {
  let obj = {
    total: '100',
    next: '5',
    operation: '+',
  };
  let button = 'AC';
  expect(calculate(obj, button)).toEqual({
    total: null,
    next: null,
    operation: null,
  });

  button = '=';
  expect(calculate(obj, button)).toEqual({
    total: '105',
    next: null,
    operation: null,
  });

  button = '+/-';
  expect(calculate(obj, button)).toEqual({
    total: '100',
    next: '-5',
    operation: '+',
  });

  obj = {
    total: '100',
    next: '5',
    operation: '÷',
  };

  button = '=';
  expect(calculate(obj, button)).toEqual({
    total: '20',
    next: null,
    operation: null,
  });
});
