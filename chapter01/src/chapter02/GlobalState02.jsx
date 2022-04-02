import  { useEffect, useState } from 'react'

// export default function GlobalState02() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const id = setInterval(
//             () => setCount(c => c + 1),
//             1000,
//         );
//         return () => clearInterval(id);
//     }, []);

//     console.log(count);
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={() => setCount( c => c % 2 === 0 ? c : c + 1)}>
//             increment count if it makes the result event
//         </button>
//     </div>
//   )
// }

const init = () => 0;

export default function GlobalState02() {
    const [count, setCount] = useState(init);

    console.log(count);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(c => c + 1)}>
            increment count
        </button>
    </div>
  )
}
