import { createContext, useContext } from 'react';

const ColorContext = createContext('black');

const Component = () => {
  const color = useContext(ColorContext);
  return <div style={{ color }}>Hello {color}</div>;
};

const UseContext = () => {
  <>
  <h1>Test</h1>
    <Component />
    <ColorContext.Provider value='red'>
      <Component />
    </ColorContext.Provider>
    <ColorContext.Provider value='green'>
      <Component />
    </ColorContext.Provider>
    <ColorContext.Provider value='blue'>
      <Component />
      <ColorContext.Provider value='skyblue'>
        <Component />
      </ColorContext.Provider>
    </ColorContext.Provider>
  </>;
};

export default UseContext;
