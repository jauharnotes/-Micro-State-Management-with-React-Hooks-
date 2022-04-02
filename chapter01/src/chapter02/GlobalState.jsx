import React, { useState } from 'react'

export default function GlobalState() {
    const [state, setState] = useState();
  return (
    <div>
        {JSON.stringify(state)}
        <Child state={state} setState={setState}/>
    </div>
  )
}

const Child = (props) => {
    const setFoo = () => props.setState(
        (prev) => ({...prev, foo: 'foo'})
    );

    return (
        <div>
            {JSON.stringify(props.state)}
            <button onClick={setFoo}>Set Foo</button>
        </div>
    );
}