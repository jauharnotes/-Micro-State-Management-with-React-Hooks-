import { useReducer } from 'react';

const init = (count) => ({ count });
const reducer = (prev, delta) => prev + delta;

const UseReducerUseState = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div>
      {state}
      <button onClick={() => dispatch(1)}>+1</button>
    </div>
  );
};

export default UseReducerUseState;
