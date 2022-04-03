import './App.css';
import UseCount from './chapter01/UseCount';
import GlobalState from './chapter02/GlobalState';
import GlobalState02 from './chapter02/GlobalState02';
import TypicalUsage from './chapter02/TypicalUsage';
import UseReducerUseState from './chapter02/UseReducerUseState';
import LocalState from './chapter03/LocalState';

function App() {
  return (
    <div className="App">
      {/* <UseCount /> */}
      {/* <GlobalState02 /> */}
      {/* <TypicalUsage /> */}
      {/* <UseReducerUseState /> */}
      <LocalState />
    </div>
  );
}

export default App;
