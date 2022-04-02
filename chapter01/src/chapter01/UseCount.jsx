import React, { useEffect, useState } from 'react';

// const useCount = () => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log('count is changed to', count);
//     }, [count]);
//     return [count, setCount];
// }

const useCount = () => {
    const [count, setCount] = useState(0);
    const inc = () => setCount((c) => c + 2);
    return [count, inc]
}

export default function UseCount() {
  const [count, setCount] = useCount();


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount()}>+1</button>
    </div>
  );
}
