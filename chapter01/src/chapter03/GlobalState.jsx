
// const useGlobalCountState = () => {
//   const [count, setCount] = useState(0);
//   return { count, setCount };
// };

// const Component1 = () => {
//   // useGlobalCountState is a pseudo hook
//   const [count, setCount] = useGlobalCountState();
//   return (
//     <div>
//       {count}
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//     </div>
//   );
// };

// const Parent = () => {
//   return (
//     <>
//       <Component1 />
//     </>
//   );
// };

// const GrandParent = () => {
//   return (
//     <>
//       <Parent />
//     </>
//   );
// };

// const GlobalState = () => {
//   return (
//     <>
//       <GrandParent />
//     </>
//   );
// };

// export default GlobalState;
