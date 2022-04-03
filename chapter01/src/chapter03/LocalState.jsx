import React, { useState } from 'react';

const AdditionalInfo = () => {
  console.log('rerendering');
  return <p>Some information</p>;
};

const Component01 = ({ count, setCount, children }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      {children}
    </div>
  );
};

const Component02 = ({ count, setCount, children }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      {children}
    </div>
  );
};

const Parent = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Component01 count={count} setCount={setCount}>
        {children}
      </Component01>
      <Component02 count={count} setCount={setCount} />
    </>
  );
};

const LocalState = () => {
  return (
    <Parent>
      <AdditionalInfo />
    </Parent>
  );
};

export default LocalState;
